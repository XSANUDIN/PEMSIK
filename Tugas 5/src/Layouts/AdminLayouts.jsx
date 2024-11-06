import { useState } from "react"
import Mahasiswa from "../Pages/Admin/Mahasiswa"
import Button from "../Components/Button"

const AdminLayout = ({children}) => {


    return(
        <div className="bg-gray-200">
            <div className="flex min-h-screen">
            <Sider/>
                <div className="flex flex-1 flex-col">
                    <Header/>
                        {children}
                    <Footer/>
                </div>
            </div>
        </div>
        
   )
}

function Sider(){
    return(
        <>
        <aside className="w-64 bg-indigo-900 text-white" >
            <div className="p-4">
                <h1 className="text-2xl font-bold">Admin Panel</h1>
                <nav className="text-l mt-4 py-2 px-4">
                    <ul>
                        <li className=" hover:font-bold"><a href="">Dashboard</a></li>
                        <li className=" hover:font-bold"><a href="">Mahasiswa</a></li>
                        <li className=" hover:font-bold"><a href="">Setting</a></li>
                    </ul>
                </nav>
            </div>
        </aside>
        </>
    )
}

function Header(){
    const [isVisible, setIsVisible] = useState(false)
    
    const toggle = () => {
        setIsVisible(!isVisible);
    }

    return(
        <>
            <Modal isOpen={isVisible} label={'Tambah Mahasiswa'}/>
            <header className="bg-white p-4">
                <div className="flex justify-end">
                    <Button className={'bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-300'} label="Logout"/>
                </div>
            </header>
            <div className="flex justify-between mb-2 p-4">
                    <h2 className="text-2xl font-semibold">List Mahasiswa</h2>
                    <Button className={'bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-400'} label="Tambah" onClick={toggle}/>
            </div>
        </>
    )
}


function Footer(){
    return(
    <>
        <footer className="w-100% px-4 py-2 bg-indigo-900 text-center text-white">
            &copy; 2024 PEMSIK Sanz
        </footer>
    </>
    )
}

export function Modal({isOpen, label}){
    return(
        <>
        {isOpen && (
            <div id="modal-tambah" className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">{label}</h2>
                <form action="">
                    <div className="mb-4">
                        <label className="block text-gray-700">Nama:</label>
                        <input type="text" className="w-full px-4 py2 border rounded-lg"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nim:</label>
                        <input type="text" className="w-full px-4 py2 border rounded-lg"/>
                    </div>
                    <div className="flex justify-end">
                        <Button className={'bg-yellow-500 text-white px-2 py-1 mr-2 rounded-md hover:bg-yellow-400'} label="Simpan"/>
                        <Button className={'bg-yellow-500 text-white px-2 py-1 mr-2 rounded-md hover:bg-yellow-400'} label="Batal"/>
                    </div>
                </form>
            </div>
        </div>
        )
        }
    </>
    )
}

export default AdminLayout;