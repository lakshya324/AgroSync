import React from "react";
import AgroLogo from "../assets/AgroSync.png";
import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { categories } from "../../utils/categories";

function Footer() {
  const socialLinks = [
    { name: "Github", icon: <FiGithub />, link: "https://www.github.com" },
    {
      name: "Youtube",
      icon: <FiYoutube />,
      link: "#",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "#",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "#",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "#",
    },
  ];
  const data = [
    {
      headerName: "Categories",
      links: [
        { name: "Careers", link: "#" },
        { name: "Press & News", link: "#" },
        { name: "Partnership", link: "#" },
        { name: "Privacy Policy", link: "#" },
        { name: "Terms of Service", link: "#" },
        { name: "Intellectual Property ", link: "#" },
        { name: "Investor Relations", link: "#" },
      ],
    },
    {
      headerName: "About",
      links: [
        { name: "Careers", link: "#" },
        { name: "Press & News", link: "#" },
        { name: "Partnership", link: "#" },
        { name: "Privacy Policy", link: "#" },
        { name: "Terms of Service", link: "#" },
        { name: "Intellectual Property ", link: "#" },
        { name: "Investor Relations", link: "#" },
      ],
    },
    {
      headerName: "Support",
      links: [
        { name: "Help & Support", link: "#" },
        { name: "Trust & Safety", link: "#" },
        { name: "Selling ", link: "#" },
        { name: "Buying ", link: "#" },
      ],
    },
  ];
  return (
    <footer className="w-full  mx-auto  px-8 sm:px-32 py-16 h-max border-t border-gray-200 bg-gray-100">
      <ul className="flex justify-between">
        {data.map(({ headerName, links }) => {
          return (
            <li key={headerName} className="flex flex-col gap-2">
              <span className="font-bold">{headerName}</span>
              <ul className="flex flex-col gap-2">
                {links.map(({ name, link }) => (
                  <li key={name} className="text-[#404145]">
                    <a href={link}>{name}</a>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
      <div className="mt-12 flex items-center justify-between">
      <div className="mr-2 mt-2 pl-2 w-[140px] ml-0 ">
        <img src= {AgroLogo}  />
      </div>
        <ul className="flex gap-5">
          {socialLinks.map(({ icon, link, name }) => (
            <li
              key={name}
              className="text-xl text-[#404145] hover:text-[#1DBF73] transition-all"
            >
              <a href={link}>{icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
