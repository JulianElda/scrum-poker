import { withThemeByClassName } from "@storybook/addon-themes";

export default {
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};
