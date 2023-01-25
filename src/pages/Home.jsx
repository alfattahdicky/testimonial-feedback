import Hero from "../components/core/Hero";
import Wrap from "../components/Wrap";
import Form from "../components/Form";
import useFormStore from "../store/formStore";
import ThankYou from "./ThankYou";
import Maintenance from "./Maintenance";

const Home = () => {
  const isSubmitted = useFormStore((state) => state.isSubmitted);
  const isSubmittedStorage = JSON.parse(localStorage.getItem("submit"));

  if (isSubmittedStorage || isSubmitted) {
    return <ThankYou />;
  }

  // if(!localStorage.getItem('submit')) {
  //   localStorage.setItem('submit', false);
  // }

  return (
    <Wrap>
      <Maintenance />
      {/* <Hero />
      <Form /> */}
    </Wrap>
  );
};

export default Home;
