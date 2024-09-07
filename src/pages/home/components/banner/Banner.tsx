import { useEffect, useMemo, useRef, useState } from "react"
import "./banner.scss"

export default function Banner() {
    const [activeSlide, setActiveSlide] = useState<number>(1);
    const [isTransf, setIsTransf] = useState<boolean>(false)
    const slidesTrack = useRef<HTMLUListElement>(null)
    useEffect(() => {
        const track = slidesTrack.current;
        if (!track) {
            return;
        };
        track.style.transition = isTransf ? `transform 1s ease-in-out` : `none`;
        track.style.transform = `translateX(-${activeSlide * 100}%)`
    }, [activeSlide, isTransf])

    const handleTransitionEnd = () => {
        setIsTransf(false);
        /*chạy đến phần tử cuối của đầu slide reset về cuối slide*/
        if (activeSlide == 0) {
            setActiveSlide(slides.length)
        }
        /*chạy đến phần tử đầu của cuối slide reset về đầu slide*/
        if (activeSlide == slides.length + 1) {
            setActiveSlide(1)
        }
    }

    const slides = [
        "https://firebasestorage.googleapis.com/v0/b/kusaedu-21fe6.appspot.com/o/bgwp.jpeg?alt=media&token=6b9d1f6d-83f3-42d6-ac05-8a0d794c3f2c",
        "https://firebasestorage.googleapis.com/v0/b/kusaedu-21fe6.appspot.com/o/bgwp2.jpg?alt=media&token=39abfc81-95dd-415a-8c9c-639f626faf89",
        "https://firebasestorage.googleapis.com/v0/b/kusaedu-21fe6.appspot.com/o/bgwp3.jpg?alt=media&token=2baed71b-7fbb-48b8-a219-5a15b3ece94c",
        "https://firebasestorage.googleapis.com/v0/b/kusaedu-21fe6.appspot.com/o/bgwp4.jfif?alt=media&token=0a9cb97f-5eb4-4956-acd0-97bcf81dc1b8"
    ]
    /* Tạo thêm phần tử đặt key = lengh + 1 nội dung là ảnh cuối ở trước phần gốc và tạo thêm phần tử cuối key = lengh + 2 nội dung là ảnh đầu đặt ở cuối mảng */

    /* */
    const preSlide = () => {
        if (isTransf) {
            return;
        }
        setIsTransf(true);
        setActiveSlide(activeSlide - 1)
    }
    const nextSlide = () => {
        if (isTransf) {
            return;
        }
        setIsTransf(true);
        setActiveSlide(activeSlide + 1)
    }
    const scrollToIndex = (indexNumber: number) => {
        if (isTransf) {
            return;
        }
        setIsTransf(true);
        setActiveSlide(indexNumber)
    }
    return (
        <section className="carouselContainer">
            <ul ref={slidesTrack} id="slideTrack" className="slidesTrack" onTransitionEnd={() => { handleTransitionEnd() }}>
                <li key={-1} className="slide">
                    <img src={slides[slides.length - 1]} alt="" />
                </li>
                {
                    slides.map((item, index) => (
                        <li key={index} className="slide">
                            <img src={item} alt="" />
                        </li>
                    ))
                }
                <li key={slides.length + 1} className="slide">
                    <img src={slides[0]} alt="" />
                </li>
            </ul>
            <section className="btnBox">
                <button onClick={() => { preSlide() }} className="slideBtn">
                    &lt;
                </button>
                <button onClick={() => { nextSlide() }} className="slideBtn">
                    &gt;
                </button>
            </section>
            <section className="slidePoints">
                {
                    slides.map((item, index) => (
                        <button value={item} key={index} className={activeSlide == index + 1 ? "slidePtBtn active" : "slidePtBtn"} onClick={() => {
                            ; scrollToIndex(index + 1)
                        }}
                        ></button>
                    ))
                }
            </section>
        </section>
    )
}
