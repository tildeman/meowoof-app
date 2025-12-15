"use client";

import Image from 'next/image';

export type KeyList = { key: string, content: string };

type GoitietkiemParams = {
    popular?: boolean,
    popRed?: boolean,
    price: string,
    combo: string,
    times: string,
    discount?: boolean
    advantages: KeyList[]
};

export default function Goitietkiem({ popular, popRed, price, combo, times, discount, advantages }: GoitietkiemParams) {
    const advantageTags = advantages?.map(({ key, content }) => (
        <div className="flex flex-row items-center text-lg gap-1" key={key}>
            <Image src="/checked_checkbox.svg" width={32} height={32} alt="Checked check box" />
            {content}
        </div>
    ));
    return (
        <div className="relative bg-ppin border-darkpp72 rounded-3xl border-2 grow h-157 py-5 flex flex-col items-center gap-3">
            <div id="Frame346" className="flex flex-col items-center gap-4 text-white">
                <div className="text-3xl">
                    {combo}
                </div>
                <div className="text-5xl font-extrabold">
                    {price}
                </div>
                <div className="text-2xl font-normal">
                    {times} /lần
                </div>
                {
                    discount ? (
                        <div className="bg-grbutton rounded-lg px-3 py-1 text-base">
                            -10%
                        </div>
                    ) : null
                }
            </div>
            <div id="Frame339" className="flex flex-col items-start gap-1 text-white font-normal w-72">
                {advantageTags}
            </div>
            <div id="Frame338" className="px-7 py-3 min-w-64 border-1 border-white rounded-xl text-2xl text-white absolute bottom-6">
                Đặt lẻ
            </div>
            {
                popular ? (
                    <div id="Frame173" className={"px-3 py-2 rounded-full bg-[#f4fba5] text-lg text-xtest absolute right-2 -top-4 flex flex-row gap-2"}>
                        <Image src="/star.svg" alt="" width={18} height={18} />
                        Phổ biến
                    </div>
                ) : null
            }
        </div>
    );
}