import knex from '../../../connection'; // koneksi db mysql


export default defineEventHandler(async (event) => {

const params = getQuery(event);


  const nip = params.nip;
try {
  const userbyID = await knex('m_login').select('*').where('nip', nip);
  return userbyID; 
} catch (error) {
  console.error('Error fetching data user:', error);
  throw createError({
    statusCode: 500,
    message: 'Internal Server Error',
  })
}
}
)