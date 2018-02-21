import createHistory from 'history/createBrowserHistory';
import initStore from './utils/initStore';

export const history = createHistory();
const initialState = {};
const store = initStore(initialState, history)

export default store;