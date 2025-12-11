"use client";

import Image from "next/image";

export default function Goitietkiem() {
    return (
        <div className="w-159 bg-white rounded-2xl relative h-13 flex flex-row items-center mx-6 my-4.5 overflow-clip">
            <div className="flex flex-row gap-3 items-center px-3 py-3 border-r-1 border-[#0000036]">
                <div className="text-md text-xtest49 font-medium">Để lại số điện thoại</div>
                <div className="w-5 h-5 flex items-center justify-center">
                    <Image src="/chevron-down.svg" alt="" width={10} height={5} />
                </div>
            </div>
            <div className="flex flex-row gap-3 items-center px-3 py-3 border-r-1 border-[#0000036]">
                <div className="text-md text-xtest49 font-medium">Chó</div>
                <div className="w-5 h-5 flex items-center justify-center">
                    <Image src="/chevron-down.svg" alt="" width={10} height={5} />
                </div>
            </div>
            <div className="flex items-center justify-center grow bg-[#e7ff00] h-full">
                <div className="text-xl text-[#50409a] font-bold">Đặt lịch ngay</div>
            </div>
        </div>
    )
}