import Image from "next/image";

interface Item {
    title: string
    icon: string
    textColor: string
    value: number
}

export function ResumeItem({ title, icon, textColor, value }: Item) {
    return (
        <div className="
            flex 
            flex-col 
            items-center 
            justify-center
            bg-white 
            rounded
            h-24
            pt-1 
            pb-1 
            pr-4 
            pl-4
            w-1/3
        ">
            <div className="flex justify-between w-[60%]">
                <h4 className="text-stone-600">{title}</h4>
                {icon === 'up' && <Image src="/arrow-up.svg" alt="up" width={20} height={20} />}
                {icon === 'down' && <Image src="/arrow-down.svg" alt="down" width={20} height={20} />}
            </div>
            <h2 className={`font-extrabol text-5xl ${textColor}`}>{value}</h2>
        </div>
    );
}
