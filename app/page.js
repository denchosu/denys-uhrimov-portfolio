import Image from 'next/image'
import styles from './page.module.css'
import image1 from './images/image-1.png'
export default function Home() {
  return (<><Image id={styles.pageimg} alt='img' src={image1}></Image>
  <div id={styles.pagetxt}>
   <p>Hey my name is Denys Uhrimov and im a professional slacker!! I love playing videogames and drinking beer :33</p>
   
  </div>
</>)
}
