import Link from "next/link";
import HighlightText from "../highlight-text";
import { GitHubIcon } from "../icons";
import ThichDocTruyenLogo from "../thich-doc-truyen-logo";

export default function Footer() {
  return (
    <footer className="border-y py-2 shadow">
      <div className="container grid grid-cols-[2fr_3fr] items-center gap-3">
        <div>
          <ThichDocTruyenLogo size="sm" />
          <p className="text-pretty">
            Đọc truyện quá <HighlightText>60 phút</HighlightText> có hại cho sức
            khỏe, đặc biệt là mắt của bạn. Đảm bảo rằng bạn không đọc truyện
            trong bóng tối, hãy chú ý đến thời gian học tập và làm việc của bạn.
            Hãy đọc truyện mà bạn thích, đừng đọc truyện vì bạn thích.
          </p>
        </div>
        <div className="space-y-1.5 text-center">
          <p>
            Website hoạt động dưới&nbsp;
            <Link
              href="https://opensource.org/license/mit"
              className="text-link hover:underline"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
            >
              MIT License
            </Link>
          </p>
          <ul className="flex items-center justify-center gap-2 mixin/media:flex mixin/media:items-center mixin/media:gap-0.5">
            <li className="mixin/media">
              <GitHubIcon />
              <Link
                href="https://github.com/SE-Academic-Group/thich-doc-truyen"
                className="text-link hover:underline"
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
              >
                thich-doc-truyen
              </Link>
            </li>
            <li className="mixin/media">
              <GitHubIcon />
              <Link
                href="https://github.com/tmphat1312"
                className="text-link hover:underline"
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
              >
                tmphat1312
              </Link>
            </li>
          </ul>
          <p>Copyright&copy; 2024 FIT_HCMUS ANH EM XA DOAN</p>
        </div>
      </div>
    </footer>
  );
}
