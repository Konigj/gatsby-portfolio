import { graphql, useStaticQuery } from "gatsby";

const useProjects = () => {

    const result = useStaticQuery(
        graphql`
        query {
            allStrapiProjects(sort: {fields: id}) {
                edges {
                    node {
                        id
                        project_description
                        project_link
                        title
                        company_name
                        project_image {
                            localFile {
                                publicURL
                                childImageSharp {
                                    gatsbyImageData(width: 640, formats: AUTO)
                                }
                            }
                        }
                        Tag {
                            tag_name
                            tag_color
                            id
                        }
                        project_bg
                    }
                }
            }
        }

        ` 
    )
    return result.allStrapiProjects.edges
}

export default useProjects;