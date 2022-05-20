import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { Howl } from "howler";

import { Tooltip, Modal, Button, Image } from "@nextui-org/react";

import { getAgents } from "../Helpers/ValorantApi";
import Loading from "./Loading";
import Fejl from "./Fejl";

import BG from '../Assets/Images/background.png'

const Agents = () => {
  const [agents, setAgents] = useState();

  const [loading, setLoading] = useState(false);
  const [fejl, setFejl] = useState(false);

  const [visible, setVisible] = useState(false);

  const [modalstate, setModalstate] = useState();

  //document.querySelector('.agentHeading__banner').style.backgroundImage = BG;

  const handler = (image) => {
    setModalstate(image);
    setVisible(true);
  };

  const closeHandler = () => {
    setVisible(false);
    console.log("lukket");
  };

  useEffect(() => {
    //SetTimeout for at se loading skeleton
    setLoading(true);

    setTimeout(() => {
      async function getAgentsData() {
        try {
          let agentsData = await getAgents(agents);
          setAgents(agentsData);
          console.log("Agents data modtaget!", agentsData);
        } catch (error) {
          console.log("Kan ikke hente data!", error);
          setFejl(true);
        } finally {
          setLoading(false);
        }
      }
      getAgentsData();
    }, 2000);
  }, []);

  return (
    <>
      {agents && (
        <Swiper
          modules={[Pagination, Mousewheel]}
          pagination={{ clickable: true }}
          direction={"vertical"}
          mousewheel={true}
          spaceBetween={20}
          className="mySwiper"
        >
          <div>
            {agents.data
              .filter((agent) => {
                return (
                  /* (agent.background !== null) & */
                  (agent.isPlayableCharacter == true)
                );
              })
              .map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="agentContainer">
                    <div className="agentHeading">
                      <div className="agentHeading__name">
                        <h1>{item.displayName}</h1>
                      </div>
                      <div className="agentHeading__banner">
                        <img src={item.background} alt="" />
                      </div>
                    </div>

                    <div className="agentBody">
                      <img src={item.fullPortraitV2} alt="" />
                    </div>

                    <div className="agentDetails">
                      <div className="details">
                        <div className="agentDetails__role">
                          <h4>// Role</h4>
                          <div className="agentDetails__role--container">
                            <h1>{item.role.displayName}</h1>
                            <img src={item.role.displayIcon} alt="" />
                          </div>
                        </div>
                        <div className="agentDetails__bio">
                          <h4>// Biography</h4>
                          <p>{item.description}</p>
                        </div>
                        <div className="agentDetails__abilities">
                          <h4>// Abilities</h4>
                          <div className="abilities">
                            {item &&
                              item.abilities
                                .slice(0, 4)
                                .map((ability, index) => (
                                  <div
                                    className="agentDetails__abilities--container"
                                    key={index}
                                  >
                                    <div className="a-b-icon">
                                      <Tooltip content={ability.description}>
                                        <img src={ability.displayIcon} />
                                      </Tooltip>
                                    </div>
                                    <h6>{ability.displayName}</h6>
                                  </div>
                                ))}
                          </div>
                          <p>Hover on icons to read more...</p>
                        </div>
                        <div className="inGame">
                          <h4>// Game</h4>
                          <div className="inGame-Con">
                            <div className="model">
                              <h6>Game Models</h6>
                              <div className="model-btns">
                                <Button
                                  auto
                                  flat
                                  color="gray800"
                                  onClick={() => handler(item.bustPortrait)}
                                >
                                  Bust Portrait
                                </Button>
                                <Button
                                  auto
                                  flat
                                  color="gray800"
                                  onClick={() => handler(item.fullPortrait)}
                                >
                                  Full Portrait
                                </Button>
                              </div>
                            </div>
                            <div className="voice">
                              {/*                               <Button auto flat color="gray800" onClick={playSound}>
                                Game Voice
                              </Button> */}
                              <h6>Game Voice</h6>
                              <audio
                                controls
                                src={item.voiceLine.mediaList[0].wave}
                                className="audio"
                              ></audio>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      )}

      {loading && <Loading />}
      
      {fejl && <Fejl />}
      <Modal noPadding open={visible} onClose={closeHandler} closeButton={true}>
        <Modal.Body>
          <Image showSkeleton width={400} height={490} src={modalstate}></Image>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Agents;
