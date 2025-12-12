"use client";

export default function Cardgio() {
    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-row gap-4">
                <div className="grow p-4 rounded-xl border-[#0005] border-2 flex justify-center">08:00</div>
                <div className="grow p-4 rounded-xl bg-ppin flex justify-center text-white">09:00</div>
                <div className="grow p-4 rounded-xl border-[#0005] border-2 flex justify-center">10:00</div>
                <div className="grow p-4 rounded-xl bg-[#48474764] text-[#654e9477] flex justify-center">11:00</div>
            </div>
            <div className="flex flex-row gap-4">
                <div className="grow p-4 rounded-xl border-[#0005] border-2 flex justify-center">12:00</div>
                <div className="grow p-4 rounded-xl border-[#0005] border-2 flex justify-center">13:00</div>
                <div className="grow p-4 rounded-xl border-[#0005] border-2 flex justify-center">14:00</div>
                <div className="grow p-4 rounded-xl border-[#0005] border-2 flex justify-center">15:00</div>
            </div>
            <div className="flex flex-row gap-4">
                <div className="grow p-4 rounded-xl border-[#0005] border-2 flex justify-center">18:00</div>
                <div className="grow p-4 rounded-xl border-[#0005] border-2 flex justify-center">19:00</div>
                <div className="grow p-4 rounded-xl border-[#0005] border-2 flex justify-center">20:00</div>
                <div className="grow p-4 rounded-xl border-[#0005] border-2 flex justify-center">21:00</div>
            </div>
        </div>
    )
}