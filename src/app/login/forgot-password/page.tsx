"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import LanguageDropdown from "@/components/ui/LanguageDropdown";
import { useState, useEffect, useRef } from "react";

const schema = z.object({
  email: z.string().email(),
});

type FormData = z.infer<typeof schema>;

export default function ForgotPasswordPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [langOpen, setLangOpen] = useState(false);
  const langBtnRef = useRef<HTMLDivElement>(null);
  const [emailValue, setEmailValue] = useState("");

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
    // Não faz nada, tela estática
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
          Faça login na sua conta da
          <br />
          clazzy
        </p>
      </div>

      {/* Container do formulário */}
      <div className="w-full max-w-[351px] flex flex-col items-center mt-8">
        {/* Botões sociais */}
        <div className="flex flex-col gap-3 w-full mb-6">
          <button
            type="button"
            role="button"
            aria-pressed="false"
            className="relative flex items-center w-full h-10 border border-[#E5E5E5] rounded-md font-medium bg-white transition overflow-hidden"
            style={{ width: 351, height: 40, color: "#32302B" }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#F5F4F3";
              e.currentTarget.style.borderColor = "#E1E1DE";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.borderColor = "#E5E5E5";
            }}
          >
            <span
              className="absolute left-4 flex items-center"
              style={{ width: 24, height: 24 }}
            >
              <img
                src="/svgs/microsoft.svg"
                alt=""
                style={{ width: 16, height: 16 }}
              />
            </span>
            <span
              className="w-full text-center"
              style={{ fontSize: 14, letterSpacing: "5%" }}
            >
              <span className="ml-[26px]">Continuar com a Microsoft</span>
            </span>
          </button>
          <button
            type="button"
            role="button"
            aria-pressed="false"
            className="relative flex items-center w-full h-10 border border-[#E5E5E5] rounded-md font-medium bg-white transition overflow-hidden"
            style={{ width: 351, height: 40, color: "#32302B" }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#F5F4F3";
              e.currentTarget.style.borderColor = "#E1E1DE";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.borderColor = "#E5E5E5";
            }}
          >
            <span
              className="absolute left-4 flex items-center"
              style={{ width: 24, height: 24 }}
            >
              <img
                src="/svgs/google.svg"
                alt=""
                style={{ width: 16, height: 16 }}
              />
            </span>
            <span
              className="w-full text-center"
              style={{ fontSize: 14, letterSpacing: "5%" }}
            >
              <span className="ml-[12px]">Continuar com o Google</span>
            </span>
          </button>
        </div>

        {/* Divider suave */}
        <div className="h-px w-full bg-gray-100 my-6" />

        {/* Formulário */}
        <form className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1 relative">
            <label
              htmlFor="email"
              className="text-[14px] font-regular text-gray-400"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              aria-label="E-mail"
              placeholder="Insira seu endereço de e-mail..."
              className="w-full h-11 rounded-md border border-[#E5E5E5] px-3 pr-10 text-black placeholder-[#A1A09F] focus:ring-[1px] focus:ring-[#363535] outline-none text-[14px]"
              value={emailValue}
              onChange={(e) => {
                setEmailValue(e.target.value);
                setValue("email", e.target.value);
              }}
            />
            {/* Não exibe o botão de limpar se não houver valor */}
            {emailValue && (
              <button
                type="button"
                aria-label="Limpar e-mail"
                className="absolute right-3 flex items-center justify-center transition-colors"
                style={{
                  top: "67%",
                  transform: "translateY(-50%)",
                  padding: 2,
                  background: "transparent",
                  border: 0,
                  cursor: "pointer",
                  borderRadius: 20,
                }}
                tabIndex={0}
                onClick={() => {
                  setEmailValue("");
                  setValue("email", "");
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#F5F4F3";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <img
                  src="/svgs/xemail.svg"
                  alt="Limpar e-mail"
                  style={{ width: 16, height: 16 }}
                />
              </button>
            )}
          </div>
          {/* Espaçamento de 35px entre input e botão */}
          <button
            type="button"
            role="button"
            aria-pressed="false"
            className="w-full rounded-md font-medium transition border text-[14px]"
            style={{
              width: 351,
              height: 40,
              background: "#363535",
              color: "#fff",
              borderColor: "#000",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#000";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#363535";
            }}
            disabled
          >
            Enviar link de redefinição
          </button>
        </form>
        {/* Disclaimer */}
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
      </div>
    </main>
  );
}
