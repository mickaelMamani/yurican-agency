import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { SectionTitle } from '@/components/common/SectionTitle'
import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/constants'

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Ce que disent nos clients" className="mb-16" />

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, i) => (
              <CarouselItem key={i}>
                <Card className="bg-white border-0 shadow-lg">
                  <CardContent className="p-8 md:p-12">
                    <Quote className="w-10 h-10 text-primary-light/30 mb-6" />
                    <blockquote className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gradient-cta text-white font-bold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-display font-semibold text-primary">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-slate-500">
                          {testimonial.role} @ {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

        {/* Pagination dots for mobile */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary' : 'bg-slate-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
