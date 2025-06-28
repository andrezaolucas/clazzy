"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit() {
    // TODO: chamar auth real ou mock
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
        {/* Sem espaço entre logo e linha */}
        <div
          className="h-[50px] flex items-center"
          style={{ marginLeft: 0, marginRight: 14 }}
        >
          <div className="w-px h-[32px] bg-[#E5E3DD]" style={{ width: 1.1 }} />
        </div>
        {/* 14px entre linha e globo */}
        <img
          src="/svgs/globo.svg"
          alt="Globo"
          className="h-4 w-4"
          style={{ marginRight: 6 }}
        />
        {/* 6px entre globo e idioma */}
        <span
          className="text-[14px] text-[#91908E] flex items-center"
          style={{ marginRight: 7 }}
        >
          Português (Brasil)
          {/* 7px entre (Brasil) e seta */}
          <img
            src="/svgs/setabaixo.svg"
            alt="Seta para baixo"
            style={{ width: 10, height: 10, marginLeft: 7 }}
          />
        </span>
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
            left: "68px",
            top: 0,
            marginBottom: 32,
          }}
        />
      </div>

      {/* Títulos alinhados à esquerda */}
      <div className="w-full max-w-[351px] mx-auto">
        <h1 className="font-semibold text-[24px] text-[#040404] leading-tight text-left">
          Nunca escreva sozinho.
        </h1>
        <p
          className="text-[24px] font-semibold mt-0 text-left"
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
            className="relative flex items-center w-full h-10 border border-[#E5E5E5] rounded-md font-medium text-black bg-white transition overflow-hidden"
            style={{ width: 351, height: 40 }}
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
            className="relative flex items-center w-full h-10 border border-[#E5E5E5] rounded-md font-medium text-black bg-white transition overflow-hidden"
            style={{ width: 351, height: 40 }}
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
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-[14px] font-semibold text-gray-500"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              aria-label="E-mail"
              placeholder="Insira seu endereço de e-mail..."
              className="w-full h-11 rounded-md border border-[#E5E5E5] px-3 text-black placeholder-[#A1A09F] focus:ring-2 focus:ring-[#363535] outline-none"
              disabled
            />
          </div>
          <div className="flex flex-col gap-1 relative">
            <label
              htmlFor="password"
              className="text-[14px] font-semibold text-gray-500"
            >
              Senha
            </label>
            <input
              id="password"
              type="password"
              aria-label="Senha"
              placeholder="Insira sua senha..."
              className="w-full h-11 rounded-md border border-[#E5E5E5] px-3 text-black placeholder-[#A1A09F] focus:ring-2 focus:ring-[#363535] outline-none"
              disabled
            />
            {/* Esqueceu sua senha? */}
            <span
              className="text-xs font-medium text-gray-600 absolute left-0"
              style={{ top: "calc(100% + 10px)" }}
            >
              Esqueceu sua senha?
            </span>
          </div>
          {/* Espaçamento de 24px entre 'esqueceu sua senha' e botão */}
          <div style={{ height: 24 }} />
          <button
            type="button"
            role="button"
            aria-pressed="false"
            className="w-full rounded-md font-semibold transition border"
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
            Continuar
          </button>
        </form>
        {/* Disclaimer */}
        <div style={{ height: 31 }} />
        <p
          className="text-[12px] text-center"
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
