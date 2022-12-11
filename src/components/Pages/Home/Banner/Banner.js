import React from 'react';
import myImg from "../../../../images/jahirul.png";
import animation7 from '../../../../images/animationImg-7.png'
import Typewriter from "typewriter-effect";
import "./Banner.css";

const Banner = () => {
    return (
        <div>
            <main className="banner-container">
      <div className="container-left-side" >
        <h1 data-aos="fade-right">
          Hello, i'm <br /> Jahirul Islam
        </h1>
        <div className="typeWriter" data-aos="fade-right">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Web developer")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .deleteAll()
                .pauseFor(500)
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
                typewriter
                .typeString("JavaScript developer")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .deleteAll()
                .pauseFor(500)
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
                typewriter
                .typeString("React developer")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .deleteAll()
                .pauseFor(500)
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
                typewriter
                .typeString("WordPress developer")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .deleteAll()
                .pauseFor(500)
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
                typewriter
                .typeString("I know JavaScript, <br/> ReactJS, nodeJS, expressJS, WordPress")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(500)
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}/>
          
        </div>
        <div className="container-left-social-link-side" data-aos="fade-right">
          <a className="social-btn" href="https://github.com/developer-johir" target="_blank"><i class="fab fa-github"></i></a>
          <a className="social-btn" href="https://www.linkedin.com/in/dev-jahirul-islam/"target="_blank"><i class="fab fa-linkedin-in"></i></a>
          <a className="social-btn" href="https://www.facebook.com/jahirulislam200" target="_blank"><i class="fab fa-facebook-f"></i></a>
        </div>
        <a data-aos="fade-right" className="downloadBtn" href="https://drive.google.com/file/d/1xReX9LdKY46yjihm79znHJtQQUI5aJF0/view" target="_blank">Download Resume <i class="fas fa-file-download"></i>
        </a>
       
        <img src={animation7} className="animation7"/>
      </div>
      <div className="container-right-side" >
        <i class="fab fa-react reactImg" data-aos="fade-left"></i>
        <img src={myImg} alt="Minhajur Rohoman" data-aos="fade-left" />
      </div>
    </main>
        </div>
    );
};

export default Banner;