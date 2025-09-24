import { MoveRightIcon, MailIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { BasicLicense } from "./Basic_License";
import { IntegratedLicense } from "./Integrated License";

export const Price = () => {
  // State to track which component to show
  const [currentView, setCurrentView] = useState<"main" | "basic" | "integrated">("main");

  // License options data
  const licenseOptions = [
    {
      title: "Basic License",
      description:
        "Covers standard loading event detection and monitoring, including pallet staging, loading/unloading, and door status events.",
      icon:
        "https://c.animaapp.com/m8iu4k178TNc99/img/license-solid-rounded-1.svg",
      selected: true,
    },
    {
      title: "Integrated License",
      description:
        "Includes advanced AI features such as real-time violation detection, predictive maintenance, and detailed reporting",
      icon:
        "https://c.animaapp.com/m8iu4k178TNc99/img/license-maintenance-solid-rounded-1.svg",
      selected: false,
    },
  ];

  return (
    <>
    <img
        className="absolute w-[1035px] h-[1399px] top-0 right-0"
        style={{zIndex: -1}}
        alt="Background graphic"
        src="https://c.animaapp.com/m8it1oue9zhJt6/img/group-3.png"
      />
      {/* Main content */}
      {currentView === "basic" && (
        <div  className="mt-32 relative z-10 max-w-[1440px] mx-auto sm:px-10 lg:px-16 ">
          <Button
            variant="ghost"
            className="flex items-center gap-3 mb-8 text-[#b4b4b4] font-bold p-0 hover:bg-transparent"
            onClick={() => setCurrentView("main")}
          >
            <MoveRightIcon className="h-5 w-5 rotate-180" />
            Back
          </Button>
          <BasicLicense />
        </div>
      )}
      {currentView === "integrated" && (
        <div  className="mt-32 relative z-10 max-w-[1440px] mx-auto sm:px-10 lg:px-16 ">
          <Button
            variant="ghost"
            className="flex items-center gap-3 mb-8 text-[#b4b4b4] font-bold p-0 hover:bg-transparent"
            onClick={() => setCurrentView("main")}
          >
            <MoveRightIcon className="h-5 w-5 rotate-180" />
            Back
          </Button>
          <IntegratedLicense />
        </div>
      )}
      {currentView === "main" && (
        <main className="mt-32 relative z-10 max-w-[1440px] mx-auto sm:px-10 lg:px-16 ">
        <div className="flex flex-col gap-3 max-w-[1019px]">
          <h1 className="text-[56px] font-normal font-['Inter',Helvetica] text-black leading-normal">
            Select the Perfect Plan for Your Needs
          </h1>
          <p className="font-['Inter',Helvetica] font-light text-black text-lg leading-[27px]">
            Our pricing model is designed to provide flexibility based on
            the size and complexity of the warehouse. Clients will go
            through a three-step selection process to create a tailored
            solution
          </p>
        </div>

        <h2 className="font-['Inter',Helvetica] font-semibold text-black text-2xl leading-9 mt-24">
          Choose License Type
        </h2>

        <div className="flex flex-col w-full max-w-[1200px] gap-6 mt-6">
          {licenseOptions.map((license, index) => (
            <Card
              key={index}
              className={`border-0 bg-white border-2 border-solid border-[#d8e8ff] hover:bg-[#d8e8ff] transition-colors duration-200 rounded-xl cursor-pointer group`}
              onClick={() => setCurrentView(index === 0 ? "basic" : "integrated")}
            >
              <CardContent className="flex items-start gap-3 p-6">
                <img
                  className="w-14 h-14"
                  alt={license.title}
                  src={license.icon}
                />
                <div className="flex flex-col h-[59px] items-start justify-center gap-0.5 flex-1">
                  <h3 className="font-inter font-semibold text-black text-lg leading-[27px] w-full">
                    {license.title}
                  </h3>
                  <Separator className="w-full h-px invisible" />
                  <p className="font-inter font-light text-black text-lg leading-[27px]">
                    {license.description}
                  </p>
                </div>
                <div className="flex items-center justify-center self-stretch">
                  <ArrowRightIcon className="w-6 h-6 text-[#B2C3DD] group-hover:text-[#00398E] transition-colors duration-200" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      )}

    </>
  );
};
