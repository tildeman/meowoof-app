import Goitietkiem from "@/components/S6/Goitietkiem";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center bg-white justify-center font-sans">
            <main className="flex min-h-screen w-full flex-col items-center py-32 px-16 bg-white sm:items-start">
                <div id="Frame304" className="flex flex-row items-center gap-8 w-350 text-xl font-normal text-xtext">
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
                    </div>
                </div>
                <Goitietkiem />
            </main>
        </div>
    );
}
