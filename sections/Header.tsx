import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title?: string;
  imageUrl: LiveImage;
}

export default function Header({ title = "Sigma", imageUrl }: Props) {
  return (
    <header className="h-[100px] flex justify-between items-center">
      {title ? title : (
        <Image
          className={"max-w-full max-h-[60px"}
          src={imageUrl}
          sizes="(max-width: 100%)"
          width={120}
          height={60}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          preload
          title={title}
        />
      )}

      <nav>
        <ul className="flex gap-5 justify-between items-center uppercase">
          <li>
            <a href="#why">Why</a>
          </li>
          <li>
            <a href="#what">What</a>
          </li>
          <li>
            <a href="#who">Who</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
