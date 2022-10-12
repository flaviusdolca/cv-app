import multiClassNames from "../utils/multiClassName"

export type HamburgerMenuProps = {
    isOpen: boolean,
    handleClick: () => void
}
export default function HamburgerMenu({ isOpen, handleClick }: HamburgerMenuProps) {
    const hamburgerLineCss = "transition duration-500 bg-gray-500 rounded-md w-7 h-1 mb-1"
    return (
        <>
            <div onClick={handleClick} className="h-6">
                <div className={multiClassNames(hamburgerLineCss, (isOpen ? "rotate-45 translate-y-2" : ""))}></div>
                <div className={multiClassNames(hamburgerLineCss, (isOpen ? "opacity-0" : ""))} ></div>
                <div className={multiClassNames(hamburgerLineCss, (isOpen ? "-rotate-45 -translate-y-2" : ""))}></div>
            </div>
        </>
    )
}