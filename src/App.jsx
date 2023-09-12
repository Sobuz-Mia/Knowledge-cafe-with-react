
import { useState } from 'react';
import './App.css'
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header';

function App() {

  const [bookmarks,setBookmarks] = useState([]);
  const [readTime,setreadTime] = useState(0);

  const handleBookmark = (blog) =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  const handleReadTime = (time) =>{
    const totalTime = readTime + time;
    setreadTime(totalTime);
  }
  return (
    <>
      <div>
        <Header></Header>
        <div className='flex'>
          <Blogs handleBookmark = {handleBookmark} handleReadTime ={handleReadTime}></Blogs>
          <Bookmarks bookmarks = {bookmarks} readTime = {readTime}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
