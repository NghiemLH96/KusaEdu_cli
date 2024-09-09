import "./carousel.scss"
import { Carousel } from 'antd'

export default function Cars() {
      const slides = [
        {
            src:"https://firebasestorage.googleapis.com/v0/b/kusaedu-21fe6.appspot.com/o/bgwp.jpeg?alt=media&token=6b9d1f6d-83f3-42d6-ac05-8a0d794c3f2c",
            title:"Học Tiếng Nhật Hiệu Quả, Mở Cánh Cửa Tương Lai",
            content:"Tài liệu học tập chất lượng và sách Nhật Bản từ cơ bản đến nâng cao.",
            btnContent:"Tìm Hiểu Thêm",
            link:"....",
        },
        {
            src:"https://firebasestorage.googleapis.com/v0/b/kusaedu-21fe6.appspot.com/o/bgwp2.jpg?alt=media&token=39abfc81-95dd-415a-8c9c-639f626faf89",
            title:"Chinh Phục JLPT - Từ N5 Đến N1",
            content:"Bí quyết vượt qua kỳ thi JLPT với giáo trình chuẩn và chiến lược hiệu quả.",
            btnContent:"Đăng Ký Ngay",
            link:"....",
        }
        ,
        {
            src:"https://firebasestorage.googleapis.com/v0/b/kusaedu-21fe6.appspot.com/o/bgwp3.jpg?alt=media&token=2baed71b-7fbb-48b8-a219-5a15b3ece94c",
            title:"Hành Trình Chinh Phục Tiếng Nhật",
            content:"Cùng chúng tôi học tập thông minh với tài liệu hiện đại và phương pháp hiệu quả.",
            btnContent:"Bắt Đầu Học Ngay",
            link:"....",
        }
        ,
        {
            src:"https://firebasestorage.googleapis.com/v0/b/kusaedu-21fe6.appspot.com/o/bgwp4.jfif?alt=media&token=0a9cb97f-5eb4-4956-acd0-97bcf81dc1b8",
            title:"Sách Tiếng Nhật - Khám Phá Văn Hóa & Tri Thức",
            content:"Thư viện phong phú từ tiểu thuyết đến giáo trình học tập, tất cả đều bằng tiếng Nhật.",
            btnContent:"Mua Ngay",
            link:"....",  
        }
    ]
    return (
        <div className='carousel__container'>
            <Carousel arrows infinite={true} autoplay autoplaySpeed={5000} >
                {
                    slides.map((item,index)=>(
                        <div key={index} className="carousel__slide">
                            <div className="carousel__contentBox left">
                                <h3 className="carousel__title">{item.title}</h3>
                                <hr />
                                <p className="carousel__content">{item.content}</p>
                                <button className="navBtn">{item.btnContent}</button>
                            </div>
                            <img src={item.src} alt="loading failse" />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}
