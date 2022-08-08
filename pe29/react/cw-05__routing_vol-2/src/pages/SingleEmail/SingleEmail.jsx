import React from "react";
import "./SingleEmail.scss";

const SingleEmail = ({ self }) => {
  return (
    <>
      <button>back</button>
      <section className="single-email">
        <h2 className={"single-email__subject"}>Subject</h2>
        <p className={"single-email__info"}>from</p>
        <p className={"single-email__info"}>to</p>
        <p className="single-email__text">text</p>
      </section>
    </>
  );
};

export default SingleEmail;
