import html from 'choo/html';
import cn from 'classnames';

import styles from './link.css';

export default function link(props) {
  const rel = props.target === '_blank'
        ? 'nofollow noopener'
        : null;

  return html`
<a
  class=${cn(styles.link, props.className)}
  href=${props.href}
  id=${props.id}
  name=${props.name}
  target=${props.target}
  rel=${rel}
>${props.title}</a>
`;
}
