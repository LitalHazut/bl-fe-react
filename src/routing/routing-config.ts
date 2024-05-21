export enum RouteKey {
  ROOT = 'ROOT',
  WELCOME = 'WLC',
  HOME = 'HME',
  LOGIN = 'LOG',
  // SCAFFOLD_PLATFORM_CONFIG = "SCAFFOLD_PLATFORM_CONFIG"
}

export const PathsDict: Record<RouteKey, string> = {
  [RouteKey.ROOT]: '/',
  [RouteKey.WELCOME]: '/welcome',
  [RouteKey.HOME]: '/home',
  [RouteKey.LOGIN]: '/login',

  // [RouteKey.AUTH_LOGIN]: '/auth/login',
  // // [RouteKey.AUTH_LOGOUT]: '/auth/logout',
  // [RouteKey.AUTH_REGISTER]: '/auth/register',

  // [RouteKey.SCAFFOLD_GENERATE_PROJECT]: '/home/scaffold/gen-proj',
  // [RouteKey.SCAFFOLD_GENERATE_CONFIGMAP]: '/home/scaffold/gen-cfm',
  // [RouteKey.SCAFFOLD_REGENERATE_CONFIGMAP]: '/home/scaffold/regen-cfm',
  // [RouteKey.SCAFFOLD_MANAGE]: '/home/scaffold/manage',
  // [RouteKey.SCAFFOLD_USE_CASE]:
  //   '/home/scaffold/use-case/:layer/:subcategory/:appName?/:projectName',
  // [RouteKey.SCAFFOLD_PLATFORM_CONFIG]: '/home/scaffold/platform-config',
  // [RouteKey.SCAFFOLD_DEVOPS_CONFIG]: '/home/scaffold/devops-config',

  // [RouteKey.SCAFFOLD_SWAGGER_OPENAPI]: '/home/scaffold/swagger-openapi',

  // [RouteKey.CONFIG_COMMON_CONFIGMAP]: '/home/config/common-configmap',
  // [RouteKey.SWAGGER_HUB_LINK_DNA]: '/home/swagger/swhub-link-dna',

  // [RouteKey.PLATFORM_CONF_REACT]: '/home/platform-config/react',
  // [RouteKey.PLATFORM_CONF_REACT_NATIVE]: '/home/platform-config/react-native',
  // [RouteKey.PLATFORM_CONF_DOTNET]: '/home/platform-config/dotnet',

  // [RouteKey.SWAGGER_CONV_FILE]: '/home/swagger/convert-file',
  // [RouteKey.SWAGGER_CONV_FOLDER]: '/home/swagger/convert-folder',

  // // [RouteKey.SWAGGER_HUB_LINKS]: '/home/swagger-hub/links',
  // [RouteKey.SWAGGER_APPROVE]: '/home/swagger/approve',
  // [RouteKey.SWAGGER_APPROVALS_HISTORY]: '/home/swagger/approvals-history',
  // [RouteKey.DATA_DICTIONARY]: '/home/data-dictionary',

  // [RouteKey.SWAGGER_HUB_LINK_HBS]: '/home/swhub-link-hbs',
  // [RouteKey.SWAGGER_HUB_LINK_SMF]: '/home/swhub-link-smf',
};

// export const ParameterizedPathBuilders: {
//   [routeKey in RouteKey]?: (pathParams: {
//     [paramName: string]: string;
//   }) => string;
// } = {
//   [RouteKey.SCAFFOLD_USE_CASE]: ({
//     layer,
//     subcategory,
//     appName,
//     projectName,
//   }) =>
//     `/home/scaffold/use-case/${layer}/${subcategory}/${appName ? appName + '/' : ''}${projectName}`,
// };
