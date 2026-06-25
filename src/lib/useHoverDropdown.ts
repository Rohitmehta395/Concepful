import { useState, useRef, useEffect, RefObject } from "react";

export interface HoverDropdownOptions {
  closeOnChange?: unknown;
}

export interface HoverDropdownReturn<T extends HTMLElement> {
  open: boolean;
  openHandler: () => void;
  scheduleClose: () => void;
  close: (returnFocus?: boolean) => void;
  triggerRef: RefObject<T | null>;
}

export function useHoverDropdown<T extends HTMLElement = HTMLAnchorElement>(
  options: HoverDropdownOptions = {}
): HoverDropdownReturn<T> {
  const { closeOnChange } = options;
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const suppressOpenUntil = useRef<number>(0);
  const triggerRef = useRef<T | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const close = (returnFocus = false) => {
    cancelClose();
    setOpen((prev) => {
      if (!prev) return prev;
      suppressOpenUntil.current = Date.now() + 350;
      if (returnFocus) {
        triggerRef.current?.focus();
      } else if (typeof document !== "undefined" && document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      return false;
    });
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const openHandler = () => {
    if (Date.now() < suppressOpenUntil.current) return;
    cancelClose();
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Quietly close (no focus side effects) when an external dependency changes,
  // e.g. on route change.
  useEffect(() => {
    cancelClose();
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closeOnChange]);

  // Cleanup on unmount
  useEffect(() => () => cancelClose(), []);

  return { open, openHandler, scheduleClose, close, triggerRef };
}
