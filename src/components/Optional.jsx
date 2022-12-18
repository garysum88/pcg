import { useState } from "react"
import { addDetails } from "../utils/api";

function Optional({myEmail}) {

    const [myName, setMyName] = useState("");
    const [myPhoneNumber, setMyPhoneNumber] = useState("");
    const [myPostcode, setMyPostcode] = useState("");

    const [patchStatus, setPatchStatus] = useState("Pending");
    const [patchErrMsg, setPatchErrMsg] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        let patchObj = {
            "sourceRef" : "recruit2022_gary",
            "name" : myName,
            "myPhoneNumber" : myPhoneNumber,
            "myPostCode" : myPostcode
        }

        addDetails(myEmail, patchObj)
        .then((res)=> {
            setPatchStatus("Successful")
            console.log(res.status) // get the status code 200 from server
        })
        .catch((err) => {
            console.log(err.message) // get the error message from server
            setPatchErrMsg(err.message)
        })
    }

    if (patchStatus==="Successful") {
        return (
            <p><font color="blue">Thank you for providing your details!</font></p>
        )
    }

    return (
    <div className="OptionalForm">

        <font color="red">{ patchErrMsg ==="" ? "": patchErrMsg }</font>
        <p>To help us send information most relevant to you, provide us with a few more details below:</p>
    <form onSubmit={handleSubmit}>
    <p><b>{myEmail}</b></p>
    <p><input type="text" id="name" name="name" placeholder="Name (optional)" onChange={(event)=>setMyName(event.target.value)}></input></p>
    <p><input type="text" id="phone" name="phone" placeholder="Phone (optional)" onChange={(event)=>setMyPhoneNumber(event.target.value)}></input></p>
    <p><input type="text" id="postcode" name="postcode" placeholder="Postcode (optional)" onChange={(event)=>setMyPostcode(event.target.value)}></input></p>
    <button type="Submit">Submit</button>
    </form>
    </div>
    )
}

export default Optional;