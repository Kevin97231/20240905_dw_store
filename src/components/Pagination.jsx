/* eslint-disable react/prop-types */
import { PaginationButton } from "./PaginationButton";

export const Pagination = ({ nbrButton = 0, handleClick }) => {
  const numbers = Array.from({ length: nbrButton }, (_, index) => index + 1);

  return (
    <>
      <div className="bg-white join">
        {numbers.map((number) => (
          <PaginationButton
            key={number}
            number={number}
            handleClick={handleClick}
          />
        ))}
      </div>
    </>
  );
};
