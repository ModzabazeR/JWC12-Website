import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"

const NavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className={"flex items-center text-center h-12 p-4 justify-end" + (isNavExpanded ? " border-x-2 border-t-2" : " border-2")}>
            <ul className={"md:flex md:space-x-8" + (isNavExpanded ? " absolute right-0 top-11 p-4 w-full bg-[#612378] border-x-2 border-b-2" : " hidden")}>
                <li className="hover:underline p-2 lg:p-0">
                    <Link href="/">
                        <a>เกี่ยวกับหมอหมึก</a>
                    </Link>
                </li>
                <li className="hover:underline p-2 lg:p-0">
                    <Link href="/">
                        <a>บทความ</a>
                    </Link>
                </li>
                <li className="hover:underline p-2 lg:p-0">
                    <Link href="/">
                        <a>จองคิว</a>
                    </Link>
                </li>
            </ul>

            <div className="md:hidden" onClick={() => setIsNavExpanded(!isNavExpanded)}>
                <GiHamburgerMenu />
            </div>
        </nav>
    )
}

export default NavBar;