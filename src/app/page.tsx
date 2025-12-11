import Goitietkiem, { KeyList } from "@/components/S6/Goitietkiem";
import Backgroundbookingbutton from "@/components/Backgroundbookingbutton";
import Bookingbutton from "@/components/Bookingbutton";
import Image from "next/image";
import Quangcao from "@/components/Quangcao";
import Cardwhy from "@/components/S2/Cardwhy";
import Banggia from "@/components/Banggia";
import Cardstep from "@/components/Cardstep";
import Dichvu from "@/components/Dichvu";
import Keyfeature from "@/components/Keyfeature";

export default function Home() {
    const unwhole: KeyList[] = [
        { key: "u1", content: "Vệ sinh cơ bản" },
        { key: "u2", content: "Giải pháp nhanh - gọn" },
        { key: "u3", content: "Tích điểm cơ bản" },
        { key: "u4", content: "Đưa đón miễn phí 5km" }
    ];
    const combo5Perks: KeyList[] = [
        { key: "c501", content: "Tiết kiệm 200.000đ" },
        { key: "c502", content: "Tích điểm x2" },
        { key: "c503", content: "Ưu tiên lịch hẹn" },
        { key: "c504", content: "Đổi lịch miễn phí 1 lần" },
        { key: "c505", content: "Hạn sử dụng: 6 tháng" }
    ];
    const combo10Perks: KeyList[] = [
        { key: "c1001", content: "Tiết kiệm 800.000đ" },
        { key: "c1002", content: "Tích điểm x3" },
        { key: "c1003", content: "Ưu tiên lịch hẹn cao nhất" },
        { key: "c1004", content: "Đổi lịch không giới hạn" },
        { key: "c1005", content: "Quà tặng độc quyền" }
    ];

    return (
        <div className="flex flex-col min-h-screen items-center bg-white justify-center">
            <div id="Frame133" className="flex min-h-screen w-full flex-col items-center pb-16 px-16 bg-white sm:items-start">
                <div id="Frame304" className="self-center flex flex-row items-center gap-8 w-350 text-xl font-normal text-xtext">
                    <div id="Frame303" className="flex flex-col gap-8">
                        <div className="text-[#654e94] font-extrabold text-5xl w-160">
                            Bận rộn? Mệt mỏi vì phải gọi điện đặt lịch grooming?
                        </div>
                        <div className="flex flex-col">
                            <div>Giờ đây, đặt lịch cho bé chỉ trong 2 phút</div>
                            <div>Không gọi điện, không chờ đợi</div>
                        </div>
                        <div id="Frame308a" className="flex flex-row gap-8">
                            <div id="Frame308" className="flex flex-row items-center gap-2">
                                <Image src="/dollarbag.png" width={22} height={22} alt="money bag icon"/>
                                Rebooking 1click
                            </div>
                            <div id="Frame306" className="flex flex-row items-center gap-2">
                                <Image src="/dollarbag.png" width={22} height={22} alt="money bag icon"/>
                                2 phút
                            </div>
                            <div id="Frame307" className="flex flex-row items-center gap-2">
                                <Image src="/dollarbag.png" width={22} height={22} alt="money bag icon"/>
                                Đón tận nơi miễn phí
                            </div>
                        </div>
                        <Backgroundbookingbutton>
                            <Bookingbutton />
                        </Backgroundbookingbutton>
                        <div className="text-sm text-xtext">
                            Bạn đã có tài khoản? <b>Đăng nhập</b> để xem lịch của bạn.
                        </div>
                    </div>
                    <Quangcao />
                </div>
            </div>
            <div id="Frame135" className="flex min-h-screen w-full flex-col items-center pb-16 px-16 bg-linear-to-b from-[#eeeaf3bc] to-[#d7c8ed57] py-32 text-center text-4xl flex flex-col gap-16">
                <div className="font-bold">
                    Tại sao 2,300+ khách hàng chọn đặt qua app?
                </div>
                <div className="font-[300]">
                    Đặt 1 lần, MeoWoof lo phần còn lại
                </div>
                <div className="flex flex-row gap-13 text-xtext">
                    <Cardwhy>
                        <Image src="/lich.svg" alt="calendar" width={96} height={96} />
                        <div className="font-extrabold text-3xl">
                            TIẾT KIỆM THỜI GIAN
                        </div>
                        <div className="font-normal text-xl">
                            Trung bình tiết kiệm 5 phút/lần đặt = 1 giờ/năm cho việc quan trọng hơn
                        </div>
                    </Cardwhy>
                    <Cardwhy>
                        <Image src="/smartphone.png" alt="calendar" width={96} height={96} />
                        <div className="font-extrabold text-3xl">
                            TIỆN LỢI HƠN
                        </div>
                        <div className="font-normal text-xl">
                            Không cần gọi điện, chờ trả lời. Đặt lại như lần trước chỉ 1 tap. Nhắc lịch tự động
                        </div>
                    </Cardwhy>
                    <Cardwhy>
                        <Image src="/gift.svg" alt="calendar" width={96} height={96} />
                        <div className="font-extrabold text-3xl">
                            ƯU ĐÃI ĐỘC QUYỀN
                        </div>
                        <div className="font-normal text-xl">
                            Khách đặt qua app nhận ưu đãi riêng: Tích điểm • Giảm giá • Quà sinh nhật bé
                        </div>
                    </Cardwhy>
                </div>
            </div>
            <div id="Frame326" className="flex w-full justify-center items-center py-23 bg-white sm:items-start">
                <Banggia minimized={true} />
            </div>
            <div id="Frame313" className="flex min-h-screen w-full flex-col items-center pb-16 px-16 bg-white py-32 text-center text-4xl flex flex-col gap-16">
                <div className="font-bold">
                    Đặt lịch chỉ mất 2 phút
                </div>
                <div className="flex flex-row gap-13 text-xtext">
                    <Cardstep step={1}
                        img="/call.svg"
                        desc="Hệ thống gợi ý dịch vụ phù hợp với giống & tuổi"
                        title="Điền số điện thoại + thú cưng"
                    />
                    <Cardstep step={2}
                        img="/lich.svg"
                        desc="Hệ thống tự chọn quy trình+ groomer phù hợp"
                        title="Chọn dịch vụ và ngày giờ"
                    />
                    <Cardstep step={3}
                        img="/done.svg"
                        desc="Nhận xác nhận ngay, theo dõi realtime"
                        title="Xác nhận & thanh toán"
                    />
                </div>
            </div>
            <div id="Frame327" className="flex min-h-screen w-full flex-col items-center pb-16 px-16 bg-white py-32 text-center text-4xl flex flex-col gap-16">
                <div className="font-bold">
                    Tính năng nổi bật
                </div>
                <div className="Frame309 flex flex-row gap-6 h-162 w-351">
                    <Dichvu img="/dummy.png" text="Basic Spa" />
                    <Dichvu img="/dummy.png" text="Grooming" />
                    <Dichvu img="/dummy.png" text="Pet Hotel" />
                </div>
            </div>
            <div id="Frame349" className="flex min-h-screen w-full flex-col items-center pb-16 px-16 bg-white py-32 text-center text-4xl flex flex-col gap-16">
                <div className="font-bold">
                    Dịch vụ và giá chi tiết
                </div>
                <div className="Frame309 flex flex-row gap-35 h-162 w-351">
                    <Goitietkiem price="300-400" combo="Gói Lẻ" times="" advantages={unwhole} />
                    <Goitietkiem price="1400-1800" combo="Combo 5" times="280-360" discount={true} advantages={combo5Perks} popular />
                    <Goitietkiem price="2600-3500" combo="Combo 10" times="250-330" discount={true} advantages={combo10Perks} popular popRed />
                </div>
            </div>
            <div id="Frame315" className="flex min-h-screen w-full flex-col items-center pb-16 px-16 bg-white py-32 text-center text-4xl flex flex-col gap-16">
                <div className="font-bold">
                    Tính năng nổi bật
                </div>
                <div className="Frame309 flex flex-col gap-4 w-351">
                    <div className="flex flex-row gap-8 items-center h-72">
                        <Keyfeature>
                            <div className="w-56 h-60 rounded-2xl bg-zinc-500"></div>
                            <div className="flex flex-col text-start gap-5">
                                <div className="font-extrabold">ĐƯA ĐÓN TẬN PHÒNG + TRACKING</div>
                                <ul className="text-lg font-[300] list-disc pl-8">
                                    <li>Lên tận phòng chung cư</li>
                                    <li>không cần xuống lobby</li>
                                    <li>Theo dõi lịch trình realtime</li>
                                </ul>
                                <div className="text-[#903bff] text-2xl">
                                    → 63% khách yêu cầu
                                </div>
                            </div>
                        </Keyfeature>
                        <Keyfeature>
                            <div className="flex flex-col text-start gap-5">
                                <div className="font-extrabold">QUẢN LÝ GÓI DỊCH VỤ</div>
                                <ul className="text-lg font-[300] list-disc pl-8">
                                    <li>Số lần còn lại</li>
                                    <li>Hạn sử dụng</li>
                                    <li>Lịch sử dịch vụ</li>
                                    <li>Thông báo sắp hết hạn</li>
                                </ul>
                                <div className="text-[#903bff] text-2xl">
                                    → 72% muốn tự quản lý
                                </div>
                            </div>
                        </Keyfeature>
                    </div>
                    <div className="flex flex-row gap-8 items-center h-72">
                        <Keyfeature>
                            <div className="flex flex-col text-start gap-5">
                                <div className="font-extrabold">THANH TOÁN + TÍCH ĐIỂM</div>
                                <ul className="text-lg font-[300] list-disc pl-8">
                                    <li>Online payment: Momo, VNPay, Visa/Master/</li>
                                    <li>Tích điểm mỗi lần đặt/</li>
                                    <li>Đổi quà, giảm giá/</li>
                                </ul>
                            </div>
                        </Keyfeature>
                        <Keyfeature>
                            <div className="flex flex-col text-start gap-5">
                                <div className="font-extrabold">ĐẶT LẠI 2 TAP</div>
                                <ul className="text-lg font-[300] list-disc pl-8">
                                    <li>Không cần nhập lại thông tin khi đặt những lần sau/</li>
                                    <li>Tự lưu lịch sử các dịch vụ bạn đã sử dụng/</li>
                                    <li>Tự động nhắc lịch để hạn chế bỏ lỡ/</li>
                                </ul>
                                <div className="text-[#903bff] text-2xl">
                                    → Giảm 54% tỷ lệ bỏ lỡ lịch
                                </div>
                            </div>
                        </Keyfeature>
                    </div>
                    <div className="flex flex-row gap-8 items-center h-72">
                        <Keyfeature>
                            <div className="flex flex-col items-center gap-5">
                                <div className="font-extrabold">PREMIUM REWARDS</div>
                                <ul className="text-lg font-[300] list-disc pl-8">
                                    <li>Ưu đãi sinh nhật thú cưng</li>
                                    <li>Tích điểm đổi dịch vụ miễn phí</li>
                                    <li>Giảm giá khách hàng thân thiết</li>
                                    <li>Quà tặng đặc biệt dịp lễ</li>
                                </ul>
                            </div>
                        </Keyfeature>
                    </div>
                </div>
            </div>
            <div id="Frame352" className="flex min-h-screen w-full flex-col items-center pb-16 px-16 bg-[#f2edf8] py-32 text-center text-4xl flex flex-col gap-16">
                <div className="font-bold">
                    Câu hỏi thường gặp
                </div>
                <div className="Frame268 flex flex-col gap-6 w-351">
                    <div className="flex flex-row gap-1 items-center">
                        <Image src="/jake.png" width={24} height={24} alt="jake" />
                        <div className="text-base">Chọn loại Pet</div>
                    </div>
                    <div className="w-full bg-white rounded-xl p-3 text-base font-normal text-start">
                        Làm sao để đặt lịch chăm sóc thú cưng?
                    </div>
                    <div className="w-full bg-white rounded-xl p-3 text-base font-normal text-start">
                        Dịch vụ Basic Spa và Grooming mất bao lâu để hoàn thành?
                    </div>
                    <div className="w-full bg-white rounded-xl p-3 text-base font-normal text-start">
                        Thú cưng có cần tiêm phòng hoặc chuẩn bị gì trước khi đến không?
                    </div>
                    <div className="w-full bg-white rounded-xl p-3 text-base font-normal text-start">
                        Nếu thú cưng sợ hãi, giãy giụa hoặc hơi hung dữ thì có được nhận không? 
                    </div>
                    <div className="w-full bg-white rounded-xl p-3 text-base font-normal text-start">
                        Báo giá dịch vụ được tính như thế nào?
                    </div>
                </div>
            </div>
            <div id="Frame354" className="flex min-h-screen w-full items-center justify-center bg-linear-to-l from-[#b388ff] to-[#e9ff1b96] py-32">
                <div id="Frame485" className="w-226 flex flex-col items-center gap-8">
                    <Image src="/gift.svg" width={176} height={176} alt="" />
                    <div id="Frame482" className="flex flex-col items-center gap-3 text-white">
                        <div className="text-4xl">Ưu đãi đặc biệt cho lần đầu đặt lịch</div>
                        <div className="text-2xl font-light">Giảm 15% + Tặng 100 điểm tích lũy</div>
                    </div>
                    <div className="flex flex-row gap-8">
                        <button className="border-1 border-darkpp72 bg-[#cada31] rounded-xl p-5 w-100">ĐẶT LỊCH NGAY - NHẬN ƯU ĐÃI</button>
                        <button className="border-2 border-darkpp72 rounded-xl p-5 w-64">TẢI APP MOBILE</button>
                    </div>
                    <div className="flex flex-row gap-3">
                        <Image src="/clock-purple.svg" width={22} height={22} alt="" />
                        <div className="text-white font-light">Còn 47 slot trong tuần này</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
