export type ThemeName =
  | "default"
  | "fish"
  | "meat"
  | "italian"
  | "brewery"
  | "tapas"
  | "asian";

// TODO: Technical Debt, type this
// Possible type using ThemeName as string
//  type MainColorTypes = {
//    [K : keyof ThemeName]: string
//  }

// Typescript object keys
// TODO Type every field key object (add interface)
export const varsRestaurantType = {
  default: { secondaryColor: "#C5B100" },
  fish: { secondaryColor: "#35A7CB" },
  meat: { secondaryColor: "#EB1B1B" },
  italian: { secondaryColor: "#EB1B1B" },
  brewery: { secondaryColor: "#862447" },
  tapas: { secondaryColor: "#EB1B1B" },
  asian: { secondaryColor: "#6E0095" },
};
