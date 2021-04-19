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
          className='grid grid-cols-tableSmall w-screen h-40 cursor-pointer lg:h-32 xl:h-28 lg:grid-cols-tableLarge'
          onClick={() => {
            const punchline = context.getPunchline(id);

            openModal(punchline);
          }}
        >
          <CellTable text={id} />
          <CellTable text={type} />
          <CellTable text={setup} otherClass='border-r-0' />
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
