import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/vaultalarm/VaultAlarm-Regular.woff';

const Typography = createGlobalStyle`

/* Set Font Face */
@font-face {
    font-family: Parkly;
    src: url(${font});
}


:root {
    --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-heading: Parkly, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    /* set base values */
    --text-base-size: 1em;
    --text-scale-ratio: 1.2;

    /* font sizes */

    /* Headings */
}

body {
    font-size: calc(var(--text-base-size) * 1.125);
    font-family: var(--font-primary);
    color: var(--black);
}

h1, h2, h3, h4, h5 {
    font-family:var(--font-heading);
    font-weight:700;
}


`;

export default Typography;
