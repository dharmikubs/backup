import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import MainRouter from "./Router/MainRouter";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={MainRouter} />
)
