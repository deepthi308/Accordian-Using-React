import Accordian from "./components/Accordian";
import "./styles.css";
import faqs from "./data/faqs.json";
import { useState } from "react";

export default function App() {
  const [isOpenAcc, setIsOpenAcc] = useState(null);

  return (
    <div className="App">
      <Accordian
        faqs={faqs}
        isOpenAcc={isOpenAcc}
        setIsOpenAcc={setIsOpenAcc}
      />
    </div>
  );
}
