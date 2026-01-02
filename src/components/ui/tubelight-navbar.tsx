"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import celleomeLogo from "@/assets/Celleome_Logo-white-icon.png"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault()
    setActiveTab(item.name)
    
    if (item.url.startsWith('#')) {
      const element = document.querySelector(item.url)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    handleResize()
    handleScroll()
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 transition-all duration-500 ease-in-out",
        isScrolled ? "sm:pt-6" : "sm:pt-8",
        className,
      )}
    >
      {/* Logo */}
      <motion.div
        initial={false}
        animate={{
          opacity: isScrolled ? 0 : 1,
          y: isScrolled ? -20 : 0,
          scale: isScrolled ? 0.8 : 1
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
        className="hidden sm:flex justify-center mb-4"
      >
        <img 
          src={celleomeLogo} 
          alt="Celleome Diagnostics" 
          className="h-12 w-auto"
        />
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={false}
        animate={{
          y: isScrolled ? -56 : 0
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
        className="transition-all duration-500 ease-in-out"
      >
        <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={(e) => handleNavClick(e, item)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "bg-muted text-primary",
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </a>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}