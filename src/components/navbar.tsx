import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { SignOutButton } from "@clerk/nextjs"
import { ArrowRight, Menu, Star } from "lucide-react"
import { currentUser } from "@clerk/nextjs/server"
import { Button } from "./ui/button"

// Clean, modern logo
const Logo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform duration-200 hover:scale-105"
    role="img"
    aria-label="NotifyFlow Logo"
  >
    <rect
      width="40"
      height="40"
      rx="12"
      fill="url(#paint0_linear)"
    />
    <path
      d="M20 8L24 16L20 24L16 16Z"
      fill="white"
      opacity="0.9"
    />
    <circle
      cx="20"
      cy="28"
      r="4"
      fill="white"
      opacity="0.9"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="0"
        y1="0"
        x2="40"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </svg>
)

export const Navbar = async () => {
  const user = await currentUser()

  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm shadow-sm">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold items-center gap-3 group">
            <Logo />
            <span className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
              Notify<span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">Flow</span>
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex h-full items-center space-x-2">
            {user ? (
              <>
                <SignOutButton>
                  <Button
                    variant="ghost"
                    className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 font-medium transition-all duration-200"
                  >
                    Sign out
                  </Button>
                </SignOutButton>

                <Link href="/dashboard">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    Dashboard
                    <ArrowRight className="ml-2 size-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/pricing">
                  <Button
                    variant="ghost"
                    className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 font-medium transition-all duration-200"
                  >
                    Pricing
                  </Button>
                </Link>
                
                <Link href="/sign-in">
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium transition-all duration-200"
                  >
                    Sign in
                  </Button>
                </Link>

                <Link href="/sign-up">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    Get Started
                    <ArrowRight className="ml-2 size-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              aria-label="Toggle mobile menu"
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
