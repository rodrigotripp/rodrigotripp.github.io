/// <reference types="vite/client" />

declare module "*.png";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
declare module "*.css";
declare module "*.jpg" {
  export const src: string;
}
