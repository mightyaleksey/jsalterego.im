import html from 'choo/html';

import nav from '../../components/nav';

import styles from './index.css';

export default function main() {
  return html`
<body class=${styles.body}>
  <h1 class=${styles.h1}>Aleksey Litvinov</h1>
  <p class='frontender'>senior</p>
  ${nav({
    menu: [{ href: '/color', title: 'color' }]
  })}
</body>
`;
}
