import { sql } from './db.js'



sql`
  CREATE TABLE users (
    id text PRIMARY KEY,
    name character varying(255),
    senha character varying(255),
    email character varying(255)
);
`.then(() => {
  console.log('tabela criada');
})

sql`
  CREATE TABLE cars (
      id text PRIMARY KEY,
      name character varying(255),
      placa character varying(255),
      marca character varying(255)
  );

`.then(() => {
  console.log('tabela criada');
})