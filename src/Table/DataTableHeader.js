import React from 'react';
import { Button } from './../components/atomic/Button';
import {  FilterIcon } from './../icons/FilterIcon';
import {  SearchIcon } from './../icons/SearchIcon';

import TableTitle from './TableTitle';
import { HeaderStyled, SearchInputStyled } from './Styles';

const DataTableHeader = (props) => {
  const {
    title,
    subTitle,
    badgeText,
    actionButtons = [],
    enableSearch = false,
    tabButtons,
    setSearchQuery,
    enableBackArrow,
    attendanceTabs,
  } = props;

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <HeaderStyled>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-row gap-4 items-center'>
            {enableBackArrow && enableBackArrow}
            <TableTitle title={title} subTitle={subTitle} count={badgeText} />
          </div>
          {attendanceTabs && attendanceTabs}
        </div>
        <div className='flex flex-row items-center gap-1'>
          {enableSearch && (
            <SearchInputStyled
              size='large'
              placeholder='Search'
              onChange={(e) => handleSearch(e)}
              prefix={<SearchIcon />}
              suffix={<FilterIcon />}
            />
          )}
          {actionButtons && actionButtons.map((button) => button)}
        </div>
      </HeaderStyled>
      <div className={`flex flex-row justify-between px-4 items-center`}>
        {tabButtons && tabButtons}
        <div className='flex gap-[10px]'> </div>
      </div>
    </>
  );
};

export default DataTableHeader;