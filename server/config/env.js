export const ENV = 'development';
export const isProduction = ENV === 'production';
export const apiEndpoint = ENV ? 'http://localhost:3000' : 'https://something.com';

export const DB_ENV = process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://localhost/owlist';

// Replace with 'UA-########-#' or similar to enable tracking
export const trackingID = null;

