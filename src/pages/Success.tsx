import { MailIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";


export const Success = () => {
  return (
    <>
      <img
        className="absolute w-[1035px] h-[829px] top-0 right-0 z-0"
        alt="Group"
        style={{zIndex: -1}}
        src="https://c.animaapp.com/m8iud4j1MDo0FZ/img/group-3.png"
      />
      <section className="flex flex-col lg:flex-row items-center justify-between mt-20 max-w-[1440px] mx-auto sm:px-10 lg:px-16">

        <div className="flex flex-col items-start gap-3 w-full max-w-[1019px]">
          <h1 className="text-[56px] font-normal leading-normal">
            <span className="text-black">Your information has been </span>
            <span className="font-medium text-[#00398e]">successfully</span>
            <span className="text-black"> received!</span>
          </h1>

          <p className="text-lg font-light text-black leading-[27px] max-w-[1018px]">
            Our team will carefully review your application and get back to
            you as soon as possible. We are here to answer your questions
            and provide the best solution for you. Thank you for your
            interest and trust!
          </p>
        </div>
      </section>
      {/* <main className="max-w-[1440px] mx-auto sm:px-10 lg:px-16 mt-32 flex flex-col items-start gap-6 relative z-10 mt-32"> */}
      {/* </main> */}
    </>
  );
};
