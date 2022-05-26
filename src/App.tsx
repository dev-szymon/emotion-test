import React from "react";
import { Button } from "./components/Button/Button";
import AppProvider from "./providers/AppProvider";
import { responsive } from "./utils/responsive";

const App: React.FC = () => (
 <div>
  <pre>
   {JSON.stringify({ "0": "black", "1": "white", "2": "red" }, null, 2)}
  </pre>
  {/* <AppProvider
   theme={{
    breakpoints: ["1px", "9999px", "9999px"],
    button: { backgroundColor: "blue" },
   }}
  >
   <Button />
   <Button
    borderRadius={responsive("0px", "8px", "20px")}
    fontSize={["8px", "8px", "14px", "20px"]}
   />
  </AppProvider> */}
  <AppProvider
   theme={{
    breakpoints: ["300px", "350px", "700px"],
    button: { backgroundColor: "blue" },
   }}
  >
   <Button />
   <Button
    borderRadius={responsive("0px", "8px", "20px")} // responsive util does not work with 2 providers
    fontSize={["8px", "8px", "14px", "20px"]} // array works fine
   />
  </AppProvider>
 </div>
);
export default App;
