import React from "react"
import { Helmet } from "react-helmet"
import favicon from "../.././favicon.ico";

const Index = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>How to change wordpress page or term url structure (slug) - GOO</title>
        <meta name="description" content="Change your wordpress url structure using add_rewrite_rule - Change single page url, term slug structure, or even create new 'pages' or 'folders' out of thin air"/>
        <meta name="keywords" content="wordpress, wordpress url structure, wordpress single page url, wordpress single term url, change term slug, change page slug, change wordpress term slug, change wordpress term slug, create sub-folders in wordpress url"/>
        <link rel="shortcut icon" type="image/jpg" href={favicon}/>
      </Helmet>
      <main className="p-6 box-content space-y-64 text-center text-gray-700 uppercase text-4xl">
        <header className="relative w-full h-screen ">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl ">
            Change Wordpress URL
            <span className="block lowercase text-2xl md:text-3xl mt-4 text-gray-500">Change wordpress url structure using add_rewrite_rule</span>
            <a href="mailto:thomas_frey@tutanota.com" title="Contact Me" className="text-2xl hover:underline">Contact Me</a>
          </h1>
          <a href="#what" title="See more" 
            className="absolute bottom-12 w-max left-0 right-0 mx-auto block text-2xl 
              text-gray-500 transform hover:scale-110 duration-200 transition-all"
          >
            Read more
          </a>
        </header>
      </main>
    </>
  )
}

export default Index
