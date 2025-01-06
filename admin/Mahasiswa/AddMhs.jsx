import axios from "axios";
import { useState } from "react";
import AdminNav from "../AdminNav";
import Swal from "sweetalert2";  // Import SweetAlert2

const AddMhs = () => {
  const [form, setForm] = useState({
    progdi_id: "",
    nim: "",
    nama: "",
    alamat: "",
    umur: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      progdi_id: form.progdi_id,
      nim: form.nim,
      nama: form.nama,
      alamat: form.alamat,
      umur: form.umur,
    };

    try {
      const response = await axios.post("http://demo-api.syaifur.io/api/mahasiswa", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Mahasiswa Wes Ditambahke!',
        });
      }
    } catch (error) {
      if (error.response && error.response.data) {
        Swal.fire({
          icon: 'error',
          title: 'Waduh!',
          text: error.response.data.message,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Network Error',
          text: 'Jaringanmu Error.',
        });
      }
    }
  };

  return (
    <>
      <div className="flex flex-1 flex-col">
        <AdminNav />
        <div className="text-center text-4xl font-bold py-6 mb-7">Tambah Mahasiswa</div>

        <div className="flex justify-center px-6">
            <div className="w-full max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Progdi ID */}
                <div>
                <label className="block text-lg font-medium text-gray-700">Progdi ID:</label>
                <input
                    type="number"
                    name="progdi_id"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={form.progdi_id}
                    onChange={handleInput}
                    required
                />
                </div>

                {/* NIM */}
                <div>
                <label className="block text-lg font-medium text-gray-700">NIM:</label>
                <input
                    type="text"
                    name="nim"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={form.nim}
                    onChange={handleInput}
                    required
                />
                </div>

                {/* Nama */}
                <div>
                <label className="block text-lg font-medium text-gray-700">Nama:</label>
                <input
                    type="text"
                    name="nama"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={form.nama}
                    onChange={handleInput}
                    required
                />
                </div>

                {/* Alamat */}
                <div>
                <label className="block text-lg font-medium text-gray-700">Alamat:</label>
                <input
                    type="text"
                    name="alamat"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={form.alamat}
                    onChange={handleInput}
                    required
                />
                </div>

                {/* Umur */}
                <div>
                <label className="block text-lg font-medium text-gray-700">Umur:</label>
                <input
                    type="number"
                    name="umur"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={form.umur}
                    onChange={handleInput}
                    required
                />
                </div>

                <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold text-lg py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>

    </>
  );
};

export default AddMhs;
