import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import SelectForm from 'components/SelectForm/SelectForm';
import TextForm from 'components/TextForm/TextForm';

function Accordion(props) {
    const { data, balance } = props;
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((value) => !value);
    };

    return (
        <AccordionBody>
            <AccordionTitle onClick={handleClick}>
                {open ? <FaChevronUp /> : <FaChevronDown />}
                <div>{data.date}</div>
                <div>{data.description}</div>
                <div>$ {data.montant}</div>
                <div>$ {balance - data.montant}</div>
            </AccordionTitle>
            <AccordionContent style={{ display: open ? 'block' : 'none' }}>
                <p>Transaction Type: {data.type}</p>
                <SelectForm currentCategory={data.category} transactionId={data.id} />
                <TextForm currentNote={data.note} transactionId={data.id} />
            </AccordionContent>
        </AccordionBody>
    );
}

Accordion.propTypes = {
    data: PropTypes.object.isRequired,
    balance: PropTypes.number.isRequired
};

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
