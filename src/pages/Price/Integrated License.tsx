import { ArrowLeftIcon, ArrowRightIcon, MailIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const IntegratedLicense = () => {  // Keeping the name as 'Price' since we're importing it as 'IntegratedLicense' in the main Price.tsx

  const goToContact = () => {
    window.location.href = '/contact';
  };

  // Payment model options data
  const paymentModels = [
    {
      id: 1,
      title: "Camera-Based Subscription",
      description:
        "Monthly subscription fee based on the number of active cameras.",
      icon:
        "https://c.animaapp.com/m8iu8sj71GDiIV/img/cctv-camera-solid-rounded-1.svg",
      selected: true,
    },
    {
      id: 2,
      title: "Yearly License-Based Subscription",
      description:
        "Fixed annual fee based on the chosen license and solution type.",
      icon:
        "https://c.animaapp.com/m8iu8sj71GDiIV/img/calendar-add-02-solid-rounded-1.svg",
      selected: false,
    },
  ];

  return (
    <main className="relative z-10">
      {/* Main content */}
      <section className="mt-8 relative z-10">
        <div className="flex flex-col items-start gap-3 max-w-[1019px]">
          <h1 className="text-[56px] font-normal text-black leading-tight">
            Select the Perfect Plan for Your Needs
          </h1>
          <p className="text-lg font-light text-black leading-[27px] max-w-[1018px]">
            Our pricing model is designed to provide flexibility based on
            the size and complexity of the warehouse. Clients will go
            through a three-step selection process to create a tailored
            solution
          </p>
        </div>
      </section>

      {/* Payment model selection */}
      <section className="mt-24 relative z-10">
        <h2 className="text-2xl font-semibold text-black leading-9 mb-6">
          Select Payment Model
        </h2>

        <div className="flex flex-col w-full max-w-[1200px] gap-6">
          {paymentModels.map((model) => (
            <Card
              key={model.id}
              className="border-2 bg-white border-[#d8e8ff] rounded-xl hover:bg-[#d8e8ff] hover:border-[#d8e8ff] transition-colors duration-200 group"
              onClick={goToContact}
            >
              <CardContent className="flex items-start gap-3 p-6">
                <img
                  className="w-14 h-14"
                  alt={model.title}
                  src={model.icon}
                />
                <div className="flex flex-col h-[59px] items-start justify-center gap-0.5 flex-1">
                  <h3 className="font-inter font-semibold text-black text-lg leading-[27px] w-full">
                    {model.title}
                  </h3>
                  <Separator className="w-full h-px invisible" />
                  <p className="font-inter font-light text-black text-lg leading-[27px]">
                    {model.description}
                  </p>
                </div>
                <div className="flex items-center justify-center self-stretch">
                  <ArrowRightIcon className="w-6 h-6 text-[#B2C3DD] group-hover:text-[#00398E] transition-colors duration-200" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};
