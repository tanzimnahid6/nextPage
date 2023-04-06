import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Book from './components/Book';
import About from './components/About';
import BookDetails from './components/BookDetails';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'book',
        element:<Book></Book>,
        loader:()=>fetch('https://api.itbook.store/1.0/new')
      },
      {
        path:'details/:bookId',
        element:<BookDetails></BookDetails>,
        loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)

      },
      {
        path:'about',
        element:<About></About>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
