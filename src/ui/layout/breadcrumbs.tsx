import { Breadcrumb } from "@/lib/definitions";
import { HomeIcon } from "@/lib/icons";
import Link from "next/link";
import { Fragment } from "react";

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <aside className="border-y py-1 text-sm shadow">
      <div className="container">
        <ul className="flex">
          <li className="inline-flex">
            <Link
              href="/"
              className="inline-flex items-center gap-0.5 hover:underline"
            >
              <HomeIcon />
              <span>Trang chủ</span>
            </Link>
          </li>
          {breadcrumbs.map((bc) => {
            return (
              <Fragment key={bc.href}>
                <span className="mx-2">/</span>
                <Link
                  href={bc.href}
                  className="inline-flex items-center gap-0.5 hover:underline"
                >
                  {bc.label}
                </Link>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
