import "react";

declare module "*.svg" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "react" {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    block?: string;
    elem?: string;
    mods?: { [key: string]: boolean };
    mix?: { [key in "block"]: string };
  }
}
