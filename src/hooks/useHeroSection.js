import { graphql, useStaticQuery } from "gatsby";

const useHeroSection = () => {

    const result = useStaticQuery(
        graphql`
            query {
                allStrapiHeroSection {
                edges {
                    node {
                    id
                    greeting
                    cv {
                        localFile {
                            publicURL
                        }
                    }
                    short_description
                    hero_image {
                        url
                        localFile {
                        childImageSharp {
                            gatsbyImageData(width: 400, formats: AUTO)
                            }
                        }
                    }
                    }
                }
                }
            }
        `
    )

    return result.allStrapiHeroSection.edges[0].node;
};

export default useHeroSection;
