import React from "react";
 
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function Pagination({ meta, changePage }) {
  const count = 20;
  const { totalItems, pageNumber } = meta;

  const pages = [];
  let page = Number(pageNumber);
  let last = Math.floor(totalItems / count);

  if (page > 1) pages.push(page - 1);
  pages.push(page);
  if (page < last - 2) pages.push(page + 1);
  if (page < last - 1) pages.push(last - 1);
  if (page < last) pages.push(last);

  if (page <= 3) {
    pages.push(1)
  }

  function pageNums(pages) {
    return pages.map((item) => {
      let className = "";
      if (item === pageNumber) {
        className = "active-page";
      }
      return (
        <button
          key={item}
          className={className}
          onClick={() => changePage(item)}>
          {item}
        </button>
      );
    });
  }
  if (pageNumber) {
    return <div className='pagination'>{pageNums(pages)}</div>;
  } else {
    return <LoadingSpinner />;
  }
}

export default Pagination;
