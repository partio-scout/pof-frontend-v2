import { CreateSchemaCustomizationArgs } from 'gatsby';
import { readFileSync } from 'fs';


const createSchemaCustomization = ({ actions }: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions;

  const typeDefs = readFileSync('./configs/typeDefs.gql').toString();

  createTypes(typeDefs);
};

export default createSchemaCustomization;
