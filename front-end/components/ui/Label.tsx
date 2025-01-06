export default function Label({label}: {label:string}){
    return (
        <span className={"m-2 px-[16px] py-[14px] rounded-full bg-[#D3320F] inline-block lg:self-start md:self-start"}>
            {label}
        </span>
    );
}