import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEdit } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

function SelectForm(props) {
    const { currentCategory } = props;
    const [selected, setSelected] = useState(currentCategory);
    const [editCategory, setEditCategory] = useState(false);

    const displayCategoryForm = () => {
        setEditCategory((value) => !value);
    };

    const onSubmit = (data) => {
        console.log(data.category);
        setSelected(data.category);
        displayCategoryForm();
    };

    const { register, handleSubmit } = useForm();

    return (
        <CategoryEdit>
            <p>Category :</p>
            {!editCategory ? (
                <SelectedCategory>{selected}</SelectedCategory>
            ) : (
                <form onChange={handleSubmit(onSubmit)}>
                    <SelectFormShape>
                        <select
                            defaultValue={selected}
                            {...register('category', { required: true })}>
                            <option value="">--Choisissez une catégorie--</option>
                            <option value="Food">Food</option>
                            <option value="Internet">Internet</option>
                            <option value="Rent">Rent</option>
                        </select>
                    </SelectFormShape>
                </form>
            )}
            <EditBtn onClick={displayCategoryForm}>
                <FaEdit />
            </EditBtn>
        </CategoryEdit>
    );
}

const CategoryEdit = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 20px;
`;

const SelectedCategory = styled.p`
    margin: 0 15px 0 5px;
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

export default SelectForm;
