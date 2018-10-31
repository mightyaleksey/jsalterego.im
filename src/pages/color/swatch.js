import html from 'choo/html';
import cl from 'classnames';

import { isRgb } from '../../utils/color';

import styles from './swatch.css';

function fixColor(color) {
  const c = color.trim();

  if (isRgb(c) && c.charAt(0) !== '#') {
    return `#${c}`;
  }

  return c;
}

export default function swatch(props) {
  const color = fixColor(props.color);

  return html`
<i
  class=${styles.slot}
  style=${`background: ${color}; border-color: ${color}`}
>
</i>
`;
}
