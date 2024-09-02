import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps)=>{
    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar/>
            {children}
        </div>
    )
}

export default Layout;