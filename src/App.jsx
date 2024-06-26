import React, { useState, useEffect } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import downloadImage from './image/tmp-lalamove-partnership.png';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentDate, setCurrentDate] = useState('');

  const maxPages = 57;
  const displayPages = 14;

  useEffect(() => {
    const date = new Date('2023-01-05');
    const formattedDate = formatDate(date);
    setCurrentDate(formattedDate);
  }, []);

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });

    return { day, month };
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    const ellipsis = <span className="ellipsis">...</span>;
    const totalPages = maxPages;

    let start = Math.max(1, currentPage - Math.floor(displayPages / 2));
    let end = Math.min(totalPages, start + displayPages - 1);

    if (end - start + 1 < displayPages) {
      start = Math.max(1, end - displayPages + 1);
    }

    if (currentPage > 1) {
      pages.push(
        <a
          key="prev"
          href="#"
          className="page-link"
          onClick={() => goToPage(currentPage - 1)}
        >
          &laquo;
        </a>
      );
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <a
          key={i}
          href="#"
          className={i === currentPage ? 'page-link active' : 'page-link'}
          onClick={() => goToPage(i)}
        >
          {i}
        </a>
      );
    }

    if (start > 1) {
      pages.splice(1, 0, ellipsis);
    }

    if (end < totalPages) {
      pages.push(ellipsis);
      pages.push(
        <a
          key="last"
          href="#"
          className="page-link"
          onClick={() => goToPage(totalPages)}
        >
          {totalPages}
        </a>
      );
    }

    if (currentPage < totalPages) {
      pages.push(
        <a
          key="next"
          href="#"
          className="page-link"
          onClick={() => goToPage(currentPage + 1)}
        >
          &raquo;
        </a>
      );
    }

    return pages;
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={downloadImage} alt="Download" />
        <div className="share-icon">
          <FaShareAlt /> share
        </div>
        <div className="date">
          <span className="day">{currentDate.day}</span>
          <span className="month">{currentDate.month}</span>
        </div>
      </div>
      <p
        style={{
          color: 'red',
          textAlign: 'left',
          fontWeight: 'bold',
          fontSize: '14px',
        }}
      >
        Darwin Tumaneng
      </p>
      <h3>Toyota Motor Philippines partners with Lalamove Automotive</h3>

      <p style={{ fontSize: '14px' }}>
        Leading mobility company Toyota Motor Philippines (TMP) has partnered
        with leading logistics provider Lalamove through its auto brand,
        Lalamove Automotive, with the introduction of the commercial vehicle
        Toyota Lite Ace as a transport partner. Aspiring and existing Lalamove
        operators are now able to purchase the Lite Ace Panel Van variant
        through this partnership, under Lalamove Automotive's Vehicle Ownership
        Program.
      </p>

      <button
        style={{
          textDecoration: 'underline',
          fontSize: '12px',
          fontWeight: 'bold',
        }}
      >
        READ ARTICLE
      </button>
      <br />
      <div className="pagination">{renderPagination()}</div>
    </div>
  );
}

export default App;
