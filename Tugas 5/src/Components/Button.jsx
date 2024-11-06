export default function Button({onClick, label = "ini Button", className} ){
    return(
        <button 
            onClick={onClick} 
            className={`bg-red-500 text-white px-2 py-1 mr-2 rounded-md hover:bg-yellow-400 ${className}`}>
            {label}
        </button>
    )
}

export const delAlert = () => {
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