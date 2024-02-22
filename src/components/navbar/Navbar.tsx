import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://dilfoods.in/wp-content/uploads/2023/04/Dil-Foods-new-logo.png" alt="Logo" />
        <span>Admin Panel</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="Search" className="icon" />
        <img src="app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="noavatar.png" alt="" />
          <span>Admin</span>
        </div>
        <img src="settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
