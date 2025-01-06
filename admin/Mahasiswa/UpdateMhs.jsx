import axios from "axios";
import { useEffect, useState } from "react";
import AdminNav from "../AdminNav";
import Swal from "sweetalert2";

const UpdateMhs = () => {
  const [data, setData] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedMhs, setSelectedMhs] = useState(null);

  useEffect(() => {
    const ambilData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://demo-api.syaifur.io/api/mahasiswa", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data.data);
      } catch (e) {
        console.error("Error.....:", e);
      }
    };
    ambilData();
  }, []);

  const handleEditClick = (mahasiswa) => {
    setSelectedMhs(mahasiswa);
    setIsEditModalOpen(true);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedMhs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://demo-api.syaifur.io/api/mahasiswa/${selectedMhs.id}`,
        selectedMhs,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Data Mahasiswa Berhasil Diupdate.",
      });

      setData((prev) =>
        prev.map((item) =>
          item.id === selectedMhs.id ? { ...item, ...selectedMhs } : item
        )
      );
      setIsEditModalOpen(false); // Close the modal after update
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gwagal",
        text: error.response?.data?.message || "Error ngedit.",
      });
    }
  };

  const handleDeleteClick = (mahasiswaId) => {
    Swal.fire({
      title: "Apakah kamu yakin?",
      text: "Sing wis ilang rabakal balek!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancel, Gasido",
      confirmButtonText: "Yes, Hapus!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const token = localStorage.getItem("token");
          await axios.delete(`http://demo-api.syaifur.io/api/mahasiswa/${mahasiswaId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          Swal.fire("Deleted!", "Data wis ilang.", "success");

          setData((prev) => prev.filter((item) => item.id !== mahasiswaId));
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Waduh",
            text: "Error Euy.",
          });
        }
      }
    });
  };

  return (
    <>
      <div className="flex flex-1 flex-col">
        <AdminNav />
        <div className="text-center text-4xl font-bold p-4 mb-4">Edit atau Hapus Data Mahasiswa</div>
        <div className="overflow-auto max-h-[700px] bg-gray-200 px-4">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="sticky top-0 bg-gray-300 font-semibold">
                <td className="px-4 py-2">NIM</td>
                <td className="px-4 py-2">Nama</td>
                <td className="px-4 py-2">Aksi</td>
              </tr>
            </thead>
            <tbody className="max-w-full overflow-x-auto">
                {data.map((item, index) => (
                    <tr
                    key={item.id}
                    className={`bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''} hover:bg-gray-200 transition-colors duration-200`}
                    >
                    <td className="border px-4 py-2">{item.nim}</td>
                    <td className="border px-4 py-2">{item.nama}</td>
                    <td className="border px-4 py-2 flex gap-2 justify-start">
                        <button
                        onClick={() => handleEditClick(item)}
                        className="bg-yellow-400 text-white px-4 py-1 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        aria-label={`Edit ${item.nama}`}
                        >
                        Edit
                        </button>
                        <button
                        onClick={() => handleDeleteClick(item.id)}
                        className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                        aria-label={`Delete ${item.nama}`}
                        >
                        Delete
                        </button>
                    </td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

{/* Modal Edit */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-1/3">
            <h2 className="text-2xl font-bold mb-4">Edit Mahasiswa</h2>
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">NIM</label>
                <input
                  type="text"
                  name="nim"
                  value={selectedMhs?.nim || ""}
                  onChange={handleEditInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Nama</label>
                <input
                  type="text"
                  name="nama"
                  value={selectedMhs?.nama || ""}
                  onChange={handleEditInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Alamat</label>
                <input
                  type="text"
                  name="alamat"
                  value={selectedMhs?.alamat || ""}
                  onChange={handleEditInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Umur</label>
                <input
                  type="number"
                  name="umur"
                  value={selectedMhs?.umur || ""}
                  onChange={handleEditInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-bold px-6 py-2 rounded-md"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="bg-gray-400 text-white font-bold px-6 py-2 rounded-md ml-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateMhs;
