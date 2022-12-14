import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;

    document.addEventListener('mousemove', e => {
         if (cursorRef.current == null) return;
         cursorRef.current.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;");
    });
    }, []);

    return (
        <div className='cursor-custom' ref={cursorRef}></div> 
    )
}

 
