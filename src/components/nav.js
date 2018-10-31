import html from 'choo/html';

import link from './link';

import styles from './nav.css';

function back() {
  return link({
    className: styles.back,
    href: '/',
    title: html`<span>back</span>`,
  });
}

export default function nav(props) {
  return html`
<nav class=${styles.nav}>
  ${props.back && back()}
  ${(props.menu || []).map(({ href, title }) => link({ href, title }))}
</nav>
`;
}
