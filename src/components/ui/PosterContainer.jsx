const PosterContainer = ({ children }) => {
  return (
    <ul className="flex flex-row overflow-x-auto no-scrollbar">{children}</ul>
  );
};

export default PosterContainer;
