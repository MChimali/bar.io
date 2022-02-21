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

export const nameRestaurant = (theme: Theme) => css`
  margin-top: ${theme.spacing(6)};;
`;

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

export const anchorDefault = css`
  color: inherit;
  text-decoration: none;
`;

export const creditsContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const credits = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(1)};
  text-decoration: none;
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

export const info = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing(1)};
  margin: ${theme.spacing(12)};
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

export const emailIcon = (theme: Theme) => css`
  color: #00a825;
  font-size: 4rem;
  margin-bottom: 2rem;
`;

export const emailSend = css`
  text-decoration: none;
  color: #00a825;
  font-weight: bold;
`;

export const aboutus = css`
  color: #00a825;
  font-weight: bold;
`;

export const anchor = css`
  text-decoration: none;
`;

export const gastrocarta = css`
  font-weight: bold;
`;

export const main = css`
  display: flex;
  flex-direction: column;
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
