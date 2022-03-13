import Link from 'next/link'

const NavBar = () => {
    return (
    <nav>
         <div>
             <h1>Ninja List</h1>
         </div>
         <Link href="/">Home </Link>
         <Link href="/about">About </Link>
         <Link href="/tests">Tests </Link>
    </nav>);
}

export default NavBar;