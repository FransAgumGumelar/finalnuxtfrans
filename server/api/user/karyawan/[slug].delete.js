import knex from '../../../connection'; // koneksi db mysql

export default defineEventHandler(async (event) => {

  const params = await getRouterParams(event);
 

  const nip = params.nip;

 
  
  const body = await readBody(event);

  const data = {    
            pwd: body.pwd,
            ses_reg: body.ses_reg,
            kdperawat: body.kdperawat,
            kddokter: body.kddokter,
            nama_pegawai: body.nama_pegawai,
            roles: body.roles,
            kdunit: body.kdunit,
            departemen: body.departemen,
            st_dokter_rajal_eksekutif: body.st_dokter_rajal_eksekutif,
            st_dokter_rajal_reguler: body.st_dokter_rajal_reguler,
            st_dokter_rajal_emergency: body.st_dokter_rajal_emergency,
            nipb: body.nipb,
            aktif: body.aktif,
         
         };

         //return data
       
      //Query UPDATE dengan Knex
  try {
    const [user] = await knex('m_login').where('nip', 'coba@simrs').delete(data,"*");
    return { statusCode: 201, body: user, message: 'Data user berhasil diperbarui' };
  } catch (error) {
    throw createError({ statusCode: 500, message: error.message });
  }

});