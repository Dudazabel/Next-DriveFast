"use-client"

import Link from "next/link";

export default function Navbar(){
    return(
        <div className="flex justify-between p-10">
            <div>
                <h1 className="text-xl">
                    <span className="text-red-500">DRIVE</span>
                    <span className="text-gray-800">FAST</span>
                </h1>
            </div>
            <nav className="m-1">
                <Link href="/" className="p-5">home</Link>
                <Link href="/veiculos" className="p-5">veículos</Link>
                <Link href="/clientes" className="p-5">clientes</Link>
                <Link href="/locacoes" className="p-5">locações</Link>
            </nav>
        </div> 
    );
}