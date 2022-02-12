import { graphql, useStaticQuery } from "gatsby";

const useBlogs = () => {

    const result = useStaticQuery(
        graphql`
            query ($formatString: String = "", $formatString1: String = "") {
            allStrapiBlogs(sort: {fields: published_at, order: DESC}) {
                edges {
                node {
                    blog_content
                    blog_title
                    created_at(formatString: $formatString)
                    id
                    Slug
                    post_description
                    published_at(formatString: $formatString1)
                    blog_image {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(width: 600, formats: AUTO)
                        }
                    }
                    }
                }
                }
            }
            }

        `
    )

  return result.allStrapiBlogs.edges


};

export default useBlogs;
