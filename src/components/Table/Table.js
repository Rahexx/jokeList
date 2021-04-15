import React from 'react';
import AppContext from '../../context';
import TableRow from '../tableRow/TableRow';

const Table = () => {
  const sort = (e, isActive) => {
    if (isActive) {
      e.target.style.transform = 'rotate(360deg)';
      e.target.classList.remove('active');
    } else {
      e.target.style.transform = 'rotate(180deg)';
      e.target.classList.add('active');
    }
  };

  return (
    <AppContext.Consumer>
      {(context) => (
        <table className='bg-green-400 w-screen h-screen bg-gray-200 xl:overfolow-x-hidden xl:overflow-y-scroll'>
          <tr className='flex w-screen lg:h-20'>
            <th className='headerTable w-1/6 lg:h-20 lg:text-2xl xl:w-1/12'>
              id
              <i
                className='fa fa-caret-up ml-2 origin-center cursor-pointer duration-500 lg:ml-5'
                onClick={(e) => {
                  const containsActive = e.target.classList.contains('active');
                  sort(e, containsActive);

                  if (!containsActive) {
                    context.sortById('up');
                  } else {
                    context.sortById('down');
                  }
                }}
              ></i>
            </th>
            <th className='headerTable w-2/6 lg:h-20 lg:text-2xl xl:w-3/12'>
              type
              <i
                className='fa fa-caret-up ml-2 origin-center cursor-pointer duration-500 lg:ml-5'
                onClick={(e) => {
                  const containsActive = e.target.classList.contains('active');
                  sort(e, containsActive);

                  if (!containsActive) {
                    context.sortByType('up');
                  } else {
                    context.sortByType('down');
                  }
                }}
              ></i>
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
};

export default Table;
