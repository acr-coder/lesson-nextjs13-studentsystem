"use client"

import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function Sidebar({studentList}) {
    const deparments = ["9","10","11","12"]

  return (
    <div className="w-full px-4 pt-16 h-screen overflow-auto ">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Link href="/" >
            <h1 className='text-blue-900 text-start text-4xl cursor-pointer font-bold border-b border-white pb-4 w-full' >
                Student System
            </h1>
        </Link>
        <Link href="/new-student">
            <div className="pl-1 hover:bg-gray-900 p-2 rounded-md cursor-pointer hover:shadow-lg ">
                <h3 className='text-gray-800 hover:text-white font-bold'>
                    New Student
                </h3>
            </div>
        </Link>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Students</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <Link href="/students" className=" p-2 ml-10 mb-8 w-full border border-orange-300 hover:bg-orange-500 rounded-md group cursor-pointer hover:shadow-lg  hover:text-white font-semibold  " >
                  View All ({studentList.length}) Students                  
                </Link>
              {deparments.map((department) => (
                <Disclosure as="div" key={department} >
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mb-3 mt-6">
                      <span>Department {department}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="flex flex-col justify-start items-end border-b-2 border-orange-500 mb-2" >
                    <Link href={`/students/${department}`} className=" p-2 ml-10 mb-8 w-full border border-orange-300 hover:bg-orange-500 rounded-md group cursor-pointer hover:shadow-lg  hover:text-white font-semibold  " >
                  View All ({studentList.filter(item => item.department === department).length}) Students                  
                </Link>
                      {studentList.filter((item) => item.department === department).map((student) => (
                        <Link key={student.id} href={`/students/${department}/${student._id}`} className=" p-2 ml-10 mb-2 w-full border border-orange-300 hover:bg-orange-500 rounded-md group cursor-pointer hover:shadow-lg  hover:text-white font-semibold  " >
                          {student.fullname}
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
      </div>
    </div>

  )
}
