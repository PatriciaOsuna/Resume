import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { Certification } from "@/lib/types";
import { cn } from "@/lib/utils";

type CertificationBadges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: CertificationBadges;
}

/**
 * Renders a list of badges for certifications
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({
  className,
  badges,
}: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn("inline-flex list-none gap-x-1 p-0", className)}
      aria-label="Technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface CertificationItemProps {
  certification: Certification;
}

/**
 * Individual certification card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function CertificationItem({
  certification,
}: CertificationItemProps) {
  const { company, badges, title, end, description } = certification;

  return (
    <Card className="py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none print:text-sm">
            {title}
            <BadgeList
              className="hidden gap-x-1 sm:inline-flex"
              badges={badges}
            />
          </h3>
          <div
            className="text-sm tabular-nums text-gray-500"
            title={`Completion date: ${end}`}
          >
            {end}
          </div>
        </div>

        <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
          {company}
        </h4>
      </CardHeader>

      <CardContent>
        <div className="mt-2 text-xs text-foreground/80 print:mt-1 print:text-[10px] text-pretty">
          {description}
        </div>
        <div className="mt-2">
          <BadgeList
            className="-mx-2 flex-wrap gap-1 sm:hidden"
            badges={badges}
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface CertificationsProps {
  certifications: Certification[];
}

/**
 * Main certifications section component
 * Renders a list of certifications
 */
export function Certifications({
  certifications,
}: CertificationsProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="certifications">
        Certifications
      </h2>
      <div
        className="space-y-4 print:space-y-0"
        role="feed"
        aria-labelledby="certifications"
      >
        {certifications.map((item) => (
          <article key={`${item.company}-${item.title}`}>
            <CertificationItem certification={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}