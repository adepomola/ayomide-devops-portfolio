import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://your-domain.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ayomide Adepomola | DevOps & Cloud Engineer",
    template: "%s | Ayomide Adepomola"
  },
  description:
    "Portfolio of Ayomide Adepomola, a DevOps and Cloud Engineer focused on AWS, Kubernetes, Docker, Terraform, CI/CD automation, and reliable cloud infrastructure.",
  applicationName: "Ayomide Adepomola Portfolio",
  keywords: [
    "Ayomide Adepomola", "DevOps Engineer", "Cloud Engineer", "AWS",
    "Kubernetes", "Docker", "Terraform", "Jenkins", "CI/CD", "Infrastructure as Code"
  ],
  authors: [{ name: "Ayomide Adepomola" }],
  openGraph: {
    title: "Ayomide Adepomola | DevOps & Cloud Engineer",
    description: "Cloud infrastructure, deployment automation, and reliable systems.",
    type: "website",
    locale: "en_NG",
    siteName: "Ayomide Adepomola Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayomide Adepomola | DevOps & Cloud Engineer",
    description: "Cloud infrastructure, deployment automation, and reliable systems."
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: "#070b16",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ayomide Adepomola",
    jobTitle: "DevOps & Cloud Engineer",
    url: siteUrl,
    sameAs: [
      "https://github.com/adepomola",
      "https://linkedin.com/in/ayomide-adepomola-690189422"
    ],
    knowsAbout: [
      "DevOps", "Cloud Computing", "Amazon Web Services", "Kubernetes",
      "Docker", "Terraform", "Ansible", "CI/CD", "Linux"
    ]
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
