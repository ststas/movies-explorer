import { useEffect } from "react";

export default function useEscOverlayClose (isOpen, closeMenu) {
  useEffect(() => {
    if (!isOpen) return;

    const handleOverlay = (event) => {
      if (event.target.classList.contains("nav-menu_visible")) {
        closeMenu();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleOverlay);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleOverlay);
    };
  }, [isOpen, closeMenu]);
}