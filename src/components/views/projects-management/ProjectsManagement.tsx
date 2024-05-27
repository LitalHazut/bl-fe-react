// import { useEffect, useState } from 'react';
// import {
//   Button,
//   Card,
//   Collapse,
//   Input,
//   Modal,
//   Radio,
//   Spin,
//   Table,
//   Tooltip,
// } from 'antd';
// import {
//   ApiOutlined,
//   DeleteOutlined,
//   FolderOutlined,
//   RedoOutlined,
// } from '@ant-design/icons';
// import { ColumnsType } from 'antd/es/table';
// import { useNavigate } from 'react-router-dom';

// import {
//   useLatestProjectsQuery,
//   useLayerProjectsQuery,
//   useProjectMutation,
// } from '@/hooks/queries-and-services/projects-queries.ts';
// import {
//   Layer,
//   LayerLabels,
//   SubcategoriesLabels,
//   Subcategory,
// } from '@/types/gen-types.ts';
// import {
//   ProjectNameWithDates,
//   ProjectNameWithDatesAndHierarchy,
// } from '@/dto/projects-management.dto.ts';
// import { notifyError } from '@/util/antd-wrap-util.tsx';
// import { useManagementService } from '@/hooks/queries-and-services/management-service.ts';
// import { useNetState } from '@/hooks/net-state.ts';
// import './ProjectsManagement.scss';
// import {
//   ParameterizedPathBuilders,
//   PathsDict,
//   RouteKey,
// } from '@/routing/routing-config.ts';

// const LATEST_PROJECTS_NUM = 3;

// const ProjectsManagement = () => {
//   const navigate = useNavigate();

//   const [selectedLayer, setSelectedLayer] = useState<Layer>(Layer.DCS);
//   const [searchQuery, setSearchQuery] = useState('');

//   const { latestProjectsData, isLatestProjectsFetching, latestProjectsError } =
//     useLatestProjectsQuery(LATEST_PROJECTS_NUM);

//   const { projectsTreeData, isProjectsTreeFetching, projectsTreeError } =
//     useLayerProjectsQuery(selectedLayer);

//   const projectDeletionMutation = useProjectMutation();

//   const { openProjectInFileExplorer, getProjectPassport } =
//     useManagementService();
//   const { isRunningWithLocalServer } = useNetState();

//   useEffect(() => {
//     if (latestProjectsError) {
//       notifyError(
//         'An error occurred while fetching the latest projects.',
//         JSON.stringify(latestProjectsError),
//       );
//     }
//   }, [latestProjectsError]);

//   useEffect(() => {
//     if (projectsTreeError) {
//       notifyError(
//         'An error occurred while fetching the projects tree.',
//         JSON.stringify(projectsTreeError),
//       );
//     }
//   }, [projectsTreeError]);

//   const handleLayerChange = (newLayerValue: Layer) =>
//     setSelectedLayer(newLayerValue);
//   const handleSearchChange = (newSearchValue: string) =>
//     setSearchQuery(newSearchValue);

//   const handleClickDeleteProject = (
//     project: ProjectNameWithDatesAndHierarchy,
//   ) => {
//     Modal.confirm({
//       title: `Are you sure you want to delete project ${project.name}?`,
//       onOk: () =>
//         projectDeletionMutation.mutate({
//           layer: project.layer,
//           subcategory: project.subcategory,
//           projectName: project.name,
//         }),
//     });
//   };

//   const handleClickOpenProjectFolder = async (
//     project: ProjectNameWithDatesAndHierarchy,
//   ) => {
//     if (isRunningWithLocalServer) {
//       await openProjectInFileExplorer(
//         project.layer,
//         project.subcategory,
//         project.name,
//       );
//     }
//   };

//   const handleClickRegenerateProject = async (
//     project: ProjectNameWithDatesAndHierarchy,
//   ) => {
//     const projectPassportData = await getProjectPassport(
//       project.layer,
//       project.subcategory,
//       project.name,
//       project.appName,
//     );
//     navigate(PathsDict[RouteKey.SCAFFOLD_GENERATE_PROJECT], {
//       replace: false,
//       state: {
//         ...projectPassportData,
//       },
//     });
//   };

//   const handleClickEditProjectUseCases = (
//     project: ProjectNameWithDatesAndHierarchy,
//   ) => {
//     const destinationPath = ParameterizedPathBuilders[
//       RouteKey.SCAFFOLD_USE_CASE
//     ]?.({
//       layer: project.layer,
//       subcategory: project.subcategory,
//       appName: project.appName || '',
//       projectName: project.name,
//     });
//     navigate(destinationPath as string, {
//       replace: false,
//     });
//   };

//   const subcatProjectsColumns: ColumnsType<ProjectNameWithDatesAndHierarchy> = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       width: '30%',
//     },
//     {
//       title: 'Created At',
//       dataIndex: 'createdAtEpoch',
//       render: (timestamp: number) => new Date(timestamp).toLocaleString(),
//     },
//     {
//       title: 'Last Modified At',
//       dataIndex: 'lastModifiedAtEpoch',
//       render: (timestamp: number) => new Date(timestamp).toLocaleString(),
//     },
//     {
//       title: 'Open',
//       dataIndex: 'actionOpen',
//       render: (_: unknown, project: ProjectNameWithDatesAndHierarchy) => (
//         <Tooltip title="Open project folder">
//           <Button
//             icon={<FolderOutlined />}
//             onClick={() => handleClickOpenProjectFolder(project)}
//           />
//         </Tooltip>
//       ),
//       hidden: !isRunningWithLocalServer,
//     },
//     {
//       title: 'Regenerate',
//       dataIndex: 'actionRegenerate',
//       render: (_: unknown, project: ProjectNameWithDatesAndHierarchy) => (
//         <Tooltip title="Regenerate project...">
//           <Button
//             icon={<RedoOutlined />}
//             onClick={() => handleClickRegenerateProject(project)}
//           />
//         </Tooltip>
//       ),
//     },
//     {
//       title: 'Delete',
//       dataIndex: 'actionDelete',
//       render: (_: unknown, project: ProjectNameWithDatesAndHierarchy) => (
//         <Tooltip title="Delete project...">
//           <Button
//             icon={<DeleteOutlined />}
//             onClick={() =>
//               handleClickDeleteProject({
//                 ...project,
//                 layer: selectedLayer,
//                 subcategory: project.subcategory,
//                 // TODO: Show error if not deleted successfully
//               })
//             }
//           />
//         </Tooltip>
//       ),
//     },
//     {
//       title: 'Use Cases',
//       dataIndex: 'actionEditUseCases',
//       render: (_: unknown, project: ProjectNameWithDatesAndHierarchy) => (
//         <Tooltip title="Edit use-cases (endpoints associations)">
//           <Button
//             icon={<ApiOutlined />}
//             onClick={() => handleClickEditProjectUseCases(project)}
//           />
//         </Tooltip>
//       ),
//     },
//   ];

//   return (
//     <div className="mid-screen-page-wide">
//       <h2>Latest Projects</h2>
//       {isLatestProjectsFetching ? (
//         <div className="flex flex-row justify-center">
//           <Spin />
//         </div>
//       ) : latestProjectsError ? (
//         <p>An error occurred while fetching the latest projects.</p>
//       ) : (
//         <div className="flex flex-row justify-between gap-2">
//           {latestProjectsData?.map((project) => (
//             <Card
//               bordered={true}
//               key={project.name}
//               className="recent-projects-card"
//               title={
//                 <div
//                   className={`flex flex-row justify-start ${isRunningWithLocalServer ? 'project-folder-link ' : ''}`}
//                   onClick={() => handleClickOpenProjectFolder(project)}
//                 >
//                   <FolderOutlined />
//                   <span>&nbsp;</span>
//                   {project.name}
//                 </div>
//               }
//             >
//               <div className="flex flex-row justify-between items-center">
//                 <div>
//                   {LayerLabels[project.layer]}
//                   &nbsp;&#8226;&nbsp;
//                   {SubcategoriesLabels[project.subcategory]}
//                 </div>
//                 <div className="recent-projects-action-buttons">
//                   <Tooltip title="Delete project...">
//                     <Button
//                       icon={<DeleteOutlined />}
//                       onClick={() => handleClickDeleteProject(project)}
//                     />
//                   </Tooltip>
//                   <Tooltip title="Regenerate project...">
//                     <Button
//                       icon={<RedoOutlined />}
//                       onClick={() => handleClickRegenerateProject(project)}
//                     />
//                   </Tooltip>
//                   <Tooltip title="Edit use-cases (endpoints associations)">
//                     <Button
//                       icon={<ApiOutlined />}
//                       onClick={() => handleClickEditProjectUseCases(project)}
//                     />
//                   </Tooltip>
//                 </div>
//               </div>
//               {/*TODO: Make adaptations for BFF with its additional hierarchy level*/}
//               <p>{new Date(project.lastModifiedAtEpoch).toLocaleString()}</p>
//             </Card>
//           ))}
//         </div>
//       )}

//       <h2>All Projects</h2>
//       <Input.Search
//         placeholder="Search projects"
//         onChange={(event: { target: { value: string } }) =>
//           handleSearchChange(event.target.value)
//         }
//       />

//       <div className="flex flex-row justify-center mt-4 mb-4">
//         <Radio.Group
//           onChange={(event: { target: { value?: Layer } }) =>
//             handleLayerChange(event.target.value as Layer)
//           }
//           value={selectedLayer}
//           optionType="button"
//           buttonStyle="solid"
//           options={Object.values(Layer).map((layer) => ({
//             label: LayerLabels[layer],
//             value: layer,
//           }))}
//         />
//       </div>

//       {isProjectsTreeFetching ? (
//         <div className="flex flex-row justify-center">
//           <Spin />
//         </div>
//       ) : projectsTreeError ? (
//         <p>An error occurred while fetching the projects tree.</p>
//       ) : (
//         <Collapse>
//           {Object.entries(projectsTreeData || {}).map(
//             ([subcategory, subcatProjects]) => {
//               const adjustedSearchQuery = searchQuery.toLowerCase().trim();
//               const filteredProjectsWithHierarchy: ProjectNameWithDatesAndHierarchy[] =
//                 subcatProjects
//                   .filter((project) =>
//                     project.name.toLowerCase().includes(adjustedSearchQuery),
//                   )
//                   .map((project: ProjectNameWithDates) => ({
//                     ...project,
//                     layer: selectedLayer,
//                     subcategory: subcategory as Subcategory,
//                   }));
//               if (filteredProjectsWithHierarchy.length === 0) {
//                 return null;
//               }

//               // TODO: Refactor the collapse to use items instead of children
//               return (
//                 <Collapse.Panel
//                   header={SubcategoriesLabels[subcategory as Subcategory]}
//                   key={subcategory}
//                 >
//                   <Table
//                     pagination={false}
//                     dataSource={filteredProjectsWithHierarchy}
//                     columns={subcatProjectsColumns}
//                     rowKey="name"
//                   />
//                 </Collapse.Panel>
//               );
//             },
//           )}
//         </Collapse>
//       )}
//     </div>
//   );
// };

// export default ProjectsManagement;
