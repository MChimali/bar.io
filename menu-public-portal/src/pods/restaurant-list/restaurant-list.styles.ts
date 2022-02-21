import { css } from "@emotion/css";
import { Theme } from "@mui/material/styles";

export const restaurantListWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const infoRow = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing(1)};
`;

export const numberPhone = (theme: Theme) => css`
  font-size: ${theme.spacing(2)};
`;

export const address = (theme: Theme) => css`
  font-size: ${theme.spacing(1.75)};
`;

export const buttonRestaurantList = css`
  font-weight: 600;
  font-size: ${18 / 16}rem;
  width: 100%;
`;

export const CardContainer = (theme: Theme) => css`
  padding: ${theme.spacing(3)};
  text-align: center;
  margin-bottom: ${theme.spacing(15)};
`;

export const restaurantName = (theme: Theme) => css`
  margin-bottom: ${theme.spacing(3)};
  margin-top: ${theme.spacing(5)};
  border-bottom: 3px solid #35a7cb;
  padding-bottom: 4px;
`;

export const cardActionContainer = (theme: Theme) => css`
  margin-top: ${theme.spacing(10)};
`;

export const anchorDefault = css`
  color: inherit;
  text-decoration: none;
`;

export const subHeading = css`
  color: white;
  background-color: black;
  /* width is not same as card because not border-box apply globally */
  max-width: 345px;
  display: flex;
  justify-content: space-between;
  padding: 6px 12px;
  align-items: baseline;
`;

export const appName = css`
  font-weight: 600;
`;
