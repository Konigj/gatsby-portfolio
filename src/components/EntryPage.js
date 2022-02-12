import React from 'react'
import {graphql} from 'gatsby'

export const query = graphql `
    query ($id: String!) {
  allStrapiBlogs(filter: {id: {eq: $id}}) {
    edges {
      node {
        blog_title
        id
      }
    }
  }
}

`

const EntryPage = ({data}) => {

    console.log(data)
  return (
    <div>EntryPage</div>
  )
}

export default EntryPage