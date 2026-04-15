export interface Project {
  title: string;
  description: string;
  challenge: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export interface ExperienceRole {
  title: string;
  period: string;
  description: string;
  skills?: string[];
}

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "education" | "work" | "project" | "community" | "security";
  skills?: string[];
  roles?: ExperienceRole[];
  logo?: string;
}

export interface Achievement {
  title: string;
  rank: number;
  rankLabel: string;
  organization: string;
  date: string;
  description: string;
  team?: string[];
  linkedin?: string;
  image?: string;
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
    logo: "/images/Yazilim_Toplulugu.jpg",
    period: "Ağu 2025 - Devam Ediyor",
    description:
      "Yazılım topluluğumuzda Proje ve İnovasyon Departmanı Sorumlusu olarak, yenilikçi fikirlerin geliştirilmesini yönetiyor ve proje süreçlerini liderlik ediyorum. Takım oluşturma, proje planlama, mentorluk ve yarışma hazırlıklarında aktif rol alıyorum. Amacım, öğrencilerin sadece teorik bilgi değil, aynı zamanda pratik proje deneyimi kazanmasını sağlayarak yaratıcılık ve iş birliğine odaklı üretken bir ekosistem oluşturmak.",
    type: "community",
    skills: ["Takım Çalışması", "İletişim", "Proje Yönetimi"],
  },
  {
    title: "Otonom Araç Geliştirme",
    organization: "OTAGG - Otonom Araç Geliştirme Grubu",
    logo: "/images/otagg_logo.jpg",
    period: "Ağu 2025 - Mar 2026",
    description:
      "OTAGG bünyesinde otonom sürüş yazılımının geliştirilmesinde iki farklı rol üstlendim. Hem yazılım altyapısına hem de yapay zeka modüllerine katkı sağladım.",
    type: "project",
    roles: [
      {
        title: "Yazılım & Proje Takım Üyesi",
        period: "Ağu 2025 - Mar 2026",
        description:
          "Otonom sürüş yazılımının geliştirilmesi ve entegrasyonuna katkıda bulundum. Algoritma geliştirme, veri işleme ve sistem testleri sorumluluklarını üstlendim.",
        skills: ["Takım Çalışması", "Yaratıcı Problem Çözme"],
      },
      {
        title: "AI & Computer Vision Team Member",
        period: "Kas 2025 - Şub 2026",
        description:
          "Yapay zeka ve bilgisayar görüşü alanında çalışarak, nesne algılama ve görüntü işleme algoritmalarının geliştirilmesine katkı sağladım.",
        skills: ["Analitik Düşünme"],
      },
    ],
  },
  {
    title: "Kurucu Ortak",
    organization: "ChatCNC",
    logo: "/images/ChatCnc.jpg",
    period: "May 2025 - Eki 2025",
    description:
      "CNC destekli üretim hatlarında kalite kontrolüne yardımcı olmak için tasarlanmış yapay zeka tabanlı bir chatbot konsepti geliştirdik. Sistem, kamera sensörleri ve bilgisayar görüşü kullanarak hatalı ürünleri tespit ediyor ve hata oranlarını yaklaşık %50 azaltmayı hedefliyordu. Projeyi temsilen birçok inovasyon ve teknoloji yarışmasına katıldım.",
    type: "work",
    skills: ["Takım Çalışması", "Girişimcilik"],
  },
  {
    title: "Siber Güvenlik Öğrencisi",
    organization: "MilliSec",
    logo: "/images/millisec_platform_logo.jpg",
    period: "Haz 2024 - Şub 2025",
    description:
      "MilliSec bünyesinde 9 aylık yoğun bir siber güvenlik programını tamamladım. Ağ güvenliği, zafiyet analizi, penetrasyon testi ve saldırı-savunma teknikleri üzerine odaklandım. Bu eğitim sayesinde uygulamalı deneyim kazandım ve güvenlik odaklı bir problem çözme yaklaşımı geliştirdim.",
    type: "security",
    skills: ["Siber Güvenlik Araçları", "Siber Operasyonlar", "Ağ Güvenliği"],
  },
  {
    title: "Bilgisayar Mühendisliği Öğrencisi",
    organization: "Bursa Uludağ Üniversitesi",
    logo: "/images/uludag_universite.png",
    period: "2023 - Devam Ediyor",
    description:
      "Algoritmalardan sistem mimarisine, ağ güvenliğinden veritabanı yönetimine kadar geniş bir yelpazede mühendislik temelleri oluşturuyorum. Teorik bilgiyi uygulamalı projelerle pekiştirerek gerçek dünya problemlerine çözüm üretiyorum.",
    type: "education",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Yapay Zeka Hackathonu",
    rank: 3,
    rankLabel: "3. Sıra",
    organization: "Uludağ Üniversitesi Yapay Zeka Topluluğu",
    date: "2025",
    description:
      "Kısa sürede özgün ve uygulanabilir yapay zeka tabanlı bir çözüm geliştirdik. Nilüfer Belediyesi sponsorluğunda gerçekleşen etkinlikte, hızlı prototipleme ve problem çözme becerilerimizi sergiledik.",
    team: ["Enes Altunbaş", "Oğuzhan Hekimoğlu"],
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7411801958698737664/",
    image: "/images/achievments/AI_Hackathon.jpg",
  },
  {
    title: "Verimlilik Hackathonu",
    rank: 2,
    rankLabel: "2. Sıra",
    organization: "BUSİAD - Bursa Sanayicileri ve İş İnsanları Derneği",
    date: "2025",
    description:
      "Hackathon kapsamında verilen probleme uygun bir çözüm geliştirerek; teknik, görsel ve stratejik açıdan güçlü bir proje ortaya koyduk. Projemiz yapay zeka entegrasyonu, profesyonel arayüz tasarımı, etkili sunum ve güçlü takım çalışması ile öne çıktı.",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7332711040377368576/",
    image: "/images/achievments/productivity_hackathon.jpg",
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
