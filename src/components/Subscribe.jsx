import { useState } from "react"
import { subscribeNewsletter } from "../utils/api";
import Optional from "./Optional";

function Subscribe() {

    const [myEmail, setMyEmail] = useState("");
    const [submitStatus, setSubmitStatus] = useState("Pending");
    const [errMsg, setErrMsg] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        let emailObj = {
            "sourceRef" : "recruit2022_gary",
            "email" : myEmail
        }


        subscribeNewsletter(emailObj)
        .then((res) => {
            setSubmitStatus("Successful")
            console.log(res.status) // get the status code 200 from server
        })
        .catch((err)=> {
            console.log(err.message) // get the error message from server
            setErrMsg(err.message)
        })
    }



    if (submitStatus === "Successful") {
        return (
            <>
            <p><font color="green">Successfully subscribled!</font></p>
            <Optional myEmail={myEmail}/>
            </>
        )
    }

    return (

    <div className="SubscribeForm">
    <p>Sign up to receive exclusive offers, news and features about your range of products from Product Care Group !</p>
    <p><font color="red">{ errMsg === "" ?  "" : errMsg}</font></p>

    <form onSubmit={handleSubmit}>
    <label htmlFor="email">Enter your email:</label>
    <input type="email" id="email" name="email" required onChange={(event)=>setMyEmail(event.target.value)}></input>
    <button type="Submit">Submit</button>
    </form>
    </div>
    )
}

export default Subscribe;