"use client";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";
import { FaSearch } from "react-icons/fa";
export default function SearchInput() {
  const searchParams = useSearchParams();

  return (
    <>
      <form action={actions.search}>
        <div className="relative flex items-center">
          <Input
            name="term"
            defaultValue={searchParams.get("term") || ""}
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 text-gray-500" size="1.2em" />
        </div>
      </form>
    </>
  );
}
