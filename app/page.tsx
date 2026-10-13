
"use client";


import Image from "next/image";
import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import useProgress from "../components/ui/useProgress";
import LoadingDots from "../components/ui/loadingDots";
import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react"
import { useRouter } from "next/navigation";


export default function Home() {
 const progress = useProgress();
 const router = useRouter();

  React.useEffect(() => {
  if (progress === 100) {
    router.push("/register");
  }
}, [progress]);

  return(

     <main className="auth-shell">
      <section className="brand-panel">
        <div className="brand-topline">
          <span className="brand-mark">B</span>
          <span>BETTER MANAGER</span>
        </div>
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="brand-content">
          <span className="eyebrow">ACESSO EXCLUSIVO</span>
          <h1>
            Seu próximo
            <br />
            <em>nível</em> começa aqui.
          </h1>
          <p>
            Uma experiência criada para quem transforma ideias em movimento.
          </p>
          <div className="loading-card">
            <div className="loading-card-head">
              <span>
                <span className="live-dot" />
                SISTEMA ONLINE
              </span>
              <strong>87%</strong>
            </div>
            <div className="progress-track">
              <div className="progress-fill" />
            </div>
            <div className="loading-card-foot">
              <span>Preparando seu espaço</span>
              <span className="loading-dots">
                <i />
                <i />
                <i />
              </span>
            </div>
          </div>
        </div>
        <div className="brand-footer">
        
          <span className="footer-line" />
          <span>Feito para avançar</span>
        </div>
        </section>
        </main>
  )}