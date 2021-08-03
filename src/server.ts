import './open-telemetry';

import { ApolloServer } from 'apollo-server-express';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import { createServer } from 'http';

// import sqlite3 from 'sqlite3';
// import { open } from 'sqlite';
// import helmet from "helmet";
import { schema } from './schema';

const PORT = process.env.PORT || 4000;

(async () => {
  const app = express();
  app.use(cors());
  app.use(compression());
  const server = new ApolloServer({
    schema,
  });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  const httpServer = createServer(app);
  httpServer.listen({ port: PORT }, (): void =>
    console.log(`🚀GraphQL-Server is running on http://localhost:${PORT}/graphql`)
  );
})().catch(console.error);

async function closeGracefully(signal: NodeJS.Signals) {
  console.log(`*^!@4=> Received signal to terminate: ${signal}`);

  // await fastify.close()
  // await db.close() if we have a db connection in this app
  // await other things we should cleanup nicely
  process.exit();
}
process.on('SIGINT', closeGracefully);
process.on('SIGTERM', closeGracefully);

// query {
//     getAllUsers {
//         name
//     }
// }

// Health check URL:
// http://localhost:4000/.well-known/apollo/server-health

// (async () => {
//     const db = await open({
//       filename: './src/data/lse-issuers.db',
//       driver: sqlite3.cached.Database,
//       mode: sqlite3.OPEN_READONLY,
//     });
//     const result = await db.get('SELECT * FROM issuer WHERE company = ?', 'TRAINLINE PLC');
//     console.log(result);
//   })().catch(console.error);
