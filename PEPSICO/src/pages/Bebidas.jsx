import { Link } from "react-router-dom";
import Card from "../components/card";
import Navbar2 from "../components/Navbar2";
import 'boxicons'


export default function Bebidas (){
  return(
    <div className="">
      <Navbar2></Navbar2>
      <div className="bg-fondo bg-blue-500 p-15 flex flex-col items-center justify-center gap-16 rounded-2xl h-[30rem] max-w-6xl m-auto">
        <h1>PEPSICO</h1>
        <button className="bg-gray-100"><Link to ={"/nuevoslanzamientos"}>Nuevos lanzamientos</Link></button>
      </div>
    </div>
  );
}