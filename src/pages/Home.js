import React from "react";
// import SignupForm from "../components/SignupForm/SignupForm";
import SignupFormRe from "../components/SignupFormRe/SignupFormRe";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* <SignupForm /> */}
      <SignupFormRe />
    </div>
  );
};

export default Home;
