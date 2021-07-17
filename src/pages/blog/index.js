import React from "react"
import { Helmet } from "react-helmet"
import favicon from ".././favicon.ico";
import { Link } from "gatsby";

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
      <main className="box-content space-y-64 text-center text-gray-700">
        <header className="relative w-full h-screen uppercase text-4xl">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl ">
            Blog
            <span className="block lowercase text-2xl md:text-3xl mt-4 text-gray-500">Choose whatever is your fancy</span>
            <a href="mailto:thomas_frey@tutanota.com" title="Contact Me" className="text-2xl hover:underline">Contact Me</a>
          </h1>
          <a href="#what" title="See more" 
            className="absolute bottom-12 w-max left-0 right-0 mx-auto block text-2xl 
              text-gray-500 transform hover:scale-110 duration-200 transition-all"
          >
            Read more
          </a>
        </header>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="what">
          <article>
            <Link to='/blog/change-wordpress-url-structure-using-add_rewrite_rule'>
              <h2 className="text-2xl">Change wordpress url structure using add_rewrite_rule</h2>
              <p className="-mt-2">Change your wordpress url structure using add_rewrite_rule <br></br> Change single page url, term slug structure, or even create new 'pages' or 'folders' out of thin air</p>
            </Link>
          </article>
        </section>
      </main>
    </>
  )
}

export default Index
