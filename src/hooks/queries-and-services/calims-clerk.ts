import { useQuery } from "@tanstack/react-query";
import { getFromServer } from "../../utils/network";

export const useLayerQuery = (claim: any) => {
    const {
        isFetching: isProjectsTreeFetching,
        error: projectsTreeError,
        data: projectsTreeData,
    } = useQuery<any>({
        queryKey: ['projects', claim],
        queryFn: () =>
            getFromServer(`/ClerkTasksDeshbord`).then(
                (res) => res.data,
            ),
    });

    return {
        isProjectsTreeFetching,
        projectsTreeError,
        projectsTreeData,
    };
};

// change - delete-update-add maternity
// type ProjectToDeleteParams = {
//     layer: any;
//     subcategory: any;
//     projectName: string;
// };
// export const useProjectMutation = () => {
//     const queryClient = useQueryClient();

//     const projectDeletionMutation = useMutation({
//         mutationFn: (projectToDelete: ProjectToDeleteParams) => {
//             const { layer, subcategory, projectName } = projectToDelete;
//             return deleteFromServer(
//                 `/ClerkTasksDeshbord`,
//             );
//         },
//         onSuccess: (_, params: ProjectToDeleteParams) => {
//             queryClient
//                 .invalidateQueries({
//                     queryKey: ['projects', params.layer],
//                 })
//                 .then(() => { });
//             // TODO: CONDITIONALLY Invalidate the latest projects query!


//             // if i have *another* place to update the add maternity i need to write here
//             queryClient
//                 .invalidateQueries({
//                     queryKey: ['latest-projects'],
//                 })
//                 .then(() => { });
//         },
//     });

//     return projectDeletionMutation;
// };
