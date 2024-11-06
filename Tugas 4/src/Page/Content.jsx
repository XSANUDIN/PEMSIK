import { useState } from "react"

function Content(){
    const [isOpen, setIsOpen] = useState(false);

    const modalOpen = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <Header show={modalOpen}/>
            <Tabel/>
            <Footer/>
            <Modal isOpen={isOpen}/>
        </>
    )
}

function Header({show}){
    return(
        <>   
            <header className="bg-white p-4">
                <div className="flex justify-end">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-300">Logout</button>
                </div>
            </header>
            <div className="flex justify-between mb-2 p-4">
                <h2 className="text-2xl font-semibold">List Mahasiswa</h2>
                <button onClick={show} id="bt-add" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-400">Tambah</button>
            </div>
        </>
    )
}


function Tabel(){
    const[modalOpen, setModalOpen] = useState(false);

    const toggle = () => {
        setModalOpen(!modalOpen)
    }

    return(
        <>
        <div className="flex-grow bg-blue-50 px-4 py-2">
                <div className="bg-white rounded-lg p-6">
                <table className="min-w-full tabel-auto">
                    <thead className="">
                        <tr className="bg-gray-300">
                            <th className="px-4 py-2">No</th>
                            <th className="px-4 py-2">Nama</th>
                            <th className="px-4 py-2">NIM</th>
                            <th className="px-4 py-2">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                       <Data
                            no = "01"
                            nama = "Buidono Sirgear"
                            nim = "A11.111.111"
                            handleEdit ={toggle}
                       />
                       <Data
                            no = "02"
                            nama = "Buidono Sirgear"
                            nim = "A11.111.111"
                            handleEdit ={toggle}
                       />
                       <Data
                            no = "03"
                            nama = "Buidono Sirgear"
                            nim = "A11.111.111"
                            handleEdit ={toggle}
                       />
                    </tbody>
                </table>
            </div>
            </div>

            <ModalE isOpen={modalOpen}/>
        </>
    )
}

function Data(props){

    const handleDel = () => {
        window.Swal.fire({
            title: 'Apakah anda yakin?',
            text:'Jika dihapus data akan hilang',
            icon:'warning',
            showCancelButton:true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor:'#d33',
            confirmButtonText:'Hapus'
        }).then((result => {
            if(result.isConfirmed){
                window.Swal.fire(
                    'Datane wes ilang'
                );
            }
        }))
    }

    const rowColor = props.no % 2 === 0 ? 'bg-gray-300' : 'bg-white';

    return(       
        <tr className={rowColor}>
            <td className="border px-4 py-2">{props.no}</td>
            <td className="border px-4 py-2">{props.nama}</td>
            <td className="border px-4 py-2">{props.nim}</td>
            <td className="border px-4 py-2 flex justify-center">
                <button onClick={props.handleEdit} id="btnEdt"className="mx-3 bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-400">Edit</button>
                <button onClick={handleDel} id="btnHps"className="bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-400">Delete</button>
            </td>
        </tr>
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

function Modal({isOpen}){
    return(
        <>
        {isOpen && (
            <div id="modal-tambah" className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">Tambah Mahasiswa</h2>

                <form action="">
                    <div className="mb-4">
                        <label className="block text-gray-700">Nama:</label>
                        <input type="text" className="w-full px-4 py2 border rounded-lg"/>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-yellow-500 text-white px-2 py-1 mr-2 rounded-md hover:bg-yellow-400">Simpan</button>
                        <button className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-400">Batal</button>
                    </div>
                </form>
            </div>
        </div>
        )
        }
    </>
    )
}

function ModalE({isOpen}){
    return(
        <>
        {isOpen && (
            <div id="modal-tambah" className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">Edit Data Mahasiswa</h2>

                <form action="">
                    <div className="mb-4">
                        <label className="block text-gray-700">Nama:</label>
                        <input type="text" className="w-full px-4 py2 border rounded-lg"/>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-yellow-500 text-white px-2 py-1 mr-2 rounded-md hover:bg-yellow-400">Simpan</button>
                        <button className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-400">Batal</button>
                    </div>
                </form>
            </div>
        </div>
        )
        }
    </>
    )
}

export default Content