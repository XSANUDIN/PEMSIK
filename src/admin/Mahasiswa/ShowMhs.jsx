import axios from "axios";
import { useEffect, useState } from "react";
import AdminNav from "../AdminNav";

const ShowMhs = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const ambilData = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://demo-api.syaifur.io/api/mahasiswa', {
                headers:{
                    'Authorization' :`Bearer ${token}`
                }
            });
            console.log(response)
            setData(response.data.data);
        } catch (e) {
            console.error('Error fetching data:', e);
        }
        };
        ambilData();
    }, []);


  return (
    <>
      <div className="flex flex-1 flex-col">
        <AdminNav />
        <div className="text-center text-4xl font-bold p-4 mb-4">Data Mahasiswa</div>
        <div className="overflow-auto max-h-[700px] bg-gray-200 px-4">
          <table className="min-w-full table-auto">
            <thead className="rounded-md">
              <tr className="sticky top-0 bg-gray-300 font-semibold">
                <td className="px-4 py-2">NIM</td>
                <td className="px-4 py-2">Nama</td>
                <td className="px-4 py-2">Alamat</td>
                <td className="px-4 py-2">Umur</td>
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
                    <td className="border px-4 py-2">{item.alamat}</td>
                    <td className="border px-4 py-2">{item.umur}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ShowMhs;
