import { createBrowserRouter } from 'react-router-dom';

import { PathsDict, RouteKey } from './routing-config';
import { AppRoot } from '../components/layout/AppRoot';
import { AddMaternityGrant } from '../components/views/maternityGrant/AddMaternityGrant';
import Login from '../components/views/login/Login';
import { ClerkTasksDeshbord } from '../components/views/clerkTasksDeshbord/ClerkTasksDeshbord';


export const appRouter = createBrowserRouter([
  {
    // path: '/',
    path: PathsDict[RouteKey.ROOT],
    element: <AppRoot />,
    children: [
      {
        path: PathsDict[RouteKey.LOGIN],
        element: <Login />,
      },
      {
        path: PathsDict[RouteKey.ADD_MATERNITY_GRANT],
        element: <AddMaternityGrant />,
      },
      {
        path: PathsDict[RouteKey.CLERK_TASKS_DESHBORD],
        element: <ClerkTasksDeshbord />,
      },
      // {
      //   path: PathsDict[RouteKey.WELCOME],
      //   element: <Welcome />,
      // },
      // // TODO: move this back to th protected area once the problem with the programmatic navigation is resolved
      // {
      //   path: PathsDict[RouteKey.AUTH_LOGIN],
      //   element: <Login />,
      // },
      // {
      //   path: PathsDict[RouteKey.AUTH_REGISTER],
      //   element: <Register />,
      // },
      {
        // element: <RoutesProtectedByLogin />,
        children: [

          // {
          //   path: PathsDict[RouteKey.SCAFFOLD_GENERATE_PROJECT],
          //   element: <ProjectGenerate />,
          // },
          // {
          //   path: PathsDict[RouteKey.SCAFFOLD_MANAGE],
          //   element: <ProjectsManagement />,
          // },
          // {
          //   path: PathsDict[RouteKey.SCAFFOLD_USE_CASE],
          //   element: <ProjectUseCase />,
          // },
          // {
          //   path: PathsDict[RouteKey.CONFIG_COMMON_CONFIGMAP],
          //   element: <CommonConfigMap />,
          // },
          // {
          //   path: PathsDict[RouteKey.SCAFFOLD_PLATFORM_CONFIG],
          //   element: <PlatformConfig />,
          // },
          // {
          //   path: PathsDict[RouteKey.SCAFFOLD_SWAGGER_OPENAPI],
          //   element: <SwaggerConvert />,
          // },
        ],
      },
    ],
  },
]);
