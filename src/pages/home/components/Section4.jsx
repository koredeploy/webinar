import React from "react";
import video from "../../../assets/images/Frame 1000002414.png";

const Section4 = () => {
  return (
    <div
      id="video"
      style={{ backgroundColor: "#171718" }}
      className=" px-10 py-10 "
    >
      <div style={{ maxWidth: "1600px", margin: "auto" }}>
        <div className=" flex flex-col items-center justify-center gap-4 text-center  text-white w-11/12  mx-auto">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl leading-9">
            My Special Invitation to you{" "}
          </h1>
          <p className=" leading-7 md:leading-10 xl:leading-8 lg:text-xl xl:text-2xl">
            Join Dr. Emily Johnson for an Exclusive Session on [Key Topic].
            Don&apos;t miss this opportunity to gain actionable knowledge,{" "}
          </p>
        </div>
        <div className="pt-10 flex justify-center items-center">
          <iframe
            src="https://www.youtube.com/embed/uXWycyeTeCs"
            width={900}
            height={400}
          ></iframe>
          {/* <img src="https://res.cloudinary.com/doejcrfso/image/upload/v1706607321/webinar-project/Frame_1000002414_pjj5hm.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Section4;
