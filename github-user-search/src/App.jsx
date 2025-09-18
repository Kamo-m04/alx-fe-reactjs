import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-center text-3xl font-bold p-4">
        GitHub User Search App
      </h1>
      <Search />
    </div>
  );
}

export default App;
