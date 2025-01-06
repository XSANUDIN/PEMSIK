import axios from "axios";
import { useEffect, useState } from "react";

const Mahasiswa = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ title: '', body: '' });

  useEffect(() => {
    const ambilData = async () => {
      try {
        const response = await axios('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (e) {
        console.error('Error fetching data:', e);
      }
    };
    ambilData();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', form);
      setData([...data, { ...form, id: response.data.id }]);
      setForm({ title: '', body: '' }); 
    } catch (e) {
      console.error('Error submitting data:', e);
    }
  };

  return (
    <>
    <div className="flex flex-1 flex-col">
      <div className="text-center text-2xl font-bold p-4">AXIOS</div>
      <div className="flex justify-center p-6">
        <div className="w-1/4">
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Title:</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                value={form.title}
                name="title"
                onChange={handleInput}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Body:</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                value={form.body}
                name="body"
                onChange={handleInput}
                required
              />
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-600 text-white font-bold text-2xl px-9 py-2 mr-2 rounded-md hover:bg-green-400">
                +
              </button>
            </div>
          </form>
        </div>
      </div>
    
      <div className="overflow-auto max-h-[600px] bg-gray-200 px-4">
        <table className="min-w-full table-auto">
          <thead className="">
            <tr className="sticky top-0 bg-gray-300">
              <td className="px-4 py-2">Id</td>
              <td className="px-4 py-2">Title</td>
              <td className="px-4 py-2">Body</td>
            </tr>
          </thead>
          <tbody className="max-w-11 overflow-y-scroll">
            {data.map((item) => (
              <tr className="bg-gray-100" key={item.id}>
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.title}</td>
                <td className="border px-4 py-2">{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default Mahasiswa;
