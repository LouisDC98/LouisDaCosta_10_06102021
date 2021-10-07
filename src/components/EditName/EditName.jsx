import React from 'react';
import styled from 'styled-components';

function EditName() {
    return (
        <ShapeEdit>
            <EditBtn>Edit Name</EditBtn>
        </ShapeEdit>
    );
}

const ShapeEdit = styled.div`
    display: flex;
    justify-content: center;
`;

const EditBtn = styled.button`
    background-color: #00bc77;
    border-color: #00bc77;
    color: white;
    padding: 10px;
    font-weight: bold;
`;

export default EditName;
