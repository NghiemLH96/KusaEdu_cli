import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Global from '../pages/global/Global'

export default function MainRoute() {
  return (
    <Routes>
        <Route path='/' element={<Global/>}>
            <Route path='' element={<Home/>}></Route>
        </Route>
    </Routes>
  )
}
