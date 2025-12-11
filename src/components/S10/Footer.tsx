"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full h-96 bg-[#624b7e] flex items-center justify-center text-white font-light">
            <div className="flex flex-row gap-96 w-333">
                <div className="flex flex-col gap-6 w-107">
                    <Image src="/logo.svg" width={112} height={77} alt="" />
                    <div>
                        Dịch vụ grooming thú cưng chuyên nghiệp tại Hà Nội. Đặt lịch online nhanh chóng, đưa đón tận nơi, theo dõi real-time.
                    </div>
                </div>
                <div className="flex flex-row gap-12">
                    <div className="flex flex-col gap-5">
                        <div className="font-bold">Dịch vụ</div>
                        <div>Gói cơ bản 9 bước</div>
                        <div>Grooming</div>
                        <div>Pet Taxi</div>
                        <div>Hotel</div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="font-bold">Về chúng tôi</div>
                        <div>Giới thiệu</div>
                        <div>Đội ngũ groomer</div>
                        <div>Chi nhánh</div>
                        <div>Tuyển dụng</div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="font-bold">Liên lạc</div>
                        <div>Meowoof@gmail.com</div>
                        <div>0987 765 432</div>
                        <div>Instagram</div>
                    </div>
                </div>
            </div>
        </div>
    )
}