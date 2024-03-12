import { useAuthData } from "@/data/hook/useAuthData"
import Link from "next/link"
import Image from "next/image"

interface AvatarUserProps {
  className?: string
}

const Avatar = ({ className }: AvatarUserProps) => {
  const { user } = useAuthData()
  return (
    <Link href="/profile" className="ml-5">
      <Image
        src={ user?.imageUrl ?? '/images/avatar.svg' }
        width={48}
        height={48}
        alt="Avatar"
        className="rounded-full w-12 h-12"
      />     
    </Link>
  )
}

export default Avatar