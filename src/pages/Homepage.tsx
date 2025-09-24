import { MailIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const Homepage = () => {
  const eventTypes = [
    {
      icon: "https://c.animaapp.com/m8it1oue9zhJt6/img/frame-13-1.svg",
      title: "Stage Events",
    },
    {
      icon: "https://c.animaapp.com/m8it1oue9zhJt6/img/group.png",
      title: "Dock Events",
    },
    {
      icon: "https://c.animaapp.com/m8it1oue9zhJt6/img/noun-garage-3514739-copy-1.svg",
      title: "Door Events",
    },
    {
      icon: "https://c.animaapp.com/m8it1oue9zhJt6/img/frame-13.svg",
      title: "Truck Events",
    },
  ];

  const systemFeatures = [
    {
      icon: "./images/data.png",
      title: "Data Collection",
      description: "Video frames are transmitted to AI in real-time.",
    },
    {
      icon: "https://c.animaapp.com/m8it1oue9zhJt6/img/ai-brain-02-solid-sharp-1.svg",
      title: "Action Detection",
      description: "AI automatically detects operations such as staging, loading, and unloading.",
    },
    {
      icon: "https://c.animaapp.com/m8it1oue9zhJt6/img/analytics-01-solid-rounded-1.svg",
      title: "Real-Time Monitoring & Analysis",
      description: "AI automatically detects operations such as staging, loading, and unloading.",
    },
  ];

  return (

    <>
      <img
        className="absolute w-[1035px] h-[1399px] top-0 right-0"
        style={{ zIndex: -1 }}
        alt="Background graphic"
        src="https://c.animaapp.com/m8it1oue9zhJt6/img/group-3.png"
      />
      <section className="flex flex-col lg:flex-row items-center justify-between mt-20 max-w-[1440px] mx-auto sm:px-10 lg:px-16">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Know your future <br /> in <span className="text-[#00398e]">your business</span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-700">
            At Gisteck, we specialize in delivering cutting-edge AI-driven solutions for the logistics and warehouse industry. Founded by a seasoned system architect with deep expertise in WMS...
          </p>

          <Button className="h-14 px-6 py-4 bg-[#00398e] rounded-full text-white font-semibold">
            <Link
              to="/how-it-works"
              className="flex items-center"
            >
              Detail <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <img
          className="w-[600px] max-w-full mt-12 lg:mt-0"
          alt="Dashboard visualization"
          src="https://c.animaapp.com/m8it1oue9zhJt6/img/image.png"
        />
      </section>

      <div className="flex justify-center" style={{ marginTop: "-90px" }}>
        <img
          className="w-[1050px] h-[180px]"
          alt="Gisteck"
          src="https://c.animaapp.com/m8it1oue9zhJt6/img/gisteck.png"
        />
      </div>

      <section className="mt-24 space-y-10 max-w-[1440px] mx-auto sm:px-10 lg:px-16">
        <h2 className="text-3xl font-semibold text-black">Solution Overview</h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          Gisteck LMS® is an AI-powered loading system that enables real-time violation detection of warehouse events.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventTypes.map((event, index) => (
            <Card key={index} className="h-32 border border-[#ececec] rounded-xl bg-white">
              <CardContent className="flex items-center justify-start gap-4 p-6 h-full">
                <img className="h-12" alt={event.title} src={event.icon} />
                <span className="text-xl font-medium text-black">{event.title}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-24 py-20 bg-[#f2f7ff] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start gap-12 max-w-6xl mx-auto">
          <img
            className="w-[483px] h-[441px] object-cover rounded-xl"
            alt="System architect"
            src="https://c.animaapp.com/m8it1oue9zhJt6/img/image-1.png"
          />
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-black">System Architect</h2>
              <p className="text-base text-gray-700 max-w-2xl leading-relaxed">
                The AI-powered system processes real-time video data to detect and analyze staging, loading, and other operations,
                ensuring optimized workflows and increased efficiency.
              </p>
            </div>
            <div className="space-y-8">
              {systemFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                    <img className="w-12 h-12" alt={feature.title} src={feature.icon} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">{feature.title}</h3>
                    <p className="text-base text-gray-700 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="mt-24 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          <div className="space-y-2">
            <h3 className="text-5xl font-bold text-[#00398e]">320</h3>
            <p className="text-base uppercase">COMPANIES HELPED</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-5xl font-bold text-[#00398e]">241</h3>
            <p className="text-base uppercase">AVERAGE REVIEW</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-5xl font-bold text-[#00398e]">52</h3>
            <p className="text-base uppercase">USER</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-5xl font-bold text-[#00398e]">300+</h3>
            <p className="text-base uppercase">PROJECTS</p>
          </div>
        </div>
      </section>

      {/* Our Loading Solution Section */}
      <section className="mt-16 py-16 bg-[#00398e] text-white relative overflow-hidden">
        <img src="./images/Vector-Left.png" className="absolute z-0" style={{ left: "50px", top: "30px" }} width={80} />
        <img src="./images/Vector-Right.png" className="absolute z-0" style={{ right: "100px", bottom: "30px" }} width={80} />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-semibold mb-6">Our Loading Solution</h2>
          <p className="text-lg max-w-7xl leading-relaxed">
            At Gisteck, we provide an AI-powered Loading Solution designed to monitor and validate loading operations in warehouses. Our solution uses real-time event detection and AI-based violation reporting to improve accuracy and efficiency during the loading process.
          </p>
        </div>
      </section>
    </>
  );
};
