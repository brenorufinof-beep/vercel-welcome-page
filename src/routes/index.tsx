import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo-eretec.webp";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center animate-in fade-in duration-1000" style={{ backgroundColor: "#0a3a8c", color: "white" }}>
      <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
        Bem vindo ao
      </h1>
      <img
        src={logo}
        alt="Eretec"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-2xl"
      />
    </main>
  );
}
