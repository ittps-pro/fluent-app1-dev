import * as ReactDOM from "react-dom";
import { createDarkTheme, createLightTheme } from "@fluentui/react-components";

import type { BrandVariants, Theme } from "@fluentui/react-components";
import { Example } from "./example";

const green: BrandVariants = {
  10: "#010400",
  20: "#0F1D05",
  30: "#103008",
  40: "#103E07",
  50: "#0E4C04",
  60: "#0A5B00",
  70: "#0D6A00",
  80: "#107A00",
  90: "#148900",
  100: "#189900",
  110: "#1BA900",
  120: "#2EB915",
  130: "#57C63E",
  140: "#7AD363",
  150: "#9BDE86",
  160: "#BBE9AB"
};

const lightTheme: Theme = {
  ...createLightTheme(green)
};

const darkTheme: Theme = {
  ...createDarkTheme(green)
};

darkTheme.colorBrandForeground1 = green[110]; // use brand[110] instead of brand[100]
darkTheme.colorBrandForeground2 = green[120]; // use brand[120] instead of brand[110]

ReactDOM.render(
  <Example lightTheme={lightTheme} darkTheme={darkTheme} />,
  document.getElementById("root")
);
