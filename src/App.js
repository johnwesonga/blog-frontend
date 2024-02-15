import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Posts from './components/posts';
import Post from './components/post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;