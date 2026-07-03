"use client";

import { track } from "@vercel/analytics";
import { AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  metadata?: Record<string, string>;
};

export function TrackedLink({
  children,
  className,
  eventName,
  href = "#",
  metadata,
  onClick,
  ...props
}: TrackedLinkProps) {
  const opensNewTab =
    href.startsWith("http://") || href.startsWith("https://");

  return (
    <a
      {...props}
      className={cn(className)}
      href={href}
      onClick={(event) => {
        track(eventName, metadata);
        onClick?.(event);
      }}
      rel={opensNewTab ? "noreferrer noopener" : props.rel}
      target={opensNewTab ? "_blank" : props.target}
    >
      {children}
    </a>
  );
}
