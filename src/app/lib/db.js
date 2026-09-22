const username = process.env.MONGODB_USERNAME;
const password = encodeURIComponent(process.env.MONGODB_PASSWORD);
export const connectionStr =`mongodb+srv://${username}:${password}@cluster0.5qjclmw.mongodb.net/productDB?appName=Cluster0`;