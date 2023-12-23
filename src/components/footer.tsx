import { Divider} from "@nextui-org/react";
import Image from "next/image";
import logo from "../icons/logo.png"

const Footer = () => {
    const footerItems = [
        { label: "Головна", href: "/" },
        { label: "Про компанію", href: "/" },
        { label: "Каталог", href: "/" },
        { label: "Співпраця", href: "/" },
        { label: "Сертифікати", href: "/" },
        { label: "Контакти", href: "/" }
    ]

    return (
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <Divider />
            <div className="flex justify-between">
                <h3>
                    &copy; 2023 Ф.Х. «Пан Билан»
                </h3>
                <div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer;