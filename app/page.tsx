import React from "react";
import { ImBubble, ImTwitter, ImGithub } from "react-icons/im";
import { BsChevronDown, BsDiscord } from 'react-icons/bs'
import { SiHuggingface } from "react-icons/si";

export default function Light(): JSX.Element {
  return (
    <div className="bg-white font-exo2 text-black flex flex-col items-center w-full">
      <section className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gradient-grey-transparent to-gradient-grey-opaque dark:from-black dark:to-black dark:bg-[#161616]">
        <picture className="w-full max-w-[276px] h-auto mb-12">
          <source srcSet="PlasticLabsAssets-04.svg" media="(prefers-color-scheme:dark)" />
          <img alt="Pl mark" src="PlasticLabsAssets-03.svg" />
        </picture>
        <picture className="w-full max-w-[673px] h-auto mb-4">
          <source srcSet="PlasticLabsAssets-06.svg" media="(prefers-color-scheme:dark)" />
          <img alt="Pl mark" src="PlasticLabsAssets-05.svg" />
        </picture>
        <a href="#main">
          <button className="w-[50px] h-[50px] text-[24px] md:w-[80px] md:h-[80px] md:text-[48px] flex flex-row items-center justify-center rounded-full dark:bg-white dark:text-black bg-black text-white "><BsChevronDown /></button>
        </a>
      </section>
      <section id="main" className="w-full flex flex-col items-center bg-gradient-to-r from-gradient-grey-between to-gradient-grey-opaque dark:from-black dark:to-black dark:bg-[#161616] dark:text-white">
        <a className="mb-[50px] mt-[50px]" href="https://blog.plasticlabs.ai" target="_blank" rel="noreferrer">
          <button className="w-[193px] h-[58px] flex flex-row items-center gap-2 justify-center bg-white text-black font-bold rounded-[52px]">
            <ImBubble />
            <p>Blog</p>
          </button>
        </a>
        <div className="md:w-3/4 w-11/12 max-w-4xl flex flex-col items-center justify-center">
          <div className="flex flex-col mb-[50px]">
            <h1 className="pb-4 [font-family:'Exo_2-Bold', Helvetica] font-medium tracking-[0] leading-[normal]">
              About
            </h1>
            <p className="font-normal tracking-[0] leading-[normal]">
              Plastic Labs is a research-driven product company building at the intersection of human and machine
              learning.
              <br />
              <br />
              Our mission is to eliminate the principal-agent problem in human-AI interaction, powering a future of
              abundant, autonomous, individually-aligned agents.
            </p>
          </div>
          <div className="w-full flex flex-col items-start mb-[50px]">
            <h1 className="pb-4 font-medium tracking-[0] leading-[normal]">
              Products
            </h1>
            <div className="flex flex-row gap-x-12">
              <a href="https://honcho.dev" target="_blank"><p>Honcho</p></a>
              <a href="https://bloombot.ai" target="_blank"><p>Bloom</p></a>
              <a href="https://yousim.ai" target="_blank"><p>YouSim</p></a>
            </div>
          </div>
          <div className="w-full flex flex-col mb-[50px]">
            <h1 className="pb-4 font-medium tracking-[0] leading-[normal]">
              Team
            </h1>
            <div className="grid grid-cols-2 sm:flex sm:flex-row sm:gap-x-12">
              <a target="_blank" href="https://x.com/courtlandleer"><p>Courtland Leer</p></a>
              <a target="_blank" href="https://x.com/vintrotweets"><p>Vince Trost</p></a>
              <a target="_blank" href="https://x.com/TheMarshmalon"><p>Vineeth Voruganti</p></a>
              <a target="_blank" href="https://x.com/danibalcells"><p>Dani Balcells</p></a>
              <a target="_blank" href="https://x.com/bengineer10"><p>Ben Lopata</p></a>
              <a target="_blank" href="https://x.com/hyusapx"><p>Ayush Paul</p></a>
            </div>
          </div>
          <div className="w-full flex flex-col mb-[50px]">
            <h1 className="pb-4 font-medium tracking-[0] leading-[normal]">
              Backed By
            </h1>
            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-x-12 sm:text-center">
              <a target="_blank" href="https://www.betaworks.com/"><p>Betaworks</p></a>
              <a target="_blank" href="https://mozilla.vc/"><p>Mozilla Ventures</p></a>
              <a target="_blank" href="https://www.greycroft.com/"><p>Greycroft</p></a>
              <a target="_blank" href="https://www.differential.vc/"><p>Differential</p></a>
              <a target="_blank" href="https://www.algovera.ai/"><p>Algovera</p></a>
              <a target="_blank" href="https://whitestarcapital.com/digital-asset-fund/"><p>White Star Capital</p></a>
              <a target="_blank" href="https://www.seedclub.xyz/getfunded/ventures"><p>Seed Club Ventures</p></a>
              <a target="_blank" href="https://x.com/seethomasowl"><p>Thomas Howell</p></a>
            </div>
          </div>
          <div className="w-full border-t border-black dark:border-white border-t-[1px] p-4"></div>
          <div className="w-full flex flex-col mb-[50px]">
            <h1 className="pb-4 font-medium tracking-[0] leading-[normal]">
              Contact Us
            </h1>
            <p className="pb-1">For questions about our AI tutor, <a className="underline" href="https://discord.gg/bloombotai" target="_blank" rel="noreferrer">join the Bloom Discord</a>.</p>
            <p className="pb-1">To connect, <a className="underline" href="https://discord.gg/plasticlabs" target="_blank" rel="noreferrer">join the Plastic Discord</a>.</p>
            <p className="pb-1">For all other inquiries, email us at <a className="underline" href="mailto:hello@plasticlabs.ai" target="_blank" rel="noreferrer">hello@plasticlabs.ai</a></p>
          </div>
        </div>
      </section >
      <section className="w-full h-[74px] bg-[#161616] dark:bg-white flex flex-col justify-center items-center">
        <div className="md:w-3/4 w-11/12 flex flex-row justify-between items-center">
          <p className="w-[389px] ml-2 font-semibold text-white dark:text-black text-[16px] tracking-[0] leading-[normal]">
            Made by Plastic Labs, © 2023
          </p>
          <div className="flex flex-row gap-x-2 text-white dark:text-black">
            <a href="https://twitter.com/Plastic_Labs" target="_blank" rel="noreferrer"><ImTwitter /></a>
            <a href="https://github.com/plastic-labs" target="_blank" rel="noreferrer"><ImGithub /></a>
            <a href="https://discord.gg/plasticlabs" target="_blank" rel="noreferrer"><BsDiscord /></a>
            <a href="https://huggingface.co/plastic-labs" target="_blank" rel="noreferrer"><SiHuggingface /></a>
          </div>
        </div>
      </section>
    </div >
  );
};

