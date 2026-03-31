"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
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
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Portfolio", id: "portfolio" },
        { name: "Pricing", id: "pricing" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="GOProductions"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{ variant: "gradient-bars" }}
      title="Capturing Moments, Creating Legacies."
      description="Professional photography services by GOProductions. Specializing in high-end portrait, event, and editorial photography."
      avatars={[
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/a-professional-portrait-of-a-photographe-1774906900710-03c92337.png", alt: "Gio Portfolio" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/artistic-portrait-photography-dramatic-s-1774906900007-0d8151b2.png", alt: "Fashion Work" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/stunning-landscape-photograph-capturing--1774906900531-88e6ad02.png", alt: "Landscape Work" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/sophisticated-wedding-photography-couple-1774906900235-9bc80d9f.png", alt: "Event Work" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/a-professional-portrait-of-a-photographe-1774906900710-03c92337.png", alt: "Gio Work" },
      ]}
      avatarText="Personal Portfolio Collection"
      buttons={[{ text: "Book Your Session", href: "#contact" }]}
      marqueeItems={[
        { type: "text", text: "Editorial" },
        { type: "text", text: "Events" },
        { type: "text", text: "Landscape" },
        { type: "text", text: "Lifestyle" },
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
        { title: "Creative Vision", description: "Tailored approach for every unique project." },
        { title: "High-End Quality", description: "Professional-grade editing and composition." },
        { title: "Reliable Service", description: "Dedicated to timely delivery and excellence." },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/a-professional-portrait-of-a-photographe-1774906900710-03c92337.png?_wi=1"
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
        { id: "p1", name: "Editorial Fashion", price: "Editorial", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/artistic-portrait-photography-dramatic-s-1774906900007-0d8151b2.png?_wi=1" },
        { id: "p2", name: "Nature & Landscape", price: "Landscape", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/stunning-landscape-photograph-capturing--1774906900531-88e6ad02.png" },
        { id: "p3", name: "Wedding Moments", price: "Event", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/sophisticated-wedding-photography-couple-1774906900235-9bc80d9f.png?_wi=1" },
        { id: "p4", name: "Custom Gallery A", price: "Gallery", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/uploaded-1774974542160-99dtm9z8.jpg" },
        { id: "p5", name: "Custom Gallery B", price: "Gallery", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/uploaded-1774974542161-irs3wty5.jpg" },
        { id: "p6", name: "Custom Gallery C", price: "Gallery", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/uploaded-1774974542161-1346q9vi.jpg" },
        { id: "p7", name: "Custom Gallery D", price: "Gallery", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/uploaded-1774974542161-4z8kiuml.jpg" },
        { id: "p8", name: "Custom Gallery E", price: "Gallery", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/uploaded-1774974542161-n2xowiqs.jpg" }
      ]}
      title="Portfolio Highlights"
      description="A curated selection of our best work across various genres."
    />
  </div>

  <div id="pricing" data-section="pricing">
    <PricingCardFive
      animationType="slide-up"
      title="Photography Rates"
      description="Transparent and fair pricing for all your photography needs."
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "1", tag: "Standard", price: "$25", period: "per person", description: "Perfect for individual headshots or quick sessions.", button: { text: "Select Plan", href: "#contact" }, featuresTitle: "Includes:", features: ["High-res files", "Quick delivery"] },
        { id: "2", tag: "Group", price: "$60", period: "for 5 people", description: "Great for small groups, friends, or couples.", button: { text: "Select Plan", href: "#contact" }, featuresTitle: "Includes:", features: ["Up to 5 people", "Group posing guide"] },
        { id: "3", tag: "Team", price: "$125", period: "whole team", description: "Ideal for corporate branding and large group photos.", button: { text: "Select Plan", href: "#contact" }, featuresTitle: "Includes:", features: ["Full team session", "Professional editing"] },
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        { id: "t1", name: "Sarah Miller", handle: "@smiller", testimonial: "Incredible eye for detail! Made the shoot so comfortable.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/a-professional-portrait-of-a-photographe-1774906900710-03c92337.png?_wi=2" },
        { id: "t2", name: "James & Emma", handle: "@jemwedding", testimonial: "Our wedding photos were beyond perfect. Memories for a lifetime.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/sophisticated-wedding-photography-couple-1774906900235-9bc80d9f.png?_wi=2" },
        { id: "t3", name: "David Thorne", handle: "@dthorne", testimonial: "Professional, efficient, and exceptionally talented.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgNfTgb57N5yOQvfkZDmuue23c/artistic-portrait-photography-dramatic-s-1774906900007-0d8151b2.png?_wi=2" },
      ]}
      title="Words From Our Clients"
      description="See why our clients choose GOProductions for their photography needs."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Get In Touch"
      title="Ready to book your session?"
      description="Have questions? Reach out via phone, email, or Instagram. Let's create something beautiful together."
      buttons={[
        { text: "Call 872-225-6752", href: "tel:8722256752" },
        { text: "Email giopori@icloud.com", href: "mailto:giopori@icloud.com" },
        { text: "Follow @gioprodz", href: "https://instagram.com/gioprodz" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="GOProductions"
      columns={[
        {
          title: "Business", items: [
            { label: "About", href: "#about" },
            { label: "Portfolio", href: "#portfolio" },
            { label: "Pricing", href: "#pricing" },
          ],
        },
        {
          title: "Connect", items: [
            { label: "Instagram", href: "https://instagram.com/gioprodz" },
            { label: "Email Us", href: "mailto:giopori@icloud.com" },
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