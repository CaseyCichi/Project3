export const ENV = process.env.NODE_ENV || 'development';
export const DB_ENV = process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://localhost/owlist';
