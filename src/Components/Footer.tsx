// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/chetannada/"
        target="_blank"
        title="Chetan Nada's Linkedin Profile"
      >
        Gautam singh
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <a
        href="https://github.com/angautamg/Namaste-React"
        target="_blank"
        title="Z-Food  Github Repository"
      >
        <strong>
          Z-<span>Food</span>
        </strong>
      </a>
    </div>
  );
};

export default Footer;
