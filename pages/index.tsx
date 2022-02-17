import Head from 'next/head'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
// import SmallCard from "../Components/SmallCard"
import Main from '../Components/Main'
import Footer from '../Components/Footer'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>AirBnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="mx-auto max-w-7xl px-8 sm:px-16 ">
        <section className="pt-6">
          {/* <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2> */}
          {/* pull data from a server - API endpoints */}
          {/* {exploreData?.map((img,distance,location) => (
            <SmallCard  
            key={img}
            img = {img} 
            distance={distance} 
            location={location}  
            />
          ))} */}
          <Main exploreData={exploreData} cardsData={cardsData}></Main>
          <Footer></Footer>
        </section>
      </main>
    </div>
  )
}
// export async function getStaticProps() {
//   const exploreData = await fetch("https://links.papareact.com/pyp").
//   then(
//       (res) => res.json()
//   );
//   return {
//       props:{
//         exploreData,
//       }
//   }
// }

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  )
  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  )
  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}
