import Agents from "./Agents";
import video from "../Assets/Videos/agent-bg.mp4";
import Logo from '../Assets/Images/valorant-logo.svg'
const Home = () => {
  return (
    <div className="agentsContainer">
      <video autoPlay loop muted src={video} type="video/mp4" />
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <Agents />
    </div>
  );
};

export default Home;
