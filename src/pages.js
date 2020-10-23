import React, { useState } from 'react';

export default function Pages({ totalIcons, paginate }) {
  const pageNumbers = [];
  const [active, setActive] = useState(1);

  for (let i = 1; i <= Math.ceil(totalIcons / 20); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="links">
        {pageNumbers.map((el) => (
          <div
            key={el}
            onClick={() => {
              paginate(el - 1);
              setActive(el);
            }}
            className={active === el ? 'circle active' : 'circle'}
          >
            
          </div>
        ))}
      </div>
    </>
  );
}
