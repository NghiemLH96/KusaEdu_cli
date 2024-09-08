import Cars from "./components/carousel/Carousel";
import Text_scrolling from "./components/text_carousel/Text_scrolling";
import './home.scss'
export default function Home() {
  return (
    <>
    <div className="home__container">
      <Cars/>
      <Text_scrolling/>
    </div>
    </>
  )
}
