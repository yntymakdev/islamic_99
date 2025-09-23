import Courses from "@/components/Courses";
import DevAcademyLanding from "@/components/DevAcademyLanding";
import Hero from "@/components/Hero";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <Hero /> */}
      <DevAcademyLanding />
      <Courses />
    </div>
  );
};

export default page;
