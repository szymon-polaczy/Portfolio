import React from "react"
import { Helmet } from "react-helmet"
import favicon from "../.././favicon.ico";

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
            Wordpress
          </h1>
          <a href="#what" title="See more" 
            className="absolute bottom-12 w-max left-0 right-0 mx-auto block text-2xl 
              text-gray-500 transform hover:scale-110 duration-200 transition-all"
          >
            See more
          </a>
        </header>
      </main>
    </>
  )
}

export default Index
