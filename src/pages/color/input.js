import html from 'choo/html';

import styles from './input.css';

export default function input(props) {
  const {
    name,
    value,
    onInput,
  } = props;

  return html`
<input
  class=${styles.input}
  name=${name}
  type='text'
  value=${value}
  oninput=${onInput}
/>
`;
}
