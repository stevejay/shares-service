import { makeExecutableSchema } from '@graphql-tools/schema';
import fs from 'fs';
import glob from 'glob';
import { constraintDirective, constraintDirectiveTypeDefs } from 'graphql-constraint-directive';
import _ from 'lodash';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { baseResolver } from './base-resolver.js';
import { serviceResolver } from './service/service-resolver.js';

// Find all the schema files in the src directory and read them.
const typeDefs = glob
  .sync('**/*.graphql', {
    nodir: true,
    cwd: dirname(fileURLToPath(import.meta.url)),
    absolute: true,
  })
  .map((graphqlFilePath) => fs.readFileSync(graphqlFilePath, 'utf8'));

export const schema = constraintDirective()(
  makeExecutableSchema({
    typeDefs: [constraintDirectiveTypeDefs, typeDefs],
    resolvers: _.merge({}, baseResolver, serviceResolver),
  })
);
