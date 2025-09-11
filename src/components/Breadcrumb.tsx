"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center text-sm text-gray-500 space-x-1">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={idx} className="flex items-center space-x-1">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-[#0099ff] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700 font-medium">{item.label}</span>
            )}
            {!isLast && <ChevronRight size={14} className="text-gray-400" />}
          </span>
        );
      })}
    </nav>
  );
}
