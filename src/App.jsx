import 'bootswatch/dist/slate/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/partials/Navbar";
import Home from "./Components/partials/Home";
import Albums from './components/Album/Albums'
import Posts from './components/post/Posts'
import Todos from './components/Todos/Todos'
import Users from './components/User/Users'
function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/albums" element={<Albums />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
