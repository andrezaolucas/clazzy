"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import LanguageDropdown from "@/components/ui/LanguageDropdown";
import { useState, useEffect, useRef } from "react";
import Button from "@/components/ui/button";
import SocialButton from "@/components/ui/SocialButton";
import Input from "@/components/ui/input";
import { validateEmail } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

export default function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [langOpen, setLangOpen] = useState(false);
  const langBtnRef = useRef<HTMLDivElement>(null);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);

  useEffect(() => {
    if (!langOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        langBtnRef.current &&
        !langBtnRef.current.contains(event.target as Node)
      ) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langOpen]);

  async function onSubmit() {
    // TODO: lógica de registro
    await new Promise((r) => setTimeout(r, 500));
    router.push("/dashboard/documents");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6 sm:px-0 relative">
      {/* Header absoluto */}
      <header className="absolute top-2 left-2 flex items-center z-10">
        <img
          src="/svgs/logo.svg"
          alt="Clazzy logo"
          style={{ width: 50, height: 50 }}
        />
        <div
          className="h-[50px] flex items-center"
          style={{ marginLeft: 0, marginRight: 14 }}
        >
          <div className="w-px h-[32px] bg-[#E5E3DD]" style={{ width: 1.1 }} />
        </div>
        <div className="relative inline-block" ref={langBtnRef}>
          <button
            type="button"
            className="group flex items-center px-3 py-1 text-sm font-regular text-[#91908E] focus:outline-none transition-colors"
            style={{ width: 200, borderRadius: 8, height: 40 }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#F5F4F3")}
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
            onClick={() => setLangOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={langOpen}
          >
            <img
              src="/svgs/globo.svg"
              alt="Globo"
              className="h-5 w-5 mr-2 transition-all group-hover:filter-globo"
              style={{ marginRight: 10 }}
            />
            <span className="flex-1 text-left">Português (Brasil)</span>
            <img
              src="/svgs/setabaixo.svg"
              alt="Seta para baixo"
              style={{ width: 12, height: 12, marginLeft: 10 }}
            />
          </button>
          <LanguageDropdown isOpen={langOpen} />
        </div>
      </header>

      {/* Ilustração */}
      <div
        className="w-full max-w-[351px] mx-auto flex justify-start"
        style={{ position: "relative", height: 133 }}
      >
        <img
          src="/svgs/caderno.svg"
          alt="Ilustração mão segurando livro"
          className="object-contain"
          style={{
            width: 111,
            height: 101,
            position: "absolute",
            left: "85px",
            top: 0,
            marginBottom: 33,
          }}
        />
      </div>

      {/* Títulos alinhados à esquerda */}
      <div className="w-full max-w-[351px] mx-auto">
        <h1 className="font-semibold text-[24px] text-[#040404] leading-tight text-left">
          Nunca escreva sozinho.
        </h1>
        <p
          className="text-[24px] font-medium mt-0 text-left"
          style={{ color: "#ABAAA6" }}
        >
          Crie sua conta na
          <br />
          clazzy
        </p>
      </div>

      {/* Container do formulário */}
      <div className="w-full max-w-[351px] flex flex-col items-center mt-8">
        {/* Botões sociais */}
        <div className="flex flex-col gap-2 w-full mb-6">
          <SocialButton
            icon={
              <img
                src="/svgs/microsoft.svg"
                alt=""
                style={{ width: 16, height: 16 }}
              />
            }
          >
            Continuar com a Microsoft
          </SocialButton>
          <SocialButton
            icon={
              <img
                src="/svgs/google.svg"
                alt=""
                style={{ width: 16, height: 16 }}
              />
            }
          >
            Continuar com o Google
          </SocialButton>
        </div>
        <div className="h-px w-full bg-gray-100 my-6 -mt-0" />
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            id="name"
            label="Nome"
            type="text"
            placeholder="Digite seu nome..."
            value={nameValue}
            onChange={(e) => {
              setNameValue(e.target.value);
              setValue("name", e.target.value);
            }}
            autoComplete="name"
            className="pr-10"
          />
          <Input
            id="email"
            label="E-mail"
            type="email"
            placeholder="Insira seu endereço de e-mail..."
            value={emailValue}
            onChange={(e) => {
              setEmailValue(e.target.value);
              setValue("email", e.target.value);
            }}
            onClear={() => {
              setEmailValue("");
              setValue("email", "");
            }}
            autoComplete="email"
            className="pr-10"
          />
          <Input
            id="password"
            label="Senha"
            type="password"
            placeholder="Insira sua senha..."
            autoComplete="new-password"
          />
          <div style={{ height: 0 }} />
          <Button
            variant="primary"
            type="submit"
            style={{ width: 351, height: 40 }}
            onClick={(e) => {
              const error = validateEmail(emailValue);
              setEmailError(error);
              if (error) {
                e.preventDefault();
              }
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#000";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#363535";
            }}
          >
            Continuar
          </Button>
          {emailError && (
            <p className="text-red-500 text-xs mt-2 text-center">
              {emailError}
            </p>
          )}
        </form>
        <div style={{ height: 31 }} />
        <p
          className="text-[12px] font-normal text-center"
          style={{
            color: "#73726D",
            lineHeight: "147.3%",
            letterSpacing: "5%",
          }}
        >
          Ao continuar, você confirma que entende e aceita
          <br />
          os{" "}
          <span className="underline" style={{ color: "#ABAAA6" }}>
            Termos e Condições
          </span>{" "}
          e a{" "}
          <span className="underline" style={{ color: "#ABAAA6" }}>
            Política de Privacidade
          </span>
          .
        </p>
        <div className="mt-6 text-center">
          <span className="text-[12px] text-[#73726D]">Já tem uma conta? </span>
          <a
            href="/login"
            className="text-[12px] font-medium text-[#32302B] underline hover:text-[#ABAAA6] transition-colors"
            style={{ textDecoration: "underline" }}
          >
            Faça login
          </a>
        </div>
      </div>
    </main>
  );
}
