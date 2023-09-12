import PropTypes from 'prop-types'
const Bookmarks = ({bookmarks,readTime}) => {
    // console.log(bookmarks);
  return (
    <div className="w-1/3 mt-8 ml-4 border p-5 rounded-xl">
      <div className="border rounded-lg bg-neutral-50 p-3">
        <p className="text-[#6047EC]">
          <span>Spent time on read: {readTime} </span>min
        </p>
      </div>
      <div className="border bg-gray-100 my-5 rounded-lg">
        <h2 className="text-2xl font-bold p-4">Bookmarksed Blogs:{bookmarks.length} </h2>
        <div >
           {
            bookmarks.map((bookmark,indx) => <p className='bg-slate-300 mb-2 mx-3 border rounded-lg p-4'  key={indx}>{bookmark.title}</p>)
           }
        </div>
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
    bookmarks:PropTypes.array.isRequired,
    readTime:PropTypes.number
}
export default Bookmarks;
