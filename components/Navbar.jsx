import Image from 'next/image';
import React, {Fragment, useState} from 'react'
import Logo from "./../public/assets/logo.png"
import Link from "next/link"
import {Menu, Transition} from "@headlessui/react";
import {BsThreeDotsVertical} from "react-icons/bs"
import {AiOutlineSearch, AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"

// function classNames(...classes) {
//     return classes
//         .filter(Boolean)
//         .join(' ')
// }

const Navbar = () => {

    let [nav,
        setNav] = useState(false);

    let [input, setInput] = useState("");

    let handleInput = (e) => {
        setInput(e.target.value);
    }

    let toggleNav = () => {
        setNav(!nav);
    }

    return (
        <div
            className="fixed h-14 w-full flex flex-nowrap items-center p-4 justify-between  bg-[#0e0e10] mb-[2px] z-10">
            {/* Left Side */}
            <div className="flex grow items-center justify-start">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="/"
                        width="36"
                        height="36"
                        className="cursor-pointer z-10"/>
                </Link>
                <p className="px-4">Browse</p>
                <div className="px-4">
                    <Menu as="div" className="relative text-left">
                        <div className="flex">
                            <Menu.Button>
                                <BsThreeDotsVertical size={20}/>
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items
                                className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({active}) => (
                                            <a
                                                href="#"
                                                className={classNames(active
                                                ? "bg-gray-500 text-gray-100"
                                                : "text-gray-200", "block px-4 py-2 text-sm")}>
                                                Settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({active}) => (
                                            <a
                                                href="#"
                                                className={classNames(active
                                                ? "bg-gray-500 text-gray-100"
                                                : "text-gray-200", "block px-4 py-2 text-sm")}>
                                                Support
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({active}) => (
                                            <a
                                                href="#"
                                                className={classNames(active
                                                ? "bg-gray-500 text-gray-100"
                                                : "text-gray-200", "block px-4 py-2 text-sm")}>
                                                License
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
            {/* Middle Side */}
            <div className="hidden md:flex grow-[2] items-center justify-center">
                <div
                    className="bg-gray-500 text-white flex items-center justify-between max-w-[400px] m-auto p-2 rounded-2xl w-full">
                    <div>
                        <input
                            type="text"
                            placeholder="Search"
                            value={input}
                            onChange={handleInput}
                            className="bg-transparent border-none text-white focus:outline-none"/>
                    </div>
                    <div>
                        <AiOutlineSearch/>
                    </div>
                </div>
            </div>
            {/* Right Side */}
            <div className="hidden md:flex grow items-center justify-end">
                <div className="flex items-center">
                    <Link href="/">
                        <button className="px-4 py-[6px] rounded-lg font-bold bg-[#9147ff] mr-2">
                            Account
                        </button>
                    </Link>
                    <BsPerson size={30}/>
                </div>
            </div>

            <div className="block md:hidden cursor-pointer z-10" onClick={toggleNav}>
                {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            </div>

            {/* Nav Mobile */}
            <div
                className={nav
                ? "fixed md:hidden top-0 left-0 h-screen w-full ease-in duration-500 bg-[#0e0e10] f" +
                    "lex items-center justify-center"
                : "fixed md:hidden -top-full left-0 h-full w-full bg-[#0e0e10] flex items-center ju" +
                    "stify-center ease-in duration-500"}>
                <ul className="text-center">
                    <li className="p-4 text-3xl font-bold">
                        <Link onClick={toggleNav} href="/">Home</Link>
                    </li>
                    <li className="p-4 text-3xl font-bold">
                        <Link onClick={toggleNav} href="/#live">Live Channels</Link>
                    </li>
                    <li className="p-4 text-3xl font-bold">
                        <Link onClick={toggleNav} href="/#categories">Top Categories</Link>
                    </li>
                    <li className="p-4 text-3xl font-bold">
                        <Link onClick={toggleNav} href="/account">Account</Link>
                    </li>
                    <li className="p-4 text-3xl font-bold">
                        <Link href="/" onClick={toggleNav}>
                            <button>Sign Out</button>
                        </Link>
                    </li>
                </ul>
                <Link href="/" className="absolute top-4 left-4" onClick={toggleNav}>
                    <Image src={Logo} width={36} height={36} alt="/"/>
                </Link>
                {/* <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleNav}>
                    <AiOutlineClose size={30}/>
                </div> */}
            </div>
        </div>
    );
}

export default Navbar