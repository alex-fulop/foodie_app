import React from "react";
import Link from "next/link";

import { topics } from "../../utils/constants";
import { useRouter } from "next/router";

const Discover = () => {
  const router = useRouter();
  const { topic } = router.query;
  const borderColors = [
    "xl:border-[#FF0000]",
    "xl:border-[#FF8C00]",
    "xl:border-[#F7FF00]",
    "xl:border-[#2AFF00]",
    "xl:border-[#00EAFF]",
    "xl:border-[#0062FF]",
    "xl:border-[#9000FF]",
    "xl:border-[#FF00FF]",
  ];
  const textColors = [
    "text-[#FF0000]",
    "text-[#FF8C00]",
    "text-[#F7FF00]",
    "text-[#2AFF00]",
    "text-[#00EAFF]",
    "text-[#0062FF]",
    "text-[#9000FF]",
    "text-[#FF00FF]",
  ];

  const getClassStyle = (item: { name: string }, idx: number) => {
    if (topic === item.name)
      return `xl:border-2 hover:bg-primary ${borderColors[idx]} px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer ${textColors[idx]}`;
    return "xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black";
  };

  return (
    <div className="xl:border-b-2 xl:border-gray-200 pb-6">
      <p className="text-gray-500 font-semibold m-3 mt-4 hidden xl:block">
        Popular Topics
      </p>
      <div className="flex gap-3 flex-wrap">
        {topics.map((item, idx) => (
          <Link href={`/?topic=${item.name}`} key={item.name}>
            <div className={getClassStyle(item, idx)}>
              <span className="font-medium text-md hidden xl:block capitalize">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;
