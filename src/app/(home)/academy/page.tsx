import Courses from "@/components/Courses";
import DevAcademyLanding from "@/components/DevAcademyLanding";
import Hero from "@/components/Hero";
import PremiumLoader from "@/components/LandingPage";
import EnhancedSmoothLoader from "@/components/LandingPage";
import SmoothTransitionLoader from "@/components/LandingPage";
// import { HomePage } from "@/components/QuickActionCard";
import React from "react";
import Portfolio from "../../../components/Test";
import Tea from "@/components/Tea";
import Pro from "@/components/Pro";

const page = () => {
  return (
    <div>
      {/* <Hero /> */}
      {/* <Tea /> */}
      <Pro />
      {/* <Portfolio />/ */}
      {/* <HomePage /> */}
      {/* <EnhancedSmoothLoader>
        <DevAcademyLanding />
      </EnhancedSmoothLoader>{" "}
      <Courses /> */}
    </div>
  );
};

export default page;
