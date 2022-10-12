import HamburgerMenu from './hamburgerMenu';
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import useOutsideClick from '../hooks/useOutsideClick';
import LanguagePicker from './languagePicker';
import { useTranslation } from 'react-i18next';
import PageHeader from './pageHeader';

export default function Navbar() {

    const { t } = useTranslation();
    const panelRef = useRef(null)
    const panelOutsideClick = useOutsideClick(panelRef)
    const items = [{ id: 0, name: "CV", href: "/" }, { id: 1, name: t('labels.aboutMe'), href: "/about" }, { id: 2, name: "Portfolio", href: "/portfolio" }]
    const [isPanelOpen, setPanelOpen] = useState(false)

    useEffect(() => {
        if (panelOutsideClick) setPanelOpen(false)
    }, [panelOutsideClick])

    return (
        <>
            <PageHeader>
                <div className="text-lg flex px-4 w-full items-center text-center justify-end ">
                    <ul className="w-full hidden sm:flex justify-end space-x-4">
                        {items.map((navPage) =>
                            <li key={navPage.id}>
                                <Link to={navPage.href} aria-current="page" className="hover:text-gray-600 px-3 py-2">
                                    {navPage.name}
                                </Link>
                            </li>
                        )}
                    </ul>
                    <div onClick={() => !isPanelOpen && setPanelOpen(true)} className='block sm:hidden'>
                        <HamburgerMenu isOpen={isPanelOpen} ></HamburgerMenu>
                    </div>
                    <LanguagePicker />
                </div>
            </PageHeader>

            {
                isPanelOpen && <div ref={panelRef} className={"sm:hidden w-full z-10 absolute bg-gray-800 text-gray-300"}>
                    <ul className="flex flex-col justify-start">
                        {items.map((navPage) =>
                            <Link to={navPage.href} aria-current="page" key={navPage.id} className="hover:text-gray-600 ">
                                <li onClick={() => setPanelOpen(false)} key={navPage.id} className='w-full border-b-2 border-gray-400 px-3 py-4 '>
                                    {navPage.name}
                                </li>
                            </Link>
                        )}
                    </ul>
                </div>
            }
        </>

    )
}