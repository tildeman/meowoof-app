"use client";

import Cardgio from "@/components/Cardgio";
import Tracking2 from "@/components/Tracking2";
import Image from "next/image";

export default function Confirm() {
    return (
        <div className="min-h-screen bg-[#f2edf8] flex flex-col items-center py-8">
            <div className="flex flex-row gap-13">
                <div id="Frame267" className="flex flex-col w-232 gap-6">
                    <div className="bg-[#fff9] relative p-8 rounded-[36] flex flex-col gap-5">
                        <div id="Frame231" className="flex flex-row items-center">
                            <Image src="/jake.png" width={24} height={24} alt="" />
                            <div>Chi nhánh và thời gian</div>
                        </div>
                        <div id="Frame206" className="flex flex-col w-full gap-4">
                            <div id="Frame207" className="flex flex-row w-full items-center gap-4">
                                <div className="grow p-4 rounded-xl bg-ppin flex justify-center text-white">MW Lương Yên</div>
                                <div className="grow p-4 rounded-xl border-[#0005] border-2 flex justify-center">MW Hà Đông</div>
                                <div className="grow p-4 rounded-xl border-[#0005] border-2 flex justify-center">MW Gia Lâm</div>
                                <div className="grow p-4 rounded-xl border-[#0005] border-2 flex justify-center">MW Long Biên</div>
                            </div>
                            <div id="Frame194" className="flex flex-row w-full items-center gap-4">
                                <div className="grow py-4 rounded-2xl border-[#0005] border-2 flex justify-center">
                                    <div className="flex flex-col items-center">
                                        <div>Thứ 2</div>
                                        <div className="text-2xl font-extrabold">15</div>
                                        <div className="font-normal">Hôm nay</div>
                                    </div>
                                </div>
                                <div className="grow py-4 rounded-2xl border-[#0005] border-2 flex justify-center">
                                    <div className="flex flex-col items-center">
                                        <div>Thứ 3</div>
                                        <div className="text-2xl font-extrabold">16</div>
                                        <div className="font-normal">Hôm nay</div>
                                    </div>
                                </div>
                                <div className="grow p-4 rounded-2xl bg-ppin flex justify-center text-white">
                                    <div className="flex flex-col items-center">
                                        <div>Thứ 4</div>
                                        <div className="text-2xl font-extrabold">17</div>
                                        <div className="font-normal">Hôm nay</div>
                                    </div>
                                </div>
                                <div className="grow py-4 rounded-2xl border-[#0005] border-2 flex justify-center">
                                    <div className="flex flex-col items-center">
                                        <div>Thứ 5</div>
                                        <div className="text-2xl font-extrabold">18</div>
                                        <div className="font-normal">Hôm nay</div>
                                    </div>
                                </div>
                                <div className="grow py-4 rounded-2xl border-[#0005] border-2 flex justify-center">
                                    <div className="flex flex-col items-center">
                                        <div>Thứ 6</div>
                                        <div className="text-2xl font-extrabold">19</div>
                                        <div className="font-normal">Hôm nay</div>
                                    </div>
                                </div>
                                <div className="grow py-4 rounded-2xl border-[#0005] border-2 flex justify-center">
                                    <div className="flex flex-col items-center">
                                        <div>Thứ 7</div>
                                        <div className="text-2xl font-extrabold">20</div>
                                        <div className="font-normal">Hôm nay</div>
                                    </div>
                                </div>
                                <div className="grow py-4 rounded-2xl border-[#0005] border-2 flex justify-center">
                                    <div className="flex flex-col items-center">
                                        <div>Chủ nhật</div>
                                        <div className="text-2xl font-extrabold">21</div>
                                        <div className="font-normal">Hôm nay</div>
                                    </div>
                                </div>
                            </div>
                            <Cardgio />
                        </div>
                    </div>
                    <div className="bg-grbutton relative p-8 rounded-[36] flex flex-col gap-5">
                        <div id="Frame481" className="flex flex-row w-full gap-4 items-center">
                            <div className="flex flex-row gap-4 h-full grow">
                                <div className="flex flex-col gap-14 grow">
                                    <div className="flex flex-row items-center gap-4">
                                        <Image src="/hotel.svg" width={34} height={34} alt="" />
                                        <div className="flex flex-col gap-1">
                                            <div className="font-normal">DỊCH VỤ</div>
                                            <div>GROOMING</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center gap-4">
                                        <Image src="/lich.svg" width={34} height={34} alt="" />
                                        <div className="flex flex-col gap-1">
                                            <div className="font-normal">THÚ CƯNG</div>
                                            <div>Miu - Mèo Ba Tư</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-14 grow">
                                    <div className="flex flex-row items-center gap-4">
                                        <Image src="/lich.svg" width={34} height={34} alt="" />
                                        <div className="flex flex-col gap-1">
                                            <div className="font-normal">NGÀY HẸN</div>
                                            <div>Thứ 3, 14/11/2025</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center gap-4">
                                        <Image src="/lich.svg" width={34} height={34} alt="" />
                                        <div className="flex flex-col gap-1">
                                            <div className="font-normal">THỜI LƯỢNG</div>
                                            <div>90 phút</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-14 grow">
                                    <div className="flex flex-row items-center gap-4">
                                        <Image src="/vitri.svg" width={34} height={34} alt="" />
                                        <div className="flex flex-col gap-1">
                                            <div className="font-normal">CHI NHÁNH</div>
                                            <div>MeoWoof Lương Yên</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center gap-4">
                                        <Image src="/lich.svg" width={34} height={34} alt="" />
                                        <div className="flex flex-col gap-1">
                                            <div className="font-normal">THỜI GIAN</div>
                                            <div>19:30</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-px h-44 bg-[#0005]"></div>
                            <div>Sửa</div>
                        </div>
                        <Tracking2 />
                    </div>
                    <div className="flex flex-row items-center">
                        <Image src="/jake.png" width={24} height={24} alt="" />
                        <div>Thanh toán</div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="grow p-4 rounded-[32] bg-ppin flex justify-center text-white flex flex-col items-center gap-2">
                            <Image src="/stackofmoney.png" width={64} height={64} alt="" />
                            <div className="text-2xl">Thanh toán COD</div>
                            <div>Khi nhận bé</div>
                        </div>
                        <div className="grow p-4 rounded-[32] border-[#0005] border-2 flex justify-center flex flex-col items-center gap-2">
                            <Image src="/smartphone.png" width={64} height={64} alt="" />
                            <div className="text-2xl">Ví MoMo</div>
                            <div>Nhanh và tiện lợi</div>
                        </div>
                        <div className="grow p-4 rounded-[32] border-[#0005] border-2 flex justify-center flex flex-col items-center gap-2">
                            <Image src="/magneticcard.png" width={64} height={64} alt="" />
                            <div className="text-2xl">Thẻ ngân hàng</div>
                            <div>Napas, Visa</div>
                        </div>
                    </div>
                    <div className="bg-[#fff9] relative p-8 rounded-[36] flex flex-col gap-7">
                        <div className="flex flex-row items-center">
                            <Image src="/jake.png" width={24} height={24} alt="" />
                            <div>Thông báo</div>
                        </div>
                        <div id="Frame293" className="flex flex-col gap-3">
                            <div className="flex flex-row gap-1 items-center font-normal">
                                <div className="rounded-full w-6 h-6 bg-textclicked flex items-center justify-center">
                                    <Image src="/check2.svg" width={13} height={13} alt="" />
                                </div>
                                <div>Nhắc nhở qua SMS trước 30 phút</div>
                            </div>
                            <div className="flex flex-row gap-1 items-center font-normal">
                                <div className="rounded-full w-6 h-6 bg-textclicked flex items-center justify-center">
                                    <Image src="/check2.svg" width={13} height={13} alt="" />
                                </div>
                                <div>Gửi tracking qua SMS</div>
                            </div>
                            <div className="flex flex-row gap-1 items-center font-normal">
                                <div className="rounded-full w-6 h-6 border-xtext border-1"></div>
                                <div>Gửi thông tin qua mail</div>
                            </div>
                        </div>
                        <div className="grow px-5 py-4 rounded-3xl border-xtext border-1 bg-grbutton">
                            <div className="flex flex-row gap-1 items-center font-normal">
                                <div className="rounded-full w-6 h-6 border-xtext border-1"></div>
                                <div>Tôi đồng ý với <b>Điều khoản dịch vụ</b> và <b>Chính sách bảo mật</b> của Meowoof</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#897ec519] relative py-4 rounded-3xl flex flex-row items-center gap-3 justify-center">
                        <Image src="/plus-circle.svg" width={21} height={21} alt=""/>
                        <div className="text-xl font-normal">Sửa yêu cầu đặc biệt (tuỳ chọn)</div>
                    </div>
                    <button className="bg-ppin border-darkpp72 border-1 p-4 w-full rounded-2xl">
                        <div className="text-white text-lg flex flex-row items-center justify-center">
                            XÁC NHẬN ĐẶT LỊCH
                            <Image src="/chevron-left.svg" width={24} height={24} alt="" />
                        </div>
                    </button>
                </div>
                <div id="Frame398" className="flex flex-col gap-6">
                    <div id="Frame250" className="bg-[#fff9] relative p-8 rounded-[36] w-118 flex flex-col gap-6">
                        <div id="Frame260">
                            <div className="text-2xl">Chi tiết thanh toán</div>
                        </div>
                        <div id="Frame300" className="flex flex-col gap-1">
                            <div className="flex flex-row items-center gap-2">
                                <div className="font-normal">Ẩn chi tiết</div>
                                <Image src="/chevron-down.svg" width={18} height={18} alt="" />
                            </div>
                            <div className="bg-[#0004] w-full h-px"></div>
                        </div>
                        <div className="bg-[#0004] w-full h-px"></div>
                        <div id="Frame256" className="flex flex-row gap-auto">
                            <div className="text-2xl font-extrabold">Tổng thanh toán</div>
                            <div className="text-2xl font-extrabold ml-auto text-[#9057ff]">360.000đ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}