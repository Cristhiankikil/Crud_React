import pkg from 'pg';
const { Pool } = pkg;

export const db = new Pool({
    user: 'cedup',
    password: 'cedup',
    host: 'postgres-react',
    port: 5432,
    database: 'cedup'
});