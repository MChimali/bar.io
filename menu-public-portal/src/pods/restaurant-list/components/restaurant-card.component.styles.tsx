import { css } from "@emotion/css";
import { Theme } from "@mui/material/styles";
import { defaultTheme } from "core/theme";

export const Container = css`
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

export const buttonRestaurantList = (theme: Theme) => css`
  font-weight: 600;
  font-size: 1rem;
  width: ${theme.spacing(30)};
  margin-bottom: ${theme.spacing(2)};
  color: ${defaultTheme.palette.text.secondary};
`;