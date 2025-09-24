import React from "react";
import { Link } from "react-router-dom";
import { MailIcon, ChevronRightIcon } from "lucide-react";

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
// Navigation menu items data - same as header for consistency
const navItems = [
  { title: "How it Works", path: "/how-it-works", active: false },
  { title: "What We Do", path: "/", active: false },
  { title: "Prices", path: "/prices", active: false },
  { title: "About", path: "/about", active: false },
  { title: "Contact", path: "/contact", active: false },
];

export const Footer = () => {
  return (
    <footer className="mt-24 max-w-[1440px] mx-auto sm:px-10 lg:px-16">
      <Card className="w-full bg-[#f6f6f6] rounded-[32px]">
        <CardContent className="p-[60px] flex flex-col md:flex-row justify-between gap-12">
          <div>
            <img
              className="w-[103px] h-[17px] mb-8"
              alt="Gisteck logo"
              src="https://c.animaapp.com/m8it1oue9zhJt6/img/gisteck-logo-1.svg"
            />
            <p className="text-sm text-black max-w-[164px]">
              Optimize your operations with AI-powered real-time action detection for enhanced efficiency and accuracy.
            </p>
          </div>
          <div className="flex justify-between gap-10">
            <nav className="flex flex-col gap-3 mr-10">
              {navItems.map((item, index) => (
                <a key={index} href={item.path} className="text-base text-black text-right">
                  {item.title}
                </a>
              ))}
            </nav>

            <div className="space-y-4">
              <Link
                to="/contact"
                className="h-14 px-6 py-4 bg-[#00398e] rounded-full text-white font-semibold flex items-center"
              >
                Send Email <ChevronRightIcon className="ml-2 h-4 w-4" />
              </Link>
              {/* <Button className="h-14 px-6 py-4 bg-[#00398e] rounded-full text-white font-semibold flex items-center">
                Send Email <ChevronRightIcon className="ml-2 h-4 w-4" />
              </Button> */}
              <p className="text-lg font-semibold text-black">+7 977 863 21 79</p>
              <address className="text-sm text-black not-italic">
                Ulitsa Lenina, 45, Apt. 12<br />Moscow, 101000<br />Russia
              </address>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between my-6 text-sm text-black">
        <p>Copyright © All rights reserved</p>
        <p>Gisteck 2025</p>
      </div>
    </footer>
  );
};