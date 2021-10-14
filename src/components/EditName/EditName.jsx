import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { selectUser } from 'utils/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateProfile } from 'features/userSlice';

function EditName() {
    const [display, setDisplay] = useState(false);
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleClick = () => {
        setDisplay(!display);
    };

    const onSubmit = (data) => {
        dispatch(updateProfile(data));
        setDisplay(!display);
    };

    return (
        <ShapeEdit>
            {!display ? (
                <EditBtn onClick={handleClick}>Edit Name </EditBtn>
            ) : (
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormShape>
                        <InputForm
                            placeholder={user.data.firstName}
                            type="text"
                            {...register('newFirstname')}
                        />
                        <InputForm
                            placeholder={user.data.lastName}
                            type="text"
                            {...register('newLastname')}
                        />
                    </FormShape>
                    <BtnShape>
                        <BtnSave type="submit" title="Save">
                            Save
                        </BtnSave>
                        <BtnCancel type="button" title="Cancel" onClick={handleClick}>
                            Cancel
                        </BtnCancel>
                    </BtnShape>
                </Form>
            )}
        </ShapeEdit>
    );
}

const ShapeEdit = styled.div`
    display: flex;
    justify-content: center;
    width: 360px;
    margin: 0 auto;
`;

const EditBtn = styled.button`
    background-color: #00bc77;
    border-color: #00bc77;
    color: white;
    padding: 10px;
    font-weight: bold;
`;

const Form = styled.form`
    width: 100%;
`;

const FormShape = styled.div`
    text-align: start;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const InputForm = styled.input`
    padding: 5px;
    font-size: 1.2rem;
    width: 150px;
`;

const BtnShape = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const BtnSave = styled.button`
    background-color: #00bc77;
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
    border: none;
    width: 100px;
    padding: 8px;
    margin-top: 16px;
    margin-right: 15px;
`;

const BtnCancel = styled.button`
    background-color: #00bc77;
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
    border: none;
    width: 100px;
    padding: 8px;
    margin-top: 16px;
    margin-left: 15px;
`;

export default EditName;
