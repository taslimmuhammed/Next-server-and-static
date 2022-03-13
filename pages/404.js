import Link from "next/link";
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Head from "next/head";
const Notfound = () => {
    const router = useRouter()
    useEffect(() => {
      setTimeout(()=>{
         // router.go(-1)
         router.push('/')
      },3000)
    }, [])
    
    return ( 
        <>
        <Head> <title>Oops Page</title></Head>
        <div>
            <h1>
                Ooops..
            </h1>
            <h2>Page your looking for not found , Redirecting to home page</h2>
            <p><Link href="/">Return to were you came from </Link></p>
        </div></>
     );
}
 
export default Notfound;