"use client";

import Image from "next/image";

export default function Banggia({ minimized }: { minimized: boolean }) {
    return (
        <div className="Frame323 w-279 px-33 py-12 rounded-xl bg-nen30 flex flex-col items-start">
            <div className="Frame322 flex flex-row self-center items-center gap-4">
                <div className="font-[300] text-lg">Xem nhanh bảng giá</div>
                <div className="w-5 h-5 flex items-center justify-center">
                    <Image src="/chevron-down.svg" alt="" width={10} height={5} />
                </div>
            </div>
            <div className={"Frame324 " + (minimized ? "hidden" : "flex flex-col w-full gap-6")}>
                <div className="Frame258 text-xl">Bảng giá tóm tắt</div>
                <div className="Frame257 flex flex-col font-medium gap-3">
                    <div className="flex flex-row">
                        <div className="">Spa</div>
                        <div className="ml-auto">450.000đ</div>
                    </div>
                    <div className="flex flex-row">
                        <div className="">Grooming</div>
                        <div className="ml-auto">450.000đ</div>
                    </div>
                    <div className="flex flex-row">
                        <div className="">Hotel</div>
                        <div className="ml-auto">450.000đ</div>
                    </div>
                    <div className="flex flex-row">
                        <div className="">Taxi Pet</div>
                        <div className="ml-auto">450.000đ</div>
                    </div>
                    <div className="flex flex-row">
                        <div className="">Cắt tỉa</div>
                        <div className="ml-auto">450.000đ</div>
                    </div>
                </div>
                <div className="Frame325 text-lg">
                    Gói tiết kiệm: Gói 5 lần -10% &nbsp;
                    Gói 10 lần -20%
                </div>
            </div>
        </div>
    )
}