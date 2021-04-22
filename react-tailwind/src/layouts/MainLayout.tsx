import React from "react";
import Sidebar from "../components/Sidebar";

function MainLayout(props: any) {
  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        <div className="h-screen w-full pt-8 px-8">
          <div className="h-full overflow-auto z-0">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
