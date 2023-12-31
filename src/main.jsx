import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'
import Produtos from './Produtos.jsx'
import Sobre from './Sobre.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    children:[
      {path:'/', element:<Home />},
      {path:'/Produtos', element:<Produtos/>},
      {path:'/Sobre', element:<Sobre/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
