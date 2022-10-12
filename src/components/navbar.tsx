import HamburgerMenu from './hamburgerMenu';
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import useOutsideClick from '../hooks/useOutsideClick';
import LanguagePicker from './languagePicker';
import { useTranslation } from 'react-i18next';
import PageHeader from './pageHeader';
import NavbarPanel from './navbarPanel';
import tw from "tailwind-styled-components"

//Typescript error if const is not"any"
const MobileOnly:any = tw.div`
    sm:hidden
`
export default function Navbar() {

    const { t } = useTranslation();

    const items = [{ id: 0, name: "CV", href: "/" }, { id: 1, name: t('labels.aboutMe'), href: "/about" }, { id: 2, name: "Portfolio", href: "/portfolio" }]
    const [isPanelOpen, setPanelOpen] = useState(false)
    const panelRef = useRef(null)
    const panelOutsideClick = useOutsideClick(panelRef)
    useEffect(() => {
        if (panelOutsideClick && isPanelOpen) {
            setPanelOpen(false)
        }
    }, [panelOutsideClick, isPanelOpen])

    return (
        <>
            <PageHeader>
                <div className="top-0 absolute z-10 text-lg h-16 flex px-4 w-full items-center text-center justify-end ">
                    <ul className="w-full hidden sm:flex justify-end space-x-4">
                        {items.map(navPage =>
                            <li key={navPage.id}>
                                <Link to={navPage.href} aria-current="page" className="hover:text-gray-600 px-3 py-2">
                                    {navPage.name}
                                </Link>
                            </li>
                        )}
                    </ul>
                    <LanguagePicker />

                    <MobileOnly>
                        <HamburgerMenu handleClick={() => !isPanelOpen && setPanelOpen(true)} isOpen={isPanelOpen} />
                    </MobileOnly>
                </div>

                {
                    isPanelOpen && <NavbarPanel ref={panelRef} items={items} handleClick={() => setPanelOpen(false)} />
                }
            </PageHeader>
        </>

    )
}