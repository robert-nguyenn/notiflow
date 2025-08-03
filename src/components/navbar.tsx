import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { SignOutButton } from "@clerk/nextjs"
import { ArrowRight, Menu, X } from "lucide-react"
import { currentUser } from "@clerk/nextjs/server"
import { Button } from "./ui/button"

// Custom SVG logo with improved accessibility
const Logo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform duration-200 hover:scale-105"
    role="img"
    aria-label="NotifyFlow Logo"
  >
    <rect
      x="4"
      y="4"
      width="40"
      height="40"
      rx="12"
      fill="url(#paint0_linear_1_2)"
    />
    <path
      d="M16 32L32 16"
      stroke="#fff"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M16 16L32 32"
      stroke="#fff"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_2"
        x1="4"
        y1="4"
        x2="44"
        y2="44"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4ECDC4" />
        <stop offset="1" stopColor="#6C5CE7" />
      </linearGradient>
    </defs>
  </svg>
)

export const Navbar = async () => {
  const user = await currentUser()

  return (
    <nav className="sticky z-[100] h-20 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm transition-all">
      <MaxWidthWrapper>
        <div className="flex h-32 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold items-center gap-4">
            <Logo />
            <span className="text-3xl font-extrabold tracking-tight text-gray-900">
              Notify<span className="text-brand-700">Flow</span>
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex h-full items-center space-x-4">
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
                  <Button className="bg-brand-700 hover:bg-brand-600 text-white font-medium shadow-sm hover:shadow-md transition-all duration-200 group">
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
                    className="border-brand-200 text-brand-700 hover:bg-brand-50 hover:border-brand-300 font-medium transition-all duration-200"
                  >
                    Sign in
                  </Button>
                </Link>

                <Link href="/sign-up">
                  <Button className="bg-brand-700 hover:bg-brand-600 text-white font-medium shadow-sm hover:shadow-md transition-all duration-200 group">
                    Sign up 
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
