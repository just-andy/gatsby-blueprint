import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Seo from '../components/Seo';

const Articles = () => {
  const {
    allMdx: { nodes }
  } = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "//articles//" } }) {
        nodes {
          frontmatter {
            title
          }
          slug
        }
      }
    }
  `);

  return (
    <section className="container">
      <Seo title="Articles" description="This is description" />
      <h1>Articles List</h1>
      <p>Here are all the article pages</p>
      <ul>
        {nodes.map((node, index) => {
          const {
            slug,
            frontmatter: { title }
          } = node;
          return (
            <li key={index}>
              <Link to={`/articles/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Articles;
