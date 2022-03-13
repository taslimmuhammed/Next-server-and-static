import Link from 'next/link';
import style from '../../styles/Home.module.css'

const Index = ({ninjas}) => {
    return ( <div><h1>Home page of Tests</h1>
        {ninjas.map(element =>{
       
        return (
            <Link href={"/server/"+ element.id} key={element.id}>
             <div  className={style.names}>
            {element.name}
            </div></Link>
       )})
        }</div> );
}
 
export default Index;

export async function getServerSideProps(){
    const res =  await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()
    return {
        props:{ninjas:data}
    }
}