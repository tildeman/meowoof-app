import Goitietkiem from "@/components/S6/Goitietkiem";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center bg-white justify-center font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        <Goitietkiem />
      </main>
    </div>
  );
}
