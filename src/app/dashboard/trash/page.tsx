"use client";

import FileBrowser from "../_components/file-browser";

export default function TrashPage() {
  return (
    <div>
      <FileBrowser title="Favourites" deletedOnly />
    </div>
  );
}
