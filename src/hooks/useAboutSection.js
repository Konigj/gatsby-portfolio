import { graphql, useStaticQuery } from "gatsby";

const useAboutSection = () => {

    const result = useStaticQuery(
        graphql`
            {
                allStrapiAboutSection {
                edges {
                    node {
                    description
                    }
                }
                }
            }
        `
    )

  return result.allStrapiAboutSection.edges[0].node.description;


};

export default useAboutSection;
