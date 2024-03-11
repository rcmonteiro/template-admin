const Logo = () => {
  return (
    <div className="h-20 w-20 bg-gradient-to-r flex flex-col justify-center items-center from-orange-300 to-orange-500">
      <div className="w-10 h-10 rounded-lg bg-sky-100 ring ring-orange-800 flex flex-col justify-center items-center">
        <div className="h-3 w-3 rounded-full bg-sky-300 mb-0.5"></div>
        <div className="flex">
          <div className="h-3 w-3 rounded-full bg-sky-500 mr-0.5"></div>
          <div className="h-3 w-3 rounded-full bg-sky-700 ml-0.5"></div>
        </div>
      </div>
    </div>
  )
}

export default Logo