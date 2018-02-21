import createHistory from 'history/createMemoryHistory';
import initStore from '../src/utils/initStore';

const createServerStore = (path = '/') => {
  const history = createHistory({ initialEntries: [path] });
  const store = initStore({}, history);
  return {
    history,
    store
  };
};

export default createServerStore;
