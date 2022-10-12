import { RefObject, useEffect, useState } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export default function useOutsideClick(ref: RefObject<HTMLElement>) {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsClicked(true)
            } else {
                setIsClicked(false)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    return isClicked;

}