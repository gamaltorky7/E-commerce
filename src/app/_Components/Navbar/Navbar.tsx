"use client";

import { MenuIcon } from "lucide-react";


import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useContext } from "react";
import { CountContext } from "src/CountProvider";
import { WishContext } from "src/WishProvider";
import Link from "next/link";
import Image from "next/image";
import { DarkModeToggle } from "./DarkModeToggle";

const Navbar = () => {
  
    const pathname:string = usePathname()
      const LeftMenu: { path: string; content: string , protected:boolean}[] = [
        { path: "/products", content: "Products" , protected : false },
        { path: "/category", content: "Category" , protected : false },
        { path: "/brands", content: "Brands" , protected : false },
        // { path: "/cart", content: "Cart" , protected : true },
        // { path: "/wishlist", content: "Wishlist" , protected : false },
        { path: "/allorders", content: "Orders" , protected : true },
      ];
    
      const RightMenu: { path: string; content: string }[] = [
        { path: "/login", content: "Login" },
        { path: "/register", content: "Register" },
      ];
    
      const { data , status} = useSession();
      const {count} = useContext(CountContext)
      const {wishCount} = useContext(WishContext)
      
      function logOut(){
        signOut({
          callbackUrl:"/"
        })
      }

  return (
    <section className="py-5 shadow-2xl dark:bg-cyan-800 bg-white text-black ">
      <div className="container mx-auto ">
        <nav className="flex items-center justify-between ">
          <Link
            href="/"
            className="flex items-center gap-2"
          >
             <Image src={'/image/freshcart-logo.svg'} alt='logo' width={100} height={100} />
         
        
          </Link>
            <NavigationMenu viewport={false} className="hidden lg:block">
                    
                    <NavigationMenuList>


                        {LeftMenu.map((item) => {

                        return <NavigationMenuItem key={item.path}>
                            {
                            item.protected && status == "authenticated" && <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}
                            >
                            <Link className={pathname == item.path ? 'text-main' : ''} href={item.path}>{item.content}</Link>
                            </NavigationMenuLink>
                            }
                            {
                            !item.protected && <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                            >
                            <Link className={pathname == item.path ? 'text-main ' : ''} href={item.path}>{item.content}</Link>
                            </NavigationMenuLink>
                            }
                        </NavigationMenuItem>
                        })}
                        
                        {
                                status == "authenticated" && 
                            
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}
                            >
                            <Link className={pathname == '/cart' ? 'text-main relative' : 'relative'} href='/cart'> Cart 
                            <span className="absolute -top-0.5 -right-0.5 bg-emerald-600 w-4 h-4 flex justify-center items-center rounded-sm text-white">
                                {count}
                                </span>
                            </Link>
                            </NavigationMenuLink>
                            }
                        {
                                status == "authenticated" && 
                            
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}
                            >
                            <Link className={pathname == '/wishlist' ? 'text-main relative' : 'relative'} href='/wishlist'> wishlist 
                            <span className="absolute -top-0.5 -right-0.5 bg-emerald-600 w-4 h-4 flex justify-center items-center rounded-sm text-white">
                                {wishCount}
                                </span>
                            </Link>
                            </NavigationMenuLink>
                            }

                    </NavigationMenuList>
            
            </NavigationMenu>
            
          <div className="hidden items-center gap-4 lg:flex">
            <NavigationMenu viewport={false}>
                <NavigationMenuList>
            <DarkModeToggle/>
        {
          status == "authenticated" ? <>
            <NavigationMenuItem >
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <span className="bg-green-100 p-2 mx-2 dark:bg-gray-800 dark:text-white">
              hello {data?.user?.name}
              </span>
            </NavigationMenuLink>
            
            </NavigationMenuItem>
              <NavigationMenuItem >
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <span onClick={logOut} className="hover:cursor-pointer dark:text-white">
                Logout
                </span>
              </NavigationMenuLink>
            </NavigationMenuItem>

        </> :  <>
        {RightMenu.map((item) => {
      
          return <NavigationMenuItem key={item.path}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link className={pathname == item.path ? 'text-main' : ''} href={item.path}>{item.content}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        })}
        </>

        }
       
        
                </NavigationMenuList>
            </NavigationMenu>
          </div>


          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link
                        href="/"
                        className="flex items-center gap-2"
                    >
                        <Image src={'/image/freshcart-logo.svg'} alt='logo' width={100} height={100} />
                    
                    
                    </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                
                <div className="flex flex-col gap-6">
                  <NavigationMenu viewport={false} >
                    
                    <NavigationMenuList className="flex flex-col gap-6">


                        {LeftMenu.map((item) => {

                        return <NavigationMenuItem key={item.path}>
                            {
                            item.protected && status == "authenticated" && <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}
                            >
                            <Link className={pathname == item.path ? 'text-main' : ''} href={item.path}>{item.content}</Link>
                            </NavigationMenuLink>
                            }
                            {
                            !item.protected && <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                            >
                            <Link className={pathname == item.path ? 'text-main ' : ''} href={item.path}>{item.content}</Link>
                            </NavigationMenuLink>
                            }
                        </NavigationMenuItem>
                        })}
                        
                        {
                                status == "authenticated" && 
                            
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}
                            >
                            <Link className={pathname == '/cart' ? 'text-main relative' : 'relative'} href='/cart'> Cart 
                            <span className="absolute -top-0.5 -right-0.5 bg-emerald-600 w-4 h-4 flex justify-center items-center rounded-sm text-white">
                                {count}
                                </span>
                            </Link>
                            </NavigationMenuLink>
                            }
                        {
                                status == "authenticated" && 
                            
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}
                            >
                            <Link className={pathname == '/wishlist' ? 'text-main relative' : 'relative'} href='/cart'> wishlist 
                            <span className="absolute -top-0.5 -right-0.5 bg-emerald-600 w-4 h-4 flex justify-center items-center rounded-sm text-white">
                                {wishCount}
                                </span>
                            </Link>
                            </NavigationMenuLink>
                            }

                    </NavigationMenuList>
            
            </NavigationMenu>
                </div>

                <div className="mt-6 flex flex-col gap-4">
                <NavigationMenu viewport={false}>
                    <NavigationMenuList>
                            <DarkModeToggle/>
                        {
                        status == "authenticated" ? <>
                            <NavigationMenuItem >
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <span className="bg-green-100 p-2 mx-2 dark:bg-gray-900 ">
                            hello {data?.user?.name}
                            </span>
                            </NavigationMenuLink>
                            
                            </NavigationMenuItem>
                            <NavigationMenuItem >
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <span onClick={logOut} className="hover:cursor-pointer">
                                Logout
                                </span>
                            </NavigationMenuLink>
                            </NavigationMenuItem>

                        </> :  <>
                        {RightMenu.map((item) => {
                    
                        return <NavigationMenuItem key={item.path}>
                            <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                            >
                            <Link className={pathname == item.path ? 'text-main' : ''} href={item.path}>{item.content}</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        })}
                        </>

                        }
                    
                        
                    </NavigationMenuList>
                </NavigationMenu>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };



