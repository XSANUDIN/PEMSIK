import Content from "../page/Content";
import Footer from "../page/Footer";
import Header from "../page/Header";

function AdminMahasiswa(){
    return(
        <>
        <div className="flex flex-1 flex-col">
            <Header name={"Mahasiswa"}/>
            <Content/>
            <Footer/>
        </div>      
    </>
    );
}

export default AdminMahasiswa