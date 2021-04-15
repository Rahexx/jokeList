import React from 'react';
import AppContext from '../../context';
import TableRow from '../tableRow/TableRow';

const Table = () => (
  <AppContext.Consumer>
    {(context) => (
      <table className='bg-green-400 w-screen h-screen bg-gray-200 xl:overfolow-x-hidden xl:overflow-y-scroll'>
        <tr className='flex w-screen lg:h-20'>
          <th className='headerTable w-1/6 lg:h-20 lg:text-2xl xl:w-1/12'>
            id
          </th>
          <th className='headerTable w-2/6 lg:h-20 lg:text-2xl xl:w-3/12'>
            type
          </th>
          <th className='headerTable border-r-0 w-3/6 px-3 lg:h-20 lg:text-2xl xl:w-8/12'>
            setup
          </th>
        </tr>
        {context.listJokes.map((item) => (
          <TableRow
            id={item.id}
            type={item.type}
            setup={item.setup}
            typeRow='body'
          />
        ))}
      </table>
    )}
  </AppContext.Consumer>
);

export default Table;
