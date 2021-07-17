import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby";

import Header from '../../components/header'

import favicon from ".././favicon.ico";

const Index = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Get Over Software</title>
        <meta name="description" content="Get over your software problems with simple solutions, no need to over complicate thins."/>
        <meta name="keywords" content="Software Problems, Get Over, Get, Over, Website Problems, I need a website, Simple Website, Apps, Applications"/>
        <link rel="shortcut icon" type="image/jpg" href={favicon}/>
      </Helmet>
      <main className="box-content space-y-32 text-center text-gray-700">
        <Header title="Blog" subtitle="choose whatever is your fancy"/>

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
