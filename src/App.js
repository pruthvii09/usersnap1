import "./App.css";
import PopupWidget from "./components/PopupWidget";
export default function App() {
  return (
    <div>
      <h1>My App</h1>
      <PopupWidget buttonText="Get Support" annotation={true} />
    </div>
  );
}
