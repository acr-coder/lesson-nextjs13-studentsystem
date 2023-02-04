"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditForm({ studentData }) {
  const [fullname, setFullname] = useState(studentData.fullname);
  const [mobile, setMobile] = useState(studentData.mobile);
  const [email, setEmail] = useState(studentData.email);
  const [address, setAddress] = useState(studentData.address);
  const [image, setImage] = useState(studentData.image);
  const [department, setDepartment] = useState(studentData.department);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/students/" + studentData._id, {
        method: "PUT",
        body: JSON.stringify({
          fullname: fullname,
          mobile: mobile,
          address: address,
          email: email,
          image: image,
          department: department,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const response = await res.json();
      if (!response.success) {
        alert(response.error.message);
      } else {
        alert("Student info updated");

        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch("/api/students",{
        method:"DELETE",
        body:JSON.stringify({ id:id}),
        headers: {
          "Content-Type": "application/json",
        },
      })

      const response = await res.json()

      if(res.ok){
        alert("Student Deleted")
        router.push("/students")
        router.refresh()
      }else{
        alert(response.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap w-full lg:w-1/2 mx-auto mt-11 bg-slate-600  px-6 py-8 rounded shadow-md text-black "
    >
      <h1 className="mb-8 text-3xl text-center">Student Info</h1>

      <input
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="fullname"
        placeholder="Full Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="email"
        placeholder="Email"
      />
      <input
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="mobile"
        placeholder="Mobile"
      />
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="address"
        placeholder="Address"
      />
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="image"
        placeholder="Image"
      />
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="department"
        id=""
      >
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>

      <div className="w-full flex justify-between" >
        <button
        type="submit"
        className="w-full text-center py-3 rounded bg-green text-blue-500 hover:text-white hover:bg-blue-700 focus:outline-none my-1"
      >
        Update
      </button>

        <button onClick={()=> handleDelete(studentData._id)}
        type="button"
        className="w-full text-center py-3 rounded bg-green text-red-500 hover:text-white hover:bg-red-700 focus:outline-none my-1"
      >
        Delete
      </button>
      </div>
      
    </form>
  );
}
