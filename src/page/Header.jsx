import { useState } from "react";
import Button from "../Components/Button"
import Modal from "../page/Modal"

function Header({name}){
    const [isVisible, setIsVisible] = useState(false)
    
    const toggle = () => {
        setIsVisible(!isVisible);
    }

    return(
        <>
            <header className="bg-indigo-900 p-4">
                <div className="flex justify-between">
                <h1 className="font-bold text-2xl text-center text-white">{name}</h1>
                    <Button className={'bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-300'} label="Logout"/>
                </div>
            </header>
        </>
    )
}

export default Header