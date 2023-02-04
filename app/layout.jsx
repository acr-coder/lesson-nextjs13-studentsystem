import Sidebar from '@/components/Sidebar'
import './globals.css'

async function getAllStudents(){
  const res = await fetch("http://localhost:3000/api/students")

  if(!res.ok){
    throw new Error('Failed to fetch students')
  }

  return res.json()
}


export default async function RootLayout({ children }) {
  const studentData = await getAllStudents()

  //console.log(studentData);
  

  return (
    <html lang="en">
     
      <head />
      <body className='flex flex-row  ' >
        <div className='basis-1/4' >
         <Sidebar studentList = {studentData.data} />
        </div>
        
        <main className='p-5 basis-3/4 ' >
          {children}
        </main>
        
        
        </body>
    </html>
  )
}
