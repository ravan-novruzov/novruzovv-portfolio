import { MapPin, Target, Languages, Briefcase, GraduationCap, ShieldCheck, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const statusItems = [
  { icon: Briefcase, label: "Durum", value: "Staj fırsatlarına açık", highlight: true },
  { icon: MapPin, label: "Konum", value: "Bursa, Türkiye" },
  { icon: Target, label: "Odak", value: "Siber Güvenlik & Ağ" },
  { icon: Languages, label: "Diller", value: "TR · EN · AZ" },
];

const values = [
  "Güvenlik Odaklı",
  "Problem Çözücü",
  "Takım Oyuncusu",
  "Sürekli Öğrenen",
];

const quickInfo = [
  {
    icon: GraduationCap,
    label: "Eğitim",
    value: "Bursa Uludağ Ü. · Bilgisayar Müh.",
  },
  {
    icon: ShieldCheck,
    label: "Siber Güvenlik",
    value: "MilliSec · 9 ay yoğun program",
  },
  {
    icon: Users,
    label: "Topluluk",
    value: "Uludağ Yazılım Topluluğu · Proje & İnovasyon Sorumlusu",
  },
];

export default function About() {
  return (
    <section id="hakkimda" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Hakkımda" subtitle="Mühendislik yolculuğum" />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Bio */}
          <ScrollReveal>
            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-secondary">
                Her şey basit bir merakla başladı: &ldquo;İnternet nasıl çalışıyor?&rdquo;
                Bu soru beni Bursa Uludağ Üniversitesi Bilgisayar Mühendisliği bölümüne,
                oradan da ağ mimarisi, sistem güvenliği ve yazılım geliştirme dünyasına taşıdı.
              </p>
              <p className="text-lg leading-relaxed text-secondary">
                Bugün, güvenlik protokollerinden kurumsal ağ topolojilerine,
                sistem mimarisinden yazılım projelerine kadar farklı alanlarda
                kendimi geliştiriyorum. Her projede &ldquo;gerçek dünya problemine
                gerçek çözüm&rdquo; ilkesiyle hareket ediyorum.
              </p>
              <p className="text-lg leading-relaxed text-secondary">
                Topluluk çalışmalarına aktif katkıda bulunarak, bilgiyi paylaşmanın
                öğrenmenin en güçlü formu olduğuna inanıyorum.
              </p>

              {/* Values badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {values.map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right column: Status & Info */}
          <div className="space-y-5">
            {/* Status card */}
            <ScrollReveal delay={0.1}>
              <div className="card-glow rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Şu Anda
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {statusItems.map(({ icon: Icon, label, value, highlight }) => (
                    <div key={label} className="flex items-start gap-2.5">
                      <div className="mt-0.5 rounded-md bg-gradient-to-br from-primary/20 to-accent/10 p-1.5">
                        <Icon className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                          {label}
                        </p>
                        <p
                          className={`text-sm font-semibold ${
                            highlight ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Quick info grid */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-3">
                {quickInfo.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
                  >
                    <div className="rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 p-2">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        {label}
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
