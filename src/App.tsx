import React from "react";
import "./App.css";
import { Title } from "./components/Title/Title";
import { Text } from "./components/Text/Text";

function App() {
  const nome = "Pedro";
  return (
    <>
      <Title nome={nome} />
      <Text />
    </>
  );
}

export default App;
