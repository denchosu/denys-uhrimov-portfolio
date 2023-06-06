import Image from 'next/image'
import image from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'
import style from './page.module.css'

const Projects=()=>{
    return (<>
    <div id={style.projects}>
        <p id={style.txt}>unfortunately i haven't done any projects yet so i'll show you some cool pixel pets</p>
        <div id={style.projectimages}>
        <Image src={image} alt='img'></Image>
        <Image src={image2} alt='img2'></Image>
        <Image src={image3} alt='img3'></Image>
        </div>
        </div>

   </> )
}
export default Projects