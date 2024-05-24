"use client";

import { useQuery } from "convex/react";
import FileBrowser from "../_components/file-browser";

export default function FavouritesPage() {
  return (
    <div>
      <FileBrowser title="Favourites" favourites />
    </div>
  );
}
