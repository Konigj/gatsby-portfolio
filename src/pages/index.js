import * as React from "react"
import AboutSection from "../components/AboutSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import Layout from '../components/Layout'
import ProjectsSection from "../components/ProjectsSection";

const IndexPage = () => {

  return (
    <Layout page="Home">
      <main>
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
        <BlogSection/>
        <ContactSection/>
      </main>
    </Layout>
  )
}

export default IndexPage
