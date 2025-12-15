"use client";

import Vector1 from "../../../public/bgbeans/1.svg";
import Vector2 from "../../../public/bgbeans/2.svg";

export default function Cardwhy({ children }: any) {
    return (
        <div className="rounded-[34px] relative overflow-clip">
            <div className="e1 absolute w-full h-full">
                <Vector1 className="vec1 opacity-55" />
                <Vector2 className="vec2 opacity-72" />
            </div>
            <div className="relative flex flex-col items-center gap-6 max-w-109 px-15 py-5">
                { children }
            </div>
        </div>
    )
}