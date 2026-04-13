import { experiences } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";

export default function Experience() {
  return (
    <section id="deneyim" className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Deneyim"
          subtitle="Eğitim ve proje sürecim"
        />

        <div className="mx-auto max-w-2xl">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.title}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
