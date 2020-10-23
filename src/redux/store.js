import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

function importAll(r) {
  return r.keys().map(r);
}
const icons = importAll(
  require.context('../images/icons', false, /\.(png|jpe?g|svg)$/)
);
const images = icons.map((el, i) => {
  return { id: `icon${i}`, src: el };
});
const imagesByPage = [];
for (let i = 0; i < images.length; i += 20) {
  imagesByPage.push(images.slice(i, i + 20));
}

const preloadedState =
  window.localStorage.getItem('state') || JSON.stringify(imagesByPage);
const initialState = JSON.parse(preloadedState);

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware())
);

store.subscribe(() => {
  const state = store.getState();
  window.localStorage.setItem('state', JSON.stringify(state));
});
