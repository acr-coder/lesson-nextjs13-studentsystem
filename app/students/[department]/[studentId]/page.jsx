import EditForm from "@/components/EditForm";
import React from "react";

async function getStudent(id) {
  const res = await fetch("http://localhost:3000/api/students/" + id);

  return res.json();
}

export default async function StudentDetail({ params }) {
  const student = await getStudent(params.studentId);

  if (!student.success) {
    return <div>Student is not found</div>;
  }

  return (
    <>
      <h1 className="text-gray-900 text-start text-xl font-bold leading-normal  ">
        {student.data.fullname}
      </h1>
      <div>
        <div className="container max-w-7xl mx-auto ">
          <div className="flex pt-1">
            <div className="lg:mb-0 mb-12">
              <div className="flex flex-col items-center md:flex-row">
                <img
                  className="rounded-xl w-8/12 md:w-5/12 lg:w-4/12 shadow-lg max-w-full h-auto mb-3  align-middle border-none undefined"
                  src={student.data.image}
                  alt={student.data.fullname}
                />
                <EditForm studentData = {student.data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
