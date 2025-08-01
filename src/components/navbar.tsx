import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { SignOutButton } from "@clerk/nextjs"
import { ArrowRight } from "lucide-react"
import { currentUser } from "@clerk/nextjs/server"
import Image from "next/image"

// Custom SVG logo
const Logo = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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
    <nav className="sticky z-[100] h-32 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/90 backdrop-blur-lg shadow-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-32 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold items-center gap-4">
            <Image
              src="/logo.png"
              alt="NotifyFlow Logo"
              width={48}
              height={48}
            />
            <span className="text-3xl font-extrabold tracking-tight text-gray-900">
              Notify<span className="text-brand-700">Flow</span>
            </span>
          </Link>

          <div className="h-full flex items-center space-x-6">
            {user ? (
              <>
                <SignOutButton>
                  <button className="px-4 py-2 rounded-lg bg-brand-100 text-brand-700 font-semibold text-base shadow hover:bg-brand-200 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500">
                    Sign out
                  </button>
                </SignOutButton>

                <Link
                  href="/dashboard"
                  className="px-4 py-2 rounded-lg bg-brand-700 text-white font-semibold text-base shadow flex items-center gap-2 hover:bg-brand-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  Dashboard <ArrowRight className="ml-1.5 size-5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/pricing"
                  className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-semibold text-base shadow hover:bg-gray-200 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  Pricing
                </Link>
                <Link
                  href="/sign-in"
                  className="px-4 py-2 rounded-lg bg-brand-100 text-brand-700 font-semibold text-base shadow hover:bg-brand-200 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  Sign in
                </Link>

                <div className="h-10 w-px bg-gray-200" />

                <Link
                  href="/sign-up"
                  className="px-4 py-2 rounded-lg bg-brand-700 text-white font-semibold text-base shadow flex items-center gap-2 hover:bg-brand-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  Sign up <ArrowRight className="size-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
