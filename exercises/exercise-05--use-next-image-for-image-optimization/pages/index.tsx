// ✍️ import the Image component from 'next/image'

import Image from "next/image"

// ✍️ import "lazar.png" statically

import lazar from '../lazar.png'

const catImage = "https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg"

const Home = () => {
  return (
    <>
      <Image src={lazar} alt="Lazar" />
      <Image src={catImage} alt="cat" width={750} height={450}/>
    </>
  )
}

export default Home
