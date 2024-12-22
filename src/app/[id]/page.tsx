const todos = async (props:any) => {
console.log(props)
  const url = await fetch(`https://jsonplaceholder.typicode.com/todos/${props.params.id}`)

   const response = await url.json()
    
    return (
        <div className="bg-slate-100 min-h-screen p-4 text-center font-medium ">
            <h1 className="text-3xl mb-5"> Dynammic Route <br /> </h1>
            <h3> ID: &nbsp; {response.id}</h3><br/>
            <h3> TITLE: &nbsp; {response.title}</h3>
            
    </div>
    )
}
export default todos;
