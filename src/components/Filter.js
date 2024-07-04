export default function Filter({filterData, category, setCategory}) {
    function filterHandler(title) {
        setCategory(title)
    }

    return (
        <div className="flex flex-wrap justify-center items-center gap-6 my-4 ">
            {
                filterData.map((item) => {
                    return (
                        <button key={item.id} onClick={() => filterHandler(item.title)} className={`bg-[#0d1427] rounded-lg text-white px-4 p-2 hover:bg-opacity-80 duration-200 ease-in-out
                        ${category === item.title ? "bg-opacity-70 border-2 border-white" : "bg-opacity-50"}`} >{item.title}</button>
                    )
                })
            }
        </div>
    )
}