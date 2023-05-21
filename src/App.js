/** @format */

import React, { useRef } from "react";
import "./App.css";
import MyEditor from "./editor/myEditor";
import TemporaryDrawer from "./components/sidebar/sidebar";

export default function App() {

  return (
    <div className="my-editor">
      <TemporaryDrawer />
      <MyEditor />
    </div>
  );
}
