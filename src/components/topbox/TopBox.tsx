import { useEffect, useState } from "react";
import "./topbox.scss";
import axios from "axios";

const TopBox = () => {
  const [topDealUsers, setTopDealUsers] = useState([
    { id: 0, img: "", username: "", email: "", amount: "" },
  ]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get("https://dilfoods.onrender.com/topDealUsers")
        .then((response) => {
          setTopDealUsers(response.data);
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
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="User" />
              <div className="userDetails">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">&#8377; {user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
