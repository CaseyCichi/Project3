
export const sessionSecret = process.env.SESSION_SECRET || 'Super Super Secret';
export const google = {
  clientID: process.env.GOOGLE_CLIENTID || '62351010161-eqcnoa340ki5ekb9gvids4ksgqt9hf48.apps.googleusercontent.com',
  clientSecret: process.env.GOOGLE_SECRET || '6cKCWD75gHgzCvM4VQyR5_TU',
  callbackURL: process.env.GOOGLE_CALLBACK || '/auth/google/callback'
};

/* To make sure everything referencing the session ID knows what it is called */
export const sessionId = 'sid';
