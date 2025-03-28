const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Path to your db.json
const middlewares = jsonServer.defaults({
  static: '' // Prevents looking for a public directory
});

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 8080; // Use PORT from Render, fallback to 8080
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
