export const Titre = ({ children }) => {
  return (
    <div className="w-full">
      <div className="font-semibold border-b border-[#021431] my-5 inline-block flex-grow-1 text-xl">
        {children}
      </div>
    </div>
  );
};
