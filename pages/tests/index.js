import Link from 'next/link';
import style from '../../styles/Home.module.css'

//this only runs while building wont run in browser
export const getStaticProps = async()=>{
    const res =  await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()
    return {
        props:{ninjas:data}
    }
}
//props is allready vailable when we load a component 
// We are destructring ninjas out of props here
const Index = ({ninjas}) => {
    return ( <div><h1>Home page of Tests</h1>
        {ninjas.map(element =>{
       
        return (
            <Link href={"/names/"+ element.id} key={element.id}>
             <div  className={style.names}>
            {element.name}
            </div></Link>
       )})
        }</div> );
}
 
export default Index;