import React from "react";

function Footer() {
  return (
    <footer className="footer footer-center bg-gray-900 text-base-content p-4">
      <aside>
        <p>
          Copyright © ${new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
