import { ArrowLeftIcon, ArrowRightIcon, MailIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

// Solution data for mapping
const solutions = [
  {
    id: 1,
    title: "Loading Solution",
    description:
      "Detect and monitor loading and unloading activities, including pallet staging, truck arrival, and door status.",
    icon: "https://c.animaapp.com/m8iu6h7tixG7IQ/img/loading-01-solid-rounded-1.svg",
    active: true,
  },
  {
    id: 2,
    title: "Staging Solution",
    description: "Track pallet movements and staging accuracy in real-time.",
    icon: "https://c.animaapp.com/m8iu6h7tixG7IQ/img/package-moving-solid-rounded-1.svg",
    active: false,
  },
  {
    id: 3,
    title: "Door Monitoring Solution",
    description: "Monitor and validate door opening and closing status.",
    icon: "https://c.animaapp.com/m8iu6h7tixG7IQ/img/door-02-solid-rounded-1.svg",
    active: false,
  },
  {
    id: 4,
    title: "Truck Arrival & Departure Solution",
    description: "Identify truck movements and ensure loading bay efficiency.",
    icon: "https://c.animaapp.com/m8iu6h7tixG7IQ/img/container-truck-solid-rounded-1.svg",
    active: false,
  },
];

const goToContact = () => {
  window.location.href = '/contact';
};


export const BasicLicense = () => {
  return (
          <main className="relative z-10">
            {/* Hero section */}
            <section className="flex flex-col items-start gap-6 mb-16">
              <div className="flex flex-col items-start gap-3 w-full max-w-[1019px]">
                <h1 className="font-inter font-normal text-black text-[56px] leading-tight">
                  Select the Perfect Plan for Your Needs
                </h1>
                <p className="font-inter font-light text-black text-lg leading-[27px] max-w-[1018px]">
                  Our pricing model is designed to provide flexibility based on
                  the size and complexity of the warehouse. Clients will go
                  through a three-step selection process to create a tailored
                  solution
                </p>
              </div>
            </section>

            {/* Solutions section */}
            <section className="flex flex-col w-full max-w-[1200px] gap-6">
              <h2 className="font-inter font-semibold text-black text-2xl leading-9">
                Choose Solution
              </h2>

              {solutions.map((solution) => (
                <Card
                  key={solution.id}
                  className="border-2 bg-white border-[#d8e8ff] rounded-xl overflow-hidden hover:bg-[#d8e8ff] hover:border-[#d8e8ff] transition-colors duration-200 group"
                  onClick={goToContact}
                >
                  <CardContent className="flex items-start gap-3 p-6">
                    <img
                      className="w-14 h-14"
                      alt={solution.title}
                      src={solution.icon}
                    />
                    <div className="flex flex-col h-[59px] items-start justify-center gap-0.5 flex-1">
                      <h3 className="font-inter font-semibold text-black text-lg leading-[27px] w-full">
                        {solution.title}
                      </h3>
                      <Separator className="w-full h-px invisible" />
                      <p className="font-inter font-light text-black text-lg leading-[27px]">
                        {solution.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-center self-stretch">
                      <ArrowRightIcon className="w-6 h-6 text-[#B2C3DD] group-hover:text-[#00398E] transition-colors duration-200" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </section>
          </main>
  );
};
