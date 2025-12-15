"use client";

import Image from "next/image";
import Vector1 from "../../public/bgbeans/1.svg";
import Vector2 from "../../public/bgbeans/2.svg";

type StepParams = {
    step: number,
    img: string,
    title: string,
    desc: string
};

export default function Cardstep({ step, img, title, desc }: StepParams) {
    return (
        <div className="rounded-[34px] relative overflow-clip">
            <div className="e1 absolute w-full h-full">
                <Vector1 className="vec1 opacity-55" />
                <Vector2 className="vec2 opacity-72" />
            </div>
            <div className="relative flex flex-col items-center gap-6 max-w-109 px-15 py-5">
                <div className="w-26 h-26 flex items-center justify-center text-white font-extrabold text-5xl bg-ppin rounded-full">{step.toString()}</div>
                <Image width={77} height={77} src={img} alt={"step" + step} />
                <div className="font-extrabold text-3xl">{title}</div>
                <div className="font-normal text-xl">{desc}</div>
                <div className="bg-[#626262] w-77 h-43 rounded-lg"></div>
                <button className="v1 text-lg">Đặt ngay</button>
            </div>
        </div>
    )
}