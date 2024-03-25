import knex from '../../../../connection'; // koneksi db mysql

export default defineEventHandler(async (event) => {
  //GET All Data 
  try {
    const user = await knex('m_login').select('*').where('kdunit',42);
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