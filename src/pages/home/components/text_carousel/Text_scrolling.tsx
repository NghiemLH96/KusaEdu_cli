import "./text_scrolling.scss"

export default function Text_scrolling() {
    let scrollingTexts = [
        {
            id:1,
            content:"Khám phá hành trình học tiếng Nhật với lộ trình từ N5 đến N1, cùng tài liệu chất lượng và giáo viên giàu kinh nghiệm.",
            link:"...."
        },
        {
            id:2,
            content:"Cải thiện khả năng nghe nói tiếng Nhật với các khóa học giao tiếp từ cơ bản đến nâng cao.",
            link:"...."
        },
        {
            id:3,
            content:"Khám phá các đầu sách học tập và văn học Nhật Bản với giá ưu đãi. Đừng bỏ lỡ!",
            link:"...."
        }
    ]
  return (
    <div className="textCarousel__container">
        <ul className="textList_container">
            {
                scrollingTexts.map((item,index)=>(
                    <li className="scrollingText" key={index}><a href="">{item.content}</a></li>
                ))
            }
        </ul>
        <ul className="textList_container">
            {
                scrollingTexts.map((item,index)=>(
                    <li className="scrollingText" key={index}><a href="">{item.content}</a></li>
                ))
            }
        </ul>
    </div>
  )
}
