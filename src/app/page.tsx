import Goitietkiem from "@/components/S6/Goitietkiem";
import Backgroundbookingbutton from "@/components/Backgroundbookingbutton";
import Bookingbutton from "@/components/Bookingbutton";
import Image from "next/image";
import Quangcao from "@/components/Quangcao";
import Cardwhy from "@/components/S2/Cardwhy";
import Banggia from "@/components/Banggia";

export default function Home() {
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
        </div>
    );
}
