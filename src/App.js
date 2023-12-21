import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Experiences from "./components/Experiences";
import data from "./data";
import Slideshow from "./components/Slideshow";

export default function App() {
  const cardData = data.map(datum => {
    return <Slideshow
    key={datum.id}
    {...datum}
    // img={datum.img}
    // rating={datum.stats.rating}
    // location={datum.location}
    // price={datum.price}
    // title={datum.title}
    // reviewCount={datum.stats.reviewCount}
    // country={datum.country}
    />
  })
  return(
    <div id="app">
      <Header/>
      <Gallery/>
      <Experiences/>
      <div id="slideshow">
        {cardData}
      </div>
    </div>
  )
}