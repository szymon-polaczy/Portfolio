import React from "react"
import { Helmet } from "react-helmet"

import Header from "../../../components/header";

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
        <Header title="Change Wordpress URL" subtitle="change wordpress url structure using add_rewrite_rule"/>

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