import React from 'react';
import { graphql, Link } from 'gatsby';

import DocsTemplate from '../../templates/docs-template';
import ArticlesTemplate from '../../templates/articles-template';

const MdxPage = ({
    data,
    data: {
        mdx: {
            frontmatter: { variant },
        },
    },
}) => {
    const templates = {
        docs: <DocsTemplate data={data} />,
        articles: <ArticlesTemplate data={data} />,
    };

    return <section className="container mx-auto">{templates[variant] ? templates[variant] : null}</section>;
};

export const query = graphql`
    query ($slug: String) {
        mdx(slug: { eq: $slug }) {
            frontmatter {
                title
                variant
                tags
                description
            }
            body
        }
    }
`;

export default MdxPage;
