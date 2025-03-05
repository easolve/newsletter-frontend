"use client";

import {
  Button,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavBar,
} from "@heroui/react";
import { link } from "@heroui/theme";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import Profile from "@/features/profile";
import { ThemeSwitch } from "@/features/theme-switch";
import { NAME, ROUTES } from "@/shared/config";
import { clsx } from "@/shared/lib";

interface MenuItems {
  label: string;
  href: string;
  disabled?: boolean;
}

const menuItems: MenuItems[] = [
  { label: "Home", href: ROUTES.home },
  { label: "Product", href: ROUTES.product },
  { label: "Pricing", href: ROUTES.pricing },
  // { label: "Showcase", href: "/showcase", disabled: true },
  // { label: "Pricing", href: "/pricing", disabled: true },
];

const navLinkClasses = clsx(
  link({ color: "foreground", size: "lg", underline: "hover" }),
  "data-[active=true]:text-primary",
);

export interface NavbarProps {
  email: string | null;
}

const NavBar: FC<NavbarProps> = ({ email }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(false);
  const pathname = usePathname();
  const router = useRouter();
  const username = email ? email.slice(0, email.indexOf("@")) : null;

  if (process.env.NODE_ENV === "production") {
    useEffect(() => {
      if (username === null && pathname.startsWith("/newsletter")) {
        alert("Please login to access this page.");
        router.push("/login");
      }
    }, [username, pathname]);
  }

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [pathname]);

  return (
    <NextUINavBar
      classNames={{
        wrapper: "px-4 sm:px-6",
      }}
      maxWidth="xl"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <NextLink aria-label="Home" href="/">
          <p className="text-3xl font-extrabold italic text-inherit">{NAME}</p>
        </NextLink>
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 lg:flex" justify="center">
        {menuItems.map(({ label, href, disabled }, index) => (
          <NavbarMenuItem key={`${label}-${index}`}>
            <NextLink
              className={clsx([
                navLinkClasses,
                disabled && "pointer-events-none no-underline",
              ])}
              color="foreground"
              data-active={pathname === href}
              href={href}
            >
              {label}
            </NextLink>
          </NavbarMenuItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          {username === null ? (
            <Button
              color="primary"
              size="sm"
              onPress={() => router.push("/login")}
            >
              Login
            </Button>
          ) : (
            <Profile username={username} />
          )}
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map(({ label, href, disabled }, index) => (
          <NavbarMenuItem key={`${label}-${index}`}>
            <NextLink
              className={clsx([
                navLinkClasses,
                disabled && "pointer-events-none no-underline",
              ])}
              color="foreground"
              data-active={pathname === href}
              href={href}
            >
              {label}
            </NextLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavBar>
  );
};

export default NavBar;
