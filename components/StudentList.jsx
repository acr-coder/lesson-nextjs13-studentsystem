"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function StudentList({ allStudents, title }) {
  const [search, setSearch] = useState("");

  const currentStudents = search
    ? allStudents.filter((student) =>
        student.fullname
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase())
      )
    : allStudents;

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-around">
        <h1 className="text-pink-900 text-start text-xl md:text-3xl font-bold leading-normal ">
          {title}
        </h1>
        <div className="bg-slate-800 w-full md:w-1/3 p-2 flex justify-center align-middle rounded-2xl text-base ">
          <input
            value={search}
            onInput={(e) => setSearch(e.target.value)}
            className="p-1 w-full bg-white rounded-xl outline-none indent-3 "
            type="search"
            name=""
            id=""
          />
        </div>
      </div>

      <div>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap pt-5">
            {currentStudents.map((student) => (
              <div
                key={student._id}
                className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
              >
                <Link href={`students/${student.department}/${student._id}`} >
                  <div className="px-6">
                  <img
                    alt={student.fullname}
                    src={student.image}
                    className="rounded-xl shadow-lg max-w-full h-auto align-middle  border-none undefined"
                    style={{ cursor: "auto" }}
                  />
                  <div className="pt-2 text-center">
                    <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-1">
                      {student.fullname}
                    </h1>
                  </div>
                </div>
                </Link>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
