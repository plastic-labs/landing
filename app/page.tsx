import React from "react";
import { ImBubble, ImTwitter, ImGithub } from "react-icons/im";
import { BsChevronDown, BsDiscord } from 'react-icons/bs'

export default function Light(): JSX.Element {
  return (
    <div className="bg-white font-exo2 text-black flex flex-col items-center w-full">
      <section className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gradient-grey-transparent to-gradient-grey-opaque dark:from-black dark:to-black dark:bg-[#161616]">
        <picture className="w-full max-w-[276px] h-auto">
          <source srcSet="PlasticLabsAssets-04.svg" media="(prefers-color-scheme:dark)" />
          <img alt="Pl mark" src="PlasticLabsAssets-03.svg" />
        </picture>
        <picture className="w-full max-w-[673px] h-auto">
          <source srcSet="PlasticLabsAssets-02.svg" media="(prefers-color-scheme:dark)" />
          <img alt="Pl mark" src="PlasticLabsAssets-01.svg" />
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
        <div className="md:w-3/4 w-11/12 flex flex-col items-center justify-center">
          <div className="flex flex-col mb-[50px]">
            <h1 className="pb-4 [font-family:'Exo_2-Bold',Helvetica] font-bold tracking-[0] leading-[normal]">
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
            <div className="flex flex-row gap-x-8">
              <p>Bloom</p>
              <p>Honcho (coming soon...)</p>
            </div>
          </div>
          <div className="w-full flex flex-col mb-[50px]">
            <h1 className="pb-4 font-medium tracking-[0] leading-[normal]">
              Founders
            </h1>
            <div className="flex flex-row gap-x-8">
              <p>Courtland Leer</p>
              <p>Vince Trost</p>
              <p>Vineeth Voruganti</p>
            </div>
          </div>
          <div className="w-full flex flex-col mb-[50px]">
            <h1 className="pb-4 font-medium  tracking-[0] leading-[normal]">
              Research & Engineering
            </h1>
            <div className="flex flex-row gap-x-8">
              <p>Ayush Paul</p>
              <p>Jacob Van Meter</p>
            </div>
          </div>
          <div className="w-full flex flex-col mb-[50px]">
            <h1 className="pb-4 font-medium tracking-[0] leading-[normal]">
              Advisors & Angels
            </h1>
            <div className="flex flex-row gap-x-8">
              <p>Thomas Howell</p>
              <p>Zach Seward</p>
            </div>
          </div>
          <div className="w-full flex flex-col mb-[50px]">
            <h1 className="pb-4 font-medium tracking-[0] leading-[normal]">
              Backed By
            </h1>
            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-x-8">
              <p>Betaworks</p>
              <p>Mozilla</p>
              <p>Greycroft</p>
              <p>Differential</p>
              <p>Algovera</p>
            </div>
          </div>
          <div className="w-full flex flex-col mb-[50px]">
            <h1 className="pb-4 font-medium tracking-[0] leading-[normal]">
              Discord Testers
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
              <p>a_vidb</p>
              <p>bhaumik</p>
              <p>butlermuwo</p>
              <p>clementlo</p>
              <p>dblurj05832</p>
              <p>d.plummer</p>
              <p>danibalcells</p>
              <p>deividrocha_</p>
              <p>Emmaheineman</p>
              <p>eseoghene</p>
              <p>.greypilgrim</p>
              <p>gustavbronelius</p>
              <p>jas225</p>
              <p>levati</p>
              <p>magisterfalk</p>
              <p>mani</p>
              <p>Maxwell</p>
              <p>mca248</p>
              <p>pr1mordial</p>
              <p>_stevengao</p>
              <p>temisan.</p>
              <p>tylerokada</p>
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
          </div>
        </div>
      </section>
    </div >
  );
};

