import Component from 'choo/component';
import html from 'choo/html';

import input from './input';
import nav from '../../components/nav';
import slot, { slotSelector } from './slot';

import styles from './index.css';

export default class Color extends Component {
  constructor() {
    super();
    this.colors = {
      s1: '',
      s2: '',
      s3: '',
      s4: '',
    };
    this.onDrop = this.onDrop.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  onDrop(event) {
    const target = event.target.closest(slotSelector);

    if (target) {
      const color = event.dataTransfer.getData('color');
      const id = event.dataTransfer.getData('id');
      const targetId = target.getAttribute('id');

      this.colors[id] = this.colors[targetId];
      this.colors[targetId] = color;
      this.rerender();
    }
  }

  onInput(event) {
    this.colors.s4 = event.target.value;
    this.rerender();
  }

  createElement() {
    // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#droptargets
    return html`
<body class=${styles.body}>
  <div class=${styles.color}>
    <ul class=${styles.palette}>
      ${slot({
        color: this.colors.s1,
        id: 's1',
        onDrop: this.onDrop,
      })}
      ${slot({
        color: this.colors.s2,
        id: 's2',
        onDrop: this.onDrop
      })}
      ${slot({
        color: this.colors.s3,
        id: 's3',
        onDrop: this.onDrop
      })}
      ${slot({
        color: this.colors.s4,
        id: 's4',
        main: true,
        onDrop: this.onDrop
      })}
    </ul>
    ${input({
      name: 'color',
      value: this.colors.s4,
      onInput: this.onInput,
    })}
  </div>
  ${nav({
    back: true,
  })}
</body>
`;
  }
}
