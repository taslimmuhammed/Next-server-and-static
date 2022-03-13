const Profile = ({ninja}) => {
    return (<div>
        <h1>{ninja.name}</h1>  
        <p>{ninja.email}</p>
        <p>{ninja.username}</p>
        <p>{ninja.address.city}</p>
        <p></p>
      </div>  );
}
 
export default Profile;


export const  getServerSideProps =async (context) => {
    const id = context.params.id
    const res =  await fetch("https://jsonplaceholder.typicode.com/users/"+id);
    const data = await res.json()
    return ( {
            props:{ninja:data}
    } );
}
