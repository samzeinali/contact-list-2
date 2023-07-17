import axios from "axios";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "../components/Contact";

const Home = () => {
    const api_url = "http://localhost:8080/data";
    const [contactData , setcontactData] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const getData = async () => {
            const rowData = await axios.get(api_url);
            const contacts = rowData.data;
            setcontactData(contacts);
        }
        getData()
    }, []);
    return (
        <div className="w-full">
            <div className="w-full flex flex-row px-44 justify-between py-4 bg-blue-400">
                <h1 className="flex justify-center items-center text-zinc-900">Contact List</h1>
                <button className="p-4 rounded-xl border hover:bg-red-600 cursor-pointer transition ease-linear border-zinc-900 text-zinc-200 text-base bg-rose-600 " onClick={()=>{navigate("/add-contact")}}>Add contact</button>
            </div>
            <div className="w-full px-32 flex flex-row flex-wrap py-14">
                {
                    contactData.map(({id , name, number})=>{
                        return <Contact id={id} contactName={name} contactNumber = {number}/>
                    })
                }
            </div>
        </div>
    )
}

export default Home;