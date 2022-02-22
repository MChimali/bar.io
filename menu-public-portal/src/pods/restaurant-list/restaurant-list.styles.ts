import { css } from "@emotion/css";
import { defaultTheme } from "core/theme";

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
