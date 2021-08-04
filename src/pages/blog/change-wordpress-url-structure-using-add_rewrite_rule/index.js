import React from "react"
import { Helmet } from "react-helmet"

import Header from "../../../components/header";

import favicon from "../.././favicon.ico";

const Index = () => {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <title>How to change wordpress page or term url structure (slug) using add_rewrite_rule - GOO</title>
        <meta name="description" content="Change your wordpress url structure using add_rewrite_rule - Change single page url, term slug structure, or even create new 'pages' or 'folders' out of thin air"/>
        <meta name="keywords" content="wordpress, wordpress url structure, wordpress single page url, wordpress single term url, change term slug, change page slug, change wordpress term slug, change wordpress term slug, create sub-folders in wordpress url"/>
        <link rel="shortcut icon" type="image/jpg" href={favicon}/>
      </Helmet>
      <main className="box-content space-y-64 text-center text-gray-700">
        <Header title="Change Wordpress URL" subtitle="change wordpress url structure using add_rewrite_rule"/>

        <section className="text-left md:px-16 xl:px-32 2xl:px-48" id="what">
          <h2 className="blog-headline-2">Why would you do this?</h2>
          <p>I can give you a couple of examples where have I used this.</p>
          <ul className="blog-list">
            <li>I wanted to have kind of tree like structure of my term links (Basically what I mean is I would have a parent/ => parent/child/ => grandparent/parent/child/</li>
            <li>I had to create search filter which would use posts names in the search url - That didnt work because Wordpress tries to help the user find what they're looking for and it redirected these search url to the posts that were in it's url</li>
          </ul>

          <hr></hr>

          <h2 className="blog-headline-2">How do you use add_rewrite_rule?</h2>
          <p>It has 3 arguments. First is the regex that contains the new urls that we will be creating. Second is what query vars should use for this rewrite rule (If you don't know what that is read this - <a href="https://codex.wordpress.org/WordPress_Query_Vars" title="Here's the codex page for it">Codex Query Vars</a>). Third arguments tells Wordpress when it should use my rules and so I almost always use the 'top' value and tell it to go fuck itself.</p>
          <div className="code">
            <code dangerouslySetInnerHTML={{__html: `add_rewrite_rule(string $regex, string|array $query, string $after (Default 'bottom' which makes it optional));`}}></code>
          </div>
          <p>Example - I'm looking for this kind of link <i>domain.com/cities/city_name/section_name</i>, which then allows me to show the user section_name terms page without overriting the parent term slug in the url.
            Basically changing this <i>domain.com/cities/section_name</i> (no city name - where the heck is this section located) to this <i>domain.com/cities/city_name/section_name</i> (nice and simple. now I know where I am)</p>
          <div className="code">
            <code dangerouslySetInnerHTML={{__html: `add_rewrite_rule('cities/([a-z0-9-_]+)/([a-z0-9-_]+)', 'index.php?cities=$matches[2]', 'top');`}}></code>
          </div>
          <p>And this is how you should check for every allowed character in the slug <code>([a-z0-9-_]+)</code></p>

          <hr></hr>

          <h2 className="blog-headline-2">What do I do with the leftover url?</h2>
          <p>As you probably noticed if you're using this to create new urls for your taxonomies then your old url is still working which leaves you with 2 working url that have the same content.</p>

          <h3 className="blog-headline-3">Backwards Compatibility</h3>
          <p>If your using this for single posts then you can create 301 redirects in your single-post_type.php. This will allow you to keep your old url still working which means this is the way you will probably do this if you're doing this on a already working website. This will eat a little bit of your google crawl budget which is something you have to know especially when you add this to a big site.</p>

          <h3 className="blog-headline-3">Burn it to the ground</h3>
          <p>Redirect your old url to 404 and live like it newer existed. You do this by using <code>add_rewrite_rule()</code> and setting your second parameter (your $query) to a page that doesn't exist. Using this will mean your crawl budget won't be affected.</p>

        </section>
      </main>
    </>
  )
}

export default Index
