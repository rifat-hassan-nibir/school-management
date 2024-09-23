import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] lg:p-4 overflow-y-auto">
        <Link href="/" className="flex justify-center lg:justify-start items-center gap-2 p-4">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">School Management</span>
        </Link>
        {/* user */}
        <Menu />
      </div>
      {/* right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-y-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
