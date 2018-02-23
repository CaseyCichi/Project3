import { taskService, commentService, projectService, authService } from '../services';

const fetchTasks = () => {
  return taskService()
  .all()
  .then(res => res.data)
  .catch(() => []);
};

const fetchComments = () => {
  return commentService()
  .all()
  .then(res => res.data)
  .catch(() => []);
};


const fetchProjects = () => {
  return projectService()
  .all()
  .then(res => res.data)
  .catch(() => []);
};

const fetchUsers = () => {
  return authService()
  .all()
  .then(res => res.data)
  .catch(() => []);
};

export default {
  fetchTasks,
  fetchUsers,
  fetchProjects,
  fetchComments,
}

