import Image from 'next/image'
import styles from './footer.module.css'
import image from './logo.png'
const Footer=()=>{
    return  <footer id={styles.footer}>
        <div id={styles.logoFooter}>
        <Image src={image} alt='logo'></Image>
        </div>

        <div id={styles.contacts}>
            <a>Contacts</a>
            <p>+380962203820</p>
            <p>denis.ugrimov04@gmail.com</p>
        </div>
        </footer>
        
}
export default Footer