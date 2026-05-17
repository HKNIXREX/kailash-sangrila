"use client";

import { useState } from "react";
import Image from "next/image";

interface PackageImageProps {
  packageId: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
}

const DEFAULT_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%231a1a2e'/%3E%3Cstop offset='50%25' style='stop-color:%230f0f0f'/%3E%3Cstop offset='100%25' style='stop-color:%231a1a2e'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23grad)'/%3E%3Cpath d='M300 450 L400 300 L500 450 Z' fill='%23f59e0b' opacity='0.3'/%3E%3Cpath d='M200 450 L350 250 L500 450 Z' fill='%23fbbf24' opacity='0.2'/%3E%3Ccircle cx='600' cy='150' r='40' fill='%23f59e0b' opacity='0.4'/%3E%3Ctext x='400' y='520' text-anchor='middle' fill='%23666' font-family='Arial' font-size='16'%3EImage Coming Soon%3C/text%3E%3C/svg%3E";

export default function PackageImage({
  packageId,
  alt,
  className = "",
  fill = false,
  width,
  height,
  priority = false
}: PackageImageProps) {
  const [error, setError] = useState(false);

  const imagePath = `/images/${packageId}.jpg`;

  if (error) {
    if (fill) {
      return (
        <div className={`relative ${className}`}>
          <Image
            src={DEFAULT_PLACEHOLDER}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
      );
    }
    return (
      <Image
        src={DEFAULT_PLACEHOLDER}
        alt={alt}
        width={width || 800}
        height={height || 600}
        className={className}
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={imagePath}
        alt={alt}
        fill
        className={className}
        onError={() => setError(true)}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={imagePath}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      onError={() => setError(true)}
      priority={priority}
    />
  );
}
