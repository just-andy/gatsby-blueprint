import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Seo from '../components/Seo';

const Docs = () => {
  const {
    allMdx: { nodes }
  } = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "//docs//" } }) {
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
      <Seo title="Docs" description="This is description" />
      <h1>Docs List</h1>
      <p>Here are all the docs pages</p>
      <ul>
        {nodes.map((node, index) => {
          const {
            slug,
            frontmatter: { title }
          } = node;
          return (
            <li key={index}>
              <Link to={`/docs/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Docs;
