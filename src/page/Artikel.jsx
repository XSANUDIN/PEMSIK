
const varJudul = "Kunjungan gw ke suatu tempat";
const varDeskripsi = "Sesuatu yang mw gw kunjungi";

function artikel(){
   
    return(
        <>
            <Judul/>
            <Deskripsi/>
        </>
    )
}

function Judul(){
    return <h1>{varJudul}</h1>;

}
function Deskripsi(){
    return <p>{varDeskripsi}</p>;

}

export default artikel