import styled, { css } from 'styled-components';

 export const StatusText = styled.div`
  border-radius: 16px;
  padding: 2px 8px;
  display: inline;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  width: fit-content;
  ${(props) =>
    css`
      color: ${props.color} !important;
      background: ${props.background};
    `}
  ${(props) =>
    props.type === 'danger' &&
    css`
      color: #d92d20;
      background-color: #fef3f2;
      border: 1px solid #fef3f2;
      margin-right: 14px;
    `}
  ${(props) =>
    props.type === 'success' &&
    css`
      color: #039855;
      background-color: #ecfdf3;
      border: 1px solid #ecfdf3;
    `}
  ${(props) =>
    props.type === 'primary' &&
    css`
      color: #3538cd;
      background-color: #eef4ff;
      border: 1px solid #eef4ff;
    `}
  ${(props) =>
    props.type === 'info' &&
    css`
      color: #344054;
      background-color: #f2f4f7;
      border: 1px solid #f2f4f7;
    `}
  ${(props) =>
    props.type === 'warning' &&
    css`
      color: #b54708;
      background-color: #fffaeb;
      border: 1px solid #fffaeb;
    `}
  ${(props) =>
    props.type === 'schedule' &&
    css`
      color: #c11574;
      background-color: #fdf2fa;
      border: 1px solid #fdf2fa;
    `};
`;


