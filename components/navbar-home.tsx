import { LogoDashboard } from "@/app/(dashboard)/_components/logo"
import { MobileSidebar } from "@/app/(dashboard)/_components/mobile-sidebar"

import { SignInButton, SignOutButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

const NavbarHome = () => {
  return (
    <div className="p-4 border-b flex justify-between w-full top-0 bg-white shadow-sm fixed bg-slate-200/15 bg-opacity-70 backdrop-blur-sm">
        <div className="flex">
        <div className="md:hidden flex pl-2">
        <MobileSidebar />
        </div>
        </div>
        <div className="flex ml-auto">
        <div className="ml-0 md:ml-auto flex hover:bg-slate-100/20 py-1 px-2 rounded-md">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignUpButton />
          </SignedOut>
        </div>
        </div>
    </div>
  )
}

export default NavbarHome