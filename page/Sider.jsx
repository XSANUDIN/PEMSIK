import { Link } from "react-router-dom";

function Sider(sidername){
    return(
        <>
        <aside className="w-64 bg-indigo-900 text-white" >
            <div className="p-4">
                <h1 className="text-2xl font-bold"></h1>
                <nav className="text-l mt-4 py-2 px-4">
                    <ul>
                        <Link to="/admindashboard"><li className=" hover:font-bold">Dashboard</li></Link>
                        <Link to="/adminmmhs"><li className=" hover:font-bold">Mahasiswa</li></Link>
                        <Link to="/addmahasiswa"><li className=" hover:font-bold">JSON Placehholder</li></Link>
                        <Link to="/register"><li className=" hover:font-bold">Registrasi</li></Link>
                        <Link to="/login"><li className=" hover:font-bold">Login</li></Link>
                        <li className=" hover:font-bold"><a href="">Setting</a></li>
                    </ul>
                </nav>
            </div>
        </aside>

        </>
    )
}

export default Sider;