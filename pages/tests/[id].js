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


export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
const PersonalProfile = () => {
    return ( <div></div> );
}
 
export default PersonalProfile;