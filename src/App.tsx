import { useEffect, useState } from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from 'react-router-dom';
// import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import SplashScreen from "./screens/SplashScreen";
import DashboardScreen from "./screens/DashboardScreen";
import NavPanel from "./components/NavPanel";
import WalletScreen from "./screens/WalletScreen";
import TransactionsScreen from "./screens/TransactionsScreen";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, [])

  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<DashboardScreen />} />
        <Route path="/wallet" element={<WalletScreen />} />
        <Route path="/transactions" element={<TransactionsScreen />} />
      </Route>
    )
  )


  if (isLoading) {
    return <SplashScreen />
  } else {
    return <RouterProvider router={router} />
  }
  
}



const Root = () => {
  return (
    <>
      <NavPanel />
      <div className="root">
        <Outlet />
      </div>
    </>
  )
}

export default App;
