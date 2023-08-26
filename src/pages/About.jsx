import React from "react";
import aboutImg1 from "../assets/images/about-img.jpg";
import aboutImg2 from "../assets/images/about-img2.jpg";
import aboutImg3 from "../assets/images/about-img-3.jpg";
import aboutImg4 from "../assets/images/about-img-4.jpg";

function About() {
  return (
    <div className="about w-full">
      <div className="banner w-full">
        <div className="banner-description p-6">
          <h2 className="title-2 text-white">BANNER TITLE</h2>
          <p className="text-regular font-normal text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            libero assumenda necessitatibus...
          </p>
          <a href="javascript:void(0)" className="smallText font-medium text-white">View more</a>
        </div>        
      </div>
      <div className="about-container container mx-auto pt-16">
        <div className="about-info pb-60">
          <div className="description pb-8">
            <h1 className="title-1">ABOUT US</h1>
            <p className="text-regular font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              eum alias inventore quia. Architecto reiciendis dolorum
              laudantium. Dolorum, vel, doloremque id maxime magnam quasi,
              debitis voluptatum aliquid iste impedit magni. Dolorum, vel,
              doloremque id maxime magnam quasi, debitis voluptatum aliquid iste
              impedit magni.
            </p>
            <a href="javascript:void(0)" className="smallText font-medium">View more</a>
          </div>
          <div className="image w-full overflow-hidden">
            <img src={aboutImg1} alt="About us image 1" className="w-full h-full rounded-lg" />
          </div>
        </div>
        <div className="about-info-2  pb-60">
          <div className="description pb-8">
            <h3 className="subtitle">HOW WE WORK</h3>
            <p className="text-regular font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              eum alias inventore quia. Architecto reiciendis dolorum
              laudantium. Dolorum, vel, doloremque id maxime magnam quasi,
              debitis voluptatum aliquid iste impedit magni.
            </p>
            <a href="javascript:void(0)" className="smallText font-medium">View more</a>
          </div>
          <div className="images w-full flex justify-around items-center rounded-lg">
            <img src={aboutImg2} alt="we work img 2" className="w-96 h-full rounded-lg" />
            <img src={aboutImg3} alt="we work img 3" className="w-96 h-full rounded-lg" />
          </div>
        </div>
        <div className="about-info-3  pb-20">
          <div className="description pb-8">
            <h3 className="subtitle">WE GROW UP</h3>
            <p className="text-regular font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              eum alias inventore quia. Architecto reiciendis dolorum
              laudantium. Dolorum, vel, doloremque id maxime magnam quasi,
              debitis voluptatum aliquid iste impedit magni.
            </p>
            <a href="javascript:void(0)" className="smallText font-medium">View more</a>
          </div>
          <div className="image w-full overflow-hidden">
            <img src={aboutImg4} alt="about us image 4" className="w-full h-full rounded-lg"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
