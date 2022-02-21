import { css } from "@emotion/css";
import { defaultTheme, varsRestaurantType } from "core/theme";
import { Theme } from "@mui/material/styles";

export const buttonRestaurantList = (theme: Theme) => css`
  font-weight: 600;
  font-size: 1rem;
  width: ${theme.spacing(30)};
  margin-bottom: ${theme.spacing(2)};
  color: ${defaultTheme.palette.text.secondary};
`;

export const cardContent = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const rowIndent = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const nameRestaurant = css`
  margin-top: 2rem;
`;

export const Container = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const cardContainer = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: ${theme.spacing(15)};
  margin-bottom: ${theme.spacing(8)};
  width: 100%;
  @media (min-width: ${defaultTheme.breakpoints.values.sm}px) {
    max-width: 50%;
  }
  @media (min-width: ${defaultTheme.breakpoints.values.md}px) {
    width: 35%;
  }
  @media (min-width: ${defaultTheme.breakpoints.values.lg}px) {
    width: 25%;
  }
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

export const restaurantHeadingColor = (theme: string) => css`
  color: ${varsRestaurantType[theme] ? varsRestaurantType[theme] : "#00000"};
`;
