import React from "react"
import { Helmet } from "react-helmet"

import Header from '../components/header'

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
      <main className="box-content space-y-64 text-center text-gray-700 uppercase">
        <Header title="Software" subtitle="as simple as it can be"/>

        <section className="grid xl:grid-cols-2 text-4xl" id="what">
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
          <a href="mailto:thomas_frey@tutanota.com" className="md:absolute md:bottom-32 md:right-24 block mt-6 md:mt-0 text-3xl hover:underline">thomas_frey@tutanota.com</a>
        </section>
      </main>
    </>
  )
}

export default Index
