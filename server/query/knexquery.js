import knex from '../connection'; // koneksi db mysql

export default {
    // Get all data
    async getAll(req, res) {
      try {
        const data = await knex('product').select('*');
        res.json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
      }
    },
  
    // Get data by id
    async getById(req, res) {
      try {
        const id = parseInt(req.params.id);
        const data = await knex('product').where('product_id', id).select('*');
  
        if (data.length === 0) {
          return res.status(404).json({ error: 'Data tidak ditemukan.' });
        }
  
        res.json(data[0]);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
      }
    },
  
    // Create new data
    async create(req, res) {
      try {
        const data = req.body;
        const result = await knex('product').insert(data);
  
        if (result.length === 0) {
          return res.status(500).json({ error: 'Gagal menambahkan data.' });
        }
  
        res.json({ message: 'Data berhasil ditambahkan.' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
      }
    },
  
    // Update data by id
    async update(req, res) {
      try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const result = await knex('product').where('product_id', id).update(data);
  
        if (result === 0) {
          return res.status(404).json({ error: 'Data tidak ditemukan.' });
        }
  
        res.json({ message: 'Data berhasil diperbarui.' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
      }
    },
  
    // Delete data by id
    async delete(req, res) {
      try {
        const id = parseInt(req.params.id);
        const result = await knex('product').where('produid', id).delete();
  
        if (result === 0) {
          return res.status(404).json({ error: 'Data tidak ditemukan.' });
        }
  
        res.json({ message: 'Data berhasil dihapus.' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
      }
    },
  };