import React from 'react';
import PropTypes from 'prop-types';

const CellTable = ({ text, otherClass }) => (
  <td className={`rowTable lg:h-32 lg:text-2xl xl:h-28 ${otherClass}`}>
    {text}
  </td>
);

export default CellTable;

CellTable.defaultProps = {
  otherClass: '',
};

CellTable.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  otherClass: PropTypes.string,
};
