import html from 'choo/html';
import cl from 'classnames';

import swatch from './swatch';

import styles from './slot.css';

export const slotSelector = `.${styles.slot}`;

// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#droptargets
function allowDrop(event) {
  event.preventDefault();
}

export default function slot(props) {
  const {
    color,
    id,
    main,
    onDragEnd,
    onDrop,
  } = props;

  return html`
<li
  class=${cl(styles.slot, {
    [styles.main]: main
  })}
  draggable='true'
  id=${id}
  ondragstart=${event => {
    event.dataTransfer.setData('color', color);
    event.dataTransfer.setData('id', id);
  }}
  ondragenter=${allowDrop}
  ondragover=${allowDrop}
  ondragend=${onDragEnd}
  ondrop=${onDrop}
>
  ${swatch({ color })}
</li>
`;
}
