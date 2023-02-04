import StudentList from '@/components/StudentList'
import React from 'react'

async function getAllStudents(){
    const res = await fetch("http://localhost:3000/api/students")
  
    if(!res.ok){
      throw new Error('Failed to fetch students')
    }
  
    return res.json()
  }
  

export default async function Students() {
    const studentData = await getAllStudents()
    console.log(studentData);

  return (
    <StudentList title="All Students" allStudents = {studentData.data} />
  )
}
