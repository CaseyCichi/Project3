import passport from 'passport';

import { controllers, passport as passportConfig } from '../db';

const userController = controllers && controllers.user;
const commentController = controllers && controllers.comments;
const taskController = controllers && controllers.task;
const projectController = controllers && controllers.project;

export default (app) => {
  if (userController) {
    app.post('/sessions', userController.login);
    app.post('/users', userController.signUp);
    app.delete('/sessions', userController.logout);
  }

  if (passportConfig && passportConfig.google) {
    app.get('/auth/google', passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    }));
    app.get('/auth/google/callback',
      passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
      })
    );
  }

  if (commentController) {
    app.get('/comment', commentController.all);
    app.get('/comment/:id', commentController.findOne);
    app.post('/comment/:id', commentController.add);
    app.put('/comment/:id', commentController.update);
    app.delete('/comment/:id', commentController.remove);
  }

  if (taskController) {
    app.get('/task', taskController.all);
    app.get('/task/:id', taskController.findOne);
    app.post('/task/:id', taskController.add);
    app.put('/task/:id', taskController.update);
    app.delete('/task/:id', taskController.remove);
  }

  if (projectController) {
    app.get('/project', projectController.all);
    app.get('/project/:id', projectController.findOne);
    app.post('/project/:id', projectController.add);
    app.put('/project/:id', projectController.update);
    app.delete('/project/:id', projectController.remove);
  }

};
