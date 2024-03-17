import React from "react";
import { MemberInfo } from "@/utils/types";
import Image from "next/image";

export default function Member({ member }: { member: MemberInfo }) {
  return (
    <div className="flex sm:flex-row flex-col items-start gap-4">
      <div className="flex items-center gap-4 sm:w-1/4 w-full">
        <Image
          width={600}
          height={600}
          src={member.image}
          alt={member.name}
          priority
          className="object-contain"
        />
      </div>

      <div className="flex flex-col gap-2 sm:w-3/4 w-full">
        <h3 className="text-4xl font-black">{member.name}</h3>
        <p
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: member.description }}
        ></p>
      </div>
    </div>
  );
}
