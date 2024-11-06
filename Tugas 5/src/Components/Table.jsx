import { useState } from "react";
import Button, { delAlert } from "./Button";
import { Modal } from "../Layouts/AdminLayouts";

function Tabel({mhs}){
    return(
        <>
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
                            <Data key = {index} no={index + 1} nama={item.nama} nim={item.nim} index={index} />
                        ))
                        }
                    </tbody>
                </table>
            </div>
            </main>
        </>
    )
}

function Data({no, nim, nama, index}){
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
                <Modal label={'Edit Mahasiswa'} isOpen={isVisible}/>
                <Button className={'bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-400'} label="Edit" onClick={show}/>
                <Button className={'bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-400'} label="Delete" onClick={delAlert}/>
            </td>
        </tr>
    )
}

export default Tabel;