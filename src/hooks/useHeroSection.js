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
                            fluid(maxWidth: 400) {
                            base64
                            tracedSVG
                            srcWebp
                            srcSetWebp
                            originalImg
                            originalName
                            }
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
