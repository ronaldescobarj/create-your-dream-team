import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { GetStaticProps } from "next";

interface LeagueSearchbarProps {
  leagues: any[];
}

const LeagueSearchbar = ({ leagues }: LeagueSearchbarProps) => {
  const [searchValue, setSearchValue] = useState("");
  const handleDebouncedSearch = useDebouncedCallback(() => {});

  return (
    <div className="w-1/2 p-5">
      <MagnifyingGlassIcon className="h-6 w-6 absolute"></MagnifyingGlassIcon>
      <input type="text" className="w-full" />
    </div>
  );
}

export default LeagueSearchbar;
