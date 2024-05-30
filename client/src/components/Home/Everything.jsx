
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import webp from '../assets/everything.webp';
function Everything() {
  const everythingData = [
    {
      title: "Budget-Friendly Solutions: ",
      subtitle:
        "Stick to your budget with service options for every price point.",
    },
    {
      title: "Swift and Quality Results:",
      subtitle:
        "Hand your project over to a talented freelancer in minutes, get long-lasting results.",
    },
    {
      title: "Payment Assurance: ",
      subtitle:
        "Trust your harvest to our dedicated farmers, and the delivery of high-quality crops",
    },
    {
      title: "Count on 24/7 support",
      subtitle:
        "Our round-the-clock support team is available to help anytime, anywhere.",
    },
  ];
  return (
    <div className="bg-[#f1fdf7] sm:pb-24 pb-44 flex flex-wrap pt-20 justify-between px-12 sm:px-24">
      <div>
        <h2 className="text-4xl mb-5 text-[#404145] font-bold">
        The Best Part: Agro Sync Experience
        </h2>
        <ul className="flex flex-col gap-10">
          {everythingData.map(({ title, subtitle }) => {
            return (
              <li key={title}>
                <div className="flex gap-2 items-center text-xl">
                  <BsCheckCircle className="text-[#62646a]" />
                  <h4>{title}</h4>
                </div>
                <p className="text-[#62646a]">{subtitle}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="relative h-44 w-full mt-16 sm:w-5/12">
        <img src={webp} className="rounded-md" fill alt="everything" />
      </div>
    </div>
  );
}

export default Everything;
