import React from 'react';
import Seo from '../components/Seo';

const About = () => (
    <section className="container">
        <Seo title="Chart" description="This is description" />
        <h1>Heres a chart</h1>
        <p>The chart is rendered inside our MDX document.</p>
    </section>
);

export default About;
