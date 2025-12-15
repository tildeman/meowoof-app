"use client";

import Tracking from "@/components/Tracking";
import Image from "next/image";

export default function PetInfo() {
    return (
        <div className="min-h-screen bg-[#f2edf8] flex flex-col items-center py-8">
            <div className="flex flex-row gap-13">
                <div id="Frame267" className="flex flex-col w-232 gap-6">
                    <div id="Frame247" className="bg-[#fff9] relative p-8 rounded-[36]">
                        <div id="Frame363" className="w-197 flex flex-row items-center gap-8">
                            <div id="Frame375" className="rounded-3xl bg-[#f2edf8] h-103 p-5 flex flex-col gap-4">
                                <Image src="/dummy.png" width={247} height={247} alt="" className="rounded-[36]" />
                                <div id="Frame376" className="flex flex-row gap-3">
                                    <button className="bg-ppin border-darkpp72 border-1 text-white p-2 w-36 rounded-full">Miu</button>
                                    <button className="bg-transparent border-xtext border-1 font-normal p-2 grow rounded-full">Milu</button>
                                </div>
                                <button className="bg-grbutton border-darkpp72 border-1 font-normal grow rounded-full flex flex-row items-center gap-3 justify-center">
                                    <Image src="/plus-circle.svg" width={17} height={17} alt=""/>
                                    <div>Thêm thú cưng</div>
                                </button>
                            </div>
                            <div id="Frame361" className="grow flex flex-col justify-center gap-5">
                                <div id="Frame358" className="grow flex flex-col gap-1">
                                    <div className="text-3xl font-extrabold">Xin chào Nguyễn Anh!</div>
                                    <div className="text-[#654e94] font-normal text-lg">Miu- Mèo lông ngắn</div>
                                </div>
                                <div id="Frame360" className="flex flex-col">
                                    <div className="text-[#654e94] font-normal text-lg">Lần trước bạn sử dụng:</div>
                                    <div className="text-xtext font-extrabold">Grooming cho Miu</div>
                                    <div className="flex flex-row gap-4 items-center">
                                        <div className="text-[#654e94] font-normal text-lg">200.000đ</div>
                                        <div className="w-2 h-2 rounded-full bg-[#654e94]"></div>
                                        <div className="text-[#654e94] font-normal text-lg">Ngày 27/11/2025</div>
                                    </div>
                                </div>
                                <div id="Frame362" className="flex flex-col gap-4">
                                    <button className="bg-ppin border-darkpp72 border-1 p-4 w-full rounded-2xl">
                                        <div className="text-white text-lg flex flex-row items-center justify-center">
                                            ĐẶT LẠI LỊCH 2 CLICK
                                            <Image src="/chevron-left.svg" width={24} height={24} alt="" />
                                        </div>
                                    </button>
                                    <div className="text-[#9057ff] font-normal">Chỉnh sửa dịch vụ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tracking />
                </div>
                <div id="Frame398" className="flex flex-col gap-6">
                    <div id="Frame250" className="bg-[#fff9] relative p-8 rounded-[36] w-118 flex flex-col gap-6">
                        <div id="Frame260">
                            <div className="text-2xl">Gói của tôi</div>
                            <div className="bg-[#0004] w-full h-px"></div>
                        </div>
                        <div className="font-normal">Gói Grooming (Gói 5 lần)</div>
                        <div id="Frame390" className="font-normal flex flex-row items-center gap-2">
                            <div>Còn: <b>2/5 lần</b></div>
                            <div className="w-1 h-1 bg-[#654e94] rounded-full"></div>
                            <div>HSD: 10/01/2026</div>
                        </div>
                        <div id="Frame391" className="relative rounded-full h-5 bg-nen30 overflow-clip">
                            <div className="absolute h-full w-43 bg-[#ced142]"></div>
                        </div>
                        <button className="bg-grbutton border-darkpp72 border-1 font-normal w-full rounded-2xl flex flex-row items-center gap-3 p-4">
                            <Image src="/alert-triangle.svg" width={17} height={17} alt=""/>
                            <div className="text-start"><b><i>SẮP HẾT HẠN TRONG 3 NGÀY!</i></b> Đặt ngay để không bỏ lỡ ưu đãi</div>
                        </button>
                        <button className="bg-ppin border-darkpp72 text-white border-1 w-full rounded-2xl flex flex-row items-center justify-center gap-2 p-4">
                            <div>MUA GÓI MỚI</div>
                            <Image src="/chevron-left.svg" width={17} height={17} alt=""/>
                        </button>
                    </div>
                    <div className="bg-[#fff9] relative p-8 rounded-[36] w-118 flex flex-col gap-6">
                        <div>
                            <div className="text-2xl">Ưu đãi và LOYALTY</div>
                            <div className="bg-[#0004] w-full h-px"></div>
                        </div>
                        <button className="bg-grbutton border-darkpp72 border-1 font-normal w-full rounded-2xl flex flex-row items-center gap-3 p-4">
                            <Image src="/alert-triangle.svg" width={17} height={17} alt=""/>
                            <div className="text-start">Hôm nay: Đặt qua app<br />-10% + Tặng 50 điểm</div>
                        </button>
                        <div id="Frame393" className="flex flex-col items-center w-full gap-2">
                            <div className="text-2xl">
                                320/500 điểm → Silver
                            </div>
                            <div className="relative rounded-full w-full h-5 bg-nen30 overflow-clip">
                                <div className="absolute h-full w-43 bg-[#ced142]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="font-normal">Cần thêm 180 điểm nữa!</div>
                            <div className="font-light text-sm">(Mỗi booking +20-50 điểm)</div>
                        </div>
                        <div id="Frame397" className="flex flex-row font-normal gap-3">
                            <button className="bg-ppin border-darkpp72 border-1 text-white grow p-2 w-36 rounded-full">Ưu đãi</button>
                            <button className="bg-transparent border-xtext border-1 p-2 grow rounded-full">Hạng loyalty</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}