declare module "*.svg" {
  import * as React from "react";
  const content: React.FC<React.SVGProps<SVGSVGElement>> | React.ComponentType;
  export default content;
}

declare module "*.module.scss" {
  const styles: { [className: string]: string };
  export default styles;
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare interface NodeRequire {
  context: (
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ) => __WebpackModuleApi.RequireContext;
}
