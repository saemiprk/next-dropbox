import { IconButton } from "@material-tailwind/react";
import { getImageUrl } from "utils/supabase/storage";

export default function DropboxImage({ image }){
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
                <IconButton color="red" onClick={() => {}}>
                    <i className="fas fa-trash" />
                </IconButton>
            </div>
        </div>
    )
}