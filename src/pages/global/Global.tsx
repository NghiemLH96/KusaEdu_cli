import { Outlet } from "react-router-dom";
import Footer from "../global/footer/Footer";
import Header from "../global/header/Header";
import "./global.scss"

export default function Global() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}
