import styled from 'styled-components';

export const TextWrapper = styled.div`
	color: gray;
	&.display-text {
		&-2xl {
			font-size: 4.5rem;
			line-height: 5.625rem;
		}
		&-xl {
			font-size: 3.75rem;
			line-height: 4.5rem;
		}
		&-lg {
			font-size: 3rem;
			line-height: 3.75rem;
		}
		&-md {
			font-size: 2.25rem;
			line-height: 2.75rem;
		}
		&-sm {
			font-size: 1.875rem;
			line-height: 2.375rem;
		}
		&-xs {
			font-size: 1.5rem;
			line-height: 2rem;
		}
		&-2xl,
		&-xl,
		&-lg,
		&-md {
			letter-spacing: -0.02em;
		}
	}
`;
