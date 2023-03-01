const Footer = () => {
  return (
    <footer className="text-white py-8 backdrop-blur">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <p className="text-sm mb-2 lg:mb-0">
          © 2023 ForestBot.org. All rights reserved.
        </p>
        <ul className="flex flex-wrap justify-center lg:justify-end space-x-4 text-sm">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
