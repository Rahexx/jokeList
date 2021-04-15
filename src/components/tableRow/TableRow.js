import React from 'react';
import AppContext from '../../context';
import PropTypes from 'prop-types';
import CellTable from '../CellTable/CellTable';

const TableRow = ({ id, type, setup }) => {
  const openModal = (text) => {
    const modal = document.querySelector('.modal');

    modal.style.display = 'flex';
    modal.children[1].textContent = text;
  };

  return (
    <AppContext.Consumer>
      {(context) => (
        <tr
          className='flex w-screen lg:h-32 xl:h-28 cursor-pointer'
          onClick={() => {
            const punchline = context.getPunchline(id);

            openModal(punchline);
          }}
        >
          <CellTable text={id} otherClass='w-1/6 xl:w-1/12' />
          <CellTable text={type} otherClass='w-2/6 xl:w-3/12' />
          <CellTable
            text={setup}
            otherClass='border-r-0 w-3/6 xl:w-3/12 px-3 xl:w-8/12'
          />
        </tr>
      )}
    </AppContext.Consumer>
  );
};

export default TableRow;

TableRow.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  setup: PropTypes.string.isRequired,
};
