import { useState } from "react"
import "./header.scss"
import { Button, Dropdown, MenuProps, Space } from "antd"

export default function Header() {
    const [activeSM, setActiveSM] = useState(0)
    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item
            </a>
          ),
        },
      ];

    return (
        <header>
            <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/kusaedu-21fe6.appspot.com/o/%E8%8D%89__2_-removebg-preview.png?alt=media&token=1d079402-f905-43f7-bab4-a7779f49b644" alt="" />
            <nav>
                <ul className="linkList">
                    <li className={activeSM == 1 ? "linkItem active" : "linkItem"} onClick={() => { activeSM == 1 ? setActiveSM(0) : setActiveSM(1) }}>
                        <span className={activeSM == 1 ? "linkItem__line active" : "linkItem__line"}></span>
                        JLPT
                        <div className={activeSM == 1 ? "subMenu active" : "subMenu"}>
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
                    <li className={activeSM == 2 ? "linkItem active" : "linkItem"} onClick={() => { activeSM == 2 ? setActiveSM(0) : setActiveSM(2) }}>
                        <span className={activeSM == 2 ? "linkItem__line active" : "linkItem__line"}></span>
                        教材
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
                    <li className={activeSM == 3 ? "linkItem active" : "linkItem"} onClick={() => { activeSM == 3 ? setActiveSM(0) : setActiveSM(3) }}>
                        <span className={activeSM == 3 ? "linkItem__line active" : "linkItem__line"}></span>
                        試験
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
                    <li className="linkItem">
                        <span className="linkItem__line"></span>
                        Kusa
                    </li>
                </ul>
            </nav>
        </header>
    )
}
