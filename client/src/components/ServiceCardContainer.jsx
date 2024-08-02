import React from "react";
import ServiceCategoryCard from "./ServiceCategoryCard";

function ServiceCardContainer({ categoryTitle, category }) {
    
  return (
    <>
      <p className="pt-4 text-xl text-neutral-700 font-semibold capitalize">{categoryTitle}</p>
      <div className="flex flex-row overflow-x-scroll space-x-4 py-4 hide-scrollbar">
        {category.map((val, ind) => (
          <ServiceCategoryCard
            title={val.title}
            location={val.location}
            workingDay={val.workingDay}
            workingTime={val.workingTime}
            key={ind}
          />
        ))}
      </div>
    </>
  );
}

export default ServiceCardContainer;
