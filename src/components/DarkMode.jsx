import { useEffect, useState } from "react";

export default function DarkMode() {
  // Utilise le Hook useState pour stocker le thème actuel, qui est initialement récupéré du stockage local.
  const [theme, seTheme] = useState(localStorage.theme);
  // Détermine la couleur du thème en fonction du thème actuel.
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    // Obtient l'élément racine du document.
    const root = window.document.documentElement;
    // Supprime la classe de couleur du thème précédent.
    root.classList.remove(colorTheme);
    // Ajoute la classe de couleur du thème actuel.
    root.classList.add(theme);

    // Met à jour le thème dans le stockage local.
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]); // Exécute l'effet chaque fois que le thème ou la couleur du thème change.

  // Retourne la couleur du thème et la fonction pour changer le thème.
  return [colorTheme, seTheme];
}
