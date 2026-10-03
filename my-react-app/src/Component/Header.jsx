import "../index.css";
import globe from "../image/globe-s.png";
export default function Header() {
  return (
    <header>
      <img src={globe} alt="globe-icon" />
      <h1>My Travel Journey</h1>
    </header>
  );
}
