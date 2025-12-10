"use client";

import Image from 'next/image';

export default function Navbar() {
    return (
        <div className="flex flex-row gap-18 items-center w-full px-12">
            <div className="relative w-48 h-36">
                <Image src="/logo.svg" width={122} height={84} alt="Logo Meo Woof" className="absolute left-0 top-7"></Image>
            </div>
            <div id="Menutop" className="px-12 py-2 rounded-2xl grow flex flex-row items-center justify-between bg-nen30 border-white border-1 font-normal">
                <div className="px-4 py-2 font-extrabold">Trang chủ</div>
                <div className="w-px h-6 bg-black" />
                <div className="px-4 py-2">Dịch vụ</div>
                <div className="w-px h-6 bg-black" />
                <div className="px-4 py-2">Gói tiết kiệm</div>
                <div className="w-px h-6 bg-black" />
                <div className="px-4 py-2">FAQs</div>
                <div className="w-px h-6 bg-black" />
                <div className="px-4 py-2">Liên hệ</div>
            </div>
            <div id="DangnhapDangky" className="rounded-2xl px-3 py-2 flex flex-row items-center gap-2 bg-ppin text-white font-medium">
                <div className="flex justify-center items-center w-8 h-8">
                    <Image src="/user.svg" alt="User login icon" width={56 / 3} height={21}/>
                </div>
                Đăng nhập
            </div>
        </div>
    )
}