"use client";
import React from "react";
import { carouselItems } from "./constants";
import Card from "./card";

const Carousel = () => {
  return (
    <div className="w-full md:p-20 grid grid-cols-1 lg:grid-cols-3">
      {carouselItems.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default Carousel;
