import { useState } from "react"
import "./header.scss"

export default function Header() {
    const [activeSM, setActiveSM] = useState(0)

    return (
        <header>
            <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/kusaedu-21fe6.appspot.com/o/%E8%8D%89__2_-removebg-preview.png?alt=media&token=1d079402-f905-43f7-bab4-a7779f49b644" alt="" />
            <nav>
                <ul className="linkList">
                    <li className={activeSM == 1 ? "linkItem active" : "linkItem"} onClick={() => { activeSM == 1 ? setActiveSM(0) : setActiveSM(1) }}>
                        <span className={activeSM == 1 ? "linkItem__line active" : "linkItem__line"}></span>
                        Khoá Học JLPT
                        <div className={activeSM == 1 ? "subMenu active" : "subMenu"}>
                            <ul className="subMenu__container">
                                <li className="subMenu__item">Khoá học N1</li>
                                <li className="subMenu__item">Khoá học N2</li>
                                <li className="subMenu__item">Khoá học N3</li>
                                <li className="subMenu__item">Khoá học N4</li>
                                <li className="subMenu__item">Khoá học N5</li>
                                <li className="subMenu__item">Khoá học EJU</li>
                            </ul>
                        </div>
                    </li>
                    <hr />
                    <li className={activeSM == 2 ? "linkItem active" : "linkItem"} onClick={() => { activeSM == 2 ? setActiveSM(0) : setActiveSM(2) }}>
                        <span className={activeSM == 2 ? "linkItem__line active" : "linkItem__line"}></span>
                        Tài liệu
                        <div className={activeSM == 2 ? "subMenu active" : "subMenu"}>
                            <ul className="subMenu__container">
                                <li className="subMenu__item">N1</li>
                                <li className="subMenu__item">N2</li>
                                <li className="subMenu__item">N3</li>
                                <li className="subMenu__item">N4</li>
                                <li className="subMenu__item">N5</li>
                                <li className="subMenu__item">EJU</li>
                            </ul>
                        </div>
                    </li>
                    <hr />
                    <li className={activeSM == 3 ? "linkItem active" : "linkItem"} onClick={() => { activeSM == 3 ? setActiveSM(0) : setActiveSM(3) }}>
                        <span className={activeSM == 3 ? "linkItem__line active" : "linkItem__line"}></span>
                        Thi Thử
                        <div className={activeSM == 3 ? "subMenu active" : "subMenu"}>
                            <ul className="subMenu__container">
                                <li className="subMenu__item">N1 試験</li>
                                <li className="subMenu__item">N2 試験</li>
                                <li className="subMenu__item">N3 試験</li>
                                <li className="subMenu__item">N4 試験</li>
                                <li className="subMenu__item">N5 試験</li>
                                <li className="subMenu__item">EJU 試験</li>
                            </ul>
                        </div>
                    </li>
                    <hr />
                    <li className="linkItem">
                        <span className="linkItem__line"></span>
                        Kusa
                    </li>
                </ul>
            </nav>
        </header>
    )
}
