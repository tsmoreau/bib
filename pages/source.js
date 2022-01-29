import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Utils/Account";
import Nav from "../components/Layout/Nav";
import Footer from "../components/Layout/Footer";
import useEagerConnect from "../hooks/useEagerConnect";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  function BackToTop() {
    return (
      <div className="flex mx-auto h-6 w-6">
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-th-accent-light stroke-th-accent-light"
          stroke-width="1px"
        >
          <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" />
        </svg>
      </div>
    );
  }

  function YggMain() {
    return (
      <div className="flex mx-auto px-4 py-2 w-full mt-6 ">
        <div className="relative bg-th-background shadow-xl shadow-slate-400/20 h-144  w-full   text-right  mb-4 flex mx-auto rounded-lg">
          <div className=" w-full h-full bg-th-background items-center justify-start  rounded-lg flex">
            <div className="w-full lg:w-5/12  h-auto flex justify-center">
              <img
                src="/Yggdrasil.gif"
                className="w-116 h-116 lg:ml-24  object-cover h-full   border-th-accent-light"
              />
            </div>
            <div className="z-50 absolute right-0 lg:w-7/12 text-right ">
              <p className="font-thin text-6xl text-right font-futurapt decoration-th-accent-light underline leading-tight   w-11/12  mt-2 ">
                Yggdrasil
              </p>
              <p className="font-thin text-2xl text-right font-futurapt leading-tight   w-11/12  mt-2 ">
                300/777 Minted
              </p>

              <p className="font-thin text-xl text-right font-futurapt leading-none   w-11/12  mt-2 ">
                Reward Token for Original Anthromancer
                <br /> Board Game Kickstarter Backers
              </p>
              <p className="font-medium text-base text-right font-futurapt leading-none   w-11/12  mt-2 ">
                Offers a Discount on Anthromancer Hymn Tokens and a Free Random
                Class Card in Anthromancer's Upcoming On-Chain Card Game.
              </p>
              <div className="flex mx-auto  justify-end">
                <a href="/tokens/yggdrasil">
                  <p className="border border-th-accent-light font-thin mt-8 mr-10 w-80 text-center  mr-1 font-futurapt text-xl text-white px-8 py-1 pt-1 font-light shadow-xl shadow-slate-400/20-2 bg-th-primary-medium hover:bg-th-accent-light hover:shadow-xl  cursor-pointer ">
                    AVAILABLE TO CLAIM NOW
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function AnthMain() {
    return (
      <div className="flex mx-auto py-4 ">
        <div className="relative max-w-7x shadow-xl shadow-slate-400/20 h-128 l w-full text-left  pb-4 flex mx-auto shadow-xl shadow-slate-400/20 rounded-lg">
          <div className="z-50 h-full w-full lg:w-5/12 flex justify-center items-center h-auto z-0 absolute inset-y-0 right-12 rounded-lg">
            <img
              src="anth4.svg"
              className="object-overflow border rounded-lg z-50 border border-2 border-th-accent-light"
            />
          </div>
          <div className="ml-10 z-0 flex flex-col my-auto">
            <div className=" text-left  justify-end">
              <p className="text-6xl font-thin  my-2 mb-4 decoration-th-accent-light underline">
                Anthropos
              </p>
              <p className="text-2xl font-thin   my-2">1298/7777 Minted</p>
              <p className="text-xl font-thin leading-wide    text-xl  mt-2 ">
                Free-To-Mint Human Blueprint Token
              </p>
              <p className="hidden text-xl text-xl font-thin leading-wide   -mt-2 ">
                Celebrating the Archetypal Diversity of Humanity
              </p>
              <div className="text-base font-normal leading-wide    mt-2 ">
                Offers a Discount on Anthromancer Hymn Tokens and a Free
              </div>
              <div className="text-base font-normal leading-wide    -mt-2 ">
                Character Card in Anthromancer's Upcoming On-Chain Card Game.
              </div>
            </div>
            <a href="/tokens/anthropos">
              <p className="border border-th-accent-light font-thin mt-8 mr-8 w-80 text-center  mr-1 font-futurapt text-xl text-white px-8 py-1 pt-1 font-light shadow-xl shadow-slate-400/20-2 bg-th-primary-medium hover:bg-th-accent-light hover:shadow-xl  cursor-pointer ">
                AVAILABLE TO MINT 2/14/22
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }

  function HymnsMain() {
    return (
      <div className="flex mx-auto  py-4 ">
        <div className="relative max-w-7x shadow-xl shadow-slate-400/20 h-128 l w-full text-right  pb-4 flex mx-auto shadow-xl shadow-slate-400/20 rounded-lg">
          <div className="absolute bottom-20 right-12 text-right  justify-end">
            <p className="text-5xl font-thin  my-2 mb-4 decoration-th-accent-light underline">
              Hymns
            </p>
            <p className="text-2xl font-thin   my-2">2078/10,101 Minted</p>
            <p className="text-xl font-thin leading-wide drop-shadow-lg   text-xl  mt-2 ">
              Primary Token of the Anthromancer Ecosystem
            </p>
            <p className="text-xl font-thin leading-wide drop-shadow-lg   text-xl  -mt-2 ">
              13 Total Variants, with Differing Rewards
            </p>
            <div className="text-base font-normal leading-wide drop-shadow-lg   mt-2 ">
              Offers a Free Class Card Specific to the Hymn Variant in
              Anthromancer's
            </div>
            <div className="text-base font-normal leading-wide drop-shadow-lg   -mt-2 ">
              Upcoming On-Chain Card Game, as well as Future In-Game Rewards
            </div>
          </div>
          <a href="/tokens/hymns">
            <div className="font-thin absolute bottom-6 text-center right-12  mr-1 font-futurapt text-xl text-white px-8 py-1 pt-1 font-light shadow-xl shadow-slate-400/20-2 bg-th-primary-medium shadow-xl shadow-slate-400/20-th-accent-light hover:bg-th-accent-light hover:shadow-xl shadow-slate-400/20-th-primary-medium cursor-pointer ">
              AVAILABLE TO MINT 3/17/22
            </div>
          </a>
        </div>
      </div>
    );
  }

  function YggMobile() {
    return (
      <div className="mt-8 justify-center text-center py-2 px-2  h-full mt-6 shadow-xl shadow-slade-400/20">
        <div className="flex w-auto">
          <div className="flex mx-auto">
            <div className="mt-3 mr-1 flex animate-rotateInUpRight animate-animated animate-repeat-[1] animate-delay-[1000ms] animate-duration-[4s]"></div>
            <div className=" flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 17.86 17.86"
                className="fill-th-accent-light "
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path d="M17.16,5.45c-.09-.22-.19-.42-.29-.63s-.33-.58-.33-.58A8.95,8.95,0,0,0,12.39.69,9.7,9.7,0,0,0,8.89,0,9.08,9.08,0,0,0,5.42.71,8.93,8.93,0,0,0,2.6,2.63,9.19,9.19,0,0,0,1.17,4.5L.93,5c-.08.17-.16.33-.23.51a8.92,8.92,0,0,0,0,7c.11.25.22.5.35.74,0,0,.15.28.3.51A8.91,8.91,0,0,0,8.5,17.85s.27,0,.54,0a8.89,8.89,0,0,0,6.22-2.62,8.85,8.85,0,0,0,2.6-6.3A8.64,8.64,0,0,0,17.16,5.45ZM.77,9.82A7.52,7.52,0,0,1,.72,9a7.87,7.87,0,0,1,0-.84A3.87,3.87,0,0,0,1,8.83L1.1,9A5.31,5.31,0,0,0,.77,9.82ZM16,4.69a3.89,3.89,0,0,1,.59,2.07,4,4,0,0,1-.25,1.39A4.75,4.75,0,0,0,15,7a4.62,4.62,0,0,0-1.76-.57,5,5,0,0,0,.36-1.82,4.92,4.92,0,0,0-.36-1.74A4,4,0,0,1,16,4.69ZM13.23,7.16a3.8,3.8,0,0,1,.88.23,3.91,3.91,0,0,1,1.82,1.49,3.88,3.88,0,0,1-1.37,1.3,4.09,4.09,0,0,1-1.31.46,4.62,4.62,0,0,0,0-3.48ZM13,1.79a5.92,5.92,0,0,1,.7.45,2.3,2.3,0,0,0-.28-.06,5.79,5.79,0,0,0-.6-.07,6.36,6.36,0,0,0-.56-.7A7.39,7.39,0,0,1,13,1.79ZM11.57,9.36a5.26,5.26,0,0,0-.85-.44,4.86,4.86,0,0,0,.84-.46,5.23,5.23,0,0,0,1-1,3.87,3.87,0,0,1,0,2.84A4.9,4.9,0,0,0,11.57,9.36Zm.34,1.26a3.78,3.78,0,0,1-1.07-.37,3.9,3.9,0,0,1-1.16-.89,3.82,3.82,0,0,1,2.23,1.26ZM9.69,8.48a4.53,4.53,0,0,1,.68-.63,3.79,3.79,0,0,1,1.49-.64,4,4,0,0,1-1,.82A3.77,3.77,0,0,1,9.69,8.48ZM12.81,5a3.74,3.74,0,0,1-.24,1,4.64,4.64,0,0,0-1.35-1.15,4.34,4.34,0,0,0-1.68-.56A3.89,3.89,0,0,1,11.47,3a3.85,3.85,0,0,1,.92-.17A4.2,4.2,0,0,1,12.77,4,3.8,3.8,0,0,1,12.81,5Zm-2.13.41a4.09,4.09,0,0,1,1.3,1,5,5,0,0,0-1.36.42,4,4,0,0,0-.8.51,5,5,0,0,0,0-1,4.58,4.58,0,0,0-.34-1.38A3.81,3.81,0,0,1,10.68,5.41Zm-.81,6a4.25,4.25,0,0,0,0-.94,4.45,4.45,0,0,0,.82.49,4.55,4.55,0,0,0,1.35.39,3.81,3.81,0,0,1-.93.86,3.92,3.92,0,0,1-1.52.59A4.58,4.58,0,0,0,9.87,11.42Zm1.42,1.51a4.6,4.6,0,0,0,1.32-1.17,3.38,3.38,0,0,1,.26,1A3.87,3.87,0,0,1,12.48,15a3.92,3.92,0,0,1-2.3-.89,3.71,3.71,0,0,1-.57-.55A4.58,4.58,0,0,0,11.29,12.93ZM6.69,1.4A3.82,3.82,0,0,1,8.23.78a3.91,3.91,0,0,1,2.39.34,3.87,3.87,0,0,1,1.32,1,4.67,4.67,0,0,0-1.67.58A4.9,4.9,0,0,0,8.89,4a4.66,4.66,0,0,0-1.4-1.21,4.42,4.42,0,0,0-1.67-.57A4,4,0,0,1,6.69,1.4ZM8.94,9.79a3.85,3.85,0,0,1,.22,1.27,3.76,3.76,0,0,1-.2,1.3A3.88,3.88,0,0,1,8.74,11,3.74,3.74,0,0,1,8.94,9.79ZM8.7,6.65a3.71,3.71,0,0,1,.21-1.14A4.12,4.12,0,0,1,9.13,7a5.13,5.13,0,0,1-.2,1.08A3.81,3.81,0,0,1,8.7,6.65ZM8.19,9.37a4,4,0,0,1-1,.83A3.81,3.81,0,0,1,6,10.67a4.46,4.46,0,0,1,.86-.76A3.92,3.92,0,0,1,8.19,9.37ZM7.3,8.23A3.78,3.78,0,0,1,6,7.24a4.15,4.15,0,0,1,1.16.42,3.78,3.78,0,0,1,1.06.85A3.92,3.92,0,0,1,7.3,8.23ZM8,6.44a4.35,4.35,0,0,0,0,.95,4,4,0,0,0-.82-.49,4.66,4.66,0,0,0-1.36-.4,4,4,0,0,1,.78-.75,3.78,3.78,0,0,1,1.68-.69A4.54,4.54,0,0,0,8,6.44ZM6.58,4.93A4.51,4.51,0,0,0,5.25,6.1a3.56,3.56,0,0,1-.13-.39A3.76,3.76,0,0,1,5,4.46a3.83,3.83,0,0,1,.4-1.56,3.77,3.77,0,0,1,1.7.47,3.92,3.92,0,0,1,1.17,1A4.34,4.34,0,0,0,6.58,4.93ZM5.26,7.53a4.75,4.75,0,0,0,1,1,4.19,4.19,0,0,0,.84.44,4.76,4.76,0,0,0-1.86,1.45A4,4,0,0,1,5,9.08,4.07,4.07,0,0,1,5.26,7.53Zm2,3.46a4.2,4.2,0,0,0,.81-.5,5,5,0,0,0,0,.95,4.65,4.65,0,0,0,.34,1.38,4,4,0,0,1-2.48-1.41A4.51,4.51,0,0,0,7.24,11ZM5,1.73c.15-.08.33-.17.52-.25a4.65,4.65,0,0,0-.54.7,5.31,5.31,0,0,0-.89.13A9.38,9.38,0,0,1,5,1.73Zm-.34,9A3.32,3.32,0,0,1,4,10.55,3.91,3.91,0,0,1,1.93,9,4,4,0,0,1,3.8,7.45a3.73,3.73,0,0,1,.81-.22,4.66,4.66,0,0,0,0,3.47Zm-3-5.55a3.91,3.91,0,0,1,1.6-1.74,4.14,4.14,0,0,1,1.33-.47,4.72,4.72,0,0,0-.33,1.74A4.76,4.76,0,0,0,4.64,6.5a4.54,4.54,0,0,0-1.75.6A4.6,4.6,0,0,0,1.56,8.27a4,4,0,0,1-.28-1.33A3.79,3.79,0,0,1,1.65,5.15ZM2,13.24H2a3.86,3.86,0,0,1-.64-2.08,4,4,0,0,1,.26-1.45,4.69,4.69,0,0,0,1.34,1.15,4.61,4.61,0,0,0,1.77.57,4.58,4.58,0,0,0-.36,1.82A4.52,4.52,0,0,0,4.68,15a4,4,0,0,1-1.35-.45A3.91,3.91,0,0,1,2,13.24Zm2.94,2.84c-.24-.14-.48-.29-.71-.45l.17,0a4.43,4.43,0,0,0,.72.09,5.54,5.54,0,0,0,.56.7C5.38,16.34,5.13,16.21,4.89,16.08ZM5.51,15h0a4.3,4.3,0,0,1-.37-1,4.2,4.2,0,0,1-.06-1,3.82,3.82,0,0,1,.25-1.16A4.4,4.4,0,0,0,6.65,13a4.42,4.42,0,0,0,1.67.57,4.07,4.07,0,0,1-1.41,1.12A4.21,4.21,0,0,1,5.83,15Zm5.69,1.43a3.94,3.94,0,0,1-4,.28,4.13,4.13,0,0,1-1.28-1,4.86,4.86,0,0,0,1.68-.59A5,5,0,0,0,9,13.87a4.66,4.66,0,0,0,1.4,1.21,4.59,4.59,0,0,0,1.68.57A4,4,0,0,1,11.2,16.45Zm1.15-.05a4.89,4.89,0,0,0,.55-.72,4.24,4.24,0,0,0,.89-.13A8,8,0,0,1,12.35,16.4ZM16.08,13a3.87,3.87,0,0,1-1.55,1.53,4,4,0,0,1-1.24.42,4.68,4.68,0,0,0-.06-3.55A4.75,4.75,0,0,0,15,10.76a4.51,4.51,0,0,0,1.33-1.17,4.21,4.21,0,0,1,.28,1.33A4,4,0,0,1,16.08,13Zm1-3.27a4.92,4.92,0,0,0-.23-.6,1.71,1.71,0,0,0-.12-.23A4.31,4.31,0,0,0,17.09,8a5.87,5.87,0,0,1,.05.83A5.9,5.9,0,0,1,17.11,9.7Z" />
                  </g>
                </g>
              </svg>
              <p className="font-futurapt text-center object-fill w-full  font-thin text-3xl   mb-6 decoration-th-accent-light ">
                A Future Focused Outlook
              </p>
            </div>
          </div>
        </div>
        <p className="hidden font-futurapt font-thin text-3xl  my-0 mb-5 decoration-th-accent-light ">
          Outlook
        </p>

        <div className="w-full justify-center px-2">
          <img
            src="/DiceBoy.jpg"
            className=" flex mx-auto object-cover  rounded-full border border-2 border-th-accent-light"
          />
        </div>
        <div className=" flex flex-col items-center justify-center text-center">
          <p className="pt-4 px-2 font-thin text-lg text-left  font-futurapt leading-tight   w-11/12  mt-2 ">
            Anthromancer is moving into the web3 space as it continues to grow.
            We aim to use the best potentials of those systems to empower
            individuals and communities both.
          </p>
          <p className="pt-4 px-2 font-thin text-lg text-left font-futurapt leading-tight   w-11/12  mt-2 ">
            We plan a wide-range of tokens which empower community reward and
            participation, from Free-To-Mint Character Blueprints, to
            Collectible Mystic Hymns, and more. All offering unlocklable content
            and experiences within the Anthromancer Ecosystem and its Upcoming
            On-Chain Card Game, MDX.
          </p>
          <div className="w-full justify-center flex mx-auto">
            <div className="font-thin  text-center  mt-8 mb-6 font-futurapt text-xl text-white w-72 py-1.5 pt-1 font-light border-2 bg-th-primary-medium border-th-accent-light hover:bg-th-accent-light hover:border-th-primary-medium cursor-pointer ">
              <a target="_blank" href="/source#tokens">
                SEE OUR TOKENS
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function AnthMobile() {
    return (
      <div className="mt-12 justify-center text-center py-2 px-2  h-full mt-6 shadow-xl shadow-slade-400/20">
        <div className="flex w-auto">
          <div className="flex mx-auto">
            <div className="mt-3 mr-1 flex animate-rotateInUpRight animate-animated animate-repeat-[1] animate-delay-[1000ms] animate-duration-[4s]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 17.86 17.86"
                className="fill-th-accent-light"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path d="M17.16,5.45c-.09-.22-.19-.42-.29-.63s-.33-.58-.33-.58A8.95,8.95,0,0,0,12.39.69,9.7,9.7,0,0,0,8.89,0,9.08,9.08,0,0,0,5.42.71,8.93,8.93,0,0,0,2.6,2.63,9.19,9.19,0,0,0,1.17,4.5L.93,5c-.08.17-.16.33-.23.51a8.92,8.92,0,0,0,0,7c.11.25.22.5.35.74,0,0,.15.28.3.51A8.91,8.91,0,0,0,8.5,17.85s.27,0,.54,0a8.89,8.89,0,0,0,6.22-2.62,8.85,8.85,0,0,0,2.6-6.3A8.64,8.64,0,0,0,17.16,5.45ZM.77,9.82A7.52,7.52,0,0,1,.72,9a7.87,7.87,0,0,1,0-.84A3.87,3.87,0,0,0,1,8.83L1.1,9A5.31,5.31,0,0,0,.77,9.82ZM16,4.69a3.89,3.89,0,0,1,.59,2.07,4,4,0,0,1-.25,1.39A4.75,4.75,0,0,0,15,7a4.62,4.62,0,0,0-1.76-.57,5,5,0,0,0,.36-1.82,4.92,4.92,0,0,0-.36-1.74A4,4,0,0,1,16,4.69ZM13.23,7.16a3.8,3.8,0,0,1,.88.23,3.91,3.91,0,0,1,1.82,1.49,3.88,3.88,0,0,1-1.37,1.3,4.09,4.09,0,0,1-1.31.46,4.62,4.62,0,0,0,0-3.48ZM13,1.79a5.92,5.92,0,0,1,.7.45,2.3,2.3,0,0,0-.28-.06,5.79,5.79,0,0,0-.6-.07,6.36,6.36,0,0,0-.56-.7A7.39,7.39,0,0,1,13,1.79ZM11.57,9.36a5.26,5.26,0,0,0-.85-.44,4.86,4.86,0,0,0,.84-.46,5.23,5.23,0,0,0,1-1,3.87,3.87,0,0,1,0,2.84A4.9,4.9,0,0,0,11.57,9.36Zm.34,1.26a3.78,3.78,0,0,1-1.07-.37,3.9,3.9,0,0,1-1.16-.89,3.82,3.82,0,0,1,2.23,1.26ZM9.69,8.48a4.53,4.53,0,0,1,.68-.63,3.79,3.79,0,0,1,1.49-.64,4,4,0,0,1-1,.82A3.77,3.77,0,0,1,9.69,8.48ZM12.81,5a3.74,3.74,0,0,1-.24,1,4.64,4.64,0,0,0-1.35-1.15,4.34,4.34,0,0,0-1.68-.56A3.89,3.89,0,0,1,11.47,3a3.85,3.85,0,0,1,.92-.17A4.2,4.2,0,0,1,12.77,4,3.8,3.8,0,0,1,12.81,5Zm-2.13.41a4.09,4.09,0,0,1,1.3,1,5,5,0,0,0-1.36.42,4,4,0,0,0-.8.51,5,5,0,0,0,0-1,4.58,4.58,0,0,0-.34-1.38A3.81,3.81,0,0,1,10.68,5.41Zm-.81,6a4.25,4.25,0,0,0,0-.94,4.45,4.45,0,0,0,.82.49,4.55,4.55,0,0,0,1.35.39,3.81,3.81,0,0,1-.93.86,3.92,3.92,0,0,1-1.52.59A4.58,4.58,0,0,0,9.87,11.42Zm1.42,1.51a4.6,4.6,0,0,0,1.32-1.17,3.38,3.38,0,0,1,.26,1A3.87,3.87,0,0,1,12.48,15a3.92,3.92,0,0,1-2.3-.89,3.71,3.71,0,0,1-.57-.55A4.58,4.58,0,0,0,11.29,12.93ZM6.69,1.4A3.82,3.82,0,0,1,8.23.78a3.91,3.91,0,0,1,2.39.34,3.87,3.87,0,0,1,1.32,1,4.67,4.67,0,0,0-1.67.58A4.9,4.9,0,0,0,8.89,4a4.66,4.66,0,0,0-1.4-1.21,4.42,4.42,0,0,0-1.67-.57A4,4,0,0,1,6.69,1.4ZM8.94,9.79a3.85,3.85,0,0,1,.22,1.27,3.76,3.76,0,0,1-.2,1.3A3.88,3.88,0,0,1,8.74,11,3.74,3.74,0,0,1,8.94,9.79ZM8.7,6.65a3.71,3.71,0,0,1,.21-1.14A4.12,4.12,0,0,1,9.13,7a5.13,5.13,0,0,1-.2,1.08A3.81,3.81,0,0,1,8.7,6.65ZM8.19,9.37a4,4,0,0,1-1,.83A3.81,3.81,0,0,1,6,10.67a4.46,4.46,0,0,1,.86-.76A3.92,3.92,0,0,1,8.19,9.37ZM7.3,8.23A3.78,3.78,0,0,1,6,7.24a4.15,4.15,0,0,1,1.16.42,3.78,3.78,0,0,1,1.06.85A3.92,3.92,0,0,1,7.3,8.23ZM8,6.44a4.35,4.35,0,0,0,0,.95,4,4,0,0,0-.82-.49,4.66,4.66,0,0,0-1.36-.4,4,4,0,0,1,.78-.75,3.78,3.78,0,0,1,1.68-.69A4.54,4.54,0,0,0,8,6.44ZM6.58,4.93A4.51,4.51,0,0,0,5.25,6.1a3.56,3.56,0,0,1-.13-.39A3.76,3.76,0,0,1,5,4.46a3.83,3.83,0,0,1,.4-1.56,3.77,3.77,0,0,1,1.7.47,3.92,3.92,0,0,1,1.17,1A4.34,4.34,0,0,0,6.58,4.93ZM5.26,7.53a4.75,4.75,0,0,0,1,1,4.19,4.19,0,0,0,.84.44,4.76,4.76,0,0,0-1.86,1.45A4,4,0,0,1,5,9.08,4.07,4.07,0,0,1,5.26,7.53Zm2,3.46a4.2,4.2,0,0,0,.81-.5,5,5,0,0,0,0,.95,4.65,4.65,0,0,0,.34,1.38,4,4,0,0,1-2.48-1.41A4.51,4.51,0,0,0,7.24,11ZM5,1.73c.15-.08.33-.17.52-.25a4.65,4.65,0,0,0-.54.7,5.31,5.31,0,0,0-.89.13A9.38,9.38,0,0,1,5,1.73Zm-.34,9A3.32,3.32,0,0,1,4,10.55,3.91,3.91,0,0,1,1.93,9,4,4,0,0,1,3.8,7.45a3.73,3.73,0,0,1,.81-.22,4.66,4.66,0,0,0,0,3.47Zm-3-5.55a3.91,3.91,0,0,1,1.6-1.74,4.14,4.14,0,0,1,1.33-.47,4.72,4.72,0,0,0-.33,1.74A4.76,4.76,0,0,0,4.64,6.5a4.54,4.54,0,0,0-1.75.6A4.6,4.6,0,0,0,1.56,8.27a4,4,0,0,1-.28-1.33A3.79,3.79,0,0,1,1.65,5.15ZM2,13.24H2a3.86,3.86,0,0,1-.64-2.08,4,4,0,0,1,.26-1.45,4.69,4.69,0,0,0,1.34,1.15,4.61,4.61,0,0,0,1.77.57,4.58,4.58,0,0,0-.36,1.82A4.52,4.52,0,0,0,4.68,15a4,4,0,0,1-1.35-.45A3.91,3.91,0,0,1,2,13.24Zm2.94,2.84c-.24-.14-.48-.29-.71-.45l.17,0a4.43,4.43,0,0,0,.72.09,5.54,5.54,0,0,0,.56.7C5.38,16.34,5.13,16.21,4.89,16.08ZM5.51,15h0a4.3,4.3,0,0,1-.37-1,4.2,4.2,0,0,1-.06-1,3.82,3.82,0,0,1,.25-1.16A4.4,4.4,0,0,0,6.65,13a4.42,4.42,0,0,0,1.67.57,4.07,4.07,0,0,1-1.41,1.12A4.21,4.21,0,0,1,5.83,15Zm5.69,1.43a3.94,3.94,0,0,1-4,.28,4.13,4.13,0,0,1-1.28-1,4.86,4.86,0,0,0,1.68-.59A5,5,0,0,0,9,13.87a4.66,4.66,0,0,0,1.4,1.21,4.59,4.59,0,0,0,1.68.57A4,4,0,0,1,11.2,16.45Zm1.15-.05a4.89,4.89,0,0,0,.55-.72,4.24,4.24,0,0,0,.89-.13A8,8,0,0,1,12.35,16.4ZM16.08,13a3.87,3.87,0,0,1-1.55,1.53,4,4,0,0,1-1.24.42,4.68,4.68,0,0,0-.06-3.55A4.75,4.75,0,0,0,15,10.76a4.51,4.51,0,0,0,1.33-1.17,4.21,4.21,0,0,1,.28,1.33A4,4,0,0,1,16.08,13Zm1-3.27a4.92,4.92,0,0,0-.23-.6,1.71,1.71,0,0,0-.12-.23A4.31,4.31,0,0,0,17.09,8a5.87,5.87,0,0,1,.05.83A5.9,5.9,0,0,1,17.11,9.7Z" />
                  </g>
                </g>
              </svg>
            </div>

            <p className="font-futurapt font-thin text-3xl  my-2 mb-5 decoration-th-accent-light ">
              A Human Experience
            </p>
          </div>
        </div>

        <div className="w-full justify-center px-2">
          <img
            src="/FishHero.jpg"
            className=" flex mx-auto object-cover  rounded-full border border-2 border-th-accent-light"
          />
        </div>
        <div className=" flex flex-col items-center justify-center text-center">
          <p className="pt-4 px-2 font-thin text-lg text-left  font-futurapt leading-tight   w-11/12  mt-2 ">
            Born from the mind of Daniel James Drake and expressed through the
            visual language of Sean Calen Blake, Anthromancer is a tabletop
            gaming experience unlike any other.
          </p>
          <p className="pt-4 px-2 font-thin text-lg text-left font-futurapt leading-tight   w-11/12  mt-2 ">
            Combining beautiful, simple components (a deck of 71 patent-pending
            square cards, a 5x5 grid board, 3 unique dice, and a guidebook) with
            an exotic, musical mythology, it beckons to the curious and invites
            you deeper.
          </p>
          <div className="w-full justify-center flex mx-auto">
            <div className="font-thin  text-center  mt-8 mb-6 font-futurapt text-xl text-white w-72 py-1.5 pt-1 font-light border-2 bg-th-primary-medium border-th-accent-light hover:bg-th-accent-light hover:border-th-primary-medium cursor-pointer ">
              <a
                target="_blank"
                href="https://www.kickstarter.com/projects/danieljamesdrake/anthromancy"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col mx-auto bg-th-background">
      <Head>
        <title>Source | Anthromancer</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="">
        <div className="flex mx-auto scale-30 bg-white opacity-90">
          <ScrollToTop smooth component={<BackToTop />} />
        </div>
      </div>
      <div className="z-40">
        <Nav />
      </div>
      <div className="h-24 w-full bg-lime-300 invisible">Spacer</div>
      <main className="mt-8 flex flex-col mx-auto lg:w-2/3 w-11/12 bg-th-background font-futurapt mb-10 text-center justify-center">
        {/* Shop Title Section */}
        <div id="shop" className="py-8 text-left">
          <p className="font-futurapt text-th-primary-dark mt-16 decoration-th-accent-light underline  font-thin text-7xl ">
            SHOP
          </p>
        </div>

        {/* Shop Section */}
        <div className=" w-full bg-th-background shadow-xl shadow-slate-400/20 mt-2 font-futurapt text-center justify-center flex mx-auto">
          <div className="overflow-hidden relative  h-136 w-full text-right  pb-4 flex  rounded-lg">
            <img
              src="/HeroShotDeux.jpg"
              className="object-cover w-full h-136 object-center rounded-lg shadow-xl shadow-slate-400/20 "
            />
            <div className="font-thin text-white absolute bottom-20 left-12 text-left  justify-end">
              <p className="drop-shadow-xl text-6xl   my-2 mb-4 decoration-th-accent-light underline">
                Anthromancer
              </p>
              <p className=" text-2xl font-thin   my-2">First Edition</p>
              <p className="drop-shadow-xl font-thin leading-wide  text-xl leading-snug  mt-2 ">
                The Ground-Breaking Original Board Game
              </p>
              <p className="drop-shadow-xl font-thin leading-wide  text-xl leading-snug -mt-1  ">
                From the mind of Daniel James Drake and
              </p>
              <p className="drop-shadow-xl font-thin leading-wide  text-xl leading-snug mb-2 -mt-1 ">
                Expressed through the Visual Language of Sean Calen Blake
              </p>
            </div>
            <div className="font-thin absolute bottom-6 text-center left-12  mr-1 font-futurapt text-xl text-white px-8 py-1 pt-1 font-light shadow-xl shadow-slate-400/20-2 bg-th-primary-medium shadow-xl shadow-slate-400/20-th-accent-light hover:bg-th-accent-light hover:shadow-xl shadow-slate-400/20-th-primary-medium cursor-pointer ">
              <a href="https://anthromancy.backerkit.com/hosted_preorders">
                ORDER NOW
              </a>
            </div>
          </div>
        </div>
        {/* Tokens Section */}
        <div
          id="tokens"
          className="bg-th-background w-full mt-2 lg:mt-36 font-futurapt text-center justify-center"
        >
          <div className="py-8 text-left">
            <p className=" font-futurapt text-th-primary-dark mt-16 decoration-th-accent-light underline font-thin text-7xl ">
              TOKENS
            </p>
          </div>
          <YggMain />
          <AnthMain />
          <HymnsMain />
        </div>
        {/* Downloads Section */}
        <div
          id="downloads"
          className="hidden bg-th-background w-full mt-2 lg:mt-36 font-futurapt text-center justify-center"
        >
          <div className="py-8 text-left">
            <p className=" font-futurapt text-th-primary-dark mt-16 decoration-th-accent-light underline font-futurapt font-thin text-7xl ">
              DOWNLOADS
            </p>
          </div>

          <div className="flex mx-auto  py-2">
            <div className="relative max-w-7x shadow-xl shadow-slate-400/20 h-116 l w-full text-right  pb-4 flex mx-auto shadow-xl shadow-slate-400/20 rounded-lg">
              <div className="absolute bottom-6 right-12 text-right  justify-end">
                <p className="text-6xl font-thin  my-2 mb-4 decoration-th-accent-light underline">
                  Codex
                </p>
                <p className="text-2xl font-thin   my-2">300/777 Minted</p>
                <p className="text-xl leading-snug  mt-2 ">
                  Reward Token for Original Anthromancer
                </p>
                <p className="text-xl leading-snug mb-2 -mt-2 ">
                  Board Game Kickstarter Backers
                </p>
                <div className="text-lg leading-tight mt-4  ">
                  Also Available for Purchase Here. Offers Discounts on
                  Anthromancer Hymn Tokens.
                </div>
                <div className="text-lg leading-tight -mt-1 mb-2  ">
                  As well as a Free Class Card (gas-cost-only) in Anthromancer's
                  Upcoming On-Chain Card Game.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        #title {
          font-family: Futura;
        }

        @font-face {
          font-family: futura-pt, sans-serif;

          font-weight: 300;

          font-style: normal;
          src: url("https://use.typekit.net/pcf5uvh.css");
        }

        @font-face {
          font-family: Futura;
          src: url(/fonts/futura-pt-book.otf);
        }
        @font-face {
          font-family: Nunito;
          src: url("https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap");
        }
        @font-face {
          font-family: Anthro;
          src: url(/fonts/AnthromancerRegular2.otf);
        }
      `}</style>

      <style jsx global>{`
        body {
          margin: 0;
        }

        html {
          font-family: sans-serif, Apple Color Emoji, Segoe UI Emoji,
            Segoe UI Symbol, Noto Color Emoji;
          line-height: 1.5;
        }

        *,
        *::after,
        *::before {
          box-sizing: shadow-xl shadow-slate-400/20-box;
        }
      `}</style>
    </div>
  );
}
