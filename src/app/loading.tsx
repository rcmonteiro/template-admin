import Image from "next/image"

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        alt="Loading"
        src="/images/loading.gif"
        width={100}
        height={100}
      />
    </div>
  )
}

export default Loading