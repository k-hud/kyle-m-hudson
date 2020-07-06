import React from 'react'
import { RichText } from 'prismic-reactjs'
import { graphql } from 'gatsby';
import Layout from '../components/layouts'
import BlogPosts from '../components/BlogPosts'


// Query for the Blog Home content in Prismic
export const query = graphql`
{
  prismic{
    allBlog_homes(uid:null){
      edges{
        node{
          _meta{
            id
            type
          }
          headline
          description
          image
        }
      }
    }
    allPosts(sortBy: date_DESC){
      edges{
        node{
          _meta{
            id
            uid
            type
          }
          title
          date
          body{
            ... on PRISMIC_PostBodyText{
              type
              label
              primary{
                text
              }
            }
          }
        }
      }
    }
  }
}
`

// Using the queried Blog Home document data, we render the top section
const BlogHomeHead = ({ home }) => {  
  const avatar = { backgroundImage: 'url(' + home.image.url +')' };
  return (
    <div className="home-header container" data-wio-id={ home._meta.id }>
      <div className="blog-avatar" style={ avatar }>
      </div>
      <h1 className="p-2">{ RichText.asText(home.headline) }</h1>
      <p className="blog-description">{ RichText.asText(home.description) }</p>
       {/* TODO: Reinstall Netlify Identiy and conntect up. */}
        {/* <span class="inline-flex mb-10 rounded-md shadow-sm">
          <button onClick={() => {
            console.log('Clicked!');
          }} type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
          Friends and Family Login <svg class="ml-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/></svg>
          </button>
        </span> */}
    </div>
  );
};

export default ({ data }) => {
  // Define the Blog Home & Blog Post content returned from Prismic
  const doc = data.prismic.allBlog_homes.edges.slice(0,1).pop();
  const posts = data.prismic.allPosts.edges;

  if(!doc) return null;

  return(
    <Layout>
      <BlogHomeHead home={ doc.node } />
      <BlogPosts posts={ posts }/>
    </Layout>
  )
}
