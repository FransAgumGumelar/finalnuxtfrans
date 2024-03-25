import knex from '../../../connection'; // koneksi db mysql

export default defineEventHandler(async (event) => {
  //GET All Data 
  try {
    const user = await knex('m_login').select('nip','nama_pegawai','roles','kdunit','kdperawat','kddokter','nipb');
    return user; // Return data products
  } catch (error) {
    console.error('Error fetching products:', error);
    // Handle errors appropriately (e.g., return a custom error response)
    throw createError({
      statusCode: 500,
      message: 'Internal Server Error',
    });
  }
});

