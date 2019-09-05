import { css } from 'styled-components/macro';
export const flexCenterRow = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexCenterColumn = css`
  ${flexCenterRow}
  flex-direction: column;
`;
