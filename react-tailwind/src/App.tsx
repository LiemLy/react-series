import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        <div className="h-screen w-full pt-8 px-4">
          <div className="h-full overflow-auto z-0">
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              accusantium. Temporibus consectetur eveniet cupiditate obcaecati
              quia mollitia eligendi dolorum rerum officia qui quas
              reprehenderit distinctio ad adipisci, ipsum perferendis est!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
