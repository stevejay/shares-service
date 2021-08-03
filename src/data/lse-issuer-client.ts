import { Knex, knex } from 'knex';
import path from 'path';
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';

// const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log(__dirname);

const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, './lse-issuers.db'),
  },
  useNullAsDefault: true,
};

const knexInstance = knex(config);

interface Company {
  company: string;
}

export async function getCompany(company: string): Promise<Company> {
  const entity = await knexInstance<Company>('issuer').where('company', company).first(); // Resolves to any
  if (!entity) {
    throw new Error('404 not found');
  }
  return entity;
}
