import choo from 'choo';

import main from './index/index.js';
import Color from './color/index.js';

const app = choo();
const color = new Color();

app.route('/', main);
app.route('/color', () => color.render());
app.mount('body');
