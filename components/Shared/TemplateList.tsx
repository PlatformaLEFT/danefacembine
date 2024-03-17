import { Analysis, Campagnies } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TemplateList({
  list,
}: {
  list: Analysis | Campagnies;
}) {
  return (
    <div className="flex sm:flex-row flex-col first-letter:items-center lg:justify-between lg:gap-10 gap-6 lg:mx-auto my-4">
      <div className="sm:hidden block">
        <Link href={list.slug}>
          <Image
            src={list.headerImage}
            alt="Posts"
            className="md:w-1/2 w-full shadow-2xl object-contain"
            width={100}
            height={100}
            priority
          />
        </Link>
      </div>

      <div className="sm:w-2/3 w-full">
        <Link href={list.slug}>
          <h2 className="text-4xl font-black hover:text-gray-500">
            {list.title}
          </h2>
        </Link>
        <h4
          className="my-4 text-base"
          dangerouslySetInnerHTML={{ __html: list.header }}
        />

        <Link href={list.slug}>
          <h5 className="text-base font-bold hover:text-gray-500">
            Citește mai departe...
          </h5>
        </Link>
      </div>

      <Link
        href={list.slug}
        className="sm:flex items-center justify-center sm:w-1/3 w-1/2 hidden"
      >
        <Image
          src={list.headerImage}
          alt="Posts"
          width={500}
          height={500}
          priority={true}
          className="shadow-2xl object-contain"
        />
      </Link>
    </div>
  );
}
