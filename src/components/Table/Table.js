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
          <thead>
            <tr className='grid grid-cols-tableSmall w-screen lg:h-20 lg:grid-cols-tableLarge'>
              <th className='headerTable md:text-lg lg:h-20 lg:text-2xl'>
                id
                <i
                  className='fa fa-caret-up ml-2 origin-center cursor-pointer duration-500 lg:ml-5'
                  onClick={(e) => {
                    const containsActive = e.target.classList.contains(
                      'active',
                    );
                    sort(e, containsActive);

                    if (!containsActive) {
                      context.sortById('up');
                    } else {
                      context.sortById('down');
                    }
                  }}
                ></i>
              </th>
              <th className='headerTable items-center md:text-lg lg:h-20 lg:text-2xl'>
                type
                <i
                  className='fa fa-caret-up ml-2 origin-center cursor-pointer duration-500 lg:ml-5'
                  onClick={(e) => {
                    const containsActive = e.target.classList.contains(
                      'active',
                    );
                    sort(e, containsActive);

                    if (!containsActive) {
                      context.sortByType('up');
                    } else {
                      context.sortByType('down');
                    }
                  }}
                ></i>
              </th>
              <th className='headerTable border-r-0 px-3 md:text-lg lg:h-20 lg:text-2xl'>
                setup
              </th>
            </tr>
          </thead>
          <tbody>
            {context.listJokes.map((item) => (
              <TableRow
                id={item.id}
                type={item.type}
                setup={item.setup}
                typeRow='body'
                key={`${item.id}-${item.type}`}
              />
            ))}
          </tbody>
        </table>
      )}
    </AppContext.Consumer>
  );
};

export default Table;
