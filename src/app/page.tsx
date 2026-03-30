"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="medium"
        background="fluid"
        cardStyle="gradient-mesh"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Portfolio",
          id: "portfolio",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="GOProductions"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Capturing Moments, Creating Legacies."
      description="Professional photography services by GOProductions. Specializing in high-end portrait, event, and editorial photography."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-happy-young-woman_23-2147823623.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-girl-hair-natural-people_1157-3724.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-male-dressed-stylish-blue-suit-grey-background_613910-13647.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-female-friends-sitting-together-using-tablet-discussing-clothes-purchases-fashion-store-copy-space-consumerism-shopping-concept_74855-11590.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-happy-young-woman_23-2147823623.jpg",
          alt: "Client 5",
        },
      ]}
      avatarText="Trusted by 500+ happy clients"
      buttons={[
        {
          text: "Book Your Session",
          href: "#contact",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Portraiture",
        },
        {
          type: "text",
          text: "Editorial",
        },
        {
          type: "text",
          text: "Events",
        },
        {
          type: "text",
          text: "Landscape",
        },
        {
          type: "text",
          text: "Lifestyle",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Professionalism & Passion"
      description="At GOProductions, we believe every image tells a story. Based in the heart of the city, we combine artistic vision with technical precision to deliver stunning visuals that elevate your personal or commercial brand."
      bulletPoints={[
        {
          title: "Creative Vision",
          description: "Tailored approach for every unique project.",
        },
        {
          title: "High-End Quality",
          description: "Professional-grade editing and composition.",
        },
        {
          title: "Reliable Service",
          description: "Dedicated to timely delivery and excellence.",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/a-professional-portrait-of-a-photographe-1774906900710-03c92337.png"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Editorial Fashion",
          price: "Portraiture",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/artistic-portrait-photography-dramatic-s-1774906900007-0d8151b2.png",
        },
        {
          id: "p2",
          name: "Nature & Landscape",
          price: "Editorial",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/stunning-landscape-photograph-capturing--1774906900531-88e6ad02.png",
        },
        {
          id: "p3",
          name: "Wedding Moments",
          price: "Event",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/sophisticated-wedding-photography-couple-1774906900235-9bc80d9f.png",
        },
      ]}
      title="Portfolio Highlights"
      description="A curated selection of our best work across various genres."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Miller",
          handle: "@smiller",
          testimonial: "Incredible eye for detail! Made the shoot so comfortable.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-young-woman_23-2147823623.jpg?_wi=1",
        },
        {
          id: "t2",
          name: "James & Emma",
          handle: "@jemwedding",
          testimonial: "Our wedding photos were beyond perfect. Memories for a lifetime.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-girl-hair-natural-people_1157-3724.jpg",
        },
        {
          id: "t3",
          name: "David Thorne",
          handle: "@dthorne",
          testimonial: "Professional, efficient, and exceptionally talented.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-male-dressed-stylish-blue-suit-grey-background_613910-13647.jpg",
        },
        {
          id: "t4",
          name: "Chloe Vance",
          handle: "@cvance",
          testimonial: "GOProductions truly captured my personality in the editorial shoot.",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-female-friends-sitting-together-using-tablet-discussing-clothes-purchases-fashion-store-copy-space-consumerism-shopping-concept_74855-11590.jpg",
        },
        {
          id: "t5",
          name: "Mark Roberts",
          handle: "@mroberts",
          testimonial: "The best investment for our company branding.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-young-woman_23-2147823623.jpg?_wi=2",
        },
      ]}
      title="Words From Our Clients"
      description="See why our clients choose GOProductions for their photography needs."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Get In Touch"
      title="Ready to book your session?"
      description="Have questions? Reach out via phone, email, or Instagram. Let's create something beautiful together."
      buttons={[
        {
          text: "Call 872-225-6752",
          href: "tel:8722256752",
        },
        {
          text: "Email giopori@icloud.com",
          href: "mailto:giopori@icloud.com",
        },
        {
          text: "Follow @gioprodz",
          href: "https://instagram.com/gioprodz",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="GOProductions"
      columns={[
        {
          title: "Business",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Portfolio",
              href: "#portfolio",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Instagram",
              href: "https://instagram.com/gioprodz",
            },
            {
              label: "Email Us",
              href: "mailto:giopori@icloud.com",
            },
          ],
        },
      ]}
      copyrightText="© 2025 GOProductions. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
