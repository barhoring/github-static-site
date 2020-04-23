import React from "react"
import { Link } from "gatsby"
import content from "../content/article"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const userRepoLink = `https://<USER_NAME>.github.io/<GITHUB_REPO_NAME>/`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1> Host your static site on Github </h1>
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
    <p>
      So, in your package.json:
      <code>{`{
..
"homepage": "${userRepoLink}",
..
}`}</code>
    </p>
    <p>
      Now, create a new branch called gh-pages. Naming is important here, this
      is a Github thing. (You can confige your static site to point to your docs
      folder on the master branch)
    </p>
    <code>git checkout -b gh-pages</code>
    <p>Now run the build command, probably:</p>
    <code>npm run build</code>
    <p>
      This will create a build (or dist) folder with your compiled code. Now,
      replace the root folder's content with the content inside the build
      directory. Simply remove all files and folders in the root folder,
      including the build directory, and spill the contents of the build dir
      into the root. If you've done the previous operations in reverse order it
      means you're following me 'till here. Remember to keep your .git file
      though, sweetie!
    </p>
    <p>
      Now push your branch to Github or create a{" "}
      <a href="https://github.com/new">new repository</a> now
    </p>
    <p>
      Your site is now live at{" "}
      <code>{`https://<USER_NAME>.github.io/<GITHUB_REPO_NAME>/GITHUB_REPO_NAME`}</code>
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      {/*<img src={require("./logo.jpeg")} /> */}
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
