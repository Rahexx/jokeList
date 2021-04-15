import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ id, type, setup }) => (
  <tr className='flex w-screen lg:h-32 xl:h-28'>
    <td className='rowTable w-1/6 lg:h-32 lg:text-2xl xl:w-1/12 xl:h-28'>
      {id}
    </td>
    <td className='rowTable w-2/6 lg:h-32 lg:text-2xl xl:w-3/12 xl:h-28'>
      {type}
    </td>
    <td className='rowTable border-r-0 w-3/6 px-3 lg:h-32 lg:text-2xl xl:w-8/12 xl:h-28'>
      {setup}
    </td>
  </tr>
);

export default TableRow;

TableRow.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  setup: PropTypes.string.isRequired,
};
