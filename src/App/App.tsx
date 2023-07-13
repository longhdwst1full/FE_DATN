import { useState } from 'react'
import { Button, Space, Typography } from 'antd'
const { Title } = Typography
import './App.css'
import Home from './pages/home'
import Collections from './pages/collections'
import ProductDetail from './pages/productDetail'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Dashboard from './pages/admin/dashboard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div></div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      <Title level={2}>Install & Setup Vite + React + Typescript + MUI 5</Title>
      <Space wrap>
        <Button type='primary'>Primary Button</Button>
        <Button>Default Button</Button>
        <Button type='dashed'>Dashed Button</Button>
        <Button type='text'>Text Button</Button>
        <Button type='link'>Link Button</Button>
      </Space> */}
      

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={ <Collections/>} />
            <Route path='/productsDetail' element={ <ProductDetail/>} />


            <Route path='/admin' element={ <Dashboard/>} />
              
          </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
