import React from 'react';

const Modal = () => (
  <div className='modal w-screen h-screen bg-green-200 absolute top-0 left-0 flex justify-center items-top py-16 z-2'>
    <i className='fa fa-times absolute top-2 right-5 text-3xl'></i>
    <h2 className='text-xl px-10 w-full text-center'>punchline</h2>
  </div>
);

export default Modal;
