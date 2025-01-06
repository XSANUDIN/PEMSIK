import { useState } from "react";
import Button, { delAlert } from "./Button";
import Modal from "../page/Modal";


function Tabel(){
    const mahasiswa = [ 
        { nama : 'Budiono Siregar', nim : 'A11.2022.1234'},
        { nama : 'Faisal', nim : 'A11.2022.1235'},
        { nama : 'Joko', nim : 'A11.2022.1236'},
        { nama : 'Budi Susanto', nim : 'A11.2022.1237'},
    ];

    const [mhs, setMhs] = useState(mahasiswa);
    const [isOpen, setIsOpen] = useState(false);



    const addMhs = (nama, nim) => {
        setMhs([
            ...mhs,{nama : nama, nim: nim}
        ])
    };

    const openModal = () => {
        setIsOpen(!isOpen);
    }

    const deleteMhs = (no) => {
        setMhs((prevMhs) => prevMhs.filter(student => student.nim !== no));
    };

    return(
        <>
        <div>
        <div className="flex justify-between mb-2 p-4">
                <h2 className="text-2xl font-semibold">List Mahasiswa</h2>
                <Button 
                className="bg-blue-700 px-3 py-2 mr-2 hover:bg-blue-400 rounded-md"
                label="Tambah Mahasiswa" 
                onClick={openModal}
                />
        </div>
        <Modal
                isOpen={isOpen}
                label="Add New Student"
                onClose={openModal}
                onSubmit={addMhs}
            />
            <main className="flex-grow bg-blue-50 px-4 py-2">
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
                            { mhs.map((item, index) => (
                                <Data key = {index} no={index + 1} nama={item.nama} nim={item.nim} index={index} deleteMhs={deleteMhs}/>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
                </main>
            </div>
        </>
    )
}

function Data({no, nim, nama, index, deleteMhs}){
    const [isVisible, setIsVisible] = useState(false)
    const show = () => {
        setIsVisible(!isVisible)
    }
    
    const rowColor = index % 2 === 0 ? 'bg-white' : 'bg-gray-300';

    return(       
        <tr className={rowColor}>
            <td className="border px-4 py-2">{no}</td>
            <td className="border px-4 py-2">{nama}</td>
            <td className="border px-4 py-2">{nim}</td>
            <td className="border px-4 py-2 flex justify-center">
                <Button className={'bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-400'} label="Edit" onClick={show}/>
                <Button className={'bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-400'} label="Delete" onClick={() => delAlert(() => deleteMhs(nim))}/>
                
            </td>
        </tr>
    )
}

export default Tabel;