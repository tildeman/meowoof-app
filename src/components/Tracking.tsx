"use client";

import Image from "next/image";
import Tracking2 from "./Tracking2";

export default function Tracking() {
    return (
        <div className="bg-[#fff9] relative p-8 rounded-[36] text-xtext flex flex-col gap-8">
            <div id="Frame389" className="flex flex-col gap-2 w-full">
                <div className="text-3xl">Lịch đặt</div>
                <div id="Frame381" className="w-full p-4 bg-grbutton rounded-xl flex flex-col gap-1">
                    <div id="Frame380" className="flex flex-row items-center gap-1">
                        <Image src="/calendar.png" width={16} height={16} alt="" />
                        <div>Thứ 7, 28/11</div>
                        <div className="w-1 h-1 rounded-full bg-xtext"></div>
                        <div>14:00</div>
                    </div>
                    <div className="flex flex-row items-center gap-3 font-normal">
                        <div>Grooming</div>
                        <div className="w-2 h-2 rounded-full bg-xtext"></div>
                        <div>Miu</div>
                        <div className="w-2 h-2 rounded-full bg-xtext"></div>
                        <div>Toà A, tầng 10 (Pickup)</div>
                    </div>
                    <div id="Frame382" className="flex flex-row gap-15">
                        <button className="bg-transparent border-xtext border-1 font-normal grow rounded-full flex flex-row items-center gap-3 justify-center py-1">
                            <Image src="/plus-circle.svg" width={17} height={17} alt=""/>
                            <div>Thêm thú cưng</div>
                        </button>
                        <button className="bg-transparent border-shopee text-shopee border-1 font-normal grow rounded-full flex flex-row items-center gap-3 justify-center py-1">
                            <Image src="/plus-circle.svg" width={17} height={17} alt=""/>
                            <div>Huỷ</div>
                        </button>
                    </div>
                </div>
            </div>
            <Tracking2 />
            <div id="Frame278" className="flex flex-col gap-6">
                <div>Lịch sử gần đây</div>
                <div className="flex flex-row items-center gap-2">
                    <Image src="/check.svg" width={14} height={14} alt="check" />
                    <div className="font-normal">27/11 - Grooming - 200.000đ</div>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Image src="/check.svg" width={14} height={14} alt="check" />
                    <div className="font-normal">27/11 - Grooming - 200.000đ</div>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Image src="/check.svg" width={14} height={14} alt="check" />
                    <div className="font-normal">27/11 - Grooming - 200.000đ</div>
                </div>
            </div>
            <div className="text-center font-normal">Xem toàn bộ lịch sử</div>
        </div>
    )
}