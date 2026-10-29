import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site-content";

export function TestimonialList() {
  return <div className="grid gap-5 md:grid-cols-3">
    {testimonials.map((item) => <figure className="testimonial" key={item.name}>
      <div className="flex items-center justify-between gap-3"><span className="text-[10px] font-medium uppercase text-primary">{item.subject}</span><Quote className="size-5 text-primary/50" aria-hidden="true" /></div>
      <blockquote>“{item.quote}”</blockquote>
      <figcaption className="testimonial-person"><span className="testimonial-initials" aria-hidden="true">{item.initials}</span><div><span className="block text-xs font-semibold">{item.name}</span><span className="block text-[10px] text-muted-foreground">{item.place} · Online</span></div></figcaption>
    </figure>)}
  </div>;
}