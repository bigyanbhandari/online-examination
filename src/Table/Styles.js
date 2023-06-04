import styled from 'styled-components';
import { Input, Table, Tag } from 'antd';
export const TableStyled = styled(Table)`
	&.ant-table-wrapper {
		min-height: 80vh;
		max-height: 89vh;
		overflow-y: scroll;
		position: relative;
		margin: 24px;
		border: 1px solid gray;
		box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
		border-radius: 0.75rem;
		.ant-table-title {
			position: sticky;
			top: 0;
			background: white;
			z-index: 1;
		}
		.ant-table-tbody {
			tr {
				border: 1px solid gray !important;
			}
		}
		.ant-table-thead {
			position: sticky;
			top: 114px;
			background: white;
			z-index: 1;
			tr {
				th {
					::before {
						display: none !important;
					}
				}
			}
		}
		.ant-table-tbody > tr > td {
			padding: 1.625rem 1.25rem;
		}
		.ant-table-footer {
			background: white;
		}
		.ant-table-column-sorter .ant-table-column-sorter-inner .anticon {
			svg {
				display: none;
			}
		}
		.ant-checkbox {
			.ant-checkbox-inner {
				background: white;
				border: 1px solid gray;
				border-radius: 4px;
			}
			:hover {
				.ant-checkbox-inner {
					background: blue;
				}
			}
			&-checked {
				::after {
					border-radius: 4px;
					border-width: 1px;
				}
				.ant-checkbox-inner {
					border: 1px solid blue;
					&,
					&:hover {
						background: blue;
					}
					&::after {
						border-color: blue;
					}
				}
			}
			&-indeterminate {
				.ant-checkbox-inner {
					border: 1px solid blue;
					background: blue;
					::after {
						height: 2px;
						border-radius: 1px;
					}
				}
			}
		}
	}
`;
export const HeaderStyled = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 16px;
	border-bottom: 2px solid gray;
`;
export const SearchInputStyled = styled(Input)`
	&.ant-input-affix-wrapper-lg {
		height: 48px;
		width: 300px;
		padding: 8px 16px;
		border-radius: 8px;
	}
`;
export const GroupTagStyled = styled(Tag)`
	&.ant-tag {
		color: #3538cd;
		padding: 2px 0.5rem;
		background: #eef4ff;
		border: 1px solid #eef4ff;
		border-radius: 1rem;
		font-size: 0.75rem;
		font-weight: 500;
	}
`;
