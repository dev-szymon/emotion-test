import React from "react";
import { Button } from "./components/Button/Button";
import AppProvider from "./providers/AppProvider";
import { responsive } from "./utils/responsive";

const App: React.FC = () => (
 <div>
  <pre>
   {JSON.stringify({ "0": "black", "1": "blue", "2": "red" }, null, 2)}
  </pre>
  <AppProvider
   theme={{
    breakpoints: ["1px", "9999px", "9999px"],
    button: { color: "white" },
    disableStyledSystemCache: true,
   }}
  >
   <Button backgroundColor={responsive("black", "blue", "red")} />
  </AppProvider>
  <AppProvider
   theme={{
    breakpoints: ["300px", "350px", "700px"],
    button: { color: "white" },
    disableStyledSystemCache: true,
   }}
  >
   <Button backgroundColor={responsive("black", "blue", "red")} />
  </AppProvider>
 </div>
);
export default App;
