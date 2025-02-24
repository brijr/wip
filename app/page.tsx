import PixelRearrange from "@/app/wip";

const Projects = [
  {
    name: "Vercel",
    href: "https://vercel.com",
  },
  {
    name: "Julius",
    href: "https://julius.ai",
  },
  {
    name: "Laravel",
    href: "https://laravel.com",
  },
  {
    name: "Route",
    href: "https://route.com",
  },
  {
    name: "WIP Design",
    href: "https://wipdes.com",
  },
  {
    name: "Outr",
    href: "https://outr.io",
  },
  {
    name: "Wavefinder",
    href: "https://wavefinder.io",
  },
  {
    name: "Router.so",
    href: "https://router.so",
  },
  {
    name: "SwyftFin",
    href: "https://swyftfin.com",
  },
  {
    name: "Rem Blair",
    href: "https://remblair.com",
  },
  {
    name: "Ampry",
    href: "https://ampry.com",
  },
  {
    name: "ASAP Engineering",
    href: "https://studiomojave.com",
  },
  {
    name: "Studio Mojave",
    href: "https://studiomojave.com",
  },
  {
    name: "Travel Mellow",
    href: "https://travelmellow.com",
  },
  {
    name: "Zion",
    href: "https://zion.surf",
  },
];

export default function Home() {
  return (
    <main className="p-6 grid gap-12 uppercase font-light">
      <PixelRearrange />

      <div>
        <h1 className="font-medium">Work In Progress / Applied Creative</h1>
        <p>
          A design and development company by{" "}
          <OutLink href="https://bridger.to">Bridger Tower</OutLink>.
        </p>
      </div>

      <div>
        <h2 className="sr-only">Currently Building</h2>
        {Projects.map((project) => (
          <OutLink block key={project.name} href={project.href}>
            {project.name}
          </OutLink>
        ))}
      </div>

      <div>
        <p>contact me at bt @ wip.ac</p>
        <p>© wip 2025</p>
      </div>
    </main>
  );
}

const OutLink = ({
  href,
  children,
  block,
}: {
  href: string;
  children: React.ReactNode;
  block?: boolean;
}) => {
  return (
    <a
      href={href}
      className={`w-fit transition-all hover:text-blue-800 text-blue-600 ${
        block ? "block" : "inline"
      }`}
    >
      {children}
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="inline-flex mb-1"
      >
        <path
          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </a>
  );
};
