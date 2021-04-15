import React from 'react';
import TableRow from '../tableRow/TableRow';

const Table = () => (
  <table className='bg-green-400 w-screen h-screen bg-gray-200 xl:overfolow-x-hidden xl:overflow-y-scroll'>
    <tr className='flex w-screen lg:h-20'>
      <th className='headerTable w-1/6 lg:h-20 lg:text-2xl xl:w-1/12'>id</th>
      <th className='headerTable w-2/6 lg:h-20 lg:text-2xl xl:w-3/12'>type</th>
      <th className='headerTable border-r-0 w-3/6 px-3 lg:h-20 lg:text-2xl xl:w-8/12'>
        setup
      </th>
    </tr>
    <TableRow id={1} type='general' setup='50' typeRow='body' />
    <TableRow id={1} type='general' setup='50' typeRow='body' />
    <TableRow id={1} type='general' setup='50' typeRow='body' />
    <TableRow id={1} type='general' setup='50' typeRow='body' />
    <TableRow id={1} type='general' setup='50' typeRow='body' />
    <TableRow id={1} type='general' setup='50' typeRow='body' />
    <TableRow id={1} type='general' setup='50' typeRow='body' />
    <TableRow id={1} type='general' setup='50' typeRow='body' />
    <TableRow id={1} type='general' setup='50' typeRow='body' />
    <TableRow id={1} type='general' setup='50' typeRow='body' />
  </table>
);

export default Table;
