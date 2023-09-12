import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import { PropTypes } from 'prop-types';

const Blogs = ({handleBookmark,handleReadTime}) => {
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('../../../public/blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])


    // console.log(blogs);
    return (
        <>
           <div className="w-2/3 mt-8">  
              {
                blogs.map(blog=> <Blog 
                    blog={blog}
                    key={blog.id}
                    handleBookmark = {handleBookmark}
                    handleReadTime = {handleReadTime}
                    ></Blog>)
              }
           </div>
        </>
    );
};
Blogs.propTypes ={
    handleReadTime:PropTypes.func,
    handleBookmark:PropTypes.func
}
export default Blogs;