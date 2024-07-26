import { useDispatch, useSelector } from "react-redux";
import { updateFormTheme } from "../../../actions/forms";
import FormThemeData from "../../../data/formTheme";

function FormTheme({ formId }) {
  const theme = useSelector((state) => state.formsReducer[formId].theme);
  const dispatch = useDispatch();

  function setThemeState(themeName, themeColor) {
    const updatedTheme = new FormThemeData(themeName, themeColor);
    const uploadThemePayload = {
      formId,
      theme: updatedTheme,
    };
    dispatch(updateFormTheme(uploadThemePayload));
  }

  return (
    <div>
      <aside>
        <div>Customize the theme</div>
        <div onClick={() => setThemeState("light", "#ffffff")}>Light</div>
        <div onClick={() => setThemeState("dark", "#171923")}>Dark</div>
        <div onClick={() => setThemeState("tail-blue", "#508C9B")}>
          Tail Blue
        </div>
      </aside>
      <main>
        {theme.name === "light" && (
          <div
            style={{
              backgroundColor: theme.color,
              width: "100vw",
              height: "100vh",
            }}
          >
            Light Selected
          </div>
        )}
        {theme.name === "dark" && (
          <div
            style={{
              backgroundColor: theme.color,
              width: "100vw",
              height: "100vh",
            }}
          >
            Dark Selected
          </div>
        )}
        {theme.name === "tail-blue" && (
          <div
            style={{
              backgroundColor: theme.color,
              width: "100vw",
              height: "100vh",
            }}
          >
            Tail Blue Selected
          </div>
        )}
      </main>
    </div>
  );
}

export default FormTheme;
