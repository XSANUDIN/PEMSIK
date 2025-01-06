import Sider from './Sider.jsx'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
import Mahasiswa from '../Components/Mahasiswa.jsx'

function home(){

    return(
        <>
            <div className="flex flex-1 flex-col">
                <Header />
                <Content/>
                <Footer/>
            </div>             
        </>
    )
}

export default home