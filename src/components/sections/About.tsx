import { GraduationCap, Code, Network, Globe, Shield, Cloud } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const interests = [
  { icon: Code, label: "Web Geliştirme" },
  { icon: Network, label: "Ağ Teknolojileri" },
  { icon: Shield, label: "Güvenlik" },
  { icon: Cloud, label: "Bulut Bilişim" },
  { icon: Globe, label: "Açık Kaynak" },
];

const stats = [
  { value: "2+", label: "Proje" },
  { value: "300+", label: "Kullanıcı" },
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
                Bugün, bulut altyapılarından güvenlik protokollerine, full-stack web
                uygulamalarından kurumsal ağ topolojilerine kadar geniş bir yelpazede
                projeler geliştiriyorum. Her projede &ldquo;gerçek dünya problemine gerçek
                çözüm&rdquo; ilkesiyle hareket ediyorum.
              </p>
              <p className="text-lg leading-relaxed text-secondary">
                Topluluk çalışmalarına aktif katkıda bulunarak, bilgiyi paylaşmanın
                öğrenmenin en güçlü formu olduğuna inanıyorum.
              </p>
            </div>
          </ScrollReveal>

          {/* Info cards */}
          <div className="space-y-6">
            {/* Education */}
            <ScrollReveal delay={0.1}>
              <div className="card-glow flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 p-2.5">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Bursa Uludağ Üniversitesi</h3>
                  <p className="text-sm text-muted-foreground">
                    Bilgisayar Mühendisliği &bull; 2023 - Devam Ediyor
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Interests */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-3">
                {interests.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-primary/30 hover:text-primary"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    {label}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.3}>
              <div className="flex gap-8">
                {stats.map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{value}</p>
                    <p className="text-sm text-muted-foreground">{label}</p>
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
