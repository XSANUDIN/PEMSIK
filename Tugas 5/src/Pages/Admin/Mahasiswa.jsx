import Tabel from "../../Components/Table";

const DataMhs = [ 
    {no : 1, nama : 'Budiono Siregar', nim : 'A11.2022.1234'},
    {no : 2, nama : 'Faisal', nim : 'A11.2022.1235'},
    {no : 3, nama : 'Joko', nim : 'A11.2022.1236'},
    {no : 4, nama : 'Budi Susanto', nim : 'A11.2022.1237'},
];

export default function Mahasiswa(){
    return(
        <Tabel mhs={DataMhs}/>
    )
}
