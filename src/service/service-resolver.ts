import { ApolloError } from 'apollo-server-express';

import { getCompany } from '../data/lse-issuer-client.js';
import { Resolvers } from '../resolvers-types.generated.js';

export const serviceResolver: Resolvers = {
  Query: {
    getAllUsers: async () => {
      try {
        const mockUsers = [{ name: 'xyz' }, { name: 'abc' }];
        const company = await getCompany('TRAINLINE PLC');
        console.log('company', company);
        return mockUsers;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
};
