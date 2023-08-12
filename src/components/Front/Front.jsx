"use client"
import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";
import { img13, img14, img15 } from  "../../assets/images";
import Complimentary from "../Introsection/Complimentary";
import ContactUs from "../Contact/Contact";
import Image from "next/image";

const Front = () => {
  const images = [
    img13,
    img14,
    img15,
  ];
  return (
    <>
      <div id="home">
        <Carousel autoPlay infiniteLoop interval={2000} showThumbs={false}>
          {images.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
      < Complimentary />
      <ContactUs/>
    </>
  );
};

export default Front;
