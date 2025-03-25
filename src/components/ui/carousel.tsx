import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface CarouselProps extends React.HTMLAttributes<HTMLElement> {
  opts?: Parameters<typeof useEmblaCarousel>[0]
  plugins?: Parameters<typeof useEmblaCarousel>[1]
  children: React.ReactNode
}

export interface CarouselContentProps
  extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export interface CarouselPreviousProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface CarouselNextProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface CarouselItemProps extends React.HTMLAttributes<HTMLElement> {}

const Carousel = React.forwardRef<HTMLElement, CarouselProps>(
  ({ className, children, opts, plugins, ...props }, ref) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(opts, plugins)

    return (
      <div className="overflow-hidden">
        <div className="relative" {...props}>
          <div className="embla" ref={emblaRef}>
            <div className="flex select-none" {...props}>
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<HTMLElement, CarouselContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={cn("flex", className)} ref={ref} {...props}>
        {children}
      </div>
    )
  }
)
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<HTMLElement, CarouselItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn("relative min-w-0 flex-[1_0_100%]", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<HTMLButtonElement, CarouselPreviousProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        variant="outline"
        size="sm"
        className={cn(
          "absolute left-4 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full p-0 opacity-80 transition-opacity hover:opacity-100 disabled:opacity-0",
          className
        )}
        {...props}
        ref={ref}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    )
  }
)
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselNextProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        variant="outline"
        size="sm"
        className={cn(
          "absolute right-4 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full p-0 opacity-80 transition-opacity hover:opacity-100 disabled:opacity-0",
          className
        )}
        {...props}
        ref={ref}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    )
  }
)
CarouselNext.displayName = "CarouselNext"

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
