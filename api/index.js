const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync().then(() => {
  server.listen(process.env.PORT, () => {
    console.log('%s listening at 3001');
  });
});
