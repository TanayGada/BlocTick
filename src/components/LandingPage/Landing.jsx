import React, { useRef, useEffect } from "react";
import { Typography } from "@mui/material";
import logo2 from "../../assets/logo2.png";
import Button from "@mui/material/Button";
import lottie from "lottie-web";
import guitarAnimationData from "./guitar.json";
import { text } from "@fortawesome/fontawesome-svg-core";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const container = useRef(null);
  const { user } = useAuthContext();

  const navigate = useNavigate();

  const handleClick = () => {
    if(user){
      navigate('/events');
    }
    else{
      navigate('/login');
    }
  }


  useEffect(() => {
    const animation = lottie.loadAnimation({
      animationData: guitarAnimationData,
      autoplay: true,
      container: container.current,
      loop: true,
      renderer: "svg",
    });

    // Clean up the animation when the component unmounts
    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <>
      <div className="flex">
        <div
          className="text-purple-200 font-sans m-40 text-balance"
          style={{ marginLeft: "4rem" }}
        >

          <div className="flex flex-col gap-3 font-sans  font-extrabold m-1">
            <Typography variant="h5">Delightful</Typography>
            <Typography
              variant="h5"
              
            >
              events
            </Typography>
            <Typography
              variant="h1"
              style={{
                fontSize: "80px", 
                fontWeight: "bold",
                background:
                  "-webkit-linear-gradient(45deg, #03001e, #7303c0, #ec38bc, #fdeff9)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                display: "inline-block",
              }}
            >
              Start here
            </Typography>

            <div>
              <Typography variant="h5">
                Set up an event page, invite friends and sell tickets. Host a
                memorable event today.
              </Typography>
            </div>

       
            <Button
              variant="contained"
              style={{
                fontSize: "18px", 
                fontWeight: "bold",
                background: "transparent",
                border: "4px solid",
                backgroundImage:
                  "linear-gradient(45deg, #03001e, #7303c0, #ec38bc, #fdeff9)",
                borderRadius: "8px",
                animation: "borderRotate 10s infinite",
              }}
              onClick={handleClick}
            >
              Create your first Event
            </Button>
          </div>
        </div>

       
        <div
          ref={container}
          id="animation-container"
          style={{ width: "900px", height: "600px" }} 
        ></div>
      </div>
    </>
  );
};

export default LandingPage;
