'use client';
import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from "react";
import { FaTimes, FaDiscord, FaBars } from "react-icons/fa";
import InviteModal from "../inviteModal/modal";

const NavBar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [inviteModelOpen, setInviteModelOpen] = useState(false);
    const [page, setPage] = useState("home");

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        setPage(pathname ?? "")
    }, [pathname, useSearchParams])

    return (
        <>
            {inviteModelOpen && <InviteModal setModal={setInviteModelOpen} />}
            <div className="absolute top-0 h-20 right-0 left-0 shadow-lg flex justify-center items-center">
                <ul className="text-lg font-poppins text-neutral-300 flex flex-row gap-4 items-center justify-center lg:justify-between lg:mr-48 w-full">
                    <div className="lg:flex flex-row gap-4 lg:ml-48 ml-8 hidden font-bakbak">
                        <Link href="/" className={`underline-offset-[5px] underline decoration-4 hover:underline-offset-8 ${page === "/" ? "decoration-emerald-500" : "decoration-sky-500"}`}>Home</Link>
                        <button onClick={() => setInviteModelOpen(true)} className="cursor-pointer underline-offset-[5px] underline decoration-sky-500 decoration-4 hover:underline-offset-8">Invite Me</button>
                        <a target="_blank" href="https://discord.com/invite/7Wb3PQQ2dX" className="underline-offset-[5px] underline decoration-sky-500 decoration-4 hover:underline-offset-8">ForestBot Discord</a>
                        <Link href="/commands" className={`underline-offset-[5px] underline decoration-4 hover:underline-offset-8 ${page === "/commands" ? "decoration-emerald-500" : "decoration-sky-500"}`}>Commands</Link>
                        <Link href="/stats" className={`underline-offset-[5px] underline decoration-4 hover:underline-offset-8 ${page === "/stats" ? "decoration-emerald-500" : "decoration-sky-500"}`}>Stats</Link>
                    </div>
                    <span className="block lg:hidden ml-4">
                        {isMobileMenuOpen ? (
                            <FaTimes onClick={()=>handleMobileMenuToggle()} className="text-3xl cursor-pointer" />
                        ) : (
                            <FaBars onClick={()=>handleMobileMenuToggle()} className="text-3xl cursor-pointer" />
                        )}
                    </span>

                    <a
                        target="_blank"
                        href="https://discord.com/invite/7Wb3PQQ2dX"
                        className="ml-auto mr-8"
                    >
                        <li className="bg-[#7289da] px-5 py-1 rounded-lg hover:bg-opacity-75 duration-200 ">
                            <FaDiscord className="text-4xl" />
                        </li>
                    </a>
                </ul>
                <div
                    className={`${isMobileMenuOpen ? "block" : "hidden"
                        } absolute top-20 right-0 left-0 z-50 bg-gray-600 bg-opacity-40 backdrop-blur`}
                >
                    <ul className="py-4 px-2 font-bakbak">
                        <li className="py-2">
                            <Link
                                href="/"
                                className="block text-white hover:text-gray-200 cursor-pointer"
                                onClick={() => handleMobileMenuToggle()}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link
                                href="/commands"
                                className="block text-white hover:text-gray-200 cursor-pointer"
                                onClick={() => handleMobileMenuToggle()}
                            >
                                Commands
                            </Link>
                        </li>
                        <li className="py-2">
                            <button
                                onClick={() => {
                                    setInviteModelOpen(true)
                                    handleMobileMenuToggle();
                                }}
                                className="block text-white hover:text-gray-200 cursor-pointer"
                            >
                                Invite Me
                            </button>
                        </li>
                        <li className="py-2">
                            <a
                                target="_blank"
                                href="https://discord.com/invite/7Wb3PQQ2dX"
                                className="block text-white hover:text-gray-200"
                                onClick={() => handleMobileMenuToggle()}
                            >
                                Contact
                            </a>
                        </li>
                        <li className="py-2">
                            <Link
                                href="/stats"
                                className="block text-white hover:text-gray-200"
                                onClick={() => handleMobileMenuToggle()}
                                prefetch={false}
                            >
                                Stats
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    );
};


export default NavBar;