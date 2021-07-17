import React from "react"
import { Helmet } from "react-helmet"
import favicon from "../.././favicon.ico";

const Index = () => {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <title>How to change wordpress page or term url structure (slug) - GOO</title>
        <meta name="description" content="Change your wordpress url structure using add_rewrite_rule - Change single page url, term slug structure, or even create new 'pages' or 'folders' out of thin air"/>
        <meta name="keywords" content="wordpress, wordpress url structure, wordpress single page url, wordpress single term url, change term slug, change page slug, change wordpress term slug, change wordpress term slug, create sub-folders in wordpress url"/>
        <link rel="shortcut icon" type="image/jpg" href={favicon}/>
      </Helmet>
      <main className="box-content space-y-64 text-center text-gray-700">
        <header className="relative w-full h-screen uppercase text-4xl ">
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

        <section className="text-left">
          <div className="code">
            <code 
              dangerouslySetInnerHTML={{__html: `
                add_action('init', function () &lbrace;<br>
                &nbsp;add_rewrite_rule('inwestycje/([a-z0-9-_]+)/([a-z0-9-_]+)', 'index.php?inwestycje=$matches[2]', 'top');<br><bbr></bbr>
      
                &nbsp;$cities = get_categories('taxonomy=inwestycje');<br>
                &nbsp;&nbsp;foreach($cities as $city) &lbrace;<br>
                &nbsp;&nbsp;&nbsp;$city_is_third_level = (isset($city->parent) && isset(get_term_by('id', $city->parent, 'inwestycje')->parent) && get_term_by('id', $city->parent, 'inwestycje')->parent != 0);<br>
                &nbsp;&nbsp;&nbsp;if ($city_is_third_level) &lcub;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;add_rewrite_rule('inwestycje/' . $city->slug, 'index.php/xx', 'top');<br>
                &nbsp;&nbsp;&rbrace;<br>
                &nbsp;&rbrace;<br>
                &rbrace;);
              `}}
            ></code>
          </div>

          <p>And this is how you should check for every allowed character in the slug <code>([a-z0-9-_]+)</code></p>
        </section>
      </main>
    </>
  )
}

export default Index