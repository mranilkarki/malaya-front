'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

const destinations = ["China", "India", "Bhutan", "Nepal"];

const PlaneIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <path
      d="M52 12L28 28L8 22L4 26L24 36L18 48L22 50L32 40L44 60L48 58L42 32L62 16L52 12Z"
      fill="currentColor"
    />
  </svg>
);



export default function Loader() {
  const [destIndex, setDestIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fadeText, setFadeText] = useState(true);

  useEffect(() => {
    const prog = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(prog); return 100; }
        return p + 0.8;
      });
    }, 30);
    return () => clearInterval(prog);
  }, []);

  useEffect(() => {
    const cycle = setInterval(() => {
      setFadeText(false);
      setTimeout(() => {
        setDestIndex(i => (i + 1) % destinations.length);
        setFadeText(true);
      }, 400);
    }, 2000);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #5b714b, #4a5c3d)",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      overflow: "hidden",
      position: "absolute",
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 9999,
      height: "100%",
      minHeight: "100vh",
    }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        opacity: 0.4
      }} />


      {/* Horizon line */}
      <div style={{
        position: "absolute",
        left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
      }} />

      {/* Main card */}
      <div style={{
        position: "relative",
        zIndex: 10,
        textAlign: "center",
        padding: "3rem 4rem",
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(16px)",
        borderRadius: "2px",
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 40px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
        minWidth: 380,
      }}>
        <div style={{
          fontSize: "0.65rem",
          letterSpacing: "0.35em",
          color: "rgba(255,255,255,0.5)",
          textTransform: "uppercase",
          fontFamily: "sans-serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height:"100%",
        }}>
          <Image src="/malaya-logo.png" alt="MalayaGlobe Logo" width={300} height={100} className="object-contain" />
        </div>

        {/* Plane animation */}
        <div style={{ position: "relative", height: 100, marginBottom: "2rem" }}>
          {/* Flight path */}
          <svg viewBox="0 0 300 60" style={{ position: "absolute", top: "0%", left: "50%", transform: "translate(-50%,-50%)", width: 500, opacity: 0.25 }}>
            <path d="M 20 30 Q 150 0 280 30" stroke="white" strokeWidth="1" strokeDasharray="4 4" fill="none" />
          </svg>

          {/* Plane */}
          <div style={{
            position: "absolute",
            width: 36, height: 36,
            color: "#fde68a",
            top: "0%", left: "50%",
            transform: "translate(-50%, -50%)",
            animation: "flyPlane 3s ease-in-out infinite",
            filter: "drop-shadow(0 0 12px rgba(253,230,138,0.6))",
          }}>
            <PlaneIcon />
          </div>

          {/* Origin dot */}
          <div style={{
            position: "absolute", left: "8%", top: "50%",
            transform: "translateY(-50%)",
            width: 8, height: 8,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.5)",
            boxShadow: "0 0 8px rgba(255,255,255,0.4)",
          }} />

          {/* Destination dot */}
          <div style={{
            position: "absolute", right: "8%", top: "50%",
            transform: "translateY(-50%)",
            width: 8, height: 8,
            borderRadius: "50%",
            background: "#fde68a",
            boxShadow: "0 0 10px rgba(253,230,138,0.7)",
            animation: "pulse 1.5s ease-in-out infinite",
          }} />
        </div>

        {/* Destination text */}
        <div style={{ marginBottom: "0.4rem" }}>
          <span style={{
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}>Travel to</span>
        </div>
        <div style={{
          fontSize: "2.4rem",
          fontWeight: "400",
          color: "white",
          letterSpacing: "0.04em",
          marginBottom: "2.5rem",
          height: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontStyle: "italic",
          transition: "opacity 0.4s ease",
          opacity: fadeText ? 1 : 0,
        }}>
          {destinations[destIndex]}
        </div>

        {/* Progress bar */}
        <div style={{ marginBottom: "0.75rem" }}>
          <div style={{
            width: "100%",
            height: "2px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: 1,
            overflow: "hidden",
          }}>
            <div style={{
              width: `${progress}%`,
              height: "100%",
              background: "linear-gradient(90deg, rgba(255,255,255,0.4), #fde68a)",
              borderRadius: 1,
              transition: "width 0.1s linear",
              boxShadow: "0 0 8px rgba(253,230,138,0.5)",
            }} />
          </div>
        </div>

        {/* Progress label */}
        <div style={{
          fontSize: "0.65rem",
          letterSpacing: "0.25em",
          color: "rgba(255,255,255,0.35)",
          fontFamily: "sans-serif",
          display: "flex",
          justifyContent: "space-between",
        }}>
          <span>Preparing your journey</span>
          <span style={{ color: "#fde68a", opacity: 0.8 }}>{Math.round(progress)}%</span>
        </div>
      </div>

      <style>{`
        @keyframes flyPlane {
          0%   { transform: translate(-90px, 10px) rotate(-5deg); }
          50%  { transform: translate(0px, -12px) rotate(5deg); }
          100% { transform: translate(90px, 10px) rotate(-5deg); }
        }
        @keyframes driftCloud {
          from { transform: translateX(0) scale(var(--s, 1)); }
          to   { transform: translateX(110vw) scale(var(--s, 1)); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 10px rgba(253,230,138,0.7); }
          50%       { box-shadow: 0 0 20px rgba(253,230,138,1), 0 0 40px rgba(253,230,138,0.3); }
        }
      `}</style>
    </div>
  );
}