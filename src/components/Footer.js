import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2022 Copyright:
        <a className="text-dark" href="/">
          oHBoY
        </a>
      </div>
    </footer>
  );
}

export default Footer;
