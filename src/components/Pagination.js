const PrevIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm8 15H11.85l5.58 5.573L16 24l-8-8l8-8l1.43 1.393L11.85 15H24Z"/>
    <path fill="none" d="m16 8l1.43 1.393L11.85 15H24v2H11.85l5.58 5.573L16 24l-8-8l8-8z"/>
  </svg>
);

const NextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <path fill="currentColor" d="M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16Zm6-1h12.15l-5.58-5.607L16 8l8 8l-8 8l-1.43-1.427L20.15 17H8Z"/>
    <path fill="none" d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8l-8-8z"/>
  </svg>
);

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li>
          <button 
            onClick={() => setCurrentPage((current) => Math.max(current - 1, 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <PrevIcon />
          </button>
        </li>
        <li>
          <button 
            onClick={() => setCurrentPage((current) => Math.min(current + 1, totalPages))}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <NextIcon />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
