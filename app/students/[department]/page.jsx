import StudentList from '@/components/StudentList'
import React from 'react'

async function getAllStudents(){
    const res = await fetch("http://localhost:3000/api/students")
  
    if(!res.ok){
      throw new Error('Failed to fetch students')
    }
      
    return res.json()
  }

export default async function Department({ params }) {
    const studentData = await getAllStudents()


    if(params.department != 9 && params.department != 10 && params.department != 11 && params.department != 12 ){
        return(
            <div>This page is not found</div>
        )
    }
  return (
    <StudentList title={`Department ${params.department}`}  allStudents={studentData.data.filter(student => student.department === params.department)} />
  )
}
