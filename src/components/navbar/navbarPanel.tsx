import { forwardRef } from "react"
import { Link } from "react-router-dom"

interface NavbarPanelProps {
    items: { id: number, name: string, href: string }[],
    handleClick: () => void
}

const NavbarPanel = forwardRef<HTMLDivElement, NavbarPanelProps>(({ items, handleClick }, panelRef) => (
    <>
        <div ref={panelRef} className={"sm:hidden w-full z-20 absolute top-16 bg-gray-800 text-gray-300"}>
            <ul className="flex flex-col justify-start">
                {items.map(navPage =>
                    <Link to={navPage.href} aria-current="page" key={navPage.id} className="hover:text-gray-600 ">
                        <li onClick={handleClick} className='w-full border-b-2 border-gray-400 px-3 py-4 '>
                            {navPage.name}
                        </li>
                    </Link>
                )}
            </ul>
        </div>
    </>
))
export default NavbarPanel