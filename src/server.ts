import { ApolloServer } from 'apollo-server-express';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import { createServer } from 'http';

// import helmet from "helmet";
import { schema } from './schema';

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(compression());
const server = new ApolloServer({
  schema,
});
server.applyMiddleware({ app, path: '/graphql' });
const httpServer = createServer(app);
httpServer.listen({ port: PORT }, (): void =>
  console.log(`🚀GraphQL-Server is running on http://localhost:${PORT}/graphql`)
);
