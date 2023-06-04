import React from 'react'
import { ConfigProvider, TablePaginationConfig } from 'antd';
import { TableStyled} from './Styles'
const CustomDataTable = ({
    columns,
    data = [],
    loading = false,
    rowClassName = '',
    pagination = false,
    header = undefined,
    footer = undefined,
    onChange = undefined,
    onRow = undefined,
    style = undefined,
    isIdentityTable = false,
    scroll = undefined,
    id = '',
    ref
  }) => {
    const showColumns = data && data.length > 0;
    return (
      React.createElement(ConfigProvider, null, 
        React.createElement(TableStyled, {
          ref: ref,
          title: header,
          onRow: onRow,
          dataSource: data,
          loading: loading,
          onChange: onChange,
          pagination: pagination,
          rowClassName: rowClassName,
          style: style,
          footer: showColumns ? footer : undefined,
          columns: showColumns ? columns : undefined,
          scroll: scroll,
          id: id
        })
      )
    );
  };
  
  export default CustomDataTable;
  