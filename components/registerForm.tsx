"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
 const [msg, setMsg] = useState("");

 const handleSubmit = async () => {
    const res = await fetch("/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        body: JSON.stringify(form),
        },
    });
const data = await res.json();
    setMsg(data.message || data.error);
    };
    return (
<div className="flex flex-col gap-4 w-full max-w-sm">
<input
 placeholder="Name"
  value={form.name} 
  onChange={(e) => 
    setForm({ ...form, name: e.target.value })} />

<input 
placeholder="Email" 
value={form.email} 
onChange={(e) => 
    setForm({ ...form, email: e.target.value })} />

<input placeholder="Password" 
type="password" 
value={form.password}
 onChange={(e) => 
 setForm({ ...form, password: e.target.value })} />
<button onClick={handleSubmit}>Register</button>
{msg && <p>{msg}</p>}
</div>
  )
}