/* CSS Module Declarations - prevents TS(2307) side-effect import warnings */
declare module '*.css' {
  const content: string;
  export default content;
}
