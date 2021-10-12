import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaEdit } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';
import { changeCategory } from '../../features/transactionSlice';

function SelectForm(props) {
    const { currentCategory, transactionId } = props;
    const [selected, setSelected] = useState(currentCategory);
    const [editCategory, setEditCategory] = useState(false);

    const dispatch = useDispatch();

    const displayCategoryForm = () => {
        setEditCategory((value) => !value);
    };

    const onSubmit = (data) => {
        setSelected(data.category);
        dispatch(changeCategory({ category: data.category, id: transactionId }));
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

SelectForm.propTypes = {
    currentCategory: PropTypes.string
};

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
