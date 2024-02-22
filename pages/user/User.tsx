import Single from "../../src/components/single/Single";
import { singleUser } from "../../src/data";
import "./user.scss";

const User = () => {
  return (
    <div>
      <Single {...singleUser}/>
    </div>
  );
};

export default User;
