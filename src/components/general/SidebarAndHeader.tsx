'use client'
import { 
    Home,
    Rss,
    ThumbsUp,
    Sparkles,
    Compass,
    Gift,
    Calendar,
    Menu,
    Search,
    Users,
    PlusCircle,
    Facebook,
    Twitter,
    Instagram,
    Globe
} from 'lucide-react';
import {
    Button,
    Input,
    Link as NextUILink,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem
} from "@heroui/react";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const SidebarAndHeader = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#2D2B3D]">
            {/* Header */}
            <Navbar 
                maxWidth="full" 
                className="fixed top-0 h-14 md:h-16 shadow-none bg-transparent"
            >
                <NavbarContent justify="start">
                    <NavbarItem>
                        <Button
                            isIconOnly
                            variant="light"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="text-gray-300 hover:text-white p-1"
                        >
                            <Menu className="w-5 h-5 md:w-6 md:h-6" />
                        </Button>
                    </NavbarItem>
                    <NavbarBrand className="hidden md:flex">
                        <Image 
                            src="https://ptcdn.info/mobile/logo-mobile-pantip-white.png"
                            alt="Pantip Logo" 
                            width={100} 
                            height={30}
                        />
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent justify="center" className="flex-grow">
                    <Input
                        classNames={{
                            base: "max-w-2xl h-8 md:h-10",
                            mainWrapper: "h-full pointer-events-auto",
                            input: "text-sm text-gray-300",
                            inputWrapper: "h-full bg-[#1F1D2B] hover:bg-[#1F1D2B] px-3 shadow-none",
                        }}
                        placeholder="Search on Pantip"
                        endContent={<Search className="text-gray-400 w-4 h-4 md:w-5 md:h-5" />}
                        onClick={(e) => e.stopPropagation()}
                    />
                </NavbarContent>

                <NavbarContent justify="end" className="gap-2 md:gap-4">
                    <NavbarItem className="hidden md:flex">
                        <Button isIconOnly variant="light" className="text-gray-300">
                            <PlusCircle className="w-6 h-6" />
                        </Button>
                    </NavbarItem>
                    <NavbarItem className="hidden md:flex">
                        <Button isIconOnly variant="light" className="text-gray-300">
                            <Users className="w-6 h-6" />
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button 
                            variant="light"
                            className="text-gray-300 hover:text-white min-w-fit h-8 text-xs md:text-sm px-2"
                        >
                            Login
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed left-0 top-0 h-full
                bg-[#2D2B3D] text-gray-300 
                transition-transform duration-300 ease-in-out
                w-[280px]
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                z-50
            `}>
                <div className="h-full flex flex-col">
                    {/* Sidebar Header */}
                    <div className="h-14 flex items-center px-4 border-b border-gray-700">
                        <Button
                            isIconOnly
                            variant="light"
                            onClick={() => setIsSidebarOpen(false)}
                            className="text-gray-300"
                        >
                            <Menu className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Sidebar Content */}
                    <div className="flex-1 overflow-y-auto p-2">
                        <nav className="space-y-1">
                            <Button
                                as={Link}
                                href="/"
                                variant="light"
                                className="w-full justify-start gap-3 h-10 text-gray-300"
                                startContent={<Home className="w-5 h-5 flex-shrink-0" />}
                            >
                                <span className="text-sm">หน้าแรก</span>
                            </Button>
                            <Button
                                as={Link}
                                href="/feed"
                                variant="light"
                                className="w-full justify-start gap-3 h-10 text-gray-300"
                                startContent={<Rss className="w-5 h-5 flex-shrink-0" />}
                            >
                                <span className="text-sm">My Feed</span>
                            </Button>
                            <Button
                                as={Link}
                                href="/pick"
                                variant="light"
                                className="w-full justify-start gap-3 h-10 text-gray-300"
                                startContent={<ThumbsUp className="w-5 h-5 flex-shrink-0" />}
                            >
                                <span className="text-sm">Pantip Pick</span>
                            </Button>
                            <Button
                                as={Link}
                                href="/hitz"
                                variant="light"
                                className="w-full justify-start gap-3 h-10 text-gray-300"
                                startContent={<Sparkles className="w-5 h-5 flex-shrink-0" />}
                            >
                                <span className="text-sm">Pantip Hitz</span>
                            </Button>
                            <Button
                                as={Link}
                                href="/explore"
                                variant="light"
                                className="w-full justify-start gap-3 h-10 text-gray-300"
                                startContent={<Compass className="w-5 h-5 flex-shrink-0" />}
                            >
                                <span className="text-sm">Explore</span>
                            </Button>
                            <Button
                                as={Link}
                                href="/points"
                                variant="light"
                                className="w-full justify-start gap-3 h-10 text-gray-300"
                                startContent={<Gift className="w-5 h-5 flex-shrink-0" />}
                            >
                                <span className="text-sm">แลกพอยต์</span>
                            </Button>
                            <Button
                                as={Link}
                                href="/activities"
                                variant="light"
                                className="w-full justify-start gap-3 h-10 text-gray-300"
                                startContent={<Calendar className="w-5 h-5 flex-shrink-0" />}
                            >
                                <span className="text-sm">กิจกรรมพันทิป</span>
                            </Button>
                        </nav>

                        {/* Mobile Footer Links */}
                        <div className="mt-6 space-y-1 text-xs">
                            <NextUILink href="/rules" className="block p-1.5 text-gray-400">
                                กฎ กติกาและมารยาท
                            </NextUILink>
                            <NextUILink href="/guidelines" className="block p-1.5 text-gray-400">
                                คำแนะนำการโพสต์
                            </NextUILink>
                            <NextUILink href="/privacy" className="block p-1.5 text-gray-400">
                                นโยบายความเป็นส่วนตัว
                            </NextUILink>
                            <NextUILink href="/help" className="block p-1.5 text-gray-400">
                                ความช่วยเหลือ
                            </NextUILink>
                        </div>
                    </div>

                    {/* Sidebar Footer */}
                    <div className="p-4 border-t border-gray-700">
                        <div className="flex gap-3 mb-3">
                            <Button
                                as={Link}
                                href="#"
                                isIconOnly
                                variant="light"
                                className="text-gray-400 min-w-unit-8 w-8 h-8"
                            >
                                <Facebook className="w-4 h-4" />
                            </Button>
                            <Button
                                as={Link}
                                href="#"
                                isIconOnly
                                variant="light"
                                className="text-gray-400 min-w-unit-8 w-8 h-8"
                            >
                                <Twitter className="w-4 h-4" />
                            </Button>
                            <Button
                                as={Link}
                                href="#"
                                isIconOnly
                                variant="light"
                                className="text-gray-400 min-w-unit-8 w-8 h-8"
                            >
                                <Instagram className="w-4 h-4" />
                            </Button>
                            <Button
                                as={Link}
                                href="#"
                                isIconOnly
                                variant="light"
                                className="text-gray-400 min-w-unit-8 w-8 h-8"
                            >
                                <Globe className="w-4 h-4" />
                            </Button>
                        </div>
                        <div className="text-[10px] text-gray-500">
                            2025 Internet Marketing co., ltd.
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main content */}
            <div className="pt-14 md:pt-16">
                {/* Your page content goes here */}
            </div>
        </div>
    );
};

export default SidebarAndHeader;
