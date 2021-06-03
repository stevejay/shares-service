import {
  LocalDateResolver,
  NonNegativeFloatResolver,
  NonNegativeIntResolver,
} from 'graphql-scalars';
import { GraphQLUpload } from 'graphql-upload';

export const baseResolver = {
  LocalDate: LocalDateResolver,
  NonNegativeInt: NonNegativeIntResolver,
  NonNegativeFloat: NonNegativeFloatResolver,
  Upload: GraphQLUpload,
};
