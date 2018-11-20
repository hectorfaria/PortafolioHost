import React from 'react';
import Helmet from 'react-helmet';
import '../layouts/main.css';
import Container from './Container';
import { StaticQuery, graphql } from "gatsby"

 export default ({ children, location, history, match }) => (
       <StaticQuery
         query={graphql`
           query LayoutQuery {
             site {
               siteMetadata {
                 title
               }
             }
           }
         `}
         render={data => (
           <>
             <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title} />
             <div>
               <Container>{children}</Container>
             </div>
           </>
         )}
       />
     )