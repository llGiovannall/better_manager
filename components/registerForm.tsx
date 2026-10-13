"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function RegisterForm() {
  const [form, setForm] = useState({
    user: "",
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMsg(data.message || data.error);
    

    if (res.status == 201) {
      router.push("/profile");
    }
  };
const router = useRouter();

  return (
   <main className="login-page">
      <div className="login-decoration" aria-hidden="true" />
      <header className="login-brand" aria-label="Better Manager">
        <span className="login-brand-mark">B</span>
        <span className="login-brand-name">BETTER MANAGER</span>
      </header>

      <section className="login-card" aria-labelledby="login-title">
        <div className="login-symbol" aria-hidden="true">B</div>
        <p className="login-eyebrow">ACESSO EXCLUSIVO</p>
        <h1 id="login-title">Bem-vindo de volta.</h1>
        <p className="login-subtitle">Entre para continuar sua jornada.</p>
        <form className="login-form" onSubmit={handleSubmit}>
            
          <label htmlFor="user">Nome de usuário</label>
          <input id="user" name="user" type="text" autoComplete="username" placeholder="Nome de usuário" value={form.user}
                onChange={(e) => setForm({ ...form, user: e.target.value })} />
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="seu@email.com" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <label htmlFor="password">Senha</label>
          <input id="password" name="password" type="password" autoComplete="password"  placeholder="Sua senha" value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })} />
          <button type="submit">
            ENTRAR
          </button>
            {msg && <p>{msg}</p>}
        </form>
        <p className="login-register">Ainda não tem uma conta? <a href="#cadastro">Criar conta</a></p>
      </section>

      <footer className="login-footer"><span /> FEITO PARA AVANÇAR</footer>
      <button className="floating-control" aria-label="Abrir menu">☷</button>
    </main>
            

        
  );
}