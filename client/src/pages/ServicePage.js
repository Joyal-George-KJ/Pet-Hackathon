import React from "react";
import Navbar from "../components/Navbar";
import ServiceCardContainer from "../components/ServiceCardContainer";

function ServicePage() {
  const Cards = {
    items: [
      {
        title: "title",
        location: "location",
        workingTime: "09:00 AM - 09:00 PM",
        workingDay: "Monday - Friday",
      },
      {
        title: "title",
        location: "location",
        workingTime: "09:00 AM - 09:00 PM",
        workingDay: "Monday - Friday",
      },
      {
        title: "title",
        location: "location",
        workingTime: "09:00 AM - 09:00 PM",
        workingDay: "Monday - Friday",
      },
    ],
    toys: [
      {
        title: "title",
        location: "location",
        workingTime: "09:00 AM - 09:00 PM",
        workingDay: "Monday - Friday",
      },
      {
        title: "title",
        location: "location",
        workingTime: "09:00 AM - 09:00 PM",
        workingDay: "Monday - Friday",
      },
      {
        title: "title",
        location: "location",
        workingTime: "09:00 AM - 09:00 PM",
        workingDay: "Monday - Friday",
      },
      {
        title: "title",
        location: "location",
        workingTime: "09:00 AM - 09:00 PM",
        workingDay: "Monday - Friday",
      },
      {
        title: "title",
        location: "location",
        workingTime: "09:00 AM - 09:00 PM",
        workingDay: "Monday - Friday",
      },
    ],
  };

  const responseKeys = Object.keys(Cards);

  return (
    <div className="flex flex-row bg-neutral-100">
      <Navbar />
      <div className="pt-8 w-5/6 overflow-hidden">
        <p className="text-3xl text-neutral-700 font-medium">Services</p>
          {responseKeys.map((card, ind) => <ServiceCardContainer categoryTitle={card} category={Cards[card]} key={ind} />)}
      </div>
    </div>
  );
}

export default ServicePage;
