import Link from 'next/link'
import styles from './navbar.module.css'
const Navbar=()=>{
    return  <nav id={styles.nav}>
        <div id={styles.logo}>
            <p>Denys Uhrimov</p>
        </div>
       
        <div id={styles.navbar}>
            <ul>
           <Link href={'/'}><li>About me</li></Link> 
           <Link href={'/Projects'}> <li> Projects</li></Link>
           <Link href={'/Contacts'}> <li>Contacts</li></Link>
            </ul>
        </div>
        
    </nav>
}
export default Navbar