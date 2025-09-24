import { MailIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

// Process steps data for mapping
const processSteps = [
  {
    number: "1",
    title: "AI-Driven Event Detection",
    description:
      "The system uses AI-powered cameras or simulation data to monitor key warehouse events, including pallet stage in and out, put-away, loading and unloading onto trucks, door open/close status, and truck arrival and departure.",
  },
  {
    number: "2",
    title: "Real-Time Monitoring",
    description:
      "The system tracks loading progress in real-time, ensuring that the correct actions are performed according to pre-defined business rules, while AI flags any inconsistencies or potential issues during the loading process.",
  },
  {
    number: "3",
    title: "Violation Detection",
    description:
      "AI monitors loading activities to identify issues such as incorrect loading or unloading sequences, pallet misplacement, or failure to stage, with any violations being reported instantly to supervisors and logged for review.",
  },
  {
    number: "4",
    title: "Customizable Business Process Logic",
    description:
      "The loading solution adapts to complex warehouse operations by supporting customized processes, with rules and workflows defined with clients. Hard-coded logic ensures accuracy based on warehouse rules and compliance.",
  },
  {
    number: "5",
    title: "Automated Reporting",
    description:
      "The system generates detailed loading reports, including loading time, successful events, violations, and the number of packages waiting for various actions. Reports are accessible via the Gisteck dashboard for analysis.",
  },
  {
    number: "6",
    title: "Flexible Deployment",
    description:
      "The solution works with both physical warehouses and simulated environments, processing real-time data from AI cameras installed in the warehouse and simulation data from Unity-based warehouse simulations.",
  },
];

export const HowItWorks = () => {
  return (
    <>

      {/* Hero Section */}
      <div className="w-full h-[171px] relative">
        <div className="w-full h-[150px] bg-[#d8e8ff] relative static-background">
          {/* <img
            className="absolute w-[1173px]"
            alt="Background pattern"
            src="https://c.animaapp.com/m8itgp60iCECuY/img/group-4.png"
          /> */}
          <h1 className="absolute w-full max-w-[1200px] top-[26px] left-1/2 transform -translate-x-1/2 font-black text-white text-[120px] font-inter tracking-[0] leading-[normal]">
            HOW IT WORKS
          </h1>
        </div>
      </div>

      {/* Process Steps Section */}
      <section className="w-full max-w-[1200px] mx-auto mt-[20px]">
        <div className="flex flex-col items-start gap-6">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="w-full border-2 border-[#ececec] rounded-xl"
            >
              <CardContent className="flex flex-col items-start gap-3 p-6">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex w-8 h-8 items-center justify-center bg-[#d8e8ff] rounded-lg">
                    <div className="font-medium text-[#00398e] text-base">
                      {step.number}
                    </div>
                  </div>
                  <div className="font-medium text-black text-lg font-inter">
                    {step.title}
                  </div>
                </div>
                <p className="font-light text-black text-base font-inter leading-6">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Separator className="w-full h-px mt-[120px]" />
      </section>

    </>
  );
};
