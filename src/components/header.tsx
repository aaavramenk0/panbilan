import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import Image from "next/image";
import logo from "../icons/logo.png";
import { usePathname } from "next/navigation";

import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { label: "Головна", href: "/" },
        { label: "Про компанію", href: "/" },
        { label: "Каталог", href: "/" },
        { label: "Співпраця", href: "/" },
        { label: "Сертифікати", href: "/" },
        { label: "Контакти", href: "/" }
    ]
    
    return (
        <Navbar isBordered>
            <NavbarContent className="md:hidden" justify="start">
                <NavbarMenuToggle /> 
            </NavbarContent>
        
            {/* <NavbarContent className="sm:hidden pr-4" justify="center">
                <NavbarBrand>
                    <Link href="/"><Image src={logo} alt="Logo"></Image></Link>
                </NavbarBrand>
            </NavbarContent>  */}

            <NavbarContent className="hidden md:flex gap-10 w-full" justify="center">
                {/* <NavbarBrand> 
                    <Link href="/"><Image src={logo} alt="Logo"></Image></Link>
                </NavbarBrand> */}

                {menuItems.map((item, index) => (
                    <NavbarItem isActive={pathname == `${item.href}` ? true : false} key={index}>
                        <Link color="foreground" href={item.href} className="text-[16px]">
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent> 

            {/* <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex"> 
                    <Button className="text-[16px]" color="secondary" as={Link} href="/links/login" variant="light">
                        Увійти
                    </Button> 
                </NavbarItem>
                <NavbarItem className="hidden lg:flex"> 
                    <Button className="text-[16px]" color="secondary" as={Link} href="/links/login" variant="light">
                        Зареєструватись
                    </Button> 
                </NavbarItem>
            </NavbarContent> */}
            
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={index}>
                        <Link className="w-full" color="foreground" href={item.href} size="lg">{item.label}</Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>    
            
        </Navbar>
    )
}

export default Header;