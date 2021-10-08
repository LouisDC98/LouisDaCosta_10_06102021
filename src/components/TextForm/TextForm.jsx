import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEdit, FaCheck } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

function TextForm(props) {
    const { currentNote } = props;
    const [selected, setSelected] = useState(currentNote);
    const [editNote, setEditNote] = useState(false);

    const displayNoteForm = () => {
        setEditNote((value) => !value);
    };

    const onSubmit = (data) => {
        console.log(data.note);
        setSelected(data.note);
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
