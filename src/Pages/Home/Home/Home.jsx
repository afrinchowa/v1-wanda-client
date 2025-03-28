import SignIn from "../../Signin/Signin";
import Banner from "../Banner/Banner";
import BlogCards from "../BlogCards/BlogCards";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div className="bg-slate-200">
      <Banner />
  
      <Category />
      <BlogCards/>
    </div>
  );
};

export default Home;
