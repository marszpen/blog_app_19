import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Post from "./components/pages/Post/Post";
import Add from "./components/pages/Add/Add";
import Edit from "./components/pages/Edit/Edit";
import About from "./components/pages/About/About";
import NotFound from "./components/pages/NotFound/NotFound";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/post/add" element={<Add />} />
      <Route path="/postedit/edit/:id" element={<Edit />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
