import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Seo from '../components/Seo';

const DocsTemplate = ({
    data: {
        mdx: {
            frontmatter: { title, variant, description, tags },
            body,
        },
    },
}) => (
    <>
        <Seo title={title} description={description} />
        <section>
            <h1>{title}</h1>
            <h5>{`Variant - ${variant}`}</h5>
            <ul className="flex mr-3 justify-start">
                tags
                {tags ? tags.map((tag, index) => <li key={index}>{tag}</li>) : null}
            </ul>
            <MDXProvider>
                <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
        </section>
    </>
);

export default DocsTemplate;
