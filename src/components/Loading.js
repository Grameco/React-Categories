export default function Spinner() {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="spinner w-[40px]"></div>
            <h1 className="text-[2rem] font-semibold" >Loading...</h1>
        </div>
    )
}