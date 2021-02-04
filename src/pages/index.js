import React from "react"
import { Helmet } from "react-helmet"

import devices from "./undraw_web_devices_ad58.svg";
import world from "./undraw_connected_world_wuay.svg";
import simple_innovative from "./undraw_innovative_b409.svg";
import stand_out from "./undraw_stand_out_1oag.svg";
import absorbed from "./undraw_absorbed_in_xahs.svg";
import contact from "./undraw_source_code_xx2e.svg";
import favicon from "./favicon.ico";

const Index = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Get Over Software</title>
        <meta name="description" content="Get over your software problems with simple solutions, no need to over complicate thins."/>
        <meta name="keywords" content="Software Problems, Get Over, Get, Over, Website Problems, I need a website, Simple Website, Apps, Applications"/>
        <link rel="canonical" href="https://get-over.online"/>
        <link rel="shortcut icon" type="image/jpg" href={favicon}/>
      </Helmet>
      <main className="p-6 box-content space-y-64 text-center text-gray-700 uppercase text-4xl">
        <header className="relative w-full h-screen ">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl md:text-7xl ">
            Software 
            <span className="block lowercase text-2xl md:text-3xl mt-4 text-gray-500">as simple as it can be</span>
            <a href="mailto:contact@get-over.online" title="Contact Me" className="text-2xl hover:underline">Contact Me</a>
          </h1>
          <a href="#what" title="See more" 
            className="absolute bottom-12 w-max left-0 right-0 mx-auto block text-2xl 
              text-gray-500 transform hover:scale-110 duration-200 transition-all"
          >
            See more
          </a>
        </header>

        <section className="grid xl:grid-cols-2" id="what">
          <article>
            <h2>Whatever the device is</h2>
            <img src={devices} alt="Phone, Laptop, Big Screen" className="max-h-125 mx-auto"/>
          </article>

          <article className="mt-24 xl:mt-0">
            <h2>Wherever you are</h2>
            <img src={world} alt="Las Vegas, Chille, In the middle of the woods" className="max-h-125 mx-auto"/>
          </article>
        </section>

        <section>
          <h2>Let's keep your software projects simple</h2>
          <img src={simple_innovative} alt="Simple and Inovative" className="w-full max-w-screen-lg mx-auto"/>
        </section>

        <section>
          <h2>While</h2>
        </section>

        <section className="grid xl:grid-cols-2">
          <article>
            <h2>Letting you stand out</h2>
            <img src={stand_out} alt="" className="max-h-125 mx-auto"/>
          </article>

          <article className="mt-24 xl:mt-0">
            <h2>And getting your users absorbed</h2>
            <img src={absorbed} alt="" className="max-h-125 mx-auto"/>
          </article>
        </section>

        <section className="mb-36 relative w-full lg:w-max mx-auto">
          <h2>let's get in contact</h2>
          <img src={contact} alt="" className="w-full max-w-screen-lg mx-auto"/>
          <a href="mailto:contact@get-over.online" className="md:absolute md:bottom-32 md:right-24 block mt-6 md:mt-0 text-3xl hover:underline">contact@get-over.online</a>
        </section>
      </main>
    </>
  )
}

export default Index
