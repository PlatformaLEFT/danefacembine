"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { GeneralInfo, Post } from "@/utils/types";
import { DocumentData } from "firebase/firestore";

export default function Posts() {
  //   {
  //     src: Post34,
  //     href: "https://www.instagram.com/p/C3SZAexiO9b/?img_index=1",
  //   },
  //   {
  //     src: Post33,
  //     href: "https://www.instagram.com/p/C3M4hE4CmG7/?img_index=1",
  //   },
  //   {
  //     src: Post32,
  //     href: "https://www.instagram.com/p/C3DTDZGi7Pj/?img_index=1",
  //   },
  //   {
  //     src: Post31,
  //     href: "https://www.instagram.com/p/C25DtkXiMMF/?img_index=1",
  //   },
  //   {
  //     src: Post30,
  //     href: "https://www.instagram.com/p/C2uSh44oUAt/",
  //   },
  //   {
  //     src: Post29,
  //     href: "https://www.instagram.com/p/C2g9ZtArD34/",
  //   },
  //   {
  //     src: Post28,
  //     href: "https://www.instagram.com/p/C2etXUrolFw/",
  //   },
  //   {
  //     src: Post27,
  //     href: "https://www.instagram.com/p/C2NnoldCtiU/?img_index=1",
  //   },
  //   {
  //     src: Post26,
  //     href: "https://www.instagram.com/p/Cz6TSqsoKKw/",
  //   },
  //   {
  //     src: Post25,
  //     href: "https://www.instagram.com/p/C04IX-Do61l/",
  //   },
  //   {
  //     src: Vezi,
  //     href: "/posts",
  //   },
  //   // {
  //   //   src: Post24,
  //   //   href: "https://www.instagram.com/p/C2HGXA9IyVl/",
  //   // },
  //   // {
  //   //   src: Post23,
  //   //   href: "https://www.instagram.com/p/C13xnfsq9gr/",
  //   // },
  //   // {
  //   //   src: Post22,
  //   //   href: "https://www.instagram.com/p/C1hED6gofpP/",
  //   // },
  //   // {
  //   //   src: Post21,
  //   //   href: "https://www.instagram.com/p/C1O8R4tupPc/",
  //   // },
  //   // {
  //   //   src: Post20,
  //   //   href: "https://www.instagram.com/p/C1G_tFsqZJb/",
  //   // },
  //   // {
  //   //   src: Post19,
  //   //   href: "https://www.instagram.com/p/C0ULnF3IcmN/",
  //   // },
  //   // {
  //   //   src: Post18,
  //   //   href: "https://www.instagram.com/p/C0Md3fJo0YA/",
  //   // },
  //   // {
  //   //   src: Post17,
  //   //   href: "https://www.instagram.com/p/C0CFWm6ocXK/",
  //   // },
  //   // {
  //   //   src: Post16,
  //   //   href: "https://www.instagram.com/p/CzwKiXvoY_Z/",
  //   // },
  //   // {
  //   //   src: Post15,
  //   //   href: "https://www.instagram.com/p/CzeKOOkoSr2/",
  //   // },
  //   // {
  //   //   src: Post14,
  //   //   href: "https://www.instagram.com/p/CzY5vWFoCS5/",
  //   // },
  //   // {
  //   //   src: Post13,
  //   //   href: "https://www.instagram.com/p/CzLk1XoId1G/",
  //   // },
  //   // {
  //   //   src: Post12,
  //   //   href: "https://www.instagram.com/p/CzGMZLDIrEB/",
  //   // },
  //   // {
  //   //   src: Post11,
  //   //   href: "https://www.instagram.com/p/CzBX1e3Igqs/",
  //   // },
  //   // {
  //   //   src: Post10,
  //   //   href: "https://www.instagram.com/p/Cy5jYrQIBjw/",
  //   // },
  //   // {
  //   //   src: Post9,
  //   //   href: "https://www.instagram.com/p/CyxvIQjIP5Q/",
  //   // },
  //   // {
  //   //   src: Post8,
  //   //   href: "https://www.instagram.com/p/CyfaMgUIYr_/",
  //   // },
  //   // {
  //   //   src: Post7,
  //   //   href: "https://www.instagram.com/p/CyVaeF2IUjA/",
  //   // },
  //   // {
  //   //   src: Post6,
  //   //   href: "https://www.instagram.com/p/CyOAtkoIVwe/",
  //   // },
  //   // {
  //   //   src: Post5,
  //   //   href: "https://www.instagram.com/p/Cx9twREIBMp/",
  //   // },
  //   // {
  //   //   src: Post4,
  //   //   href: "https://www.instagram.com/p/CxvVhJWoH-E/",
  //   // },
  //   // {
  //   //   src: Post3,
  //   //   href: "https://www.instagram.com/p/CxNtk7IsceS/",
  //   // },
  //   // {
  //   //   src: Post2,
  //   //   href: "https://www.instagram.com/p/CxCvapwMwIT/",
  //   // },
  //   // {
  //   //   src: Post1,
  //   //   href: "https://www.instagram.com/p/Cw4japnsFE0/",
  //   // },
  // ];

  // const orderedPosts = posts
  //   .sort((a, b) => {
  //     return parseInt(b.index) - parseInt(a.index);
  //   })
  //   .slice(0, 8);
  // const postsWithVezi = [...orderedPosts, general?.postsShowMore];

  return (
    <div className="w-full">
      <Link href="/posts">
        <h2 className="text-4xl font-black hover:text-gray-500">Membrii</h2>
      </Link>

      <div className="my-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          // loop={true}
          speed={700}
          autoplay
          pagination={{ clickable: true }}
        >
          {/* {postsWithVezi.map((post) => {
            return (
              <SwiperSlide key={post.index}>
                <Link href={post.url} target="_blank" className="shadow-xl">
                  <Image
                    src={post.imageUrl}
                    alt="posts"
                    width={300}
                    height={300}
                    className="sm:w-[300px] w-full object-contain"
                  />
                </Link>
              </SwiperSlide>
            );
          })} */}
        </Swiper>
      </div>

      <Link href="/posts">
        <h5 className="text-lg underline hover:text-gray-500">
          -&gt; Vezi toti membrii
        </h5>
      </Link>
    </div>
  );
}
