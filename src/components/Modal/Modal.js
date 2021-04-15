import React from 'react';

const Modal = () => {
  const closeModal = () => {
    const modal = document.querySelector('.modal');

    modal.style.display = 'none';
  };

  return (
    <div className='modal  w-screen h-screen bg-green-200 fixed top-0 left-0 flex justify-center items-top py-16 z-2 lg:w-1/2 lg:h-1/2 lg:top-1/2	lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-md lg:h-1/3 xl:w-1/4'>
      <i
        className='fa fa-times absolute top-2 right-5 text-3xl cursor-pointer lg:top-4 lg:right-7 lg:text-4xl'
        onClick={closeModal}
      ></i>
      <h2 className='text-xl px-10 w-full text-center lg:text-2xl'>
        punchline
      </h2>
    </div>
  );
};

export default Modal;
