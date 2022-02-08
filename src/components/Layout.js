import * as React from "react"
import Helmet from "react-helmet";
import Header from "./Header";
import Footer from './Footer'

const Layout = ({children, page}) => {
  return (
      <>
        <Helmet>
            <title> Juan Rey - {page}</title>
            <meta name="description" content="Juan Rey's Portfolio"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&display=swap" rel="stylesheet"/>
        </Helmet>
        <Header/>
        {children}
        <Footer/>
      </>
      
  )
};

export default Layout;
