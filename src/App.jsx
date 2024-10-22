import "./App.css"
import { TodoList } from "./components/Todos/TodoList"
import { ShopList } from "./components/Shops/ShopList"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/nav/NavBar"

export const App = () => {
  
  return (
    <Routes>
      <Route path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
        >
      <Route path="todos" element={<TodoList />} />
      <Route path="shops" element={<ShopList />} />
      </Route>
    </Routes>
  )
  
  
}