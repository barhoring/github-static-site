import React from "react"
import { Link } from "gatsby"
import content from "../content/article"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1> Host you static site on Github </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>{content.p1}</p>
    <p>
      If you've created your site by hand like it's the 90's, then simply push
      your static assets to a remote branch called gh-pages and you're all done.
      Your site is now live at{" "}
      <a href="https://<USER_NAME>.github.io/<GITHUB_REPO_NAME>/">{`https://<USER_NAME>.github.io/<GITHUB_REPO_NAME>/`}</a>
    </p>
    <p>
      If you are using any kind of boilerplate code (like create-react-app or
      Gatsby) you would have to generate your code as static assets. However
      before you perform the build you need to set the homepage property in your
      package.json file to point to your Github repo. If you don't have a Github
      repo ready yet, don't worry because we will create one shortly. The reason
      for doing this is to tell the bundler (Webpack, Parcel) to treat the \
      path as the value you provided in package.json.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
