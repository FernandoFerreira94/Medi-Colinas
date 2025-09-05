import { useApp } from "@/context/useApp";

export function Li({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { showSideBar } = useApp();
  return (
    <li
      className={`text-gray-100 flex gap-2 items-center text-basic  h-12 hover:bg-[#2d2d50]  w-full justify-center  cursor-pointer text-basic ${
        showSideBar ? "justify-start pl-4" : "justify-center"
      } ${className}`}
    >
      {children}
    </li>
  );
}
