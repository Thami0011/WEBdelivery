import "tailwindcss/tailwind.css";
import Carouselmoe from "../Components/Carouselmoe";
import HomeMiddleTop from "../Components/HomeMiddle/HomeMiddleTop";
import Aboutus from "../Components/Aboutus";

const Home = () => {
  return (
    <>
      <Carouselmoe>
        <img src="src/assets/1.jpg" />
        <img src="src/assets/2.jpg" />
        <img src="src/assets/3.jpg" />
       
      </Carouselmoe>
      <Aboutus />
      <HomeMiddleTop />
    </>
  );
};

export default Home;
