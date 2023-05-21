/* eslint-disable @next/next/no-img-element */

// Common

export const companyName = "Jha Technologies";

// Layout

export const lstNavBarMenu = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  // { id: 3, name: "Our Work", path: "/products" },
  { id: 4, name: "Testimonials", path: "/testimonials" },
  { id: 5, name: "FAQs", path: "/faqs" },
  { id: 6, name: "Contact", path: "/contact" },
];

// Home Page

export const objHomePageHero = {
  hasContent: true,
  title: "Jha Technologies",
  description: "Building a seamless digital future for your business.",
  imgSrc: "/home_hero.jpg",
  imgAlt: "Home Page Hero",
  renderBtn: () => (
    <a
      aria-label="Chat on WhatsApp"
      href="https://wa.me/918141952955"
      className=""
    >
      <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenSmall.svg" />
    </a>
  ),
};

export const lstFeatures = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: "50px" }}
        className="mb-2 text-primary"
      >
        <path
          fillRule="evenodd"
          d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "Creative Web Design",
    description:
      "Captivating and user-friendly websites that align with clients' branding for a strong online presence.",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: "50px" }}
        className="mb-2 text-primary"
      >
        <path
          fillRule="evenodd"
          d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "Robust Web Development",
    description:
      "Optimal performance, responsive design, and secure websites built with modern frameworks and technologies.",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: "50px" }}
        className="mb-2 text-primary"
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "Branding Solutions",
    description:
      "Compelling logos and consistent brand identities to establish a strong and memorable brand presence.",
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: "50px" }}
        className="mb-2 text-primary"
      >
        <path
          fillRule="evenodd"
          d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "Digital Marketing Expertise",
    description:
      "Strategies like SEO, social media marketing, and content marketing to boost online visibility and generate leads.",
  },
];

export const lstFigures = [
  { id: 3, figure: "6+", description: "Websites" },
  { id: 2, figure: "10+", description: "Logos and Brand Identity Designs" },
  { id: 1, figure: "3+", description: "Marketing Campaigns" },
  { id: 4, figure: "20+", description: "Happy Clients" },
];

export const lstTechnologies = [
  { id: 1, imgSrc: "/technology_stack/nodejs.svg", title: "NodeJS" },
  { id: 2, imgSrc: "/technology_stack/mongodb.svg", title: "MongoDB" },
  { id: 3, imgSrc: "/technology_stack/expressjs.svg", title: "ExpressJS" },
  { id: 4, imgSrc: "/technology_stack/reactjs.svg", title: "ReactJS" },
  { id: 5, imgSrc: "/technology_stack/nextjs.svg", title: "NextJS" },
  { id: 6, imgSrc: "/technology_stack/javascript.svg", title: "JavaScript" },
  { id: 7, imgSrc: "/technology_stack/tailwindcss.svg", title: "Tailwind CSS" },
  // { id: 5, imgSrc: "/technology_stack/html.svg", title: "HTML" },
  // { id: 5, imgSrc: "/technology_stack/css.svg", title: "CSS" },
  // { id: 5, imgSrc: "/technology_stack/bootstrap.svg", title: "Bootstrap" },
];

export const objWorks = {
  websites: [{ id: 1, imgSrc: "/works/nodejs.svg", title: "NodeJS" }],
  branding: [
    {
      id: 1,
      imgSrc: "/works/01.png",
      title: "Ramanuj Fabrics Logo",
    },
    {
      id: 2,
      imgSrc: "/works/02.png",
      title: "Ramanuj Fabrics Visiting Card",
    },
    {
      id: 3,
      imgSrc: "/works/03.png",
      title: "Ramanuj Fabrics Logo",
    },
    {
      id: 4,
      imgSrc: "/works/04.png",
      title: "Core Agritech Logo",
    },
    {
      id: 5,
      imgSrc: "/works/05.png",
      title: "Core Agritech Visiting Card",
    },
    {
      id: 6,
      imgSrc: "/works/06.png",
      title: "Core Agritech Logo",
    },
  ],
  marketing: [
    {
      id: 3,
      imgSrc: "/technology_stack/expressjs.svg",
      title: "ExpressJS",
    },
  ],
};

// About Page

export const objAboutPageHero = {
  hasContent: true,
  title: "ABOUT US",
  description: "Unleashing the power of technology for your success.",
  imgSrc: "/about_hero.jpg",
  imgAlt: "About Us Hero",
  renderBtn: () => (
    <a
      aria-label="Chat on WhatsApp"
      href="https://wa.me/918141952955"
      className=""
    >
      <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenSmall.svg" />
    </a>
  ),
};

export const objFounder = {
  name: "Manikant Jha",
  designation: "MERN Stack Developer",
  description:
    "Manikant Jha humbly leads the IT firm dedicated to offering exceptional services in web design, development, digital marketing and branding. While embracing a love for tea and a sincere connection to meditation and spirituality, Manikant's approach blends humility with creativity, striving to create harmonious experiences and innovative solutions for clients.",
  imgSrc: "/profile_pic.jpg",
  imgAlt: "Founder Image",
};

export const objInfrastructureRow = {
  title: "About Jha Technologies",
  description: (
    <div className="space-y-4">
      <p>
        Welcome to Jha Technologies, where we combine innovation, creativity,
        and expertise to deliver outstanding digital solutions. As a leading IT
        firm, we specialize in digital marketing, web design, development,
        branding, and logo design. Our team, led by the humble and visionary
        founder, Manikant Jha, is passionate about creating harmonious
        experiences for our valued clients.
      </p>
      <p>
        At Jha Technologies, we believe that every project is unique, deserving
        our utmost attention and dedication. With a deep-rooted love for tea,
        our founder, Manikant, infuses tranquility and a mindful approach into
        our work. We understand that effective digital solutions go beyond
        aesthetics and functionality; they require a deep understanding of your
        brand, audience, and objectives.
      </p>
      <p>
        Our talented team of experts brings together their extensive knowledge
        and experience to create tailored strategies and engaging designs that
        captivate audiences, drive growth, and enhance brand presence. From
        captivating websites to impactful branding and logo designs, we take
        pride in our ability to transform visions into reality.
      </p>
      <p>
        We value collaboration and open communication, ensuring that our clients
        are involved throughout the entire process. We believe in building
        long-lasting partnerships based on trust, transparency, and exceptional
        results. Your success is our success, and we are committed to delivering
        top-notch solutions that exceed your expectations.
      </p>
      <p>
        As a firm rooted in both innovation and mindfulness, we embrace the
        latest technologies and trends while cultivating a serene and focused
        work environment. Our dedication to continuous learning and improvement
        allows us to stay ahead of the curve and deliver cutting-edge solutions
        that drive your business forward.
      </p>
      <p>
        Thank you for considering Jha Technologies. We are excited to embark on
        this journey with you, crafting remarkable digital experiences that
        elevate your brand and leave a lasting impression. Let us bring your
        vision to life and help your business thrive in the digital landscape.
      </p>
    </div>
  ),
  imgSrc: "/about_row_02.jpg",
  imgAlt: "Infrastructure Row Image",
};

export const objQualityRow = {
  title: "Quality",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, laudantium enim animi alias eaque soluta laborum nihil amet? Consequatur nihil magnam vero maxime nostrum veritatis commodi quae suscipit molestias temporibus accusantium tempore doloremque sed ea nesciunt deleniti, maiores ratione fugiat illum alias minima blanditiis odio debitis ab! Repudiandae cum deleniti at saepe omnis possimus rerum, sequi ipsam quaerat eaque assumenda in vel natus consectetur nesciunt repellat facere vero, reprehenderit quia libero nihil sint ut. Ab et quos ut eum aliquid ea voluptatem, repudiandae cupiditate cumque dolorum neque accusamus odit blanditiis! Quos dolore at facere magni delectus id officia, quam neque.",
  imgSrc:
    "https://images.unsplash.com/photo-1524292332709-b33366a7f165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  containerWrapperClassName: "bg-gray-50",
};

// Products Page

export const lstProductTabs = [
  "Websites",
  "Logos and Brand Identity Designs",
  "Marketing Campaigns",
];

export const objProducts = {
  electricalContactBars: [
    {
      id: 1,
      title: "Tsudakoma Electrical Contact Bar",
      imgSrc:
        "./products/electricalContactBars/electrical-contact-bar-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Minimum Order Quantity",
          FIELD2: "20 Piece",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Surface Treatment",
          FIELD2: "Polished",
        },
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel",
        },
      ],
      arrOtherDetails: [
        "Ss To Ss / Ss To Brass / Ss To Copper",
        "Serreted / Unserreted",
        "Interrupted / Non - Interrupted",
      ],
      priceRange: <>&#8377;1000 - &#8377;4000 / Piece (Approx.)</>,
    },
    {
      id: 2,
      title: "Sulzer Electrical Contact Bar",
      imgSrc:
        "./products/electricalContactBars/sulzer-electrical-contact-bar-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Surface Treatment",
          FIELD2: "Polished",
        },
      ],
      arrOtherDetails: [
        "Ss To Ss / Ss To Brass / Ss To Copper",
        "Serreted / Unserreted",
        "Interrupted / Non - Interrupted",
      ],
      priceRange: <>&#8377;1000 - &#8377;4000 / Piece</>,
    },
    {
      id: 3,
      title: "Picanol Electrical Contact Bar",
      imgSrc:
        "./products/electricalContactBars/picanol-electrical-contact-bar-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Surface Treatment",
          FIELD2: "Polished",
        },
      ],
      arrOtherDetails: [
        "Ss To Ss / Ss To Brass / Ss To Copper",
        "Serreted / Unserreted",
        "Interrupted / Non - Interrupted",
      ],
      priceRange: <>&#8377;1000 - &#8377;4000 / Piece</>,
    },
    {
      id: 4,
      title: "Toyota Electrical Contact Bar",
      imgSrc:
        "./products/electricalContactBars/toyota-electrical-contact-bar-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Surface Treatment",
          FIELD2: "Polished",
        },
      ],
      arrOtherDetails: [
        "Ss To Ss / Ss To Brass / Ss To Copper",
        "Serreted / Unserreted",
        "Interrupted / Non - Interrupted",
      ],
      priceRange: <>&#8377;1000 - &#8377;4000 / Piece</>,
    },
    {
      id: 5,
      title: "Airjet Electrical Contact Bar",
      imgSrc:
        "./products/electricalContactBars/arijet-electrical-contact-bar-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Surface Treatment",
          FIELD2: "Polished",
        },
      ],
      arrOtherDetails: [
        "Ss To Ss / Ss To Brass / Ss To Copper",
        "Serreted / Unserreted",
        "Interrupted / Non - Interrupted",
      ],
      priceRange: <>&#8377;1000 - &#8377;4000 / Piece</>,
    },
    {
      id: 6,
      title: "Water Jet Electrical Contact Bar",
      imgSrc:
        "./products/electricalContactBars/water-electrical-jet-contact-bar-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Surface Treatment",
          FIELD2: "Polished",
        },
      ],
      arrOtherDetails: [
        "Ss To Ss / Ss To Brass / Ss To Copper",
        "Serreted / Unserreted",
        "Interrupted / Non - Interrupted",
      ],
      priceRange: <>&#8377;1000 - &#8377;4000 / Piece</>,
    },
    {
      id: 7,
      title: "Electrical Contact Bar",
      imgSrc:
        "./products/electricalContactBars/electrical-contact-bar-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Surface Treatment",
          FIELD2: "Polished",
        },
      ],
      arrOtherDetails: [
        "Ss To Ss / Ss To Brass / Ss To Copper",
        "Serreted / Unserreted",
        "Interrupted / Non - Interrupted",
      ],
      priceRange: <>&#8377;1000 - &#8377;4000 / Piece</>,
    },
    {
      id: 8,
      title: "Donier Electrical Contact Bar",
      imgSrc:
        "./products/electricalContactBars/electrical-contact-bar-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Surface Treatment",
          FIELD2: "Polished",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
      ],
      arrOtherDetails: [
        "Ss To Ss / Ss To Brass / Ss To Copper",
        "Serreted / Unserreted",
        "Interrupted / Non - Interrupted",
      ],
      priceRange: <>&#8377;1000 - &#8377;4000 / Piece</>,
    },
    {
      id: 9,
      title: "ELECTRICAL CONTACT BAR",
      imgSrc:
        "./products/electricalContactBars/electrical-contact-bar-2-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Minimum Order Quantity",
          FIELD2: "6 Piece",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
      ],
      arrOtherDetails: [
        "Delivery Time: 10 DAYS AFTER CONFIRMATION",
        "Packaging Details: AS PER CUSTOMER REQUIREMENT",
      ],
      priceRange: <>&#8377;800 / Piece</>,
    },
    {
      id: 10,
      title: "Somets Electrical Contact Bar",
      imgSrc:
        "./products/electricalContactBars/electrical-contact-bar-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Surface Treatment",
          FIELD2: "Polished",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
      ],
      arrOtherDetails: [
        "Ss To Ss / Ss To Brass / Ss To Copper",
        "Serreted / Unserreted",
        "Interrupted / Non - Interrupted",
      ],
      priceRange: <>&#8377;1000 - &#8377;4000 / Piece</>,
    },
    {
      id: 11,
      title: "Ruti 'C' Serrated bar",
      imgSrc: "./products/electricalContactBars/1-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Usage/Application",
          FIELD2: "Industrial",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Bar Material",
          FIELD2: "Mild Steel",
        },
        {
          FIELD1: "Model",
          FIELD2: "RUTI C",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;500 - &#8377;4000 / Piece</>,
    },
  ],
  electroMechanicWarpStopMotions: [
    {
      id: 1,
      title: "4 Bar Warp Stop Motion",
      imgSrc:
        "./products/electroMechanicWarpStopMotions/electro-mechanic-warp-stop-motion-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Contact Bar",
          FIELD2:
            "SS To SS / SS to  Brass / SS to Copper Serrated /Unserrated /Interrupted / Non-Interrupted",
        },
        {
          FIELD1: "Loom Size",
          FIELD2:
            "150cms,190cms, 200cms, 220cms,240cms, 280cms, 320cms, 360cms, 380cms",
        },
        {
          FIELD1: "No Of Contact Bar",
          FIELD2: "04",
        },
      ],
      arrOtherDetails: [
        "Suitable for Indigenous and Imported Weaving Looms, Shuttleless Looms, Rapier Looms.",
        "Advantages: Loom Stop Automatically, Improved Loom Efficiency",
      ],
      priceRange: <>&#8377;7000 - &#8377;35000 / Piece</>,
    },
    {
      id: 2,
      title: "Electro Mechanic 06 Bar Warp Stop Motion",
      imgSrc:
        "./products/electroMechanicWarpStopMotions/electro-mechanical-warp-stop-motion-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Loom Size",
          FIELD2:
            '44",46",48",50",52",54",56",58",60",62",64",66",68",70",72",74",76",78",80",110"',
        },
        {
          FIELD1: "No Of Contact Bars",
          FIELD2: "06 Bar",
        },
        {
          FIELD1: "Contact Bars",
          FIELD2:
            "SS To SS /  SS to Brass / SS to COPPER / Serrated / Unserrated / Interrupted / Non-Interrupted",
        },
      ],
      arrOtherDetails: [
        "Advantages: Loom Stop Automatically, Improved Loom Efficiency",
      ],
      priceRange: <>&#8377;7000 - &#8377;35000 / Piece</>,
    },
    {
      id: 3,
      title: "Electro Mechanic 04 Bar Warp Stop Motion",
      imgSrc:
        "./products/electroMechanicWarpStopMotions/electro-mechanic-04-bar-warp-stop-motion-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Contact Bars",
          FIELD2:
            "SS To SS /  SS to Brass / SS to COPPER / Serrated / Unserrated / Interrupted / Non-Interrupted",
        },
        {
          FIELD1: "No Of Contact Bars",
          FIELD2: "04 Bar",
        },
        {
          FIELD1: "Loom Size",
          FIELD2:
            '44",46",48",50",52",54",56",58",60",62",64",66",68",70",72",74",76",78",80",110"',
        },
      ],
      arrOtherDetails: [
        "Advantages: Loom Stop Automatically, Improved Loom Efficiency",
      ],
      priceRange: <>&#8377;7000 - &#8377;35000 / Piece</>,
    },
    {
      id: 4,
      title: "Mechanical 4 Bar Warp Stop Motion",
      imgSrc:
        "./products/electroMechanicWarpStopMotions/mechanical-warp-stop-motion-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Minimum Order Quantity",
          FIELD2: "100 Piece",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Cam Hole for Tappet Shaft",
          FIELD2: "1.5 Inch / 1.75 Inch",
        },
        {
          FIELD1: "Cam Type",
          FIELD2: "Oridinary / Positive",
        },
        {
          FIELD1: "Loom Size",
          FIELD2: "44,46,48,50,52,56,58,60,64,68,72,78,80,110 Inch",
        },
        {
          FIELD1: "Number of Serrated Bars",
          FIELD2: "04 Bar",
        },
        {
          FIELD1: "Plating",
          FIELD2: "Zinc / Nickel",
        },
      ],
      arrOtherDetails: [
        "Advantages: Loom Stop Automatically, Improved Loom Efficiency",
      ],
      priceRange: <>&#8377;2500 - &#8377;6500 / Piece</>,
    },
    {
      id: 5,
      title: "Mechanical 6 Bar Warp Stop Motion",
      imgSrc:
        "./products/electroMechanicWarpStopMotions/mechanical-warp-stop-motion-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Number of Serrated Bars",
          FIELD2: "06 Bar",
        },
        {
          FIELD1: "Cam Type",
          FIELD2: "Oridinary / Positive",
        },
        {
          FIELD1: "Cam Hole for Tappet Shaft",
          FIELD2: "1.5 Inch / 1.75 Inch",
        },
        {
          FIELD1: "Plating",
          FIELD2: "Zinc / Nickel",
        },
        {
          FIELD1: "Loom Size",
          FIELD2: "44,46,48,50,52,56,58,60,64,68,72,78,80,110 Inch",
        },
      ],
      arrOtherDetails: [
        "Advantages: Loom Stop Automatically, Improved Loom Efficiency",
      ],
      priceRange: <>&#8377;2500 - &#8377;6500 / Piece</>,
    },
    {
      id: 6,
      title: "6 Bar Warp Stop Motion",
      imgSrc:
        "./products/electroMechanicWarpStopMotions/6-bar-warp-stop-motion-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Contact Bar",
          FIELD2:
            "SS To SS / SS to  Brass / SS to Copper Serrated /Unserrated /Interrupted / Non-Interrupted",
        },
        {
          FIELD1: "Loom Size",
          FIELD2:
            "150cms,190cms, 200cms, 220cms,240cms, 280cms, 320cms, 360cms, 380cms",
        },
        {
          FIELD1: "No Of Contact Bar",
          FIELD2: "06",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;7000 - &#8377;35000 / Piece</>,
    },
  ],
  serratedBars: [
    {
      id: 1,
      title: `RUTI "B" Serrated Bars`,
      imgSrc: "./products/serratedBars/serrated-blade-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Minimum Order Quantity",
          FIELD2: "100 Piece",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Bar Material",
          FIELD2: "Mild Steel",
        },
        {
          FIELD1: "Finishing",
          FIELD2: "Polished",
        },
        {
          FIELD1: "Outer Material",
          FIELD2: "Stainless Steel",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;500 - &#8377;3000 / Piece</>,
    },
    {
      id: 2,
      title: `CIMMCO Serrated Bars`,
      imgSrc: "./products/serratedBars/1-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Usage/Application",
          FIELD2: "Industrial",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Bar Material",
          FIELD2: "Mild Steel",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Model",
          FIELD2: "CIMMCO",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;500 - &#8377;3000 / Piece</>,
    },
    {
      id: 3,
      title: `Square Teeth Mechanical Serrated Bars`,
      imgSrc: "./products/serratedBars/5-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Material",
          FIELD2: "Mild Steel",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Planting",
          FIELD2: "Zinc/Nickel",
        },
        {
          FIELD1: "Outer Material",
          FIELD2: "Stainless Steel",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;500 - &#8377;3000 / Piece</>,
    },
    {
      id: 4,
      title: `Outer Strip Serrated Bars`,
      imgSrc: "./products/serratedBars/outer-strip-serrated-bars-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Material",
          FIELD2: "Mild Steel",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Finishing",
          FIELD2: "Polished",
        },
        {
          FIELD1: "Outer Material",
          FIELD2: "Stainless Steel",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;500 - &#8377;3000 / Piece</>,
    },
    {
      id: 5,
      title: `V Teeth Serrated Bars`,
      imgSrc: "./products/serratedBars/1-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Usage/Application",
          FIELD2: "Industrial",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Bar Material",
          FIELD2: "Mild Steel",
        },
        {
          FIELD1: "Model",
          FIELD2: "V Teeth",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;500 - &#8377;3000 / Piece</>,
    },
    {
      id: 6,
      title: `Serrated Bar`,
      imgSrc: "./products/serratedBars/mechenical-drop-pin-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Material",
          FIELD2: "Mild Steel",
        },
        {
          FIELD1: "Finishing",
          FIELD2: "Polished",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Outer Material",
          FIELD2: "Stainless Steel",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;500 - &#8377;3000 / Piece</>,
    },
  ],
  dropPins: [
    {
      id: 1,
      title: `Mechanical Drop Pin`,
      imgSrc: "./products/dropPins/mechanical-drop-pin-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel & Mild Steel",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Thickness",
          FIELD2: "0.2mm To 1.0mm",
        },
        {
          FIELD1: "Planting",
          FIELD2: "Zinc / Nickel",
        },
        {
          FIELD1: "Type",
          FIELD2: "Open/Close",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;1000 - &#8377;5000 / Piece</>,
    },
    {
      id: 2,
      title: `Electrical Drop Pin`,
      imgSrc: "./products/dropPins/electrical-drop-pin-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel/ Mild Steel",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Thickness",
          FIELD2: "0.2 mm to 1.0 mm",
        },
        {
          FIELD1: "Type",
          FIELD2: "Open/Close",
        },
        {
          FIELD1: "Planting",
          FIELD2: "Zinc / Nickel",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;1000 - &#8377;5000 / Piece</>,
    },
  ],
};

// Testimonials Page

export const lstTestimonials = [
  {
    id: 1,
    title: "Hitendra Goud.",
    description:
      "I am thrilled with the exceptional logo design services provided by Jha Technologies. Their professionalism, creativity, and attention to detail exceeded my expectations. They transformed my vision into a stunning and impactful logo that perfectly represents my brand. I confidently recommend their services to anyone seeking outstanding design solutions.",
    objClient: {
      imgSrc: "/avatar_male.svg",
      name: "Hitendra Goud",
      designation: "Founder & CEO, Ramanuj Fabrics ",
    },
  },
  {
    id: 2,
    title: "Lorem, ipsum.",
    description:
      "I am delighted with the website created by Jha Technologies for my interior design firm. Their team expertly captured the essence of my brand and showcased my portfolio in a visually stunning way. The website is user-friendly, responsive, and truly represents the unique style of my designs. Highly recommended!",
    objClient: {
      imgSrc: "/avatar_male.svg",
      name: "Raja",
      designation: "Co-founder & CEO, RJ Interior",
    },
  },
  {
    id: 3,
    title: "Lorem, ipsum.",
    description:
      "I am extremely satisfied with the website developed for my firm. They perfectly showcased our products and services, with a sleek design that enhanced our brand image. The website's functionality and user experience are top-notch. I highly recommend their services for any business!",
    objClient: {
      imgSrc: "/avatar_male.svg",
      name: "Jagdeep Singh",
      designation: "CEO, Rasila Textile Spare Parts",
    },
  },
  {
    id: 4,
    title: "Lorem, ipsum.",
    description:
      "I am happy with the logo created by Jha Technologies. They captured the essence of our business perfectly, with a design that reflects our expertise and professionalism. The attention to detail and prompt delivery surpassed my expectations. Highly recommended for exceptional logo design!",
    objClient: {
      imgSrc: "/avatar_male.svg",
      name: "Jash Desai",
      designation: "CEO, Shree Sai Motors",
    },
  },
  // {
  //   id: 5,
  //   title: "Lorem, ipsum.",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam laudantium, minus autem ratione exercitationem reprehenderit?",
  //   objClient: {
  //     imgSrc: "/avatar_male.svg",
  //     name: "John Doe",
  //     designation: "Designation",
  //   },
  // },
  // {
  //   id: 6,
  //   title: "Lorem, ipsum.",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam laudantium, minus autem ratione exercitationem reprehenderit?",
  //   objClient: {
  //     imgSrc: "/avatar_male.svg",
  //     name: "John Doe",
  //     designation: "Designation",
  //   },
  // },
  // {
  //   id: 7,
  //   title: "Lorem, ipsum.",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam laudantium, minus autem ratione exercitationem reprehenderit?",
  //   objClient: {
  //     imgSrc: "/avatar_male.svg",
  //     name: "John Doe",
  //     designation: "Designation",
  //   },
  // },
  // {
  //   id: 8,
  //   title: "Lorem, ipsum.",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam laudantium, minus autem ratione exercitationem reprehenderit?",
  //   objClient: {
  //     imgSrc: "/avatar_male.svg",
  //     name: "John Doe",
  //     designation: "Designation",
  //   },
  // },
];

// FAQs Page

export const lstFAQs = [
  {
    id: 1,
    question: "What is included in your web design services?",
    answer:
      " Our web design services encompass creating visually appealing and user-friendly websites tailored to your specific needs. We focus on delivering a seamless user experience, incorporating responsive design, and aligning the website with your branding.",
  },
  {
    id: 2,
    question: "What types of digital marketing services do you offer?",
    answer:
      "We provide a range of digital marketing services, including search engine optimization (SEO), social media marketing, pay-per-click (PPC) advertising, content marketing, and email marketing. Our goal is to enhance your online presence, attract targeted traffic, and generate leads for your business.",
  },
  {
    id: 3,
    question: "Do you provide IT consulting services?",
    answer:
      "Yes, we offer IT consulting services to help businesses make informed decisions regarding their technology infrastructure and digital strategy. Our experienced consultants can assess your IT needs, provide strategic recommendations, and guide you in leveraging technology to achieve your business objectives.",
  },
  {
    id: 4,
    question:
      "Can you assist with both front-end and back-end web development?",
    answer:
      " Absolutely! Our web development services cover both front-end and back-end development. We build websites with clean code, optimal performance, and responsive design. Our expertise includes utilizing modern frameworks and technologies to deliver high-quality and scalable web solutions.",
  },
  {
    id: 5,
    question: "How can your branding services help my business?",
    answer:
      " Our branding services are designed to create a strong and memorable brand identity for your business. We develop captivating logos, design cohesive brand elements, and ensure consistent branding across all digital platforms. Effective branding can enhance recognition, credibility, and customer loyalty.",
  },
];

// Contact Page

export const objContactInfo = {
  title: "How can we help you?",
  descrption:
    "    Get in touch with us for all your IT needs! Our expert team is here to provide customized solutions to boost your business. Contact us today for a consultation and let us empower you with cutting-edge technology, exceptional support, and personalized IT services.",
  lstDetails: [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      value: "info.jhatechnologies@gmail.com",
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      value: "+91 81419 52955",
    },
    // {
    //   id: 3,
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth={1.5}
    //       stroke="currentColor"
    //       className="w-5 h-5 mr-2"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    //       />
    //     </svg>
    //   ),
    //   value: "+91 55555 66666",
    // },
    {
      id: 4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      value: "Surat, Gujarat",
    },
  ],
};
