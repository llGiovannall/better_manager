
"use client"


import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useState } from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";



export default function Profile() {

  const [showTabs, setShowTabs] = useState(false);

const router = useRouter();

  return (


 
        <section className="py-10 bg-white/10 rounded-xl">
           <button style={{ backgroundColor: 'lightgray', alignSelf: 'flex-start', padding: '1px', color: 'black' }} onClick={() => setShowTabs(!showTabs)}>
       +
      </button>
             {showTabs && (
        <Tabs defaultValue="account" className="w-full sm:w-[300px] md:w-[500px] lg:w-[500px] mr-auto">
    <TabsList variant="line" style={{backgroundColor: 'black'}} className="lg:w-[40%] h-9 border-gray-300 mb-4 flex-col h-fit">
  <TabsTrigger value="account" className="w-full h-8">
    Chat & Meeting
  </TabsTrigger>
  <TabsTrigger value="Workspace" className="w-full h-8" onClick={() => router.push("/workspace")}>
    Workspace
  </TabsTrigger>
   <TabsTrigger value="Management" className="w-full h-8" >
    Management
  </TabsTrigger>
</TabsList>
</Tabs> )}
          <main className="profile-page">
      <header className="profile-header">
        <div className="profile-logo">Perfil</div>
        <button className="create-profile">Criar perfil</button>
      </header>

      <section className="profile-shell" aria-labelledby="profile-title">
        <div className="cover-image">
          <button className="cover-action" aria-label="Alterar imagem de capa">◉</button>
          <div className="avatar-wrap">
            <div className="avatar" aria-label="Foto de perfil de Alex Morgan" role="img" />
            <button className="avatar-action" aria-label="Alterar foto de perfil">◉</button>
          </div>
        </div>

        <div className="profile-content">
          <h1 id="profile-title">Informações pessoais</h1>
          <form className="profile-form">
            <div className="field-group"><label htmlFor="first-name">Nome</label><input id="first-name" placeholder="Nome" /></div>
            <div className="field-group"><label htmlFor="last-name">Sobrenome</label><input id="last-name" placeholder="Sobrenome" /></div>
            <div className="field-group"><label htmlFor="gender">Sexo</label><select id="gender" defaultValue=""><option value="" disabled>Selecione</option><option>Masculino</option><option>Feminino</option><option>Outro</option></select></div>
            <div className="field-group"><label htmlFor="birth-date">Data de nascimento</label><input id="birth-date" type="date" /></div>
            <button className="save-profile" type="submit">Salvar alterações</button>
          </form>
        </div>
      </section>
      <button className="floating-control" aria-label="Abrir menu">☷</button>
    </main>
    </section>
  )
}


   
  