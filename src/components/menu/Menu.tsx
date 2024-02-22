import { Link } from "react-router-dom";
import "./menu.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
  const [menu, setMenu] = useState([
    {
      id: 0,
      title: "",
      listItems: [{ id: 0, title: "", url: "", icon: "" }],
    },
  ]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get("https://dilfoods.onrender.com/menu")
        .then((response) => {
          setMenu(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
