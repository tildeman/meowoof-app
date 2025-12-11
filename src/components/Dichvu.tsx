"use client";

import Image from "next/image";

type DichvuParams = {
    text: string,
    img: string
};

export default function Dichvu({ text, img }: DichvuParams) {
    return (
        <div className="grow h-full flex items-center justify-center relative rounded-3xl overflow-clip">
            <div className="w-full h-full absolute">
                <Image src={img} width={1920} height={1920} className="min-w-full min-h-full" alt="dummy" />
            </div>
            <div className="Frame65 flex items-center bg-[#f0f0f077] rounded-[36] border-1 border-white relative h-23 px-4 text-shadow-lg text-white">
                <div className="absolute h-full w-full blur-xl"></div>
                {text}
            </div>
        </div>
    )
}