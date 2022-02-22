import { useRouter } from 'next/dist/client/router'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { format } from "date-fns";
import InfoCard from '../Components/InfoCard';
import Map from '../Components/Map';

function Search({ searchResults }) {
  const router = useRouter()

  console.log(searchResults);

  const { location, startDate, endDate, noOfGuests } = router.query
  const formattedStartDate = format (new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const dateRange = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header
        placeholder={`${location} | ${dateRange} | ${noOfGuests}`}
      />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ stays -{dateRange}- for {noOfGuests} guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            {' '}
            Stays in {location}{' '}
          </h1>

          <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
          {searchResults.map(({img,location,title,description , star,price ,total}) =>(
              <InfoCard 
                key={img}
                img={img}
                location={location}
                title={title}
                description={description}
                star = {star}
                price={price}
                total={total}
              />
          ))}
          </div>
          
        </section>

        <section className=" hidden xl:inline-flex xl:min-w-[600px] ">
          <Map searchResults = {searchResults}/>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
