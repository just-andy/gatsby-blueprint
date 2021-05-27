import { createGlobalStyle } from 'styled-components';

const Spacing = createGlobalStyle`


:root {
/* spacing values */
--space-unit: 1em;
--space-4: calc(0.25 * var(--space-unit)); // 4
--space-8:   calc(0.5 * var(--space-unit)); // 8
--space-16: --space-unit; // 16
--space-24:   calc(1.25 * var(--space-unit)); // 24
}
`;

export default Spacing;
