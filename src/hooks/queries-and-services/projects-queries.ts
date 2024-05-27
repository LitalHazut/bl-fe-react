// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// import {
//   ProjectNameWithDatesAndHierarchy,
//   SubCategoriesAndProjectsDTO,
// } from '@/dto/projects-management.dto.ts';
// import { Layer, Subcategory } from '@/types/gen-types.ts';
// import { deleteFromServer, getFromServer } from '@/util/network.ts';
// import { OwnAndDownstreamServicesEndpointsDTO } from '@/dto/swagger-endpoints-info.dto.ts';

// const SERVICE_BASE_URL = '/management';

// export const useLayerProjectsQuery = (layer: Layer) => {
//   const {
//     isFetching: isProjectsTreeFetching,
//     error: projectsTreeError,
//     data: projectsTreeData,
//   } = useQuery<SubCategoriesAndProjectsDTO>({
//     queryKey: ['projects', layer],
//     queryFn: () =>
//       getFromServer(`${SERVICE_BASE_URL}/projects/${layer}`).then(
//         (res) => res.data,
//       ),
//   });

//   return {
//     isProjectsTreeFetching,
//     projectsTreeError,
//     projectsTreeData,
//   };
// };

// type ProjectToDeleteParams = {
//   layer: Layer;
//   subcategory: Subcategory;
//   projectName: string;
// };

// export const useProjectExistenceStatusQuery = (params: {
//   layer: string;
//   subcategory: string;
//   appName?: string;
//   projectName: string;
// }) => {
//   const { layer, subcategory, appName, projectName } = params;

//   const {
//     data: projectExistenceData,
//     isFetching: isProjectExistenceFetching,
//     error: projectExistenceError,
//   } = useQuery<{ exists: boolean }>({
//     queryKey: ['project-existence', layer, subcategory, appName, projectName],
//     queryFn: () => {
//       // Check if all required parameters are defined
//       if (!layer || !subcategory || !projectName) {
//         // TODO: Add appName to the check here, once becomes relevant
//         return Promise.resolve({ exists: false });
//       }

//       return getFromServer(
//         `${SERVICE_BASE_URL}/projects/${layer}/${subcategory}/${appName ? appName + '/' : ''}${projectName}/existence`,
//       ).then((res) => res.data);
//     },
//     staleTime: 5000, // We should not cache this for too long
//   });

//   return {
//     projectExists: projectExistenceData?.exists,
//     isProjectExistenceFetching,
//     projectExistenceError,
//   };
// };

// /*
//  * This retrieves the project's own and downstream endpoints, based on the project's own swagger
//  * and the downstream swaggers it references.
//  * */
// export const useProjectEndpointsQuery = (params: {
//   layer: Layer;
//   subcategory: Subcategory;
//   appName?: string;
//   projectName: string;
// }) => {
//   const { layer, subcategory, appName, projectName } = params;

//   const {
//     data: projectEndpointsData,
//     isFetching: isProjectEndpointsFetching,
//     error: projectEndpointsError,
//   } = useQuery<OwnAndDownstreamServicesEndpointsDTO>({
//     queryKey: [
//       'projects',
//       layer,
//       subcategory,
//       appName,
//       projectName,
//       'all-endpoints',
//     ],
//     queryFn: () =>
//       getFromServer(
//         `${SERVICE_BASE_URL}/projects/${layer}/${subcategory}/${appName ? appName + '/' : ''}${projectName}/all-endpoints`,
//       ).then((res) => res.data),
//   });

//   return {
//     ownEndpoints: projectEndpointsData?.ownServicesEndpoints,
//     downstreamEndpoints: projectEndpointsData?.downstreamServicesEndpoints,
//     isProjectEndpointsFetching,
//     projectEndpointsError,
//   };
// };

// export const useProjectMutation = () => {
//   const queryClient = useQueryClient();

//   const projectDeletionMutation = useMutation({
//     mutationFn: (projectToDelete: ProjectToDeleteParams) => {
//       const { layer, subcategory, projectName } = projectToDelete;
//       return deleteFromServer(
//         `${SERVICE_BASE_URL}/projects/${layer}/${subcategory}/${projectName}`,
//       );
//     },
//     onSuccess: (_, params: ProjectToDeleteParams) => {
//       queryClient
//         .invalidateQueries({
//           queryKey: ['projects', params.layer],
//         })
//         .then(() => {});
//       // TODO: CONDITIONALLY Invalidate the latest projects query!
//       queryClient
//         .invalidateQueries({
//           queryKey: ['latest-projects'],
//         })
//         .then(() => {});
//     },
//   });

//   return projectDeletionMutation;
// };

// export const useLatestProjectsQuery = (recentsNumToList: number) => {
//   const {
//     data: latestProjectsData,
//     isFetching: isLatestProjectsFetching,
//     error: latestProjectsError,
//   } = useQuery<ProjectNameWithDatesAndHierarchy[]>({
//     queryKey: ['latest-projects'],
//     queryFn: async () => {
//       const layers = Object.values(Layer);
//       const allProjects: ProjectNameWithDatesAndHierarchy[] = [];

//       const layerPromises = layers.map((layer) =>
//         getFromServer(`${SERVICE_BASE_URL}/projects/${layer}`).then((res) => {
//           const projectsTreeData = res.data as SubCategoriesAndProjectsDTO;
//           for (const subcategory in projectsTreeData) {
//             const projectsForSubcategory =
//               projectsTreeData[subcategory as keyof typeof Subcategory] || [];
//             for (const project of projectsForSubcategory) {
//               allProjects.push({
//                 ...project,
//                 layer,
//                 subcategory: subcategory as Subcategory,
//               });
//             }
//           }
//         }),
//       );

//       await Promise.all(layerPromises);

//       allProjects.sort((a, b) => b.lastModifiedAtEpoch - a.lastModifiedAtEpoch);

//       return allProjects.slice(0, recentsNumToList);
//     },
//   });

//   return {
//     latestProjectsData,
//     isLatestProjectsFetching,
//     latestProjectsError,
//   };
// };
