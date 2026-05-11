"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type FormState = Record<string, string>;
type MultiState = Record<string, string[]>;

type Ctx = {
  state: FormState;
  multi: MultiState;
  set: (key: string, value: string) => void;
  toggle: (key: string, value: string) => void;
};

const FormCtx = createContext<Ctx | null>(null);

export function OnboardingFormProvider({
  initial,
  initialMulti,
  children,
}: {
  initial: FormState;
  initialMulti?: MultiState;
  children: ReactNode;
}) {
  const [state, setState] = useState<FormState>(initial);
  const [multi, setMulti] = useState<MultiState>(initialMulti ?? {});

  const set = useCallback((key: string, value: string) => {
    setState((s) => ({ ...s, [key]: value }));
  }, []);

  const toggle = useCallback((key: string, value: string) => {
    setMulti((s) => {
      const current = s[key] ?? [];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...s, [key]: next };
    });
  }, []);

  const value = useMemo<Ctx>(
    () => ({ state, multi, set, toggle }),
    [state, multi, set, toggle],
  );

  return <FormCtx.Provider value={value}>{children}</FormCtx.Provider>;
}

function useForm(): Ctx {
  const ctx = useContext(FormCtx);
  if (!ctx)
    throw new Error("OnboardingFormProvider missing in component tree");
  return ctx;
}

export function useFieldValue(key: string): string {
  return useForm().state[key] ?? "";
}

export function useMultiValue(key: string): string[] {
  return useForm().multi[key] ?? [];
}

export function LiveInput({
  field,
  placeholder,
}: {
  field: string;
  placeholder?: string;
}) {
  const { state, set } = useForm();
  return (
    <input
      value={state[field] ?? ""}
      onChange={(e) => set(field, e.target.value)}
      placeholder={placeholder}
      className="rounded-2xl border border-pm-border bg-white px-4 py-2.5 text-sm text-pm-ink shadow-pm-soft focus:border-pm-blue focus:outline-none"
    />
  );
}

export function LiveSelect({
  field,
  options,
}: {
  field: string;
  options: string[];
}) {
  const { state, set } = useForm();
  return (
    <select
      value={state[field] ?? options[0]}
      onChange={(e) => set(field, e.target.value)}
      className="rounded-2xl border border-pm-border bg-white px-4 py-2.5 text-sm text-pm-ink shadow-pm-soft focus:border-pm-blue focus:outline-none"
    >
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
}

export function LiveChips({
  field,
  options,
}: {
  field: string;
  options: string[];
}) {
  const { state, set } = useForm();
  const active = state[field] ?? options[0];
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => set(field, o)}
          className="pm-chip"
          data-active={active === o ? "true" : undefined}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export function LiveToggles({
  field,
  options,
}: {
  field: string;
  options: { key: string; label: string; title: string; description: string }[];
}) {
  const { multi, toggle } = useForm();
  const active = multi[field] ?? [];
  return (
    <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3">
      {options.map((m) => {
        const on = active.includes(m.key);
        return (
          <button
            key={m.key}
            type="button"
            onClick={() => toggle(field, m.key)}
            className={`rounded-2xl p-4 text-left transition ${
              on
                ? "border-2 border-pm-blue bg-pm-soft"
                : "border border-pm-border bg-white hover:border-pm-blue/50"
            }`}
          >
            <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
              {m.label}
            </p>
            <p className="mt-1 text-sm font-extrabold text-pm-navy">{m.title}</p>
            <p className="text-[11px] text-pm-muted">{m.description}</p>
          </button>
        );
      })}
    </div>
  );
}

export function LiveText({
  field,
  fallback,
}: {
  field: string;
  fallback?: string;
}) {
  const v = useFieldValue(field);
  return <>{v || fallback || ""}</>;
}

export function LiveInitials({
  field,
  fallback,
}: {
  field: string;
  fallback?: string;
}) {
  const name = useFieldValue(field);
  const source = name || fallback || "";
  const initials = source
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
  return <>{initials || fallback || ""}</>;
}
