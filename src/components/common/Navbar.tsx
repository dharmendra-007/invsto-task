"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Switch } from '../ui/switch';
import { useTheme } from 'next-themes';
import { MoonStar, Sun } from 'lucide-react';

const Navbar = () => {
    const { setTheme , theme } = useTheme()

    return (
        <nav className="bg-background sticky top-0 z-50 backdrop-blur-md border-b border-black/20 dark:border-white/20">
            <div className="container mx-auto flex h-16 items-center px-4 md:px-6 justify-between">

                {/* Logo Section */}
                <Link className="flex items-center space-x-2" href='#'>
                    <Image src="/images/logo.png" height={32} width={32} alt='Logo' />
                    <span className="text-xl font-bold text-gray-900 dark:text-gray-50 hidden sm:block">Invsto</span>
                </Link>

                {/* Theme Toggle*/}
                <div className="flex items-center gap-2 md:gap-3 justify-center">
                    <Sun className='h-5 w-5'/>
                    <Switch
                        checked={theme === 'dark'}
                        onCheckedChange={(isChecked) => setTheme(isChecked ? 'dark' : 'light')}
                        aria-label="Toggle theme"
                    />
                    <MoonStar className='h-5 w-5'/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
