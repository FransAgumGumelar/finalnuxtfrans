import knex from '../../connection'; // koneksi db mysql

export default defineEventHandler(async (event) => {
  //GET All Data 
  try {
    const user = await 
    //knex('m_login').select('nip')

    // knex.from('users').innerJoin('accounts', 'users.id', 'accounts.user_id');
    // knex.table('users').innerJoin('accounts', 'users.id', '=', 'accounts.user_id');
    // knex('users').innerJoin('accounts', function () {
    // this.on('accounts.id', '=', 'users.account_id').orOn(
    //     'accounts.owner_id',
    //     '=',
    //     'users.id'
    // );
    // });

    knex('m_login').select('nip','rolename', 'nama_unit', 'nama_grupunit')
    .join('user_roles', 'm_login.roles','=', 'user_roles.roleid')
    .join('m_unit', 'm_unit.kode_unit', '=', 'm_login.kdunit')

    // knex.from('m_login').innerJoin('nip','rolename','nama_unit','nama_grupunit');
    // knex.table('m_login').innerJoin('user_roles', 'm_login.roles', '=', 'user_roles.roleid');
    // knex('m_login').innerJoin('user_roles', function () {
    // this.on('accounts.id', '=', 'users.account_id').orOn(
    //     'accounts.owner_id',
    //     '=',
    //     'users.id'
    // );
    // });

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

