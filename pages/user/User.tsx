import { useEffect, useState } from "react";
import Single from "../../src/components/single/Single";
import "./user.scss";
import axios from "axios";

const User = () => {
  const [singleUser, setSingleUser] = useState({ id: 0, title: "", info: {} });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get("https://dilfoods.onrender.com/singleUser")
        .then((response) => {
          setSingleUser(response.data);
        })
        .catch((error) => {
          console.log({ error });
        });
      setLoading(false);
    } catch (error) {
      console.log({ error });
    }
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Single {...singleUser} />
    </div>
  );
};

export default User;
