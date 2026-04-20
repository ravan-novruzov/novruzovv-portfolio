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

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface CommunityEvent {
  title: string;
  date: string;
  description: string;
  images: string[];
  containImages?: string[];
  linkedin?: string;
}

export const projects: Project[] = [
  {
    title: "SmartWasteAI — Akıllı Atık Yönetimi ve Rota Optimizasyonu",
    description:
      "Nilüfer Hackathon 2025 kapsamında geliştirdiğimiz, belediye araçlarının GPS verilerinden çöp konteynırı lokasyonlarını tespit eden ve mahalle bazlı optimize rotalar üreten sistem. Python ile üç modülden oluşuyor: veri temizleme, Nearest Neighbor algoritmasıyla rota optimizasyonu ve Folium ile interaktif harita görselleştirme. Sonuç olarak araç tiplerine göre ayrılmış, mahalle mahalle renklendirilmiş toplama güzergahları interaktif bir HTML haritada sunuluyor.",
    challenge:
      "Ham GPS verilerinden gerçek \"konteynır boşaltma\" olaylarını doğru tespit etmek (30sn-10dk arası duraklama kriteri), mükerrer kayıtları tekilleştirmek ve Nearest Neighbor algoritmasıyla araçların mahalle içinde gereksiz git-gel yapmasını önleyen optimize rotalar üretmek projenin en kritik mühendislik kararlarıydı.",
    tags: ["Python", "Pandas", "NumPy", "Folium", "Nearest Neighbor", "GPS"],
    github: "https://github.com/ravan-novruzov/SmartWasteAI",
  },
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
    name: "Siber Güvenlik & Ağ",
    icon: "shield",
    skills: [
      "Penetrasyon Testi",
      "Zafiyet Analizi",
      "OWASP Top 10",
      "TCP/IP",
      "DNS / DHCP",
      "Active Directory",
      "Firewall & IDS/IPS",
    ],
  },
  {
    name: "Programlama",
    icon: "code",
    skills: ["JavaScript", "TypeScript", "Python", "C", "SQL"],
  },
  {
    name: "Web Geliştirme",
    icon: "layout",
    skills: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express.js"],
  },
  {
    name: "Veritabanı",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    name: "Araçlar & Platformlar",
    icon: "wrench",
    skills: ["Git", "Linux", "Wireshark", "Packet Tracer", "Windows Server"],
  },
];

export const communityEvents: CommunityEvent[] = [
  {
    title: "Startech ⭐",
    date: "28 Mart 2026",
    description:
      "Startech 2026 — Birlikte yarattığımız bir deneyimdi! Uludağ Yazılım Topluluğu olarak düzenlediğimiz bu etkinlikte katılımcıları bir araya getirerek unutulmaz anlar yaşadık.",
    images: [
      "/images/events/Startech1.jpg",
      "/images/events/Startech2.jpg",
      "/images/events/Startech3.jpg",
      "/images/events/Startech4.jpg",
    ],
    containImages: ["/images/events/Startech4.jpg"],
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7444402547466964992/",
  },
  {
    title: "UYT Case Study Eğitimi 📚",
    date: "31 Ekim 2025",
    description:
      "🎓 Uludağ Yazılım Topluluğu olarak ilk Case Study Eğitimimizi gerçekleştirdik! Gerçek dünya problemlerini analiz ettiğimiz bu eğitimde üyelerimizle birlikte değerli deneyimler edindik.",
    images: [
      "/images/events/CaseStudy1.jpg",
      "/images/events/CaseStudy2.jpg",
      "/images/events/CaseStudy3.jpg",
      "/images/events/CaseStudy4.jpg",
      "/images/events/CaseStudy5.jpg",
      "/images/events/CaseStudy6.jpg",
    ],
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7391006331861766144/",
  },
  {
    title: "IDEA CAMP — Fikir Üretenler Kampı! 🏕️",
    date: "8 Kasım 2025",
    description:
      "Uludağ Yazılım Topluluğu olarak bu dönem düzenlediğimiz IdeaCamp etkinliğinde; 2 gece 3 gün boyunca teknoloji, inovasyon ve yaratıcılığı aynı çatı altında buluşturduk! 🌿💻",
    images: [
      "/images/events/camp1.jpg",
      "/images/events/camp2.jpg",
      "/images/events/camp3.jpg",
      "/images/events/camp4.jpg",
      "/images/events/camp5.jpg",
      "/images/events/camp6.jpg",
      "/images/events/camp7.jpg",
      "/images/events/camp8.jpg",
      "/images/events/camp9.jpg",
      "/images/events/camp10.jpg",
    ],
    linkedin: "https://www.linkedin.com/posts/uludagdev_ideacamp-uludaafbyazaftlaftmtopluluafbu-ideathon-ugcPost-7394086993691037696-wTiB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmDut4BnPFl-UhvRxpAqRt42BqT32OkLgo",
  },
  {
    title: "🎙 OpenTalks | Sektör–Öğrenci Buluşması",
    date: "8 Ocak 2026",
    description:
      "Uludağ Yazılım Topluluğu olarak düzenlediğimiz OpenTalks etkinliğimizi başarıyla gerçekleştirdik. Bu etkinlikte amacımız; üyelerimizi sektörle doğrudan buluşturarak gerçek deneyimlerin, kariyer yolculuklarının ve sektörel bakış açılarının paylaşıldığı verimli bir ortam oluşturmaktı.",
    images: [
      "/images/events/turkcell1.jpg",
      "/images/events/turkcell2.jpg",
      "/images/events/turkcell3.jpg",
      "/images/events/turkcell4.jpg",
      "/images/events/turkcell5.jpg",
      "/images/events/turkcell6.jpg",
      "/images/events/turkcell7.jpg",
    ],
    linkedin: "https://www.linkedin.com/posts/ravan-novruzov-8260772a5_opentalks-yazaftlaftmtopluluafbu-sektaemrbuluagnmasaft-activity-7415285431518269440-mpFp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmDut4BnPFl-UhvRxpAqRt42BqT32OkLgo",
  },
  {
    title: "🐍 PyCamp | Python Temelleri 1",
    date: "7 Aralık 2025",
    description:
      "Uludağ Yazılım Topluluğu olarak PyCamp serimizin ikinci ve temel aşaması olan 'Python Temelleri 1' oturumunu başarıyla gerçekleştirdik. Üyelerimizle birlikte Python'un temel yapı taşlarını pratik örneklerle işledik.",
    images: [
      "/images/events/python1.jpg",
      "/images/events/python2.jpg",
      "/images/events/python3.jpg",
    ],
    linkedin: "https://www.linkedin.com/posts/uludagdev_uluda%C4%9F-yaz%C4%B1l%C4%B1m-toplulu%C4%9Fu-olarak-pycamp-serimizin-ugcPost-7404492834852192256-DsCm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmDut4BnPFl-UhvRxpAqRt42BqT32OkLgo",
  },
];
