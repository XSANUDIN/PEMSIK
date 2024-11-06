
import Sider from "./Sider"
import Content from "./Content"

function Layout(){
    return(
        <>
        <div className="bg-gray-300 flex min-h-screen min-w-screen">
            <Sider/>
            <div className="flex flex-1 flex-col">
                <Content/>
            </div>
        </div>
        </>
    )
}
export default Layout