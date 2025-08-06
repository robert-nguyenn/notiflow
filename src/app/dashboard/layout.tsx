"use client"

import { buttonVariants } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { cn } from "@/utils"
import { UserButton } from "@clerk/nextjs"
import { Gem, Home, Key, LucideIcon, Menu, Settings, X } from "lucide-react"
import Link from "next/link"
import { PropsWithChildren, useState } from "react"
import { Drawer } from "vaul"

interface SidebarItem {
  href: string
  icon: LucideIcon
  text: string
}

interface SidebarCategory {
  category: string
  items: SidebarItem[]
}

const SIDEBAR_ITEMS: SidebarCategory[] = [
  {
    category: "Overview",
    items: [{ href: "/dashboard", icon: Home, text: "Dashboard" }],
  },
  {
    category: "Account",
    items: [{ href: "/dashboard/upgrade", icon: Gem, text: "Upgrade" }],
  },
  {
    category: "Settings",
    items: [
      { href: "/dashboard/api-key", icon: Key, text: "API Key" },
      {
        href: "/dashboard/account-settings",
        icon: Settings,
        text: "Account Settings",
      },
    ],
  },
]

const Sidebar = ({ onClose }: { onClose?: () => void }) => {
  return (
    <div className="space-y-8 relative z-20 flex flex-col h-full">
      {/* logo */}
      <Link href="/" className="flex items-center gap-3 group px-2">
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-200 group-hover:scale-105"
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
        <span className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
          Notify<span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">Flow</span>
        </span>
      </Link>

      {/* navigation items */}
      <div className="flex-grow">
        <ul className="space-y-6">
          {SIDEBAR_ITEMS.map(({ category, items }) => (
            <li key={category}>
              <p className="text-xs font-semibold leading-6 text-gray-500 uppercase tracking-wider px-3">
                {category}
              </p>
              <div className="mt-3 space-y-1">
                {items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "w-full justify-start group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
                    )}
                    onClick={onClose}
                  >
                    <item.icon className="size-5 text-gray-500 group-hover:text-purple-600 transition-colors duration-200" />
                    {item.text}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col border-t border-gray-200 pt-6">
        <UserButton
          showName
          appearance={{
            elements: {
              userButtonBox: "flex-row-reverse",
              userButtonTrigger: "hover:bg-gray-100 transition-colors duration-200 rounded-xl p-2",
            },
          }}
        />
      </div>
    </div>
  )
}

const Layout = ({ children }: PropsWithChildren) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div className="relative h-screen flex flex-col md:flex-row bg-white overflow-hidden">
      {/* sidebar for desktop */}
      <div className="hidden md:block w-64 lg:w-72 bg-white border-r border-gray-200 p-6 h-full relative z-10">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* mobile header */}
        <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <Link href="/" className="flex items-center gap-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="12" fill="url(#paint0_linear)" />
              <path d="M20 8L24 16L20 24L16 16Z" fill="white" opacity="0.9" />
              <circle cx="20" cy="28" r="4" fill="white" opacity="0.9" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-lg font-bold text-gray-900">
              Notify<span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">Flow</span>
            </span>
          </Link>
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200"
          >
            <Menu className="size-6" />
          </button>
        </div>

        {/* main content area */}
        <div className="flex-1 flex flex-col overflow-y-auto bg-gray-50 p-4 md:p-6 relative z-10">
          <div className="relative min-h-full flex flex-col">
            <div className="h-full flex flex-col flex-1 space-y-6">
              {children}
            </div>
          </div>
        </div>

        <Modal
          className="p-4"
          showModal={isDrawerOpen}
          setShowModal={setIsDrawerOpen}
        >
          <div className="flex justify-between items-center mb-6">
            <Link href="/" className="flex items-center gap-3">
              <svg
                width="28"
                height="28"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="12" fill="url(#paint0_linear)" />
                <path d="M20 8L24 16L20 24L16 16Z" fill="white" opacity="0.9" />
                <circle cx="20" cy="28" r="4" fill="white" opacity="0.9" />
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-lg font-bold text-gray-900">
                Notify<span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">Flow</span>
              </span>
            </Link>
            <button
              aria-label="Close modal"
              onClick={() => setIsDrawerOpen(false)}
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200"
            >
              <X className="size-5" />
            </button>
          </div>

          <Sidebar onClose={() => setIsDrawerOpen(false)} />
        </Modal>
      </div>
    </div>
  )
}

export default Layout
