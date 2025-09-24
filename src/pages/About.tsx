import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";


// Service data for the "What We Do" section
const serviceData = [
  {
    icon: "https://c.animaapp.com/m8itc0yupuOuUd/img/ai-brain-02-solid-sharp-2.svg",
    title: "AI-Integrated Warehouse Management",
    description:
      "Automate and optimize warehouse operations with real-time AI-powered event detection and tracking.",
  },
  {
    icon: "https://c.animaapp.com/m8itc0yupuOuUd/img/analytics-01-solid-rounded-1.svg",
    title: "Data Visibility & Insights",
    description:
      "Gain complete visibility into your inventory and operational performance with our smart dashboard and data analytics tools.",
  },
  {
    icon: "https://c.animaapp.com/m8itc0yupuOuUd/img/bookmark-check-02-solid-rounded-1.svg",
    title: "Custom Solutions",
    description:
      "We tailor our solutions to meet the specific needs of each client, integrating seamlessly with existing WMS platforms.",
  },
  {
    icon: "https://c.animaapp.com/m8itc0yupuOuUd/img/analytics-up-solid-rounded-1.svg",
    title: "Reporting & Violation Detection",
    description:
      "Our AI tracks operations, detects violations, and reports instantly to boost efficiency and compliance.",
  },
  {
    icon: "https://c.animaapp.com/m8itc0yupuOuUd/img/guest-house-solid-rounded-1.svg",
    title: "Warehouse Simulation",
    description:
      "We provide advanced warehouse simulations showcasing real-time AI optimization for staging, loading, and operations.",
  },
  {
    icon: "https://c.animaapp.com/m8itc0yupuOuUd/img/cloud-bulk-rounded-1.svg",
    title: "Flexible Deployment",
    description:
      "Our cloud-based platform ensures fast and secure deployment, with separate environments for simulation and production.",
  },
];

export const About = () => {
  return (
    <>
      <div className="w-full h-[171px] relative">
        <div className="w-full h-[150px] bg-[#d8e8ff] relative static-background">
          {/* <img
            className="absolute w-[1173px] h-[135px] left-1/2 -translate-x-1/2"
            alt="Background pattern"
            src="https://c.animaapp.com/m8itc0yupuOuUd/img/group-4.png"
          /> */}
          <h1 className="absolute w-full max-w-[1200px] top-[26px] left-1/2 transform -translate-x-1/2 font-black text-white text-[120px] font-inter tracking-[0] leading-[normal]">
            ABOUT
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto mt-[40px]">
        {/* About Section */}
        <section className="flex flex-col md:flex-row gap-16 mb-20">
          <div className="flex-1">
            <h2 className="font-['Inter',Helvetica] font-medium text-2xl text-black mb-5">
              Gisteck
            </h2>
            <p className="font-['Inter',Helvetica] font-light text-lg text-black leading-[27px]">
              At Gisteck, we specialize in delivering cutting-edge AI-driven
              solutions for the logistics and warehouse industry. Founded by a
              seasoned system architect with deep expertise in WMS, Gisteck
              was created to solve complex inventory and warehouse management
              challenges with simple, innovative technology.
            </p>

            <h2 className="font-['Inter',Helvetica] font-medium text-2xl text-black mt-10 mb-5">
              Our Mission
            </h2>
            <p className="font-['Inter',Helvetica] font-light text-lg text-black leading-[27px]">
              Our mission is to enhance the efficiency and accuracy of
              warehouse operations by integrating AI-powered recognition and
              real-time tracking. We aim to reduce inconsistencies in
              inventory data, streamline warehouse workflows, and empower
              businesses with greater visibility and control over their
              logistics operations.
            </p>
          </div>

          <div className="flex-1">
            <div className="w-full h-[411px] rounded-xl bg-[url(https://c.animaapp.com/m8itc0yupuOuUd/img/image-1.png)] bg-cover bg-center" />
          </div>
        </section>

        <Separator className="my-10" />

        {/* What We Do Section */}
        <section className="mb-20">
          <h2 className="font-['Inter',Helvetica] font-medium text-2xl text-black mb-6">
            What We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {serviceData.map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex w-12 h-12 items-center justify-center p-2 bg-[#d8e8ff] rounded-lg shrink-0">
                  <img
                    className="w-8 h-8"
                    alt={service.title}
                    src={service.icon}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-['Inter',Helvetica] font-bold text-lg text-black">
                    {service.title}
                  </h3>
                  <p className="font-['Inter',Helvetica] font-light text-base text-black leading-6">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-10" />
      </div>
    </>
  );
};
