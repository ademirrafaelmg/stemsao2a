import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(120, "Máximo 120 caracteres"),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .max(254, "E-mail muito longo"),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(5, "Escreva uma mensagem")
    .max(4000, "Máximo 4000 caracteres"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const path = issue.path[0] as keyof FormValues;
        if (path && !fieldErrors[path]) fieldErrors[path] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setStatus("loading");
    const { error } = await supabase.from("contact_submissions").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      message: parsed.data.message,
    });
    if (error) {
      console.error(error);
      setStatus("error");
      setServerError("Não foi possível enviar sua mensagem. Tente novamente em instantes.");
      return;
    }
    setStatus("success");
    setValues({ name: "", email: "", phone: "", message: "" });
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-copper/40 bg-card p-8 text-center shadow-[var(--shadow-card)]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-copper/15 text-copper">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl text-primary">Mensagem enviada!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Recebemos sua mensagem e retornaremos em breve pelo e-mail informado.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2 text-sm font-medium text-foreground hover:bg-secondary"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-border/60 bg-card p-6 md:p-8 shadow-[var(--shadow-card)]"
      noValidate
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Nome"
          error={errors.name}
          input={
            <input
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputClass(errors.name)}
              placeholder="Seu nome completo"
              maxLength={120}
              required
            />
          }
        />
        <Field
          label="E-mail"
          error={errors.email}
          input={
            <input
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputClass(errors.email)}
              placeholder="voce@exemplo.com"
              maxLength={254}
              required
            />
          }
        />
      </div>
      <Field
        label="Telefone (opcional)"
        error={errors.phone}
        input={
          <input
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass(errors.phone)}
            placeholder="(00) 00000-0000"
            maxLength={40}
          />
        }
      />
      <Field
        label="Mensagem"
        error={errors.message}
        input={
          <textarea
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            className={inputClass(errors.message) + " min-h-[140px] resize-y"}
            placeholder="Como podemos ajudar? Conte-nos seu interesse no evento."
            maxLength={4000}
            required
          />
        }
      />

      {serverError && (
        <p className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-display text-sm uppercase tracking-[0.14em] text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:bg-primary/90 disabled:opacity-70"
      >
        {status === "loading" ? "Enviando…" : "Enviar mensagem"}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Ao enviar, você concorda em ser contatado pela organização do evento.
      </p>
    </form>
  );
}

function Field({
  label,
  input,
  error,
}: {
  label: string;
  input: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      {input}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function inputClass(hasError?: string) {
  return (
    "w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors " +
    "focus:border-primary focus:ring-2 focus:ring-primary/20 " +
    (hasError ? "border-destructive" : "border-input hover:border-muted-foreground/40")
  );
}
