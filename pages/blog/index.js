import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../../components/Utils/Account";
import Nav from "../../components/Layout/Nav";
import Footer from "../../components/Layout/Footer";
import useEagerConnect from "../../hooks/useEagerConnect";

export default function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
    <div className="w-full h-full bg-th-background">
      <Head>
        <title>Anthromancer - Blog</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <div className="h-20 w-full bg-lime-300 invisible">Spacer</div>

      <main className=" flex flex-col mx-auto lg:w-2/3 w-11/12 bg-th-background font-futurapt font-thin mb-10 text-center justify-center">
        {/* Header*/}

        <div id="shop" className="py-8 text-left">
          <p className="font-futurapt text-th-primary-dark mt-16 decoration-th-accent-light underline  font-thin text-7xl ">
            BLOG
          </p>
        </div>

        {/* Main Post Area */}
        <div className="mt-8 w-full justify-start text-left">
          <div className="w-8/12 flex mx-auto rounded-lg mt-4 justify-center">
            <video
              width="320"
              height="240"
              autoPlay
              muted
              loop
              className="rounded-lg flex mx-auto"
            >
              <source
                src="https://ipfs.infura.io/ipfs/QmVwJGSZmsBzsseFEx3RtCnGL8q5d1DXZQxUkDt7aCjEpd"
                type="video/mp4"
              />
            </video>
          </div>
          <p className="text-5xl">Blog Title</p>
          <p className="text-xl mt-2">
            Published On | JANUARY 30th 2022 | Daniel James Drake
          </p>
          <div className="flex mx-auto justify-start mt-2">
            <p className="text-base px-2 py-0.5 bg-th-accent-light">tags:</p>
            <p className="text-base px-2 py-0.5 bg-th-accent-light">tokens</p>
            <p className="text-base px-2 py-0.5 bg-th-accent-light">
              yggdrasil
            </p>
          </div>
          <div className="bg-th-accent-light h-1 w-full "></div>
          <div className="w-full leading-snug mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
            tincidunt arcu non sodales neque sodales. At augue eget arcu dictum
            varius duis at consectetur lorem. Tincidunt lobortis feugiat vivamus
            at. Vitae tortor condimentum lacinia quis vel eros. Accumsan in nisl
            nisi scelerisque. Aenean pharetra magna ac placerat vestibulum
            lectus mauris. Lacus vel facilisis volutpat est velit egestas dui.
            Non sodales neque sodales ut etiam sit amet nisl purus. Iaculis eu
            non diam phasellus vestibulum. Vulputate dignissim suspendisse in
            est ante in. Sed faucibus turpis in eu mi bibendum. Maecenas
            volutpat blandit aliquam etiam erat velit scelerisque. Turpis
            egestas pretium aenean pharetra magna. Nulla malesuada pellentesque
            elit eget. Lacinia at quis risus sed vulputate odio ut. Ac tortor
            vitae purus faucibus. Morbi quis commodo odio aenean sed adipiscing
            diam donec. Mattis ullamcorper velit sed ullamcorper. Leo duis ut
            diam quam nulla porttitor.
            <br />
            <br />
            Semper risus in hendrerit gravida rutrum. Mattis molestie a iaculis
            at erat pellentesque adipiscing. Nascetur ridiculus mus mauris vitae
            ultricies leo integer malesuada. Imperdiet proin fermentum leo vel
            orci. Fringilla phasellus faucibus scelerisque eleifend donec. Nunc
            sed velit dignissim sodales ut eu. Vitae congue eu consequat ac
            felis donec et odio pellentesque. Est ultricies integer quis auctor.
            Feugiat pretium nibh ipsum consequat. Facilisis mauris sit amet
            massa. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim.
            <br />
            <br />
            Egestas dui id ornare arcu odio ut sem nulla pharetra. Justo eget
            magna fermentum iaculis. Morbi enim nunc faucibus a pellentesque sit
            amet porttitor eget. Nibh nisl condimentum id venenatis a. In massa
            tempor nec feugiat nisl pretium fusce. In hac habitasse platea
            dictumst quisque sagittis purus sit. Arcu non odio euismod lacinia
            at quis risus sed vulputate. Pretium viverra suspendisse potenti
            nullam ac tortor vitae. Posuere lorem ipsum dolor sit amet
            consectetur adipiscing elit. Faucibus a pellentesque sit amet. Vitae
            sapien pellentesque habitant morbi tristique senectus. Amet massa
            vitae tortor condimentum lacinia quis vel eros. Est ultricies
            integer quis auctor elit sed vulputate mi. Nec ultrices dui sapien
            eget mi proin. Laoreet sit amet cursus sit amet dictum. Odio euismod
            lacinia at quis risus sed. Sed lectus vestibulum mattis ullamcorper.
            <br />
            <br />
            Consequat nisl vel pretium lectus quam id. Ipsum a arcu cursus vitae
            congue mauris rhoncus. Quam vulputate dignissim suspendisse in est
            ante in. Molestie a iaculis at erat pellentesque. Purus sit amet
            luctus venenatis lectus magna fringilla urna porttitor. Vestibulum
            rhoncus est pellentesque elit ullamcorper. Phasellus egestas tellus
            rutrum tellus pellentesque eu. At urna condimentum mattis
            pellentesque id nibh tortor id aliquet. Massa sed elementum tempus
            egestas sed sed risus pretium quam. Placerat duis ultricies lacus
            sed turpis tincidunt. Enim nulla aliquet porttitor lacus luctus
            accumsan tortor posuere ac. Eleifend quam adipiscing vitae proin
            sagittis nisl. Eu volutpat odio facilisis mauris sit amet massa
            vitae. Egestas dui id ornare arcu odio ut sem. Nullam eget felis
            eget nunc lobortis mattis aliquam faucibus.
            <br />
            <br />
            Ac ut consequat semper viverra nam. Malesuada proin libero nunc
            consequat interdum varius. Turpis nunc eget lorem dolor sed viverra
            ipsum nunc aliquet. Eget nunc lobortis mattis aliquam faucibus.
            Velit euismod in pellentesque massa placerat duis. Tortor pretium
            viverra suspendisse potenti nullam ac tortor vitae. Tincidunt arcu
            non sodales neque sodales ut etiam sit amet. Ut aliquam purus sit
            amet luctus venenatis lectus. Purus non enim praesent elementum
            facilisis. Orci sagittis eu volutpat odio facilisis. In arcu cursus
            euismod quis viverra nibh. Eget egestas purus viverra accumsan in
            nisl nisi. Ullamcorper malesuada proin libero nunc consequat.
          </div>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        #title {
          font-family: Futura;
        }

        @font-face {
          font-family: Futura;
          src: url(/fonts/futura-pt-book.otf);
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
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
