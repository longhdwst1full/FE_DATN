import { useState } from 'react'
import { Button, Space, Typography } from 'antd'
const { Title } = Typography
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div></div>
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
      </Space>
    </>
  )
}

export default App
