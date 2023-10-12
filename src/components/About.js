import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about container">
      <h1 className="about-heading">ProFood</h1>
      <p className="about-para">
        This is a food App created by Ashish Tomar.It has some awesome features
        like search, filter where u can find easily your favourite restraunts which offer
        some delicous cusines.
      </p>
      <UserClass  name={"Ashish Tomar"} location={"Ghaziabad"}/>
    </div>
  );
};

export default About;