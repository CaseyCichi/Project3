import { taskService } from '../services';

const fetchTasks = () => {
  return taskService()
  .all()
  .then(res => res.data)
  .catch(() => []);
};


export default fetchTasks;

