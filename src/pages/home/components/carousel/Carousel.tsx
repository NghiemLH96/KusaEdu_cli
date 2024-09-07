import "./carousel.scss"
import { Carousel } from 'antd'

export default function Cars() {
      const slides = [
        "https://firebasestorage.googleapis.com/v0/b/kusaedu-21fe6.appspot.com/o/bgwp.jpeg?alt=media&token=6b9d1f6d-83f3-42d6-ac05-8a0d794c3f2c",
        "https://firebasestorage.googleapis.com/v0/b/kusaedu-21fe6.appspot.com/o/bgwp2.jpg?alt=media&token=39abfc81-95dd-415a-8c9c-639f626faf89",
        "https://firebasestorage.googleapis.com/v0/b/kusaedu-21fe6.appspot.com/o/bgwp3.jpg?alt=media&token=2baed71b-7fbb-48b8-a219-5a15b3ece94c",
        "https://firebasestorage.googleapis.com/v0/b/kusaedu-21fe6.appspot.com/o/bgwp4.jfif?alt=media&token=0a9cb97f-5eb4-4956-acd0-97bcf81dc1b8"
    ]
    return (
        <div className='carousel__container'>
            <Carousel arrows infinite={true} autoplay autoplaySpeed={10000} >
                {
                    slides.map((item,index)=>(
                        <div key={index} className="carousel__slide">
                            <img src={item} alt="loading failse" />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}
