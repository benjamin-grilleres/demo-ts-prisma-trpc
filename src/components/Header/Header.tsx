import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { cssModulesClasses } from "@/utils/styles";
import styles from "./Header.module.scss";
import { ROUTE_URLS } from "@/constants/routes";
import Link from "next/link";
import { Logo } from "@/components/Logo";

const headerLinks = [
  {
    href: ROUTE_URLS.PROJECTS,
    name: "Projets",
  },
  {
    href: ROUTE_URLS.USERS,
    name: "Utilisateurs",
  },
];

export default function Header() {
  const clss = cssModulesClasses(styles);

  const classes = {
    root: clss("prefix-header"),
    headerDesktop: clss("prefix-header__desktop"),
    containerDesktop: clss("prefix-header__container-desktop"),
    containerRight: clss("prefix-header__container-desktop-right"),
    logoWrapper: clss("prefix-header__logo-wrapper"),
    containerLinks: clss("prefix-header__container-desktop-links"),
    linkItem: clss("prefix-header__link-item"),
    containerOpenMobileMenuButton: clss(
      "prefix-header__container-open-mobile-menu-button"
    ),
    openMobileMenuButton: clss("prefix-header__open-mobile-menu-button"),
  };

  return (
    <Disclosure as="nav" className={classes.root}>
      {({ open }) => (
        <>
          <div className={classes.headerDesktop}>
            <div className={classes.containerDesktop}>
              <div className={classes.containerRight}>
                <div className={classes.logoWrapper}>
                  <Logo />
                </div>
                <div className={classes.containerLinks}>
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {headerLinks.map(({ href, name }) => (
                    <Link className={classes.linkItem} key={href} href={href}>
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className={classes.containerOpenMobileMenuButton}>
                {/* Mobile menu button */}
                <Disclosure.Button className={classes.openMobileMenuButton}>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {headerLinks.map(({ href, name }) => (
                <Disclosure.Button
                  key={`mobile-${href}`}
                  as={Link}
                  href={href}
                  className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                >
                  {name}
                </Disclosure.Button>
              ))}
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
