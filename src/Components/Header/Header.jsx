import React from "react";
import { Button } from "@mui/material";
import { ArrowForward as ArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="overflow-hidden bg-orange-50 relative pt-[5rem] pb-[2rem]">
      {" "}
      {/* Increased padding */}
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-orange-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-orange-500 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-orange-800 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Welcome to </span>{" "}
                <span className="block text-orange-600 xl:inline">
                  WSO2 Asgardeo
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Empower your digital transformation with our comprehensive
                integration platform. Connect, manage, and secure your APIs,
                microservices, and data with ease.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Link to={"/container"}>
                  <Button
                    variant="contained"
                    color="warning"
                    size="large"
                    endIcon={<ArrowRight />}
                    sx={{ mr: 2 }}
                  >
                    Get started
                  </Button>
                </Link>
                <Button variant="outlined" color="warning" size="large">
                  Learn more
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-[70vh] w-full object-cover sm:h-[75vh] md:h-[80vh] lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="WSO2 Platform"
        />
      </div>
    </div>
  );
};

export default Header;
