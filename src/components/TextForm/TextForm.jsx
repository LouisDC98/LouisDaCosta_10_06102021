import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaEdit, FaCheck } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';
import { changeNote } from '../../features/transactionSlice';

function TextForm(props) {
    const { currentNote, transactionId } = props;
    const [selected, setSelected] = useState(currentNote);
    const [editNote, setEditNote] = useState(false);

    const dispatch = useDispatch();

    const displayNoteForm = () => {
        setEditNote((value) => !value);
    };

    const onSubmit = (data) => {
        setSelected(data.note);
        dispatch(changeNote({ note: data.note, id: transactionId }));
        displayNoteForm();
    };

    const { register, handleSubmit } = useForm();

    return (
        <NoteEdit>
            <p>Notes :</p>
            {!editNote ? (
                <CurrentNoteShape>{selected}</CurrentNoteShape>
            ) : (
                <FormNoteShape onSubmit={handleSubmit(onSubmit)}>
                    <SelectFormShape>
                        <input placeholder={selected} {...register('note')} />
                    </SelectFormShape>
                    <EditBtn type="submit">
                        <FaCheck />
                    </EditBtn>
                </FormNoteShape>
            )}
            <EditBtn onClick={displayNoteForm}>
                <FaEdit />
            </EditBtn>
        </NoteEdit>
    );
}

TextForm.propTypes = {
    data: PropTypes.string
};

const NoteEdit = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 20px;
    margin-top: 15px;
`;

const CurrentNoteShape = styled.p`
    margin: 0 15px 0 5px;
`;

const FormNoteShape = styled.form`
    display: flex;
    justify-content: flex-start;
`;
const EditBtn = styled.button`
    border: none;
    background: none;
    font-size: 1.2rem;
`;

const SelectFormShape = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 0 15px 0 15px;
`;

export default TextForm;
