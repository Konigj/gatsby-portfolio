exports.createPages = async ({actions, graphql, reporter}) => {
    const result = await graphql( `
        query{
            allStrapiBlogs {
                nodes {
                  Slug
                  blog_title
                  id
                }
              }
        }
    `)
    if(result.errors) {
        reporter.panic('No result',result.errors);
    }
    const Blogs = result.data.allStrapiBlogs.nodes;
    
    Blogs.forEach( Entry => {
        actions.createPage({
            path: Entry.Slug,
            component: require.resolve('./src/components/EntryPage.js'),
            context:{
                id:Entry.id
            }
        })
    })
}