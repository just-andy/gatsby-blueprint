import React, { Fragment } from 'react';
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

    return (
        <section className="container mx-auto">
            {templates[variant] ? templates[variant] : null}
            <div className="block my-5">
                <Link className="btn btn-primary" to="/">
                    Back
                </Link>
            </div>
        </section>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
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
