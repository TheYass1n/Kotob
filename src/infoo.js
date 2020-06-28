import React from 'react';


function Info(props) {
  const { show, closeModal } = props;

  return (
    <>
      <div className={show ? "modal" : "hide"}>
      <div className="modal__content">
        <button onClick={closeModal}>X</button>
        <h1>Modal heading</h1>
        <p>This is modal content</p>
        </div>
      </div>
    </>
  );
}




export default Info;
