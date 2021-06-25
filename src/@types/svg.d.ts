declare module "*.svg" {
  import React from "react";
  import { SVGProps, React } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}