import Link from "next/link";

interface FancyLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function FancyLink({ href, children }: FancyLinkProps) {
  return (
    <Link
      href={href}
      className="bg-gradient-to-r bg-no-repeat  from-black to-black dark:from-white dark:to-white bg-left-bottom bg-[length:0%_0.1em] hover:bg-[length:100%_0.1em] active:bg-[length:100%_0.1em] transition-all duration-300 ease-in-out"
      target="_blank"
    >
      {children}
    </Link>
  );
}
