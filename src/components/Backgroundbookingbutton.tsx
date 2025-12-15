"use client";

import Vector1 from "../../public/bgbeans/1.svg";
import Vector2 from "../../public/bgbeans/2.svg";

export default function Goitietkiem({ children }: any) {
    return (
        <div className="h-23 rounded-4xl relative overflow-clip">
            <div className="component75 bg-linear-to-b from-[#a1b1c3] to-[#516377] absolute w-full h-full opacity-35 border-1 border-[#15151519]">
                <Vector1 className="vec1" />
                <Vector2 className="vec2" />
            </div>
            { children }
        </div>
    );
}