const root = document.documentElement;

const toggleBtn = document.querySelector<HTMLButtonElement>(".theme-toggle");

function applyTheme(theme: "light" | "dark") {
  root.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("wiki-theme", theme);
  } catch (e) {
    // private mode — persist nothing, theme still applies
  }
  if (toggleBtn) {
    const isDark = theme === "dark";
    toggleBtn.setAttribute("aria-pressed", String(isDark));
    toggleBtn.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );
  }
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const next =
      root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  });
}