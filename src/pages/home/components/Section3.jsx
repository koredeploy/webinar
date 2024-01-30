import BlueBtn from "../../../components/button/register-btn/BlueBtn";

const Section3 = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10  items-center py-10">
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-start">
          <h1 className="text-3xl font-bold ">Meet the Speaker</h1>
          <div className="w-full ">
          <p className=" leading-8 py-3 ">
            I am a seasoned business consultant and the driving force behind
            TechStudio Academy—a thriving tech education hub in Lagos, Nigeria.
            With a proven track record, our unique approach combines industry
            relevance with hands-on learning, fostering innovation.
          </p>
          <p className=" leading-8 py-3">
            At TechStudio Academy, our mission is clear: to empower individuals
            for success in the digital age. Under my leadership, our curriculum
            ensures students not only grasp fundamentals but gain practical
            insights, making them industry-ready from day one.
          </p>
          <p className="leading-8 py-3">
            My focus is on helping business and individuals attain the highest
            level of potential.
          </p>
          </div>
          <BlueBtn/>
        </div>
        <div className=" flex justify-center md:justify-end py-15">
          <img style={{border: "4px solid black", boxShadow: "10px 10px black", }}
            className="object-cover rounded-2xl  "
            src="https://res.cloudinary.com/doejcrfso/image/upload/v1706538784/webinar-project/people-practicing-social-integration-workspace_1_1_ts30q8.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
