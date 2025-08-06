import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { SignOutButton } from "@clerk/nextjs"
import { ArrowRight, Menu, X, Zap } from "lucide-react"
import { currentUser } from "@clerk/nextjs/server"
import { Button } from "./ui/button"

// Modern futuristic logo with cyber aesthetic
const Logo = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform duration-200 hover:scale-105"
    role="img"
    aria-label="NotifyFlow Logo"
  >
    <rect
      x="2"
      y="2"
      width="44"
      height="44"
      rx="16"
      fill="url(#paint0_linear_cyber)"
      stroke="url(#paint1_linear_border)"
      strokeWidth="2"
    />
    <circle
      cx="24"
      cy="24"
      r="12"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.8"
    />
    <circle
      cx="24"
      cy="24"
      r="6"
      fill="#fff"
      opacity="0.9"
    />
    <path
      d="M24 8L28 16L24 24L20 16Z"
      fill="#fff"
      opacity="0.7"
    />
    <path
      d="M24 40L20 32L24 24L28 32Z"
      fill="#fff"
      opacity="0.7"
    />
    <defs>
      <linearGradient
        id="paint0_linear_cyber"
        x1="2"
        y1="2"
        x2="46"
        y2="46"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8B5CF6" />
        <stop offset="0.5" stopColor="#EC4899" />
        <stop offset="1" stopColor="#8B5CF6" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_border"
        x1="2"
        y1="2"
        x2="46"
        y2="46"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A855F7" />
        <stop offset="1" stopColor="#F472B6" />
      </linearGradient>
    </defs>
  </svg>
)

export const Navbar = async () => {
  const user = await currentUser()

  return (
    <nav className="sticky z-[100] h-20 inset-x-0 top-0 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl transition-all">
      <MaxWidthWrapper>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold items-center gap-4 group">
            <Logo />
            <span className="text-2xl font-black tracking-tight text-white group-hover:text-purple-300 transition-colors duration-200">
              Notify<span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Flow</span>
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex h-full items-center space-x-4">
            {user ? (
              <>
                <SignOutButton>
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-white hover:bg-white/10 font-medium transition-all duration-200 border border-transparent hover:border-white/20"
                  >
                    Sign out
                  </Button>
                </SignOutButton>

                <Link href="/dashboard">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-200 group border-0">
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
                    className="text-gray-300 hover:text-white hover:bg-white/10 font-medium transition-all duration-200 border border-transparent hover:border-white/20"
                  >
                    Pricing
                  </Button>
                </Link>
                
                <Link href="/sign-in">
                  <Button
                    variant="outline"
                    className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 font-medium transition-all duration-200 bg-transparent"
                  >
                    Sign in
                  </Button>
                </Link>

                <Link href="/sign-up">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-200 group border-0">
                    Get Started
                    <Zap className="ml-2 size-4 group-hover:scale-110 transition-transform duration-200" />
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
              className="text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20"
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
