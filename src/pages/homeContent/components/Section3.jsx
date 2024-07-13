import BlueBtn from "../../../components/button/register-btn/BlueBtn";

// eslint-disable-next-line react/prop-types
const Section3 = ({setOpen}) => {
  return (
    <div style={{maxWidth: "1600px ", margin: "auto"}}>
          <div  className="w-11/12 mx-auto" id="speaker">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10  items-center py-14">
        <div className="flex flex-col items-center lg:items-start gap-2 text-center lg:text-start">
          <h1 className="text-3xl xl:text-4xl font-bold leading-10 ">Meet the Speaker</h1>
          <div className="w-full pb-4 xl:pb-0 ">
          <p className=" leading-7 lg:text-xl xl:text-2xl md:leading-10 lg:leading-9 xl:leading-10 lg:py-0 xl:py-1  ">
            I am a seasoned business consultant and the driving force behind
            TechStudio Academy—a thriving tech education hub in Lagos, Nigeria.
            With a proven track record, our unique approach combines industry
            relevance with hands-on learning, fostering innovation.
          </p>
          <p className=" leading-7 lg:text-xl xl:text-2xl md:leading-10 lg:leading-9 xl:leading-10 lg:py-0 xl:py-1">
            At TechStudio Academy, our mission is clear: to empower individuals
            for success in the digital age. Under my leadership, our curriculum
            ensures students not only grasp fundamentals but gain practical
            insights, making them industry-ready from day one.
          </p>
          <p className=" leading-7 lg:text-xl xl:text-2xl md:leading-10 lg:leading-9 xl:leading-10 lg:py-0 xl:py-1 ">
            My focus is on helping business and individuals attain the highest
            level of potential.
          </p>
          </div>
          <BlueBtn setOpen={setOpen} />
        </div>
        <div className=" flex justify-center lg:justify-end py-15">
          <img style={{border: "4px solid black", boxShadow: "10px 10px black", }}
            className="object-cover rounded-2xl w-full  "
            src="https://res.cloudinary.com/doejcrfso/image/upload/v1706538784/webinar-project/people-practicing-social-integration-workspace_1_1_ts30q8.png"
            alt=""
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Section3;
