import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

const DocsTemplate = ({
    data: {
        mdx: {
            frontmatter: { title, variant, tags },
            body,
        },
    },
}) => (
    <section className="flex flex-wrap overflow-hidden">
        <div className="w-full overflow-hidden md:w-8/12">
            <h1>{title}</h1>
            <h2>{`Variant - ${variant}`}</h2>
            <ul className="flex mr-3 justify-start">
                tags
                {tags ? tags.map((tag, index) => <li key={index}>{tag}</li>) : null}
            </ul>
            <MDXProvider>
                <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
        </div>
        <div className="w-full overflow-hidden md:w-4/12">
            <h2>Docs</h2>
        </div>
    </section>
);

export default DocsTemplate;
