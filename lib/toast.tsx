"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

interface Toast {
  id: number;
  message: string;
  icon?: ReactNode;
}

interface ToastContextValue {
  toast: (message: string, opts?: { icon?: ReactNode; duration?: number }) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const idRef = useRef(0);
  const reduce = useReducedMotion();

  const remove = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback<ToastContextValue["toast"]>(
    (message, opts) => {
      const id = ++idRef.current;
      setToasts((prev) => [...prev.slice(-2), { id, message, icon: opts?.icon }]);
      const duration = opts?.duration ?? 2200;
      window.setTimeout(() => remove(id), duration);
    },
    [remove],
  );

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {/* Constrained to the mobile column width, sits above sticky CTAs. */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex justify-center px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
        <div className="flex w-full max-w-[430px] flex-col items-center gap-2">
          <AnimatePresence initial={false}>
            {toasts.map((t) => (
              <motion.div
                key={t.id}
                layout={!reduce}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.96 }}
                animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }}
                className="pointer-events-auto flex items-center gap-2.5 rounded-full bg-charcoal/95 px-4 py-2.5 text-sm font-medium text-white shadow-pop backdrop-blur"
                role="status"
              >
                {t.icon && (
                  <span className="grid size-5 shrink-0 place-items-center text-accent">
                    {t.icon}
                  </span>
                )}
                <span>{t.message}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
}
