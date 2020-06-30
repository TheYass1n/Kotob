import React from 'react';

const Modal = (props) => {
    return (
        <>
        <div onClick={props.hide} className='modal__contener'>
        {props.children }
        </div>
        </>
    );
};



export default Modal;
