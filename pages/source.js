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
              src="/ProductShot.jpg"
              className="object-cover w-full h-136 object-center rounded-lg  "
            />
            <div className="font-thin text-white absolute bottom-20 left-12 text-left  justify-end">
              <p className=" text-6xl   my-2 mb-4 decoration-th-accent-light underline">
                Anthromancer
              </p>
              <p className=" text-2xl font-thin   my-2">First Edition</p>
              <p className="font-thin leading-wide  text-xl leading-snug  mt-2 ">
                The Ground-Breaking Original Board Game
              </p>
              <p className="font-thin leading-wide  text-xl leading-snug -mt-1  ">
                From the mind of Daniel James Drake and
              </p>
              <p className="font-thin leading-wide  text-xl leading-snug mb-2 -mt-1 ">
                Expressed through the Visual Language of Sean Calen Blake
              </p>
            </div>
            <div className="font-thin absolute bottom-6 text-center left-12  mr-1 font-futurapt text-xl text-white px-8 py-1 pt-1 font-light shadow-xl shadow-slate-400/20-2 bg-th-primary-medium shadow-xl shadow-slate-400/20-th-accent-light hover:bg-th-accent-light hover:shadow-xl shadow-slate-400/20-th-primary-medium cursor-pointer ">
              ORDER NOW
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
                    Offers a Discount on Anthromancer Hymn Tokens and a Free
                    Random Class Card in Anthromancer's Upcoming On-Chain Card
                    Game.
                  </p>
                  <div className="flex mx-auto  justify-end">
                    <a href="/tokens/yggdrasil">
                      <p className="border border-th-accent-light font-thin mt-8 mr-8 w-80 text-center  mr-1 font-futurapt text-xl text-white px-8 py-1 pt-1 font-light shadow-xl shadow-slate-400/20-2 bg-th-primary-medium hover:bg-th-accent-light hover:shadow-xl  cursor-pointer ">
                        AVAILABLE TO CLAIM NOW
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mx-auto py-4 ">
            <div className="relative max-w-7x shadow-xl shadow-slate-400/20 h-128 l w-full text-left  pb-4 flex mx-auto shadow-xl shadow-slate-400/20 rounded-lg">
              <div className="z-50 h-full w-full lg:w-5/12 flex justify-center items-center h-auto z-0 absolute inset-y-0 right-12 rounded-lg">
                <img
                  src="anth4.svg"
                  className="object-overflow border rounded-lg z-50 border border-2 border-th-accent-light"
                />
              </div>
              <div className="ml-2 z-0 flex flex-col my-auto">
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
                    Character Card in Anthromancer's Upcoming On-Chain Card
                    Game.
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

          <div className="flex mx-auto  py-4 ">
            <div className="relative max-w-7x shadow-xl shadow-slate-400/20 h-128 l w-full text-right  pb-4 flex mx-auto shadow-xl shadow-slate-400/20 rounded-lg">
              <div className="absolute bottom-20 right-12 text-right  justify-end">
                <p className="text-6xl font-thin  my-2 mb-4 decoration-th-accent-light underline">
                  Hymns
                </p>
                <p className="text-2xl font-thin   my-2">2078/10,101 Minted</p>
                <p className="text-xl font-thin leading-wide    text-xl  mt-2 ">
                  Primary Token of the Anthromancer Ecosystem
                </p>
                <p className="text-xl font-thin leading-wide    text-xl  -mt-2 ">
                  13 Total Variants, with Differing Rewards
                </p>
                <div className="text-base font-normal leading-wide    mt-2 ">
                  Offers a Free Class Card Specific to the Hymn Variant in
                  Anthromancer's
                </div>
                <div className="text-base font-normal leading-wide    -mt-2 ">
                  Upcoming On-Chain Card Game, as well as Future In-Game Rewards
                </div>
              </div>
              <a href="/tokens/hymns">
                <div className="font-thin absolute bottom-6 text-center right-12  mr-1 font-futurapt text-xl text-white px-8 py-1 pt-1 font-light shadow-xl shadow-slate-400/20-2 bg-th-primary-medium shadow-xl shadow-slate-400/20-th-accent-light hover:bg-th-accent-light hover:shadow-xl shadow-slate-400/20-th-primary-medium cursor-pointer ">
                  AVAILABLE TO MINT 3/17/22
                </div>
              </a>
            </div>
            <div></div>
          </div>
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
