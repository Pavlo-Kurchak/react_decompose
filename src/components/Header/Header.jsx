import './Header.css';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="header__title">Site Name</h1>
      </header>
      <Navigation />
    </>
  );
};

export default Header;
