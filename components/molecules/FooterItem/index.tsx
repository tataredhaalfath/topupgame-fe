import Link from "next/link";

interface FooterItemProps {
  url: string;
  title: string;
}
export default function FooterItem(props: FooterItemProps) {
  const { url, title } = props;
  return (
    <li className="mb-6">
      <Link href={url} className="text-lg color-palette-1 text-decoration-none">
        {title}
      </Link>
    </li>
  );
}
