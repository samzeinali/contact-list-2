import axios from "axios";
import { useNavigate } from "react-router-dom";
const Contact = ({id , contactName , contactNumber}) => { 
    const api_url = "http://localhost:8080/data";
    const navigate = useNavigate()
    const deleteHandler = () => {
        const thisURL = api_url + "/" + id;
        axios.delete(thisURL);
        setTimeout(() => {
            window.location.reload(false);
        }, 100);
    }
    return (
        <div className="w-[40%] flex my-4 mx-10 justify-evenly flex-row p-4 border-[1px] border-solid border-zinc-900 bg-slate-100 rounded-xl" key={id}>
            <div className="flex w-[60%] flex-col">
                <p className="mb-2 mt-1 text-zinc-900">{contactName}</p>
                <p className="text-zinc-900">{contactNumber}</p>
            </div>
            <div className="w-[30%] flex flex-col px-5">
                <button className="p-1 mb-2 cursor-pointer" onClick={deleteHandler}>delete</button>
                <button className="p-1 cursor-pointer" onClick={()=>{navigate(`/edit-contact/${id}`)}}>edit</button>
            </div>
        </div>
    )
}

export default Contact