"use client";

import { useState } from "react";
import Logo from "./logo";
import SearchComponent from "./search-component";
import FileDragDropZone from "./file-dragdropzone";
import DropboxImageList from "./dropbox-image-list";

export default function UI(){
    const [searchInput, setSearchInput] = useState("");

    return(
        <main className="w-full p-2 flex flex-col gap-4">
            {/* Logo */}
            <Logo />

            {/* Search Component */}
            <SearchComponent searchInput={searchInput} setSearchInput={setSearchInput} />

            {/* File Drag Drop Zone */}
            <FileDragDropZone />

            {/* Dropbox Image List */}
            <DropboxImageList searchInput={searchInput} />
        </main>
    )
}