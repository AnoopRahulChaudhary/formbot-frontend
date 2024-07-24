import { useState } from "react";

function FormTheme({ formId }) {
  const [themeState, setThemeState] = useState("light");

  return (
    <div>
      <aside>
        <div>Customize the theme</div>
        <div onClick={() => setThemeState("light")}>Light</div>
        <div onClick={() => setThemeState("dark")}>Dark</div>
        <div onClick={() => setThemeState("tail blue")}>Tail Blue</div>
      </aside>
      <main>
        {themeState === "light" && <div>Light Selected</div>}
        {themeState === "dark" && <div>Dark Selected</div>}
        {themeState === "tail blue" && <div>Tail Blue Selected</div>}
      </main>
    </div>
  );
}

export default FormTheme;
