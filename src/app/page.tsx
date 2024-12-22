import Image from "next/image"
import Link from "next/link"

export default async function Home() {
         const url = await fetch('https://jsonplaceholder.typicode.com/todos')

  const response = await url.json()
  console.log(response)
  return(
    <main className="bg-slate-100">
      <h1 className="text-3xl mb-5 text-center p-3 font-medium">API ROUTING</h1>
      {
      response.map((todo:any)=>(
        <div key={todo.id} >
<Link href={`${todo.id}`} className="flex flex-col items-center">
<h3 className="font-medium"> Id: &nbsp; {todo.id}</h3>
<h3 className="font-medium"> Title: &nbsp; {todo.title}</h3>
<br/>
</Link>
        </div>))
      }
      
    </main>
  )
      
        
      
  


  
  
}
    