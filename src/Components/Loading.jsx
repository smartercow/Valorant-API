import React from "react";
import bodyLoading from '../Assets/Images/fullportraitv.png'

const Loading = () => {
  return (
    <div className="lContainer">
      <div className="lContainer__loading">
        <div className="lContainer__loading--heading">
          <div className="lLogo"></div>
          <div className="lName"></div>
          <div className="lBanner"></div>
        </div>
        <div className="lContainer__loading--body">
          <img src={bodyLoading} />
        </div>
        <div className="lContainer__loading--details">
          <div className="lDetails">
            <div className="lRole">
              <div className="lTitle"></div>
              <div className="roleName"></div>
            </div>
            <div className="lBio">
              <div className="lBioTitle"></div>
              <div className="lBioText"></div>
            </div>
            <div className="lAbilities">
              <div className="lAbilitiesTitle"></div>
              <div className="iconsCon">
                <div className="lIcons">
                  <div className="lIcon"></div>
                  <div className="IconName"></div>
                </div>
                <div className="lIcons">
                  <div className="lIcon"></div>
                  <div className="IconName"></div>
                </div>
                <div className="lIcons">
                  <div className="lIcon"></div>
                  <div className="IconName"></div>
                </div>
                <div className="lIcons">
                  <div className="lIcon"></div>
                  <div className="IconName"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lContainer__footer"></div>
      <div className="shimmer">
        <div className="shimmer__animation"></div>
      </div>
      <div className="shimmer2">
        <div className="shimmer2__animation"></div>
      </div>
    </div>
  );
};

export default Loading;
