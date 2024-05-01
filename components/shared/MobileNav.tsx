"use client"
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <header className='header'>
        <Link href='/' className='text-white sidebar-logo font-semibold text-3xl flex items-center gap-2 md:py-2'>
          FILTRATE
        </Link>

        <nav className='flex gap-2'>
            <SignedIn>
                <UserButton afterSignOutUrl='/' />
                <Sheet>
                    <SheetTrigger>
                        <Image
                            src='/assets/icons/menu.svg'
                            alt=''
                            width={32}
                            height={32}
                            className='cursor-pointer'
                        />
                    </SheetTrigger>
                    <SheetContent className='sheet-content sm:w-64'>
                    <>
                    <h1 className='text-white sidebar-logo font-semibold text-3xl flex items-center gap-2 md:py-2'>
                        FILTRATE
                    </h1>
                    <ul className='header-nav_elements'>
                        {navLinks.slice(0,6).map((link) =>{
                        const isActive = link.route === pathname

                        return (
                            <li key={link.route} className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}>
                            <Link className='sidebar-link cursor-pointer' href={link.route}>
                                <Image
                                    src={link.icon}
                                    alt=''
                                    width={24}
                                    height={24}
                                />
                                {link.label}
                            </Link>
                            </li>
                        )
                        })}
                        </ul>
                    </>
                    </SheetContent>
                    </Sheet>
            </SignedIn>


            <SignedOut>
            <Button asChild className='button bg-purple-gradient bg-cover'>
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
    </header>
  )
}

export default MobileNav
