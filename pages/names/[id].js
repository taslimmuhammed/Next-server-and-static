

export const getStaticPaths  = async ()=>{
    const res =  await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()

   const paths = data.map(ninja=>{
       return {
           params:{ id: ninja.id.toString()}
       }
   })
   return {
       paths,
       fallback:false
   }
}
// this getStaticPaths is used to generate pages based on ids
//Or to let next know there exist these mush routes
//for each of these paths the next runs the below function
export const getStaticProps = async(context)=>{
    const id = context.params.id
    const res =  await fetch("https://jsonplaceholder.typicode.com/users/"+id);
    const data = await res.json()
    return {
        props:{ninja:data}
    }
}
const Details = ({ninja}) => {
    return (<div>
      <h1>{ninja.name}</h1>  
      <p>{ninja.email}</p>
      <p>{ninja.username}</p>
      <p>{ninja.address.city}</p>
      <p></p>
    </div>)
}
export default Details
