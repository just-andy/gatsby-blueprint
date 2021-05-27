import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../components/SEO';

// markup
const IndexPage = () => (
    <div>
        <SEO title="Homepage Test" description="This is a demo description" />
        <h1>Testing display of HTML elements</h1>
        <h2>This is 2nd level heading</h2>
        <p>This is a test paragraph.</p>
        <h3>This is 3rd level heading</h3>
        <p>This is a test paragraph.</p>
        <h4>This is 4th level heading</h4>
        <p>This is a test paragraph.</p>
        <h5>This is 5th level heading</h5>
        <p>This is a test paragraph.</p>
        <h6>This is 6th level heading</h6>
        <p>This is a test paragraph.</p>
        <StaticImage src="../images/dummy-image.jpg" alt="Dummy Image" />
        <ul>
            <li>This is a link</li>
            <li>This is a link</li>
            <li>This is a link</li>
        </ul>
    </div>
);

export default IndexPage;
