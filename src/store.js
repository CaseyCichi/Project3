import createHistory from 'history/createBrowserHistory';
import initStore from '../src/utils/initStore';

export const history = createHistory();
const store = initStore({}, history);

export default store;
