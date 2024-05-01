import { Button } from '@/components/ui/button'
import { SignOutButton, UserButton } from '@clerk/nextjs'

const UserInfo = () => {

  return (
    <div className='flex ml-96 w-full h-24 items-center justify-end'>
      <SignOutButton>
				<button className="text-2xl bg-n-1/10 backdrop-blur-sm bg-n-3 rounded-md px-3 py-2 ">SignOut</button>
			</SignOutButton>
      <UserButton />
    </div>
  )
}

export default UserInfo
