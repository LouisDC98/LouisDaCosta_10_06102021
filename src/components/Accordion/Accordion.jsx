import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

function Accordion(props) {
    const { date, description, montant, balance } = props;
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleClick = () => {
        setOpen((value) => !value);
    };

    const onSubmit = (data) => {
        console.log(data.category);
        setSelected(data.category);
    };

    const { register, handleSubmit } = useForm();

    return (
        <AccordionBody>
            <AccordionTitle onClick={handleClick}>
                {open ? <FaChevronUp /> : <FaChevronDown />}
                <div>{date}</div>
                <div>{description}</div>
                <div>$ {montant}</div>
                <div>$ {balance - montant}</div>
            </AccordionTitle>
            <AccordionContent style={{ display: open ? 'block' : 'none' }}>
                <p>Transaction Type: Electronic</p>
                <p>coucou{selected}</p>
                <form onChange={handleSubmit(onSubmit)}>
                    <SelectForm>
                        <p>Category :</p>
                        <select {...register('category', { required: true })}>
                            <option value="">--Choisissez une catégorie--</option>
                            <option value="Food">Food</option>
                            <option value="Internet">Internet</option>
                            <option value="Rent">Rent</option>
                        </select>
                    </SelectForm>
                </form>
            </AccordionContent>
        </AccordionBody>
    );
}

const SelectForm = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const AccordionBody = styled.div`
    margin: 15px 0px;
`;

const AccordionTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    color: #142533;
    height: 52px;
    padding: 0px 20px;
`;

const AccordionContent = styled.div`
    background-color: #f2ece4;
    color: #142533;
    font-size: 16px;
    padding: 30px 20px;
    font-weight: 400;
    white-space: pre-line;
    line-height: 27px;
    text-align: start;
`;

export default Accordion;
