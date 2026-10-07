// Hero images (the big featured image on each card)
import elvionHero from "../assets/projects/elvion-hero.jpg";
import petHero from "../assets/projects/pet-hero.jpg";
import hrHero from "../assets/projects/hr-hero.jpg";
import kidoHero from "../assets/projects/kido-hero.jpg";

// Detail shots (for the modal's "// screens" section)
import elvion01 from "../assets/projects/elvion-01.png";
import elvion02 from "../assets/projects/elvion-02.png";
import elvion03 from "../assets/projects/elvion-03.png";

import pet01 from "../assets/projects/pet-01.png";
import pet02 from "../assets/projects/pet-02.png";
import pet03 from "../assets/projects/pet-03.png";
import pet04 from "../assets/projects/pet-04.png";

import hr01 from "../assets/projects/hr-01.png";
import hr02 from "../assets/projects/hr-02.png";
import hr03 from "../assets/projects/hr-03.png";
import hr04 from "../assets/projects/hr-04.png";

import kido01 from "../assets/projects/kido-01.png";
import kido02 from "../assets/projects/kido-02.png";
import kido03 from "../assets/projects/kido-03.png";
import kido04 from "../assets/projects/kido-04.png";
import kido05 from "../assets/projects/kido-05.png";

export const projects = [
  {
    name: "Elvion: skincare e-commerce",
    role: "DESIGN + DEV",
    stack: "WordPress, Elementor, WooCommerce",
    tags: ["WordPress", "Elementor", "WooCommerce"],
    hero: elvionHero,
    heroAlt: "Elvion website shown on laptop and phone",
    desc: [
      "Elvion is an e-commerce website for a natural, handmade soap brand. The goal was to make a gentle, botanical brand feel premium online while keeping it simple to browse and buy.",
      "The page opens with a warm cream hero and a clear Shop Now button, then explains what makes the soaps special with three short trust points: organically sourced ingredients, gentle for all skin types, and recyclable packaging. A six-soap product grid shows each bar with its name, its price in pesos and an Add to cart button.",
      "Customer testimonials, a newsletter sign-up and a full footer finish the page. A deep green, cream and coral palette keeps the focus on the products, and the layout adapts from laptop to mobile.",
    ],
    feats: [
      "Hero with a clear call to action",
      "Ingredient and trust highlights",
      "Product grid with prices and Add to cart",
      "Customer testimonials",
      "Newsletter sign-up and full footer",
      "Responsive on desktop and mobile",
    ],
    caps: [
      "home_and_ingredients.png",
      "products_and_cta.png",
      "testimonials_and_footer.png",
    ],
    shots: [elvion01, elvion02, elvion03],
  },
  {
    name: "Pet Booking Website & Management System",
    role: "DESIGN + DEV",
    stack: "Nuxt, Laravel, Tailwind, Figma",
    tags: ["Nuxt", "Laravel", "Tailwind", "Figma"],
    hero: petHero,
    heroAlt:
      "Pet booking website and management system shown on laptop, tablet and phone",
    desc: [
      "Furiends Pet Hotel & Supplies needed one place for pet owners to book daycare and boarding, and for staff to run the business behind it. This project covers both: a public booking website and an admin management system.",
      "The website introduces the brand with a friendly purple and yellow hero, a Book Now button, and service cards for daycare, overnight and unlimited boarding. It also covers the brand story and goals, key numbers, a contact form with head office details and branches, and a footer that lists PayMaya, GCash and QR Ph as payment options.",
      "The management system, called Pet System, gives staff a dashboard with today's appointments, a date strip, and totals for reservations, customers, pets and hotel availability. Reservations are tracked by status in a searchable table, customers have profile pages with their pets' details, and the sidebar also covers the appointment calendar, services, branch locations, wallet, admin users, and roles and permissions.",
    ],
    feats: [
      "Public website with services, about, contact form and branches",
      "Footer lists PayMaya, GCash and QR Ph payment options",
      "Admin dashboard with today's appointments and key totals",
      "Reservations table with status tags, search and pagination",
      "Customer profiles with each pet's details",
      "Roles and permissions for admin users",
      "Responsive on desktop, tablet and mobile",
    ],
    caps: [
      "website_homepage.png",
      "admin_dashboard.png",
      "admin_reservations.png",
      "customer_profile.png",
    ],
    shots: [pet01, pet02, pet03, pet04],
  },
  {
    name: "HR & Employee Management System",
    role: "DESIGN + DEV",
    stack: "Vue, Laravel, Tailwind, Figma",
    tags: ["Vue", "Laravel", "Tailwind", "Figma"],
    hero: hrHero,
    heroAlt:
      "HR and employee management system shown on laptop, tablet and phone",
    desc: [
      "Empleo is an HR and employee management system that lets a business owner run day-to-day people operations in one place, including employee leave, payslips and expense requests.",
      "The dashboard gives a quick read of the organization: total employees and trainees, who is present today, and open leave requests, along with leave and expense breakdowns, announcements, payroll status, the leave roster and monthly celebrants. A side panel adds AskHR, a chat assistant for questions about employees and policies, shortcuts that draft documents such as offer letters, and short insights like attendance trends.",
      "Employee records can be searched and filtered by designation, employment type, status and date, and exported. Each employee has a profile with tabs for personal information, emergency contact, bank and social benefit details, work information, a milestone timeline of roles and salary changes, and history. An admin panel sets leave credits, designations, and roles and permissions.",
    ],
    feats: [
      "Dashboard with headcount, attendance and open leave requests",
      "Leave request and expense request tracking",
      "Payslip and payroll status",
      "Attendance and work schedule",
      "Employee directory with search, filters and export",
      "Employee profiles with a milestone timeline",
      "AskHR assistant, automation shortcuts and insights",
      "Roles and permissions, leave credits and designations",
    ],
    caps: [
      "dashboard.png",
      "employees.png",
      "employee_personal_info.png",
      "employee_milestone.png",
    ],
    shots: [hr01, hr02, hr03, hr04],
  },
  {
    name: "Children's Training & Booking Platform",
    role: "DESIGN + DEV",
    stack: "Nuxt, Supabase, Tailwind, Figma",
    tags: ["Nuxt", "Supabase", "Tailwind", "Figma"],
    hero: kidoHero,
    heroAlt:
      "Children training and booking platform shown on laptop, tablet and phone",
    desc: [
      "Kido Play (Kidopass) is a booking platform where parents can find training and activities for their children and enroll them in a few clicks. It brings sports, arts, music and camps into one place.",
      "Parents browse activities and filter by location, age, category, sub category and date, then view a class schedule and book. Bookings are paid with Kidopass credits: families pick a credit package or redeem a gift card, then use the credits to book activities. Gift cards come in set credit amounts and can be shared with other families.",
      "Each parent has an account area with a view of classes happening today, booking records with ongoing, completed and cancelled statuses, credit balance and history, profiles for their kids, and profile and password settings. A bright, playful look in red, blue, yellow and teal keeps it friendly for families.",
    ],
    feats: [
      "Activity search by location, age, category and date",
      "Class schedules and online booking",
      "Booking records with ongoing, completed and cancelled statuses",
      "Credit packages and gift cards",
      "My Kids profiles for each child",
      "Dashboard of today's classes and reminders",
      "Account and password settings",
      "Responsive on desktop, tablet and mobile",
    ],
    caps: [
      "about.png",
      "find_activities.png",
      "account_and_booking_records.png",
      "how_credits_work.png",
      "gift_card.png",
    ],
    shots: [kido01, kido02, kido03, kido04, kido05],
  },
];

// SVG mock colours (fallback only, used if a hero image is empty)
export const mockColors = {
  0: { a: "#e08a00", b: "#ffd23f" },
  1: { a: "#7c6cf0", b: "#ffd23f" },
  2: { a: "#1a73e8", b: "#6dffd0" },
  3: { a: "#ff4b33", b: "#ffd23f" },
  4: { a: "#6a3fd0", b: "#ffd23f" },
};
