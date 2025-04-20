"use client"
import React, {useState} from 'react'
import { Input } from '@heroui/input'
import { ToastContainer, toast } from 'react-toastify'
import { Button } from '@heroui/button'
import { database } from "../firebase";
import { ref, set } from "firebase/database";
import { useRef } from "react";

const Register = () => {

    const [name, setName] = useState("");
    const  [email,setEmail] = useState("");
    const  [phone,setPhone] = useState("");
    const  [regNo,setRegNo] = useState("");

    // Function to handle form submission
  const formSubmit = async () => {
    if (name == "" || email == "" || phone == "" || regNo == "") {
      console.log("Please fill all the fields");

      return;
    }
    await set(ref(database, `registration/${email.split("@")[0]}`), {
      Name: name,
      Email: email,
      Phone: phone,
      RegNo: regNo,
    });
    console.log("Data submitted successfully");
    setName("");
    setEmail("");
    setPhone("");
    setRegNo("");
  };

  return (
    <div className='flex flex-col border-2 border-gray-300 rounded-lg p-5 gap-y-5'>
      <Input
        label="Name"
        placeholder="Enter your name"
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)} />

      <Input
        label="Phone no."
        placeholder="Enter your phone number"
        type='number'
        value={phone}
        onChange={(e) => setPhone(e.target.value)} />

      <Input
        label="Email"
        placeholder="Enter your email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />

      <Input
        label="Registration number"
        placeholder="Enter your registration number"
        type={regNo}
        onChange={(e) => setRegNo(e.target.value)} />    

       <Button className="w-fit px-3" variant="ghost" color="success" onPress={formSubmit}>Submit</Button> 
    </div>
    
  )
}

export default Register