import * as React from "react"
import { ChevronLeft, ChevronRight, Menu } from "lucide-react"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    isCollapsed?: boolean
    onCollapse?: (collapsed: boolean) => void
  }
>(({ className, children, isCollapsed, onCollapse, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "group relative flex h-full flex-col border-r bg-secondary text-secondary-foreground",
        isCollapsed && "w-[5rem]",
        !isCollapsed && "w-[16rem]",
        className
      )}
      {...props}
    >
      <div className="px-4 py-3">
        <Button
          variant="ghost"
          size="sm"
          className="h-9 w-9 rounded-md p-0 group-hover:bg-secondary-foreground group-hover:text-secondary"
          onClick={() => onCollapse?.(!isCollapsed)}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
          <span className="sr-only">Collapse sidebar</span>
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto py-2 px-3">{children}</div>
    </div>
  )
})
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="ghost"
      className={cn(
        "group flex h-9 w-9 items-center justify-center rounded-md p-0 hover:bg-secondary-foreground/5",
        className
      )}
      {...props}
    >
      {children}
      <span className="sr-only">Toggle sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex-1 space-y-2 p-4", className)}
      {...props}
    >
      {children}
    </div>
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-between py-2 px-4", className)}
      {...props}
    >
      {children}
    </div>
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-center py-4 px-3", className)}
      {...props}
    >
      {children}
    </div>
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarItem = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { isCollapsed?: boolean }
>(({ className, children, isCollapsed, ...props }, ref) => {
  return (
    <a
      href="#"
      ref={ref}
      className={cn(
        "group relative flex items-center space-x-2 rounded-md p-3 hover:bg-secondary-foreground/5",
        isCollapsed && "justify-center",
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
})
SidebarItem.displayName = "SidebarItem"

const SidebarNav = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1", className)}
      {...props}
    >
      {children}
    </div>
  )
})
SidebarNav.displayName = "SidebarNav"

const SidebarTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & { isCollapsed?: boolean }
>(({ className, children, isCollapsed, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        "text-sm font-semibold leading-none",
        isCollapsed && "sr-only",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
})
SidebarTitle.displayName = "SidebarTitle"

const SidebarDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & { isCollapsed?: boolean }
>(({ className, children, isCollapsed, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        "text-sm text-secondary-foreground/50",
        isCollapsed && "sr-only",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
})
SidebarDescription.displayName = "SidebarDescription"

const CollapsibleTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { isCollapsed?: boolean }
>(({ className, children, isCollapsed, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="ghost"
      className={cn(
        "group flex h-9 w-9 items-center justify-center rounded-md p-0 hover:bg-secondary-foreground/5",
        isCollapsed && "justify-center",
        className
      )}
      {...props}
    >
      {children}
      <span className="sr-only">Toggle sidebar</span>
    </Button>
  )
})
CollapsibleTrigger.displayName = "CollapsibleTrigger"

export {
  Sidebar,
  SidebarTrigger,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarItem,
  SidebarNav,
  SidebarTitle,
  SidebarDescription,
  CollapsibleTrigger,
}
