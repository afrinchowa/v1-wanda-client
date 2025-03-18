import SignIn from "../../Signin/Signin";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <SignIn />
    </div>
  );
};

export default Home;
