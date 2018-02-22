/* eslint consistent-return: 0, no-else-return: 0*/
import md5 from 'spark-md5';
import * as types from '../types';
import { voteService } from '../services';

function increment(id) {
  return { type: types.INCREMENT_COUNT, id };
}

function decrement(id) {
  return { type: types.DECREMENT_COUNT, id };
}

function destroy(id) {
  return { type: types.DESTROY_TOPIC, id };
}

function createTaskRequest(data) {
  return {
    type: types.CREATE_TOPIC_REQUEST,
    id: data.id,
    count: data.count,
    text: data.text
  };
}

function createTaskSuccess() {
  return {
    type: types.CREATE_TOPIC_SUCCESS
  };
}

function createTaskFailure(data) {
  return {
    type: types.CREATE_TOPIC_FAILURE,
    id: data.id,
    error: data.error
  };
}

function createTaskDuplicate() {
  return {
    type: types.CREATE_TOPIC_DUPLICATE
  };
}

export function typing(text) {
  return {
    type: types.TYPING,
    newTask: text
  };
}

// This action creator returns a function,
// which will get executed by Redux-Thunk middleware
// This function does not need to be pure, and thus allowed
// to have side effects, including executing asynchronous API calls.
export function createTask(text) {
  return (dispatch, getState) => {
    if (text.trim().length <= 0) return;
    const id = md5.hash(text);
    const { task } = getState();
    const data = {
      count: 1,
      id,
      text
    };
    if (task.tasks.filter(taskItem => taskItem.id === id).length > 0) {
      return dispatch(createTaskDuplicate());
    }
    dispatch(createTaskRequest(data));
    return voteService().createTask({ id, data })
      .then((res) => {
        if (res.status === 200) {
          return dispatch(createTaskSuccess());
        }
      })
      .catch(() => {
        return dispatch(createTaskFailure({ id, error: 'Oops! Something went wrong and we couldn\'t create your task'}));
      });
  };
}

export function incrementCount(id) {
  return (dispatch) => {
    return voteService().updateTask({
      id,
      data: {
        isFull: false,
        isIncrement: true
      }
    })
      .then(() => dispatch(increment(id)))
      .catch(() => dispatch(createTaskFailure({id, error: 'Oops! Something went wrong and we couldn\'t add your vote'})));
  };
}

export function decrementCount(id) {
  return (dispatch) => {
    return voteService().updateTask({
      id,
      data: {
        isFull: false,
        isIncrement: false
      }
    })
      .then(() => dispatch(decrement(id)))
      .catch(() => dispatch(createTaskFailure({id, error: 'Oops! Something went wrong and we couldn\'t add your vote'})));
  };
}

export function destroyTask(id) {
  return (dispatch) => {
    return voteService().deleteTask({ id })
      .then(() => dispatch(destroy(id)))
      .catch(() => dispatch(createTaskFailure({id,
        error: 'Oops! Something went wrong and we couldn\'t add your vote'})));
  };
}
