import { ApolloError } from 'apollo-server-express';

export const serviceResolver = {
  Query: {
    getAllUsers: async (_: any, _args: any) => {
      try {
        const mockUsers = [{ name: 'xyz' }, { name: 'abc' }];
        return mockUsers;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
};
