declare module "*.scss" {
  export interface IScssVariables {
    [propName: string]: string;
  }

  export let variables: IScssVariables;

  export default variables;
}
