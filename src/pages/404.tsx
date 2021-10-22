import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import Seo from '../components/Seo';

// markup
const NotFoundPage = (props: PageProps) => (
    <>
        <Seo title="Oops we can't find the page" description="It looks like we can't find what you were looking for" />
        <h1>Page not found</h1>
        <p>
            Sorry
            <span role="img" aria-label="Pensive emoji">
                😔
            </span>
            we couldn't find what you were looking for.
            <Link className="btn btn-primary" to="/" title="Return to homepage">
                Go home
            </Link>
            .
        </p>
    </>
);

export default NotFoundPage;
