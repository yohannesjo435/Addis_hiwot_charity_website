import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import GalleryPage from "./Components/GalleryPage/GalleryPage"
import "./Components/GalleryPage/GalleryPage.css"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
   {
    path: "/gallery",
    element: <GalleryPage></GalleryPage>
  }
], {basename: "/Addis_hiwot_charity_website/"})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>,
)
