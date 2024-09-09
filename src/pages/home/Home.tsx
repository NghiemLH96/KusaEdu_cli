import Cars from "./components/carousel/Carousel";
import Text_scrolling from "./components/text_carousel/Text_scrolling";
import home_section2 from "../../assets/icons/home_section2.webp"
import mimikaraN3 from "../../assets/icons/mimikara_n3.jpg"
import JLPTcompN3 from "../../assets/icons/JLPTcompN3.jpg"
import choukaiN1 from "../../assets/icons/choukaiN1.jpeg"
import bunpoN2 from "../../assets/icons/bunpoN2.jpeg"
import kanjiN2 from "../../assets/icons/kanjiN2.jpeg"
import JLPTN2 from "../../assets/icons/JLPTN2.webp"

import './home.scss'
export default function Home() {
  return (
    <>
      <div className="home__container">
        <Cars />
        <Text_scrolling />
        <div className="content__container">
          <section className="content__box section1">
            <iframe src="https://www.youtube.com/embed/WLIv7HnZ_fE?si=0B4V2MBpRSerSYkD"></iframe>
            <div className="content__struct">
              <h3 className="content__title">Tìm hiểu sâu sắc văn hoá Nhật Bản</h3>
              <p className="content__phrase">
                Một Hành Trình Đưa Bạn Từ Những Giá Trị Tinh Thần Nghìn Năm Được Bảo Tồn Qua Truyền Thống Cổ Xưa, Đến Sự Sáng Tạo Không Ngừng Của Một Nền Văn Hóa Đã Góp Phần Định Hình Nền Văn Minh Thế Giới Hiện Đại.
              </p>
              <button className="navBtn">Tìm hiểu thêm</button>
            </div>
          </section>
          <img className="bannerImg" src="https://firebasestorage.googleapis.com/v0/b/kusaedu-21fe6.appspot.com/o/man-practicing-japanese-handwriting-with-brush-ink.jpg?alt=media&token=c00637da-d234-4bae-aa1d-5c3ea1944ac5" alt="" />
          <section className="content__box section2">
            <div className="content__struct">
              <h3 className="content__title">Luyện thi JLPT</h3>
              <p className="content__phrase">
                Khóa Học Giúp Bạn Đạt Được Tự Tin Vượt Qua Mọi Cấp Độ Tiếng Nhật, Từ N5 Đến N1, Với Phương Pháp Học Hiệu Quả Và Lộ Trình Rõ Ràng. Cam Kết Giúp Bạn Tiến Bộ Từng Ngày Và Hoàn Thành Mục Tiêu Chinh Phục Tiếng Nhật. Vượt Qua Từng Mức Độ JLPT Với Lộ Trình Chi Tiết Và Sự Hỗ Trợ Toàn Diện.
              </p>
              <div className="content__btnBox">
                <button className="navBtn section2">N1</button>
                <button className="navBtn section2">N2</button>
                <button className="navBtn section2">N3</button>
                <button className="navBtn section2">N4</button>
                <button className="navBtn section2">N5</button>
              </div>
            </div>
            <img src={home_section2} alt="" />
          </section>
          <img className="bannerImg" src="https://firebasestorage.googleapis.com/v0/b/kusaedu-21fe6.appspot.com/o/beautiful-smart-asian-young-entrepreneur-business-woman-owner-sme-checking-product.jpg?alt=media&token=0765c2e9-8b3e-4a85-9cf5-a45d56b4db78" alt="" />
          <section className="content__box section3">
            <div className="content__imgBox">
              <div className="content__bookDetail">
                <img src={mimikaraN3} alt="loading false" />
                <span>Mimikara</span>
              </div>
              <div className="content__bookDetail">
                <img src={JLPTcompN3} alt="loading false" />
                <span>Mimikara</span>
              </div>
              <div className="content__bookDetail">
                <img src={choukaiN1} alt="loading false" />
                <span>Mimikara</span>
              </div>
              <div className="content__bookDetail">
                <img src={bunpoN2} alt="loading false" />
                <span>Mimikara</span>
              </div>
              <div className="content__bookDetail">
                <img src={kanjiN2} alt="loading false" />
                <span>Mimikara</span>
              </div>
              <div className="content__bookDetail">
                <img src={JLPTN2} alt="loading false" />
                <span>Mimikara</span>
              </div>
            </div>
            <div className="content__struct">
              <h3 className="content__title">Sách Tiếng Nhật</h3>
              <p className="content__phrase">Thành Thạo Tiếng Nhật Và Vượt Qua JLPT Với Bộ Sách Luyện Thi Được Chọn Lọc - Giúp Bạn Tiếp Cận Phương Pháp Học Tập Hiệu Quả, Tiết Kiệm Thời Gian Mà Vẫn Đạt Điểm Cao.</p>
              <div className="content__btnBox">
                <button className="navBtn section3">Sơ cấp</button>
                <button className="navBtn section3">Trung cấp</button>
                <button className="navBtn section3">Cao cấp</button>
              </div>
            </div>
          </section>
          <img className="bannerImg" src="https://firebasestorage.googleapis.com/v0/b/kusaedu-21fe6.appspot.com/o/working-homeasian-male-adult-laptop-check-analysing-business-data-chart-sofa-couch-home-home-isolate-quarantine-ideaswork-remote-concept_609648-408.jpg?alt=media&token=e93bea1b-d229-42e0-9654-fba6a9f073f2" alt="" />
        </div>
      </div>
    </>
  )
}
