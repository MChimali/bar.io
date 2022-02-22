import { css } from "@emotion/css";
import { Theme } from "@mui/material/styles";
import { defaultTheme } from "core/theme";

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

export const anchor = css`
  text-decoration: none;
`;

export const aboutus = css`
  color: #00a825;
  font-weight: bold;
`;

export const gastrocarta = css`
  font-weight: bold;
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

export const creditsContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;