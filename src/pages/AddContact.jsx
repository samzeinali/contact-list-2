import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddContact = () => {
    const [contactName , setcontactName] = useState("");
    const [contactNumber , setcontactNumber] = useState("");
    const api_url = "http://localhost:8080/data";
    const navigate = useNavigate();
    const changeNameHandler = ({target}) => { 
        const userName = target.value;
        setcontactName(userName);
    }
    const changeNumberHandler = ({ target }) => {
        const userNumnber = target.value;
        setcontactNumber(userNumnber); 
    }

    const submitHndler = (event) => {
        if (contactName && contactNumber) {
            event.preventDefault();
            axios.post(api_url , {name : contactName , number : contactNumber});
            setTimeout(() => {
                navigate("/")
            }, 50);
        } else {
            alert("please enter name and number in fields")
        }
    }
    return (
        <>
            <h1 className="w-full text-center mb-6 mt-[70px]">Add Contact ... </h1>
            <div className="w-[600px] mx-auto border-[1px] border-solid border-zinc-800 rounded-xl bg-slate-200 flex">
                <form method="post" className="w-full flex flex-col justify-center px-8 py-4">
                    <label className="w-full py-2 text-zinc-900 text-xl font-sans" htmlFor="name">Contact Name : </label>
                    <input className="w-full p-3 rounded-lg border-[1px] border-solid border-zinc-800 font-sans text-lg text-zinc-700" id="name" type="text" onChange={changeNameHandler} value={contactName} name = "name" placeholder="please enter name ... " />
                    <label className="w-full py-2 text-zinc-900 text-xl font-sans" htmlFor="number">Contact Number : </label>
                    <input className="w-full p-3 rounded-lg border-[1px] border-solid border-zinc-800 font-sans text-lg text-zinc-700" type="text" id="number" onChange={changeNumberHandler} value={contactNumber} name = "number" placeholder="please enter  phoneNumber ... "/>
                    <button className="w-[180px] p-1 rounded-lg border-[1px] border-solid border-zinc-800 font-sans mt-4 bg-sky-300 cursor-pointer hover:bg-sky-400 transition ease-linear text-xl" onClick={submitHndler}>Add ... </button>
                </form>
            </div>
        </>
    )
}

export default AddContact