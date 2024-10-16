const PosterContainer = ({ children }) => {
  return (
    <div className="flex flexrow overflow-x-scroll no-scrollbar">
      {children}
    </div>
  );
};

export default PosterContainer;
