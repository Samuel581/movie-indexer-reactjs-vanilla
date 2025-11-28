export const SummaryCard = () => {
  return (
    <div className="bg-gray-50 w-96 rounded-lg m-10 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:cursor-pointer group">
      <img src="https://www.w3schools.com/html/pic_trulli.jpg" className="w-full h-60 object-cover transition-filter duration-300 ease-in-out group-hover:blur-sm" />
      <div className="m-5 flex flex-col gap-2">
        <text className="font-bold">Altered</text>
        <div className="flex flex-row justify-between">
          <text className="font-bold">6.8/10</text>
          <text className="text-gray-500">2025</text>
        </div>
        <text className="text-sm">In an alternate present, genetically enhanced humans dominate society. Outcasts Leon and Chloe fight for justice against corrupt politicians exploiting genetic disparity, risking everything to challenge the oppressive system.</text>
      </div>
    </div>
  )
}
