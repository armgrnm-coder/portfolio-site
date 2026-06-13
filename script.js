const img = (name) => `assets/extracted/${name}`;

const links = {
  email: "mailto:armgrnm@gmail.com",
  linkedin: "https://tinyurl.com/53juyxdw",
  facebookPost: "https://www.facebook.com/share/p/15LU3Sekgh/",
  photoFiles: "#contact"
};

const writtenWorks = [
  {
    title: "Turning Leaves",
    link: "https://hotcoffeegonecold.wordpress.com/2024/04/30/turning-leaves/",
    note: "About healing, friendship, and learning to welcome change instead of just surviving it."
  },
  {
    title: "From the Perspective of a Quiet Observer (Part 1)",
    link: "https://hotcoffeegonecold.wordpress.com/2024/10/24/from-the-perspective-of-a-quiet-observer-part-1/",
    note: "A barista watching a regular disappear into her notebook and the rain."
  },
  {
    title: "Depression is not a mere absence; it is a presence.",
    link: "https://hotcoffeegonecold.wordpress.com/2023/12/15/depression-is-not-a-mere-absence-it-is-a-presence/",
    note: "On the difference between sadness and depression — and how naming something can make it smaller."
  },
  {
    title: "From the Perspective of a Quiet Observer (Part 2)",
    link: "https://hotcoffeegonecold.wordpress.com/2024/10/24/from-the-perspective-of-a-quiet-observer-part-2/",
    note: "Smoke, distance, and the things people don't say out loud."
  },
  {
    title: "One Blue, One Vista - And Three Bottles",
    link: "https://hotcoffeegonecold.wordpress.com/2024/02/26/one-blue-one-vista-and-three-bottles/",
    note: "A coming-of-age piece about becoming your own person — separate, but whole."
  },
  {
    title: "Autonomy",
    link: "https://hotcoffeegonecold.wordpress.com/2019/05/13/autonomy/",
    note: "An early piece about identity and making space for yourself."
  }
];

const skills = {
  creative: [
    "Graphic Design",
    "Digital & Traditional Illustration",
    "Video Editing & Basic Motion Graphics",
    "Creative Writing",
    "Copywriting & Scriptwriting",
    "Social Media Content Creation & Strategy",
    "Storyboarding & Concept Development",
    "Performance Marketing Creative",
    "Paid Advertising Creative",
    "Event Branding & Activation Design",
    "Website Design"
  ],
  technical: [
    "Adobe Creative Cloud",
    "Figma",
    "Canva",
    "CapCut",
    "Microsoft Office Suite",
    "Google Workspace",
    "SEO & Keyword Research",
    "Google Ads",
    "Meta Ads Manager",
    "OBS Studio / Streamlabs",
    "Trello / Notion / Monday.com",
    "ChatGPT, Gemini, Claude, Firefly, Google Flow"
  ],
  strengths: [
    "Highly empathetic",
    "Detail-oriented",
    "Creative and innovative",
    "Resilient and adaptable",
    "Strong written communication",
    "Collaborative",
    "Leadership-oriented",
    "Organized",
    "Aesthetic-focused",
    "Fast learner"
  ]
};

const experience = [
  {
    role: "Graphic Designer and Copywriter",
    company: "Orion Funded",
    date: "May 2025 – June 2026",
    text:
      "Designed 250+ performance ad creatives for Meta, YouTube, and affiliate campaigns — including bilingual English-Spanish copy and A/B test variants. Built a fast production workflow using Figma, Adobe tools, Firefly, and Midjourney without sacrificing quality."
  },
  {
    role: "Senior Social Media and Business Manager",
    company: "House of ONO",
    date: "April 2025 – May 2026",
    text:
      "Ran content strategy solo for a London-based home staging brand — 300+ posts across Instagram, LinkedIn, Facebook, Pinterest, and more. Built the publishing workflow, wrote the SEO content, designed the carousels, and handled Google Ads support all in one."
  },
  {
    role: "Content Designer & Producer",
    company: "Hungry Workhorse Consultancy, Inc.",
    date: "June 2025 – April 2026",
    text:
      "Directed branded content production across multiple channels — 150+ creative assets including graphics, videos, editorial campaigns, and marketing materials. Built editorial calendars, supported corporate masterclasses, and handled Wix website content."
  },
  {
    role: "Freelance Creative Consultant",
    company: "Freelance",
    date: "September 2022 – May 2025",
    text:
      "Worked across tech, law, education, food and beverage, dentistry, Airbnb management, esports, and e-commerce. Brand identities, social media assets, editorial layouts, blog articles, campaign copy — whatever the client needed, I made it."
  },
  {
    role: "Creative Content Specialist",
    company: "Teleperformance",
    date: "May 2023 – August 2024",
    text:
      "Led digital content production while keeping the brand voice consistent under tight deadlines — posters, presentations, videos, internal communications, and thought leadership content for key events."
  },
  {
    role: "Head Manager",
    company: "Serpents Esports → Rewind PH",
    date: "June 2021 – May 2023",
    text:
      "Managed and hosted online esports tournaments from promotion to execution. Handled livestream production, team branding, cross-platform content, and event campaigns. Helped lead the team to the VCT Philippines Quarter Finals."
  },
  {
    role: "Graphic Designer & Team Manager",
    company: "Zodiacs Gaming",
    date: "September 2020 – June 2021",
    text:
      "Designed branding and visual assets for in-game content, merchandise, and tournament promotions while supervising the design team and contributing to creative direction for fan engagement."
  },
  {
    role: "Customer Service Representative",
    company: "Sitel",
    date: "May 2019 – August 2019",
    text:
      "Handled inbound calls for credit card inquiries and account issues. Named one of the top performers on the floor within the first month."
  }
];

const tournaments = [
  "Brgy. Tañong x Rewind PH — April 29",
  "Brgy. Nangka x Rewind PH — May 13",
  "Brgy. Calumpang x Rewind PH with Team Copper — May 20",
  "Bagumbong Youth for Change x Rewind PH — June 4",
  "West Crame MLBB Tourney with YESK-Kilos Kabataan — June 10",
  "SK Sto. Niño x Rewind PH — August 6",
  "Tau Gamma Phi MLBB for a Cause x Rewind PH — September 23",
  "East 99 x Rewind PH — November 26"
];

const onsiteWork =
  "Eight Mobile Legends tournaments across Metro Manila — I handled the creative, the hosting, the coordination with barangay officials and youth leaders, and whatever else needed doing on the day. Designed the posters, wrote the scripts, ran the live program, and dealt with technical problems in real time. It was chaotic and I loved every second of it.";

const categories = [
  {
    id: "writing",
    title: "Written Works",
    deck: "Personal essays, poetry, and reflective prose. I've had a blog since 2019 and I still actually update it.",
    cover: img("p05-08-600x800.jpg"),
    type: "writing"
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    deck: "Logos, editorial layouts, posters, infographics, banners, and campaign graphics.",
    cover: img("graphic-design-cover.jpg"),
    projects: [
      {
        title: "Logo Collection",
        kind: "Brand identity",
        text:
          "A mix of finished marks and logo studies — minimal icons, illustrated symbols, playful lettering, and full identity systems. Some for clients, some just for fun.",
        assets: [
          "p06-04-320x320.jpg",
          "p06-05-320x320.jpg",
          "p06-06-320x320.jpg",
          "p06-07-480x480.jpg",
          "p06-10-320x320.jpg",
          "p06-11-320x320.jpg",
          "p06-12-320x320.jpg",
          "p06-13-320x320.jpg",
          "p06-14-320x320.jpg",
          "p06-15-320x320.jpg",
          "p06-16-320x320.jpg",
          "p06-17-320x320.jpg"
        ]
      },
      {
        title: "Filipinnovation Awards 2025 — Event Design Suite",
        kind: "Event design & brand collateral",
        text:
          "End-to-end visual design for the 2025 Presidential Filipinnovation Awards — a national government event celebrating Filipino innovation. Deliverables included backwall booth designs for each finalist company, pull-up banners for venue activation, a rosette lei worn by VIP guests and winners, gift tags for award packages, and stage backdrop design. Every piece maintained the bold, patriotic visual identity of the program.",
        assets: [
          "filipinno-stage.jpg",
          "filipinno-backwall.jpg",
          "filipinno-rosette.jpg",
          "filipinno-gift-tag.jpg",
          { file: "filipinno-pullup-banners.jpg", contain: true }
        ]
      },
      {
        title: "Filipinnovation Training Module Kit",
        kind: "Editorial & print design",
        text:
          "A 67-page Training Module Kit produced for the 2025 Presidential Filipinnovation Awards — a government-backed startup mentoring and bootcamp program. Covers strategic partnerships, IP & regulatory compliance, business model canvas, and innovation frameworks. Designed in InDesign for wide distribution to startup founders and innovators across the Philippines.",
        tools: "Adobe InDesign",
        assets: ["filipinnovation-training-module-kit.jpg"],
        containImage: true
      },
      {
        title: "Ming's Dim Sum Brochure",
        kind: "Print design & brand collateral",
        text:
          "A trifold brochure designed for Ming's Dim Sum, a startup restaurant client. Warm, inviting layout with a focus on appetite appeal — balancing photography, menu highlights, and brand personality in a compact, shareable format.",
        assets: ["mings-dim-sum-brochure.jpg"],
        containImage: true
      },
      {
        title: "Creative Branding & Marketing Presentation",
        kind: "Brand identity & presentation design",
        text:
          "A full creative branding and marketing presentation developed for \"Hidden Letters of the Heart\" — a poetry book by Colette. Covers visual identity, mood direction, typography, and marketing strategy, built to communicate the book's intimate, nostalgic tone to publishers and collaborators.",
        assets: ["hidden-letters-branding.jpg"],
        containImage: true,
        link: "https://drive.google.com/file/d/155Xx5h0u3fWd42jJ605JPzlwc3S8xPU2/view?usp=sharing",
        linkLabel: "Read the full presentation →"
      },
      {
        title: "Teleperformance Academy Campaign",
        kind: "Digital advertising & brand collateral",
        text:
          "Two ad creatives designed for Teleperformance's Analytics Academy — a data science training program. Bold, energetic visuals with strong CTAs, designed to attract working professionals and drive enrollment.",
        assets: ["teleperformance-1.jpg", "teleperformance-2.jpg"]
      },
      {
        title: "Story of Seasons Editorial Layout",
        kind: "Editorial & print design",
        text:
          "A vintage newspaper-inspired layout for Story of Seasons: Pioneers of Olive Town. Designed to feel nostalgic but still readable as a promotional piece.",
        assets: ["p07-03-720x540.jpg", "p07-04-720x511.jpg"]
      },
      {
        title: "Magazine-Style Educational Layout",
        kind: "Editorial & print design",
        text:
          "Clean typography, structured flow, and soft visuals to make informational content actually feel worth reading.",
        assets: ["p08-02-465x640.jpg", "p08-03-465x640.jpg", "p08-04-465x640.jpg"]
      },
      {
        title: "Graphic Poster Studies",
        kind: "Poster design",
        text:
          "Bold, distorted, clean, playful, experimental — I treated each poster as its own thing instead of forcing one style across all of them.",
        assets: ["p09-03-504x720.jpg", "p09-04-511x720.jpg", "p09-05-509x720.jpg", "p09-06-509x720.jpg", "p09-07-509x720.jpg", "p09-08-509x720.jpg"]
      },
      {
        title: "Back to Basics Infographic Campaign",
        kind: "Infographics",
        text:
          "A soft, minimalist infographic series for a nontoxic living brand. Calm, clean, and designed for social media without feeling flat.",
        assets: ["p10-03-800x450.jpg", "p10-04-480x480.jpg", "p10-05-480x480.jpg", "p10-06-480x480.jpg", "p10-07-480x480.jpg", "p10-08-480x480.jpg", "p10-09-480x480.jpg"]
      },
      {
        title: "STRIPPED Awareness Campaign",
        kind: "Infographics",
        text:
          "An advocacy campaign challenging misconceptions about women's clothing and sexual harassment in the Philippines. Designed to be bold, empathetic, and shareable.",
        assets: ["p12-03-640x640.jpg", "p12-04-640x640.jpg", "p12-05-640x640.jpg", "p12-06-640x640.jpg", "p13-03-640x640.jpg", "p13-04-640x640.jpg", "p13-05-640x640.jpg", "p13-06-640x640.jpg"]
      },
      {
        title: "Esports Player Banners",
        kind: "Banners",
        text:
          "Bold contrasts, layered textures, and game-inspired details. Each banner was built around the player's identity, not just aesthetics.",
        assets: ["p14-04-720x405.jpg", "p14-05-720x405.jpg", "p14-06-720x405.jpg", "p14-07-720x405.jpg", "p14-08-720x405.jpg", "p14-09-720x405.jpg", "p14-10-720x405.jpg", "p14-11-720x405.jpg"]
      }
    ]
  },
  {
    id: "social-campaigns",
    title: "Social Media Ads & Campaigns",
    deck: "Tournament promotions, gaming services, product posts, Facebook ads, and community campaigns.",
    cover: img("p15-04-450x800.jpg"),
    projects: [
      {
        title: "Valentine's Day Campaign — Spanish & Dubai Audiences",
        kind: "Social media campaign",
        label: "Paid Social · Carousel",
        tools: "Figma · Photoshop",
        text:
          "A Valentine's Day carousel campaign created for Orion Funded, targeting Spanish-speaking and Dubai audiences. Deep red visuals, romantic messaging, and a limited-time promo code — each card in the series was crafted to feel emotionally resonant while keeping the conversion hook clear. Copy was written and designed to match the tone and language of the target market.",
        orionAds: ["valentine-carousel-01.jpg", "valentine-carousel-02.jpg", "valentine-carousel-03.jpg", "valentine-carousel-04.jpg"]
      },
      {
        title: "Orion Drift Campaign — Spanish & Dubai Audiences",
        kind: "Social media campaign",
        label: "Meta Ads · Instagram Carousel",
        tools: "Figma · Photoshop · Meta Ads",
        text:
          "A high-energy campaign for Orion Funded's 'Drift' challenge promotion, built for Spanish-speaking and Dubai audiences. Dark, cinematic visuals anchored around a drifting Mustang — each carousel slide escalates the pitch from intrigue to offer to urgency. Copy adapted to resonate with a trading audience that responds to exclusivity, speed, and high stakes.",
        orionAds: ["drift-carousel-01.jpg", "drift-carousel-02.jpg", "drift-carousel-03.jpg"],
        adCols: 3,
        stackLayout: true
      },
      {
        title: "Orion Drift Teaser & Engagement Post — Spanish & Dubai Audiences",
        kind: "Social media campaign",
        label: "Meta Ads · Instagram Post",
        tools: "Figma · Photoshop · Meta Ads",
        text:
          "A teaser and engagement post series built to generate buzz ahead of Orion Funded's Drift challenge launch. Dark, cinematic atmosphere with bold typographic announcements — designed to stop the scroll and drive comments and interactions. The copy prompted direct engagement ('Comenta Drift') to game Instagram reach before the full campaign dropped.",
        orionAds: [
          { file: "drift-teaser-02.jpg" },
          { file: "drift-story-02.jpg", badge: "IG Story Teaser" },
          { file: "drift-story-03.jpg", badge: "IG Story Teaser" }
        ],
        adCols: 3,
        stackLayout: true
      },
      {
        title: "January eBook Promotion — Spanish & Dubai Audiences",
        kind: "Social media campaign",
        label: "Meta Ads · Instagram Carousel",
        tools: "Figma · Photoshop · Meta Ads",
        text:
          "A six-slide Instagram carousel promoting Orion Funded's January eBook — a free trading guide offered as an entry point for new account holders. Built for Spanish-speaking and Dubai audiences, the series follows a deliberate conversion structure: emotional hook, process value, urgency, offer, trust conditions, and disclaimer. Dark, professional visuals with sharp Spanish copy designed to move audiences from awareness to action.",
        orionAds: [
          "enero-carousel-01.jpg", "enero-carousel-02.jpg", "enero-carousel-03.jpg",
          "enero-carousel-04.jpg", "enero-carousel-05.jpg", "enero-carousel-06.jpg"
        ],
        adCols: 3,
        stackLayout: true
      },
      {
        title: "Serpents Esports Promotional Posters",
        kind: "Social media advertising",
        text:
          "Promotional materials for tournaments, recruitment, and community engagement — designed to stand out in busy feeds while still feeling true to the gaming audience.",
        assets: ["p15-04-450x800.jpg", "p15-05-450x800.jpg", "p15-06-400x400.jpg", "p15-07-350x350.jpg", "p15-08-400x400.jpg", "p15-09-618x800.jpg", "p15-10-618x800.jpg"]
      },
      {
        title: "Rewind PH Tournament Campaigns",
        kind: "Community campaign design",
        text:
          "Tournament posters, countdown posts, Discord invites, and partner promotions. High-energy visuals with familiar game references to build real hype.",
        assets: ["p16-03-720x509.jpg", "p16-04-720x509.jpg", "p16-05-480x480.jpg", "p16-06-480x480.jpg", "p16-07-480x480.jpg", "p16-08-640x640.jpg", "p16-09-640x640.jpg"]
      },
      {
        title: "Genshin Impact Pilot Service Ads",
        kind: "Facebook ad posters",
        text:
          "A Facebook ad campaign for a Genshin pilot service. Matched the color and type direction to the game's aesthetic while keeping the conversion flow clean.",
        assets: ["p17-02-640x640.jpg", "p17-03-640x640.jpg", "p18-02-640x640.jpg", "p18-03-640x640.jpg"]
      },
      {
        title: "Aichwan's Beaded Accessories",
        kind: "Product promotion",
        text:
          "A handmade accessories shop I started during the pandemic. I designed the products, made the marketing materials, and ran the whole thing through Facebook and Instagram.",
        assets: ["p19-02-640x640.jpg", "p19-03-640x640.jpg", "p20-02-640x640.jpg", "p20-03-640x640.jpg"]
      },
      {
        title: "Valorant-Inspired Accessories",
        kind: "Product launch",
        text:
          "Gaming-inspired beadwork using Valorant character colors and quotes. Made for players who wanted something personal.",
        assets: ["p21-02-640x640.jpg", "p21-03-640x640.jpg", "p22-02-640x640.jpg", "p22-03-640x640.jpg"],
        link: links.facebookPost
      },
      {
        title: "The Honesty Coffee Shop Campaign",
        kind: "Social media campaign",
        text:
          "Content for a self-service coffee shop in Ivana, Batanes — written and designed for young families and travelers, leaning into the shop's quiet, values-driven charm.",
        assets: ["p23-02-640x640.jpg", "p23-03-800x574.jpg", "p24-02-640x640.jpg", "p24-03-800x574.jpg", "p25-02-720x412.jpg", "p25-03-720x412.jpg", "p25-04-565x800.jpg"]
      }
    ]
  },
  {
    id: "illustration",
    title: "Digital & Traditional Illustration",
    deck: "Character design, portraits, fan art, vector interiors, ink work, sketches, and traditional studies.",
    cover: img("p26-03-240x240.jpg"),
    projects: [
      {
        title: "Murabito: Cozy Heroine Character Design",
        kind: "Character design",
        text:
          "A character concept for a small indie game idea I had. Soft, whimsical, cottage-core energy — I explored personality and costume through dozens of small sketches before landing on a direction.",
        assets: ["p26-03-240x240.jpg", "p26-04-240x240.jpg", "p26-05-240x240.jpg", "p26-06-240x240.jpg", "p26-07-240x240.jpg", "p26-08-240x240.jpg", "p26-09-240x240.jpg", "p26-10-240x240.jpg", "p26-11-240x240.jpg", "p26-12-240x240.jpg", "p26-13-240x240.jpg"]
      },
      {
        title: "Character Turnaround",
        kind: "Character sheet",
        text:
          "A multi-angle study focused on keeping proportions, silhouette, and design details consistent across views.",
        assets: ["p27-05-320x320.jpg", "p27-06-320x320.jpg", "p27-07-320x320.jpg", "p27-08-320x320.jpg", "p27-09-320x320.jpg", "p27-10-320x320.jpg", "p27-11-320x320.jpg", "p27-12-320x320.jpg", "p27-13-320x320.jpg"]
      },
      {
        title: "Character Sample Animation",
        kind: "Animation study",
        text:
          "A short animation study to test movement and timing after finishing the character design.",
        assets: ["p28-02-1280x720.jpg"]
      },
      {
        title: "Hirono-Inspired Spider-Man and Spider-Gwen",
        kind: "Stylized fan art",
        text:
          "Spider-Man and Spider-Gwen reimagined through Hirono's soft textures and chibi proportions. These were purely for fun.",
        assets: ["p29-02-571x800.jpg", "p29-03-571x800.jpg"]
      },
      {
        title: "Portrait and Character Studies",
        kind: "Digital illustration",
        text:
          "Portrait and character explorations across semi-realistic and anime-inspired styles — testing rendering, color, and expression.",
        assets: ["p30-02-640x640.jpg", "p30-03-400x400.jpg", "p30-04-400x400.jpg", "p30-05-640x640.jpg"]
      },
      {
        title: "Black-and-White Inked Illustrations",
        kind: "Ink studies",
        text:
          "Whimsical black-and-white work — Halloween figures, stylized witches, action poses. I've always loved the discipline of working without color.",
        assets: ["p31-02-600x800.jpg", "p31-03-476x480.jpg", "p31-04-480x480.jpg", "p31-05-480x480.jpg", "p31-06-480x480.jpg"]
      },
      {
        title: "Vector Home Series",
        kind: "Vector illustration",
        text:
          "Stylized vector studies of different areas in my own home. Simplified forms, muted color, clean lines — more about atmosphere than accuracy.",
        assets: ["p32-02-400x400.jpg", "p32-03-400x400.jpg", "p32-04-400x400.jpg", "p32-05-400x400.jpg", "p32-06-400x400.jpg", "p32-07-400x400.jpg", "p32-08-400x400.jpg", "p32-09-400x400.jpg"]
      },
      {
        title: "Traditional Illustration Studies",
        kind: "Traditional media",
        text:
          "Pencil, ink, and color — anatomy studies, gesture sketches, stylized portraits, and fan art. Old habits.",
        assets: ["p33-03-560x420.jpg", "p33-04-560x420.jpg", "p33-05-480x480.jpg", "p33-06-640x640.jpg", "p33-07-640x640.jpg", "p33-08-800x600.jpg", "p34-02-640x480.jpg", "p34-03-720x540.jpg", "p34-04-533x800.jpg", "p34-05-360x480.jpg", "p34-06-360x480.jpg"]
      }
    ]
  },
  {
    id: "motion",
    title: "3D Art & Motion Graphics",
    deck: "3D models, environment design, 3D and 2D animation, and early motion explorations.",
    cover: img("p35-03-720x404.jpg"),
    projects: [
      {
        title: "Basic 3D Model Studies",
        kind: "3ds Max",
        text:
          "Early 3D work — houses, furniture, everyday objects. Mostly learning how to think in three dimensions.",
        assets: ["p35-03-720x404.jpg", "p35-04-400x224.jpg", "p35-05-400x225.jpg", "p35-06-720x481.jpg", "p35-07-400x267.jpg", "p36-02-720x481.jpg", "p36-03-400x267.jpg", "p36-04-400x267.jpg", "p36-05-720x405.jpg", "p36-06-400x225.jpg", "p36-07-400x225.jpg"]
      },
      {
        title: "Cottage Living 3D Environment",
        kind: "3D environment",
        text:
          "A cottagecore-inspired environment built to feel warm and lived-in, influenced by farming games and countryside aesthetics.",
        assets: ["p37-02-560x315.jpg", "p37-03-560x315.jpg", "p37-04-560x315.jpg", "p37-05-800x450.jpg", "p37-06-800x450.jpg", "p38-02-800x450.jpg", "p39-02-800x450.jpg"]
      },
      {
        title: "Cottage Living 3D Animation",
        kind: "3D animation",
        text:
          "A motion piece built from the same cottage environment — architecture, interior mood, countryside scene.",
        assets: ["p40-03-1280x720.jpg"]
      },
      {
        title: "Story of Seasons-Inspired 2D Animation",
        kind: "2D animation",
        text:
          "My first completed animation. Nostalgic Harvest Moon energy. I was very proud of this one.",
        assets: ["p41-03-600x337.jpg"]
      },
      {
        title: "Video Editing Samples",
        kind: "Video editing",
        text:
          "Personal projects focused on pacing, mood, and simple visual storytelling.",
        assets: ["p42-03-600x337.jpg", "p43-02-600x337.jpg", "p44-03-600x337.jpg"]
      }
    ]
  },
  {
    id: "photography",
    title: "Photography",
    deck: "Everyday scenes, quiet details, portraits, and light studies.",
    cover: img("p45-03-560x420.jpg"),
    projects: [
      {
        title: "Everyday Photography Studies",
        kind: "Photography",
        text:
          "Ordinary settings, small moments, nothing staged. I like photographing things that would disappear if you weren't paying attention.",
        assets: ["p45-03-560x420.jpg", "p45-04-560x420.jpg", "p45-05-560x420.jpg", "p45-06-560x420.jpg", "p45-07-560x420.jpg", "p45-08-540x720.jpg", "p46-02-560x420.jpg", "p46-03-560x420.jpg", "p46-04-560x420.jpg", "p46-05-560x420.jpg", "p46-06-560x420.jpg", "p46-07-560x420.jpg", "p47-04-720x540.jpg", "p47-05-720x540.jpg", "p47-06-720x540.jpg", "p47-07-720x540.jpg", "p48-04-640x480.jpg", "p48-05-640x480.jpg", "p48-06-640x480.jpg"]
      }
    ]
  },
  {
    id: "performance-creative",
    title: "Performance Ad Creative",
    deck: "Meta Ads, YouTube campaign visuals, affiliate offers, A/B variants, and conversion-focused layouts.",
    cover: img("orion-ad-03.jpg"),
    projects: [
      {
        title: "20% OFF Campaign",
        kind: "Performance marketing",
        label: "Meta Ads Creative",
        tools: "Figma · Photoshop",
        text:
          "A premium ad series for a finance/trading platform promoting a limited-time 20% discount across multiple challenge products. Bold 3D visuals, cinematic lighting, and color-coded variations designed for paid social — each asset built to feel clear, aspirational, and high-converting.",
        orionAds: ["orion-ad-01.jpg", "orion-ad-02.jpg", "orion-ad-03.jpg", "orion-ad-04.jpg", "orion-ad-05.jpg", "orion-ad-06.jpg"]
      },
      {
        title: "20% Off — Mexico Launch Campaign",
        kind: "Performance marketing",
        label: "Meta Ads Creative",
        tools: "Figma · Photoshop",
        text:
          "A performance ad set built for Orion Funded's 20% discount promotion targeting Mexican audiences. Each creative was designed around the local market — bold Spanish copy, culturally resonant visuals, and a conversion-focused layout built to drive challenge sign-ups. The set covers multiple challenge types (1-Step and 2-Step) with distinct visual angles per product.",
        orionAds: ["mexico-ad-01.jpg", "mexico-ad-02.jpg", "mexico-ad-03.jpg", "mexico-ad-04.jpg"],
        adCols: 2
      },
      {
        title: "India, UK & Pakistan — Orion Sign-Up Carousel",
        kind: "Performance marketing",
        label: "Meta Ads Creative",
        tools: "Figma · Photoshop",
        text:
          "Meta carousel and individual ad creatives targeting audiences across India, UK, and Pakistan — designed to drive Orion Funded sign-ups with direct-response copy and platform benefit hooks.",
        orionAds: [
          "orion-carousel-india-uk-pk-01.jpg",
          "orion-carousel-india-uk-pk-02.jpg",
          "orion-carousel-india-uk-pk-03.jpg",
          "orion-carousel-india-uk-pk-04.jpg",
          "orion-carousel-india-uk-pk-05.jpg"
        ],
        adCols: 2
      },
      {
        title: "India, UK & Pakistan — Individual Ad Creatives",
        kind: "Performance marketing",
        label: "Meta Ads Creative",
        tools: "Figma · Photoshop",
        text:
          "Standalone ad creatives targeting India, UK, and Pakistan audiences — each built around a distinct angle: trust, accessibility, value comparison, and a direct first-step CTA.",
        orionAds: [
          "orion-ad-india-uk-pk-main12.jpg",
          "orion-ad-india-uk-pk-v1.jpg",
          "orion-ad-india-uk-pk-v3.jpg",
          "orion-ad-india-uk-pk-v8.jpg",
          "orion-ad-india-uk-pk-09v1.jpg"
        ],
        adCols: 2
      },
      {
        title: "Meta Ads and Paid Media Creative",
        kind: "Performance marketing",
        label: "Meta Ads and Paid Media Creative",
        text:
          "The paid-media side of my current work: Meta Ads, Google Ads support, direct-response visuals, campaign copy, and conversion-focused design. Most recent client work isn't public yet — the examples here are pulled from my older archive while newer samples get cleared.",
        assets: ["p15-09-618x800.jpg", "p15-10-618x800.jpg", "p17-02-640x640.jpg", "p17-03-640x640.jpg", "p23-02-640x640.jpg", "p24-02-640x640.jpg"]
      }
    ]
  },
  {
    id: "affiliate-flyers",
    title: "Affiliate Flyers & Posters",
    deck: "Offer-led posters and promotional layouts for affiliate campaigns and product pushes.",
    cover: img("p17-02-640x640.jpg"),
    projects: [
      {
        title: "Offer-Led Promo Layouts",
        kind: "Affiliate and promotional design",
        text:
          "Affiliate and promotional flyers built around the offer, the benefit, and the next step. Currently showing archive work while newer affiliate samples come through.",
        assets: ["p17-02-640x640.jpg", "p17-03-640x640.jpg", "p19-02-640x640.jpg", "p20-02-640x640.jpg", "p25-04-565x800.jpg"]
      }
    ]
  },
  {
    id: "image-refinement",
    title: "Image Enhancement & Refinement",
    deck: "Photo cleanup, color correction, sharpening, and polishing visuals for campaigns.",
    cover: img("hono-enhance-01.jpg"),
    projects: [
      {
        title: "Interior Photo Enhancement & Lightroom Editing",
        kind: "Image enhancement",
        label: "Lightroom",
        tools: "Lightroom",
        text:
          "A before-and-after image enhancement series created for House of ONO's staged interior projects. The editing focused on transforming raw property photos into brighter, cleaner, and more polished visuals suitable for social media, website portfolios, property marketing, and client presentations. Each image was refined in Lightroom to improve exposure, color balance, sharpness, texture, and overall visual warmth while preserving the original furniture, styling, materials, and spatial accuracy.",
        assets: ["hono-enhance-01.jpg", "hono-enhance-02.jpg", "hono-enhance-03.jpg", "hono-enhance-04.jpg", "hono-enhance-05.jpg", "hono-enhance-06.jpg", "hono-enhance-07.jpg", "hono-enhance-08.jpg", "hono-enhance-09.jpg", "hono-enhance-10.jpg"]
      },
      {
        title: "Photo Refinement and Visual Polish",
        kind: "Image enhancement",
        text:
          "Taking flat or underwhelming images and improving their color, clarity, and campaign-readiness — without making them look overprocessed.",
        assets: ["p45-08-540x720.jpg", "p46-02-560x420.jpg", "p46-05-560x420.jpg", "p48-04-640x480.jpg", "p48-05-640x480.jpg"]
      }
    ]
  },
  {
    id: "youtube-thumbnails",
    title: "YouTube Thumbnails",
    deck: "CTR-focused thumbnail systems for finance, trading, and educational video content.",
    cover: img("yt-cover-guerra-oriente.jpg"),
    projects: [
      {
        title: "CTR-Focused Thumbnail Direction",
        kind: "YouTube creative",
        text:
          "Fast readability, strong focal points, clear emotional hook. Current work includes finance, trading, and market update content — public samples to be added when cleared.",
        assets: [
          "yt-monday-update-02-09-26.jpg",
          "yt-thumbnail-03-02-26.jpg",
          "yt-ama-session-v6.jpg",
          "yt-monday-update-03-16-26.jpg",
          "yt-monday-update-03-30-26.jpg",
          "yt-monday-update-04-13-26.jpg",
          "yt-webinar-01-28-26.jpg",
          "yt-podcast-umar-punjabi.jpg",
          "yt-podcast-daniel-homes.jpg",
          "yt-podcast-maya-yatanska.jpg",
          "yt-sunday-03-08-26.jpg"
        ]
      }
    ]
  },
  {
    id: "ui-ux",
    title: "UI/UX Website Design",
    deck: "Website visuals, landing page hierarchy, campaign sections, and conversion-led layouts.",
    cover: img("orion-xmas-landing.jpg"),
    projects: [
      {
        title: "Orion Mega Giveaway — Christmas Campaign",
        kind: "UI/UX and web layout",
        tools: "Figma · Photoshop",
        text:
          "Full campaign website for Orion Funded's Christmas Mega Giveaway — a chance to win a Rolex. Dark, moody aesthetic built to match Orion's brand identity. Deliverables included the full landing page and checkout experience.",
        websiteShowcase: {
          tall: "orion-xmas-landing.jpg",
          wide: "orion-xmas-checkout.jpg"
        }
      }
    ]
  }
];

const app = document.querySelector("#app");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

navToggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", () => {
  document.body.classList.remove("menu-open");
  navToggle.setAttribute("aria-expanded", "false");
});

document.addEventListener("submit", (event) => {
  if (!event.target.matches("#collab-form")) return;
  event.preventDefault();
  const form = new FormData(event.target);
  const name = form.get("name") || "";
  const email = form.get("email") || "";
  const projectType = form.get("projectType") || "";
  const budget = form.get("budget") || "";
  const timeline = form.get("timeline") || "";
  const message = form.get("message") || "";
  const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a potential collaborator"}`);
  const body = encodeURIComponent(
    [
      "Hi Air,",
      "",
      "I'd like to collaborate or hire you for a project.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${projectType}`,
      `Budget / scope: ${budget}`,
      `Timeline: ${timeline}`,
      "",
      "Project details:",
      message,
      "",
      "Sent from your portfolio website."
    ].join("\n")
  );
  window.location.href = `mailto:armgrnm@gmail.com?subject=${subject}&body=${body}`;
});

function icon(name) {
  const icons = {
    email:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>',
    phone:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3.8 9 3l2.1 5-1.5 1.1c.9 1.9 2.4 3.4 4.3 4.3L15 12l5 2.1-.8 2.4c-.4 1.1-1.5 1.8-2.6 1.6C10.7 17.2 6.8 13.3 5.9 7.4c-.2-1.1.6-2.2 1.7-2.6Z"/></svg>',
    chat:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h14v10H8l-4 4V5Z"/><path d="M8 9h8M8 12h5"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9h3v10H5zM5 5h3v3H5zM11 9h3v1.5c.6-1 1.6-1.7 3.1-1.7 2.2 0 3.9 1.4 3.9 4.5V19h-3v-5.2c0-1.4-.5-2.2-1.7-2.2-1.3 0-2.3.9-2.3 2.5V19h-3z"/></svg>'
  };
  return icons[name] || "";
}

function setPage(html) {
  app.innerHTML = html;
  app.focus({ preventScroll: true });
  requestAnimationFrame(() => document.body.classList.add("reveal-ready"));
  observeReveals();
}

function route() {
  const hash = window.location.hash.replace("#", "") || "home";
  const [name, detail] = hash.split("/");
  updateNav(name);
  if (name === "home") return renderHome();
  if (name === "about") return renderAbout();
  if (name === "work") return renderWork(detail || "all");
  if (name === "experience") return renderExperience();
  if (name === "contact") return renderContact();
  return renderHome();
}

function updateNav(name) {
  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${name}`);
  });
}

function websiteShowcase(tall, wide, title) {
  return `
    <div class="ws-showcase">
      <a class="ws-tall-wrap" href="${img(tall)}" target="_blank" rel="noreferrer">
        <img src="${img(tall)}" alt="${title} — full landing page design by Air Geronimo" loading="lazy" />
        <span class="ws-tall-label">↕ Full Page — Click to View</span>
      </a>
      <div class="ws-right">
        <a class="ws-wide-wrap" href="${img(wide)}" target="_blank" rel="noreferrer">
          <img src="${img(wide)}" alt="${title} — checkout banner design by Air Geronimo" loading="lazy" />
        </a>
        <div class="ws-note">
          <strong>Christmas Campaign Website</strong><br/>
          Dark, moody aesthetic to match Orion's brand. The landing page is a full-scroll experience — click either image to see the complete design.
        </div>
      </div>
    </div>
  `;
}

function adGrid(assets, cols, title = "", kind = "") {
  const style = cols ? ` style="grid-template-columns: repeat(${cols}, minmax(0, 1fr))"` : "";
  return `
    <div class="ad-grid"${style}>
      ${assets.map((asset, i) => {
        const file = typeof asset === "string" ? asset : asset.file;
        const badge = typeof asset === "object" && asset.badge ? `<span class="ad-badge">${asset.badge}</span>` : "";
        const altText = typeof asset === "object" && asset.alt
          ? asset.alt
          : `${title}${kind ? " — " + kind : ""} by Air Geronimo${assets.length > 1 ? `, sample ${i + 1}` : ""}`;
        return `
          <a class="ad-tile" href="${img(file)}" target="_blank" rel="noreferrer">
            <img src="${img(file)}" alt="${altText}" loading="lazy" />
            ${badge}
          </a>
        `;
      }).join("")}
    </div>
  `;
}

function imageMosaic(assets, limit = 12, containImage = false, title = "", kind = "") {
  return `
    <div class="image-mosaic${containImage ? " image-mosaic--contain" : ""}">
      ${assets
        .slice(0, limit)
        .map((asset, i) => {
          const file = typeof asset === "object" ? asset.file : asset;
          const contain = containImage || (typeof asset === "object" && asset.contain);
          const altText = typeof asset === "object" && asset.alt
            ? asset.alt
            : `${title}${kind ? " — " + kind : ""} by Air Geronimo${assets.length > 1 ? `, image ${i + 1}` : ""}`;
          return `
            <a class="art-tile${contain ? " art-tile--contain" : ""}" href="${img(file)}" target="_blank" rel="noreferrer">
              <img src="${img(file)}" alt="${altText}" loading="lazy" />
            </a>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderHome() {
  setPage(`
    <article class="page">

      <section class="portfolio-banner">
        <div class="banner-grain" aria-hidden="true"></div>
        <div class="banner-inner">
          <div class="banner-ring" aria-hidden="true">
            <svg viewBox="0 0 1000 220" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="500" cy="110" rx="470" ry="95" fill="none" stroke="rgba(246,240,217,0.55)" stroke-width="1.4"/>
              <ellipse cx="500" cy="110" rx="448" ry="80" fill="none" stroke="rgba(246,240,217,0.22)" stroke-width="0.8"/>
            </svg>
          </div>
          <p class="banner-welcome">Welcome to my</p>
          <h2 class="banner-title">Portfolio</h2>
          <span class="sparkle sp-1" aria-hidden="true">✦</span>
          <span class="sparkle sp-2" aria-hidden="true">✦</span>
          <span class="sparkle sp-3" aria-hidden="true">✦</span>
          <span class="sparkle sp-4" aria-hidden="true">✦</span>
        </div>
      </section>

      <section class="hero-v2">
        <div class="hero-copy-v2" data-reveal>
          <h1>Making things<br /><em>worth looking at.</em></h1>
          <p>
            I'm Air — graphic designer, illustrator, content strategist, and accidental
            esports person. Based in the Philippines. I've been making things professionally
            since 2019 and I'm still just as obsessed with getting them right.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#work">See the work</a>
            <a class="button" href="#about">About me</a>
          </div>
        </div>
        <div class="hero-gallery-wrap" data-reveal>
          <p class="hero-gallery-label">Selected work</p>
          <div class="hero-slideshow" id="heroSlideshow">
            ${[
              { src: "orion-ad-03.jpg",      alt: "Performance ad creative" },
              { src: "valentine-carousel-01.jpg", alt: "Valentine campaign" },
              { src: "p09-03-504x720.jpg",   alt: "Graphic poster" },
              { src: "p29-02-571x800.jpg",   alt: "Fan art illustration" },
              { src: "hono-enhance-01.jpg",  alt: "Interior photo enhancement" },
              { src: "p45-08-540x720.jpg",   alt: "Photography" },
              { src: "drift-carousel-01.jpg",alt: "Drift campaign" },
              { src: "enero-carousel-01.jpg",alt: "January eBook campaign" }
            ].map((slide, i) => `
              <div class="slide${i === 0 ? " active" : ""}">
                <img src="${img(slide.src)}" alt="${slide.alt}" loading="${i === 0 ? "eager" : "lazy"}" />
              </div>
            `).join("")}
            <div class="slideshow-dots">
              ${[0,1,2,3,4,5,6,7].map(i => `<button class="dot${i === 0 ? " active" : ""}" data-index="${i}" aria-label="Slide ${i+1}"></button>`).join("")}
            </div>
            <button class="slide-prev" aria-label="Previous">‹</button>
            <button class="slide-next" aria-label="Next">›</button>
          </div>
        </div>
      </section>

      <section class="section compact">
        <div class="section-head" data-reveal>
          <div>
            <p class="eyebrow">What I make</p>
            <h2>Six years of client work, personal projects, and things I made for fun.</h2>
          </div>
          <p>
            Graphic design, illustration, social campaigns, photography, writing, 3D, motion —
            it's all in here.
          </p>
        </div>
        <div class="category-grid dense">
          ${categories
            .map(
              (category, index) => `
                <a class="category-card" href="#work/${category.id}" data-reveal style="transition-delay:${index * 25}ms">
                  <img src="${category.cover}" alt="${category.title}" loading="lazy" />
                  <div class="card-body">
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <h3>${category.title}</h3>
                    <p>${category.deck}</p>
                  </div>
                </a>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="section">
        <div class="onsite-strip" data-reveal>
          <div class="onsite-text">
            <p class="eyebrow">On-site work</p>
            <h2>I've also run eight live tournaments in Metro Manila.</h2>
            <p>${onsiteWork}</p>
            <a class="text-link" href="#experience">Full experience archive →</a>
          </div>
          <div class="onsite-list">
            <ul>
              ${tournaments.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </div>
      </section>
    </article>
  `);
  requestAnimationFrame(initSlideshow);
}

function initSlideshow() {
  const el = document.getElementById("heroSlideshow");
  if (!el) return;
  const slides = el.querySelectorAll(".slide");
  const dots   = el.querySelectorAll(".dot");
  let current  = 0;
  let timer;

  function goTo(n) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (n + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  function start() { timer = setInterval(() => goTo(current + 1), 3800); }
  function reset()  { clearInterval(timer); start(); }

  el.querySelector(".slide-next").addEventListener("click", () => { goTo(current + 1); reset(); });
  el.querySelector(".slide-prev").addEventListener("click", () => { goTo(current - 1); reset(); });
  dots.forEach(dot => dot.addEventListener("click", () => { goTo(+dot.dataset.index); reset(); }));
  start();
}

function renderAbout() {
  setPage(`
    <article class="page">
      <section class="section top-section">
        <div class="about-layout">
          <div data-reveal>
            <p class="eyebrow">About</p>
            <h1 class="page-title">I make things.<br />Then I make them better.</h1>
            <p class="lede">
              Somewhere between graphic design, content strategy, and running esports tournaments
              for barangay youth events, I figured out what I'm actually good at: turning vague ideas
              into things people can see, feel, and use.
            </p>
            <p class="lede" style="margin-top:1rem;">
              I started out doing traditional illustration, moved into digital design, then gradually
              got pulled into content, strategy, and performance marketing. My background is all over
              the place — and that's turned out to be an advantage.
            </p>
            <p class="lede" style="margin-top:1rem;">
              If you look into my works, I didn't graduate as a Multimedia Artist for nothing
              (had to make sure that tuition really went somewhere).
            </p>
            <div class="hero-actions" style="margin-top:2rem;">
              <a class="button primary" href="#work">See the work</a>
              <a class="button" href="#contact">Get in touch</a>
            </div>
          </div>
          <div class="portrait-card" data-reveal>
            <img src="${img("p02-03-600x800.jpg")}" alt="Air Mae Geronimo" />
          </div>
        </div>
      </section>

      <section class="section compact">
        <div class="about-panels" data-reveal>
          <div class="about-panel">
            <h3>What I do</h3>
            <p>
              Campaign visuals, brand identity, editorial layouts, social media systems,
              performance ad creative, illustration, writing, web design. I can go from concept
              to finished file alone — or work inside a team and keep things moving.
            </p>
          </div>
          <div class="about-panel">
            <h3>How I work</h3>
            <p>
              Fast but not careless. I care about deadlines as much as I care about the work looking good.
              I'll tell you if something isn't working. I'd rather fix it early than deliver something
              I'm not proud of.
            </p>
          </div>
          <div class="about-panel">
            <h3>Outside the work</h3>
            <p>
              I write personal essays on a blog called
              <a href="https://hotcoffeegonecold.wordpress.com" target="_blank" rel="noreferrer" style="color:var(--gold)">Hot Coffee Gone Cold</a>
              — it's been going since 2019. I play games obsessively. I once sold handmade
              Valorant-inspired beaded accessories during the pandemic and that was one of the
              most fun things I've ever done.
            </p>
          </div>
        </div>
      </section>

      <section class="section compact">
        <div class="section-head" data-reveal>
          <div>
            <p class="eyebrow">Skills</p>
            <h2>The full toolkit.</h2>
          </div>
          <p>Creative, technical, and the soft stuff that actually gets projects finished.</p>
        </div>
        ${renderSkills()}
      </section>
    </article>
  `);
}

function renderSkills() {
  return `
    <div class="skills-grid">
      <div class="skill-block" data-reveal>
        <h3>Creative</h3>
        ${skills.creative.map((skill) => `<span class="pill">${skill}</span>`).join("")}
      </div>
      <div class="skill-block" data-reveal>
        <h3>Technical</h3>
        ${skills.technical.map((skill) => `<span class="pill">${skill}</span>`).join("")}
      </div>
      <div class="skill-block" data-reveal>
        <h3>Strengths</h3>
        ${skills.strengths.map((skill) => `<span class="pill">${skill}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderWork(activeId) {
  const active = activeId === "all" ? null : categories.find((category) => category.id === activeId);
  const title = active ? active.title : "Work Archive";
  const deck = active
    ? active.deck
    : "Everything — organized by category, with named projects and actual context behind each piece.";
  const list = active ? [active] : categories;

  setPage(`
    <article class="page">
      <section class="section top-section">
        <div class="section-head" data-reveal>
          <div>
            <p class="eyebrow">Work</p>
            <h1 class="page-title">${title}</h1>
          </div>
          <p>${deck}</p>
        </div>
        <div class="work-layout">
          <aside class="work-sidebar" data-reveal>
            <a href="#work" class="${active ? "" : "active"}"><span class="sidebar-mark">✦</span>All Work</a>
            ${categories.map((category) => `<a href="#work/${category.id}" class="${category.id === activeId ? "active" : ""}"><span class="sidebar-mark">✦</span>${category.title}</a>`).join("")}
          </aside>
          <div class="project-stack">
            ${list.map((category) => renderCategory(category)).join("")}
          </div>
        </div>
      </section>
    </article>
  `);
}

function renderCategory(category) {
  if (category.type === "writing") {
    return `
      <section class="project-section" data-reveal>
        <div class="project-intro">
          <p class="eyebrow">${category.title}</p>
          <h2>Writing I actually stand behind.</h2>
          <p>${category.deck}</p>
        </div>
        <div class="writing-grid">
          ${writtenWorks
            .map(
              (work) => `
                <a class="writing-card" href="${work.link}" target="_blank" rel="noreferrer">
                  <span>Read →</span>
                  <h3>${work.title}</h3>
                  <p>${work.note}</p>
                </a>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  return `
    <section class="project-section" data-reveal>
      <div class="project-intro">
        <p class="eyebrow">${category.title}</p>
        <h2>${category.deck}</h2>
      </div>
      ${category.projects
        .map(
          (project) => project.websiteShowcase ? `
            <article class="project-block project-block--full">
              <div class="project-copy-full">
                <div class="project-kind-row">
                  <span class="project-kind">${project.kind}</span>
                </div>
                <h3>${project.title}</h3>
                <p>${project.text}</p>
                ${project.tools ? `<p class="project-tools"><span>Tools:</span> ${project.tools}</p>` : ""}
              </div>
              ${websiteShowcase(project.websiteShowcase.tall, project.websiteShowcase.wide, project.title)}
            </article>
          ` : project.orionAds ? (project.stackLayout ? `
            <article class="project-block project-block--full">
              <div class="project-copy-full">
                <div class="project-kind-row">
                  <span class="project-kind">${project.kind}</span>
                  ${project.label ? `<span class="project-kind">${project.label}</span>` : ""}
                </div>
                <h3>${project.title}</h3>
                <p>${project.text}</p>
                ${project.tools ? `<p class="project-tools"><span>Tools:</span> ${project.tools}</p>` : ""}
              </div>
              ${adGrid(project.orionAds, project.adCols, project.title, project.kind)}
            </article>
          ` : `
            <article class="project-block">
              <div class="project-copy">
                <div class="project-kind-row">
                  <span class="project-kind">${project.kind}</span>
                  ${project.label ? `<span class="project-kind">${project.label}</span>` : ""}
                </div>
                <h3>${project.title}</h3>
                <p>${project.text}</p>
                ${project.tools ? `<p class="project-tools"><span>Tools:</span> ${project.tools}</p>` : ""}
              </div>
              ${adGrid(project.orionAds, project.adCols, project.title, project.kind)}
            </article>
          `) : `
            <article class="project-block">
              <div class="project-copy">
                <div class="project-kind-row">
                  <span class="project-kind">${project.kind}</span>
                  ${project.label ? `<span class="project-kind">${project.label}</span>` : ""}
                </div>
                <h3>${project.title}</h3>
                <p>${project.text}</p>
                ${project.tools ? `<p class="project-tools"><span>Tools:</span> ${project.tools}</p>` : ""}
                ${project.link ? `<a class="${project.linkLabel ? 'btn-outline' : 'text-link'}" href="${project.link}" target="_blank" rel="noreferrer">${project.linkLabel || "See the post →"}</a>` : ""}
              </div>
              ${imageMosaic(project.assets, 18, project.containImage, project.title, project.kind)}
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function renderExperience() {
  setPage(`
    <article class="page">
      <section class="section top-section">
        <div class="section-head" data-reveal>
          <div>
            <p class="eyebrow">Experience</p>
            <h1 class="page-title">Where I've worked<br />and what I did there.</h1>
          </div>
          <p>
            Seven years across performance marketing, content strategy, graphic design,
            esports, and freelance creative work.
          </p>
        </div>
        <div class="experience-list">
          ${experience
            .map(
              (job, index) => `
                <article class="experience-item" data-reveal style="transition-delay:${index * 30}ms">
                  <div class="exp-left">
                    <div class="exp-header">
                      <h3>${job.role}</h3>
                      <span class="meta company">${job.company}</span>
                      <span class="date">${job.date}</span>
                    </div>
                  </div>
                  <p>${job.text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="section compact">
        <div class="onsite-card" data-reveal>
          <div>
            <p class="eyebrow">On-site events</p>
            <h2>Eight live tournaments.<br />All within Metro Manila.</h2>
            <p>${onsiteWork}</p>
          </div>
          <ul class="tournament-list">
            ${tournaments.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <div class="tournament-gallery">
            ${[
              ["tournament-01.jpg", "Mobile Legends barangay youth tournament on-site event in Metro Manila, Philippines — event produced by Air Geronimo, photo 1"],
              ["tournament-02.jpg", "Mobile Legends barangay youth tournament on-site event in Metro Manila, Philippines — event produced by Air Geronimo, photo 2"],
              ["tournament-03.jpg", "Mobile Legends barangay youth tournament on-site event in Metro Manila, Philippines — event produced by Air Geronimo, photo 3"],
              ["tournament-04.jpg", "Mobile Legends barangay youth tournament on-site event in Metro Manila, Philippines — event produced by Air Geronimo, photo 4"]
            ].map(([f, altText]) => `
              <a class="tournament-photo" href="${img(f)}" target="_blank" rel="noreferrer">
                <img src="${img(f)}" alt="${altText}" loading="lazy" />
              </a>
            `).join("")}
          </div>
        </div>
      </section>
    </article>
  `);
}

function renderContact() {
  setPage(`
    <article class="page">
      <section class="section top-section">
        <div class="contact-hero">
          <div data-reveal>
            <p class="eyebrow">Get in touch</p>
            <h1 class="page-title">Tell me what you're building.</h1>
            <p class="lede">
              I'm open to design, content strategy, campaign creative, social media systems,
              illustration, writing, and web design work.
            </p>
            <p class="lede" style="margin-top:0.75rem;">
              If you have a project in mind, just reach out directly or use the form below —
              it'll draft an email with your details already filled in.
            </p>
          </div>
          <div class="panel paper contact-details" data-reveal>
            <a class="contact-link icon-link" href="${links.email}"><span>${icon("email")} Email</span><span>armgrnm@gmail.com</span></a>
            <a class="contact-link icon-link" href="tel:+639997827445"><span>${icon("phone")} Phone</span><span>+63 999 782 7445</span></a>
            <a class="contact-link icon-link" href="https://wa.me/639997827445" target="_blank" rel="noreferrer"><span>${icon("chat")} WhatsApp / Viber</span><span>+63 999 782 7445</span></a>
            <a class="contact-link icon-link" href="${links.linkedin}" target="_blank" rel="noreferrer"><span>${icon("linkedin")} LinkedIn</span><span>Air Mae G.</span></a>
          </div>
        </div>
      </section>

      <section class="section compact">
        <div class="inquiry-layout">
          <div data-reveal>
            <p class="eyebrow">Work together</p>
            <h2 class="page-title">Send me the brief while the idea is still alive.</h2>
          </div>
          <form class="collab-form" id="collab-form" data-reveal>
            <label>
              Your name
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              Your email
              <input name="email" type="email" placeholder="you@email.com" required />
            </label>
            <label>
              Project type
              <select name="projectType" required>
                <option value="">Choose one</option>
                <option>Performance ad creative</option>
                <option>Social media campaign</option>
                <option>Brand / graphic design</option>
                <option>Website or UI/UX design</option>
                <option>Illustration / multimedia</option>
                <option>Writing / content strategy</option>
                <option>Other creative collaboration</option>
              </select>
            </label>
            <label>
              Budget or scope
              <input name="budget" type="text" placeholder="e.g. 10 Meta ads, 1 landing page, monthly retainer" />
            </label>
            <label>
              Timeline
              <input name="timeline" type="text" placeholder="e.g. Needed in 2 weeks" />
            </label>
            <label class="full">
              Tell me about the project
              <textarea name="message" rows="6" placeholder="What are we making, who is it for, what do you want people to feel when they see it?" required></textarea>
            </label>
            <button class="button primary full" type="submit">Open email draft</button>
          </form>
        </div>
      </section>

      <section class="section compact">
        <div class="service-section-head" data-reveal>
          <p class="eyebrow">What I offer</p>
          <h2>Areas I work in.</h2>
          <p>Reach out about any of these — or something adjacent.</p>
        </div>
        <div class="service-grid">
          ${[
            "Performance ad creative",
            "Social media campaigns",
            "Brand & visual identity",
            "Website & landing page design",
            "Editorial layouts",
            "Illustration & multimedia"
          ].map((service, i) => `
            <div class="service-card" data-reveal>
              <span class="svc-num">${String(i + 1).padStart(2, "0")}</span>
              <span class="svc-name">${service}</span>
            </div>
          `).join("")}
        </div>
      </section>
    </article>
  `);
}

function observeReveals() {
  const items = document.querySelectorAll("[data-reveal]");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
  );
  items.forEach((item) => observer.observe(item));
}

window.addEventListener("hashchange", route);
route();

/* ── Lightbox ─────────────────────────────────────────────────────── */
(function () {
  const lb = document.createElement("div");
  lb.id = "lb";
  lb.className = "lb";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.setAttribute("aria-label", "Image viewer");
  lb.hidden = true;
  lb.innerHTML = `
    <div class="lb-backdrop"></div>
    <button class="lb-close" aria-label="Close">✕</button>
    <button class="lb-prev" aria-label="Previous image">‹</button>
    <button class="lb-next" aria-label="Next image">›</button>
    <div class="lb-stage">
      <img class="lb-img" src="" alt="" />
    </div>
    <div class="lb-counter"></div>
  `;
  document.body.appendChild(lb);

  const lbImg = lb.querySelector(".lb-img");
  const lbCounter = lb.querySelector(".lb-counter");
  const lbPrev = lb.querySelector(".lb-prev");
  const lbNext = lb.querySelector(".lb-next");

  let images = [];
  let current = 0;

  function open(tiles, index) {
    images = Array.from(tiles).map((a) => a.href);
    current = index;
    show();
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    lb.querySelector(".lb-close").focus();
  }

  function show() {
    lbImg.style.opacity = "0";
    lbImg.src = images[current];
    lbImg.onload = () => { lbImg.style.opacity = "1"; };
    lbCounter.textContent = `${current + 1} / ${images.length}`;
    lbPrev.style.visibility = images.length > 1 ? "visible" : "hidden";
    lbNext.style.visibility = images.length > 1 ? "visible" : "hidden";
  }

  function close() {
    lb.hidden = true;
    document.body.style.overflow = "";
    images = [];
  }

  function prev() { current = (current - 1 + images.length) % images.length; show(); }
  function next() { current = (current + 1) % images.length; show(); }

  lb.querySelector(".lb-close").addEventListener("click", close);
  lb.querySelector(".lb-backdrop").addEventListener("click", close);
  lbPrev.addEventListener("click", prev);
  lbNext.addEventListener("click", next);

  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  });

  document.addEventListener("click", (e) => {
    const tile = e.target.closest(".art-tile, .ad-tile");
    if (!tile) return;
    e.preventDefault();
    const parent = tile.closest(".image-mosaic, .ad-grid");
    const tiles = parent ? parent.querySelectorAll(".art-tile, .ad-tile") : [tile];
    const index = Array.from(tiles).indexOf(tile);
    open(tiles, index);
  });

  /* Touch swipe */
  let touchStartX = 0;
  lb.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
  });
})();
