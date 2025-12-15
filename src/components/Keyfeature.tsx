"use client";

import Vector1 from "../../public/bgbeans/1.svg";
import Vector2 from "../../public/bgbeans/2.svg";

export default function Keyfeature({ children }: any) {
    return (
        <div className="rounded-[34px] relative overflow-clip grow">
            <div className="e1 absolute w-full h-full">
                <Vector1 className="vec1 opacity-55" />
                <Vector2 className="vec2 opacity-72" />
            </div>
            <div className="relative flex flex-row items-start p-6 gap-6 text-xtext">
                { children }
            </div>
        </div>
    )
}