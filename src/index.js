import React from "react";
import ReactDOM from "react-dom";
import Stories from "./story-assembler";
import Feature from "./Feature";

const { accounts: accountsFlag, cards: cardsFlag } = Stories;

function App() {
  return (
    <div className="App">
      <Feature name="StoryletAccounts" flag={accountsFlag} />
      <Feature name="StoryletCards" flag={cardsFlag} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
