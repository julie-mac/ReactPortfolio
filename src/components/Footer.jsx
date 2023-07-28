import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="https://github.com/julie-mac" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github">Github</i>
        </a>
        <a href="https://www.linkedin.com/in/julie-macpherson-109a30279/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin">LinkedIn</i>
        </a>
        <a href="https://twitter.com/julielearnscode" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter">Twitter</i>
        </a>
      </div>
      <br></br>
      <p>&copy; {new Date().getFullYear()} Julie Macpherson. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
