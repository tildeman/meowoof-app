"use client";

import Image from 'next/image';

export default function Goitietkiem() {
    return (
        <div className="relative bg-ppin border-darkpp72 rounded-3xl border-2 w-sm h-120 py-5 flex flex-col items-center gap-3">
            <div id="Frame346" className="flex flex-col items-center gap-4 text-white">
                <div className="text-3xl">
                    Lẻ
                </div>
                <div className="text-5xl font-extrabold">
                    300-400
                </div>
                <div className="text-2xl font-normal">
                    /lần
                </div>
                <div className="bg-grbutton rounded-lg px-3 py-1">
                    -10%
                </div>
            </div>
            <div id="Frame339" className="flex flex-col items-start gap-1 text-white text-md font-normal w-72">
                <div className="flex flex-row items-center">
                    <Image src="/checked_checkbox.svg" width={32} height={32} alt="Checked check box" />
                    Linh Hoạt
                </div>
                <div className="flex flex-row items-center">
                    <Image src="/checked_checkbox.svg" width={32} height={32} alt="Checked check box" />
                    Linh Hoạt
                </div>
            </div>
            <div id="Frame338" className="px-7 py-3 border-1 border-white rounded-xl text-white absolute bottom-6">
                Đặt lẻ
            </div>
            <div id="Frame173" className="px-3 py-2 rounded-full bg-[#f4fba5] text-lg text-xtest absolute right-2 -top-4 flex flex-row gap-2">
                <Image src="/star.svg" alt="" width={18} height={18} />
                Phổ biến
            </div>
        </div>
    );
}