import React from 'react';
import PropTypes from 'prop-types';

const CellTable = ({ text, otherClass }) => (
  <td
    className={`rowTable font-sans h-40 px-7 md:text-lg lg:h-32 lg:text-2xl xl:h-28 ${otherClass}`}
  >
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
