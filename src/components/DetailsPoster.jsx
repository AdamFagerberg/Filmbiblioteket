const DetailsPoster = ({ imgSrc, title }) => {
  return (
    <div className="rounded-md w-80 border-8 border-white">
      {imgSrc ? (
        <img
          src={`https://image.tmdb.org/t/p/original/${imgSrc}`}
          alt={title}
          className="rounded-sm"
        />
      ) : (
        <div className="h-[500px] w-[300px] bg-gray-900 rounded-md"></div>
      )}
    </div>
  );
};

export default DetailsPoster;
