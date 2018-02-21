import createHistory from 'history/createMemoryHistory';
import initStore from '../src/utils/initStore';

const createServerStore = (path = '/') => {
  const initialState = {};
  const history = createHistory({ initialEntries: [path] });
  const store = initStore(initialState, history)

  return {
    history,
    store
  };
};

export default createServerStore;
