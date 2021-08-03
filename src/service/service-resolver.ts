import { ApolloError } from 'apollo-server-express';
import { Resolvers } from 'resolvers-types.generated';

import { getCompany } from '../data/lse-issuer-client';

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
