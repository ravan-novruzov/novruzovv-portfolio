export interface Project {
  title: string;
  description: string;
  challenge: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "education" | "work" | "project" | "community" | "security";
  skills?: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    title: "QR Etkinlik Yönetim Sistemi",
    description:
      "Startech 2026 etkinliği için Project Lead olarak geliştirdiğim, 300+ katılımcılı QR tabanlı gamifikasyon platformu. TOTP tabanlı dinamik QR kodlarla güvenli puan transferi, oda yönetimi, canlı liderlik tablosu, mentor onay mekanizması ve rol bazlı erişim kontrolü (admin, mentor, katılımcı, görevli) içeriyor. PWA desteğiyle mobil cihazlarda uygulama olarak çalışıyor ve Türkçe/İngilizce çoklu dil desteği sunuyor.",
    challenge:
      "JWT ve TOTP ile güvenli kimlik doğrulama, rate limiting ile brute-force koruması ve Helmet ile HTTP güvenlik başlıklarının entegrasyonu en kritik mühendislik kararlarıydı. Ayrıca eşzamanlı yüzlerce QR taramasını düşük gecikmeyle işleyebilen bir mimari tasarlamak önemli bir zorluktu.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT", "TOTP", "PWA"],
    github: "https://github.com/ravan-novruzov/QR-Sistem_Startech_2026",
  },
  {
    title: "Ağ Topolojisi Laboratuvarı",
    description:
      "Kurumsal düzeyde bir ağ altyapısını simüle eden laboratuvar ortamı. Windows Server 2022 üzerinde Active Directory, DNS ve DHCP servislerini yapılandırarak çok kullanıcılı bir domain ortamı kurdum. Ubuntu istemcileri de dahil ederek heterojen bir ağ yapısı oluşturdum.",
    challenge:
      "Farklı işletim sistemlerinin aynı domain altında sorunsuz iletişim kurmasını sağlamak, özellikle Ubuntu'nun Active Directory entegrasyonunda karşılaşılan kimlik doğrulama sorunlarını çözmek kritik bir deneyim oldu.",
    tags: ["Windows Server 2022", "Ubuntu", "DNS", "DHCP", "Active Directory"],
    github: "https://github.com/ravan-novruzov",
  },
  {
    title: "CDC - SQL'den NoSQL'e Veri Aktarımı",
    description:
      "MySQL veritabanındaki tablolarda yapılan INSERT, UPDATE ve DELETE işlemlerini trigger ve polling yöntemiyle yakalayıp MongoDB'ye aktaran bir Change Data Capture uygulaması. Python tabanlı sistem, 3 saniyelik aralıklarla MySQL log tablolarını kontrol ederek değişiklikleri gerçek zamanlıya yakın şekilde MongoDB'ye senkronize ediyor.",
    challenge:
      "İki farklı veritabanı paradigması (ilişkisel ve doküman tabanlı) arasında veri tutarlılığını sağlamak ve trigger mekanizmasıyla log tablolarının şişmesini önleyecek verimli bir polling stratejisi tasarlamak projenin en kritik mühendislik kararlarıydı.",
    tags: ["Python", "MySQL", "MongoDB", "CDC", "Trigger & Polling"],
    github: "https://github.com/ravan-novruzov/cdc-sql-to-nosql",
  },
];

export const experiences: Experience[] = [
  {
    title: "Proje ve İnovasyon Departmanı Sorumlusu",
    organization: "Uludağ Yazılım Topluluğu",
    period: "Ağu 2025 - Devam Ediyor",
    description:
      "Yazılım topluluğumuzda Proje ve İnovasyon Departmanı Sorumlusu olarak, yenilikçi fikirlerin geliştirilmesini yönetiyor ve proje süreçlerini liderlik ediyorum. Takım oluşturma, proje planlama, mentorluk ve yarışma hazırlıklarında aktif rol alıyorum. Amacım, öğrencilerin sadece teorik bilgi değil, aynı zamanda pratik proje deneyimi kazanmasını sağlayarak yaratıcılık ve iş birliğine odaklı üretken bir ekosistem oluşturmak.",
    type: "community",
    skills: ["Takım Çalışması", "İletişim", "Proje Yönetimi"],
  },
  {
    title: "Yazılım & Proje Takım Üyesi",
    organization: "OTAGG - Otonom Araç Geliştirme Grubu",
    period: "Ağu 2025 - Mar 2026",
    description:
      "OTAGG yazılım takımının bir üyesi olarak, otonom sürüş yazılımının geliştirilmesi ve entegrasyonuna katkıda bulundum. Algoritma geliştirme, veri işleme ve sistem testleri gibi sorumluluklar üstlenerek takımın yazılım altyapısını destekledim.",
    type: "project",
    skills: ["Takım Çalışması", "Yaratıcı Problem Çözme"],
  },
  {
    title: "Yapay Zeka & Bilgisayar Görüşü Takım Üyesi",
    organization: "OTAGG - Otonom Araç Geliştirme Grubu",
    period: "Kas 2025 - Şub 2026",
    description:
      "Otonom araç projesi kapsamında yapay zeka ve bilgisayar görüşü alanında çalışarak, nesne algılama ve görüntü işleme algoritmalarının geliştirilmesine katkı sağladım.",
    type: "project",
    skills: ["Analitik Düşünme"],
  },
  {
    title: "Kurucu Ortak",
    organization: "ChatCNC",
    period: "May 2025 - Eki 2025",
    description:
      "CNC destekli üretim hatlarında kalite kontrolüne yardımcı olmak için tasarlanmış yapay zeka tabanlı bir chatbot konsepti geliştirdik. Sistem, kamera sensörleri ve bilgisayar görüşü kullanarak hatalı ürünleri tespit ediyor ve hata oranlarını yaklaşık %50 azaltmayı hedefliyordu. Projeyi temsilen birçok inovasyon ve teknoloji yarışmasına katıldım.",
    type: "work",
    skills: ["Takım Çalışması", "Girişimcilik"],
  },
  {
    title: "Siber Güvenlik Öğrencisi",
    organization: "MilliSec",
    period: "Haz 2024 - Şub 2025",
    description:
      "MilliSec bünyesinde 9 aylık yoğun bir siber güvenlik programını tamamladım. Ağ güvenliği, zafiyet analizi, penetrasyon testi ve saldırı-savunma teknikleri üzerine odaklandım. Bu eğitim sayesinde uygulamalı deneyim kazandım ve güvenlik odaklı bir problem çözme yaklaşımı geliştirdim.",
    type: "security",
    skills: ["Siber Güvenlik Araçları", "Siber Operasyonlar", "Ağ Güvenliği"],
  },
  {
    title: "Bilgisayar Mühendisliği Öğrencisi",
    organization: "Bursa Uludağ Üniversitesi",
    period: "2023 - Devam Ediyor",
    description:
      "Algoritmalardan sistem mimarisine, ağ güvenliğinden veritabanı yönetimine kadar geniş bir yelpazede mühendislik temelleri oluşturuyorum. Teorik bilgiyi uygulamalı projelerle pekiştirerek gerçek dünya problemlerine çözüm üretiyorum.",
    type: "education",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Siber Güvenlik",
    icon: "shield",
    skills: [
      { name: "Penetrasyon Testi", level: 75 },
      { name: "Zafiyet Analizi", level: 72 },
      { name: "Saldırı-Savunma Teknikleri", level: 70 },
      { name: "Güvenlik Denetimi", level: 68 },
      { name: "OWASP Top 10", level: 72 },
    ],
  },
  {
    name: "Ağ Teknolojileri",
    icon: "network",
    skills: [
      { name: "TCP/IP", level: 80 },
      { name: "DNS / DHCP", level: 78 },
      { name: "VPN & Tünelleme", level: 72 },
      { name: "Ağ Topolojileri", level: 75 },
      { name: "Active Directory", level: 70 },
      { name: "Firewall & IDS/IPS", level: 68 },
    ],
  },
  {
    name: "Programlama Dilleri",
    icon: "code",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "Python", level: 70 },
      { name: "C", level: 65 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    name: "Frontend",
    icon: "layout",
    skills: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    name: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
    ],
  },
  {
    name: "Veritabanı",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: 72 },
      { name: "MySQL", level: 68 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    name: "Araçlar & Platformlar",
    icon: "wrench",
    skills: [
      { name: "Git", level: 82 },
      { name: "GitHub", level: 85 },
      { name: "Linux", level: 75 },
      { name: "Wireshark", level: 72 },
      { name: "Packet Tracer", level: 70 },
      { name: "Ubuntu", level: 72 },
      { name: "Windows Server", level: 70 },
      { name: "VS Code", level: 90 },
    ],
  },
];
