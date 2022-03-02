import { css } from '@emotion/css';
import { Theme } from '@mui/material/styles';

export const rowIndent = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const anchorDefault = css`
  color: inherit;
  text-decoration: none;
`;

export const nameRestaurant = (theme: Theme) => css`
  margin-top: ${theme.spacing(6)}; ;
`;

export const cardContent = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;
