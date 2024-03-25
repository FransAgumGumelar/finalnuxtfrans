import knex from '../../../connection'; // koneksi db mysql

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const insertdata = {
        nip: body.nip,
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

    
    // Query INSERT dengan Knex
    try {
      const [user] = await knex('m_login').insert(insertdata, '*');
      return { statusCode: 201, body: user, message: 'Data user berhasil ditambahkan' };
    } catch (error) {
      throw createError({ statusCode: 500, message: error.message });
    }

});