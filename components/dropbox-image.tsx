import { IconButton, Spinner } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { deleteFile } from "actions/storageActions";
import { queryClient } from "config/ReactClientProivider";
import { getImageUrl } from "utils/supabase/storage";

export default function DropboxImage({ image }){
    const deleteFileMutation = useMutation({
        mutationFn: deleteFile,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["images"],
            })
        }
    })

    return (
        <div className="relative w-full flex flex-col gap-2 p-4 border borer-gray-100 rounded-2xl shadow-md">
            {/* Image */}
            <div>
                <img src={getImageUrl(image.name)} className="w-full aspect-square rounded-2xl" />
            </div>

            {/* File Name */}
            <div className="font-bold">{image.name}</div>

            {/* Delete Button */}
            <div className="absolute top-2 right-4">
                <IconButton color="red" onClick={() => {deleteFileMutation.mutate(image.name);}}>
                    {deleteFileMutation.isPending ? ( <Spinner /> ) : (
                        <i className="fas fa-trash" />
                    )}
                </IconButton>
            </div>
        </div>
    )
}