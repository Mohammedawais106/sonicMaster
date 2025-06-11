// import React, { useState } from 'react'
// import axios from "axios"
// import { ClipLoader } from 'react-spinners';
// // import { ToastContainer } from 'react-toastify';
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';


// const Contact = () => {
//   const [name, setName]=useState("")
//   const [email, setEmail]=useState("")
//   const [message, setMessage]=useState("")
//   const [loading, setLoading]=useState("")
//   const [mobile, setMobile]=useState("")

//   let sendEmail=async(e)=>{
//     e.preventDefault();
//     setLoading(true)
//     try {
//       let {data}= await axios.post("http://localhost:4000/send/email",{name,email,message,mobile},{withCredentials:true,headers:{"Content-Type":"application/json"}})
//       setName("");
//       setEmail("");
//       setMessage("");
//       setMobile("")
//       toast.success(data.message)
//       setLoading(false)
//     } catch (error) {
//       setLoading(false)
//       toast.error(error.response.data.message)
//     }
//   }

//   return (
//     <div className="contact">
//       <form onSubmit={sendEmail}>
//         <h1>JOIN OUR NEW BATCH</h1>
//         <div>
//           <label htmlFor="">Name</label>
//           <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
//         </div>
//         <div>
//           <label htmlFor="">Email</label>
//           <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
//         </div>
//         <div>
//           <label htmlFor="">Mobile Number</label>
//           <input type="number" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
//         </div>
//         <div>
//           <label htmlFor="">Message</label>
//           <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>
//         </div>
//         <button type='submit' disabled={loading} style={{display:"flex",justifyContent:'center',alignItems:"center",gap:"15px"}}>
//           {loading && <ClipLoader size={20} color="white"/>}
//           Send Messag</button>
//       </form>
//     </div>
//   )
// }

// export default Contact




import React, { useState } from 'react'
import axios from "axios"
import { ClipLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [mobile, setMobile] = useState("")

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidMobile = (mobile) =>
    /^[0-9]{10}$/.test(mobile);

  let sendEmail = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !mobile || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!isValidMobile(mobile)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);
    try {
      let { data } = await axios.post(
        "http://localhost:4000/send/email",
        { name, email, message, mobile },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setName("");
      setEmail("");
      setMessage("");
      setMobile("");
      toast.success(data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="contact">
      <form onSubmit={sendEmail}>
        <h1>JOIN OUR NEW BATCH</h1>
        <div>
          <label htmlFor="">Name</label>
          <input placeholder='Enter Your Full Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input placeholder='Enter Your Personal Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Mobile Number</label>
          <input placeholder='Enter Your Mobile Number' type="tel" maxLength={10} value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Message</label>
          <input placeholder='Enter Your Package' type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button type='submit' disabled={loading} style={{ display: "flex", justifyContent: 'center', alignItems: "center", gap: "15px" }}>
          {loading && <ClipLoader size={20} color="white" />}
          Send Message
        </button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Contact
