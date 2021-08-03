import {
  LocalDateResolver,
  //   NonNegativeFloatResolver,
  //   NonNegativeIntResolver,
} from 'graphql-scalars';

export const baseResolver = {
  LocalDate: LocalDateResolver,
  //   NonNegativeInt: NonNegativeIntResolver,
  //   NonNegativeFloat: NonNegativeFloatResolver,
  //   Upload: GraphQLUpload,
};
