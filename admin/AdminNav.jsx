import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

export default function AdminNav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="w-full">
      <nav className="bg-indigo-900 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-3xl font-semibold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-500 transition-colors duration-300"
          >
            Logout
          </button>
        </div>
        <ul className="flex space-x-8 justify-center mt-6">
          <li>
            <Link
              to="/showmhs"
              className="text-white text-lg font-medium hover:text-blue-400 transition-all duration-300"
            >
              Show Mahasiswa
            </Link>
          </li>
          <li>
            <Link
              to="/addmhs"
              className="text-white text-lg font-medium hover:text-blue-400 transition-all duration-300"
            >
              Tambah Mahasiswa
            </Link>
          </li>
          <li>
            <Link
              to="/updatemhs"
              className="text-white text-lg font-medium hover:text-blue-400 transition-all duration-300"
            >
              Edit Mahasiswa
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
