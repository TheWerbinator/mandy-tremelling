# Mandy Tremelling — Author Website

[![Next.js](https://img.shields.io/badge/Next.js-15.x-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Sanity.io](https://img.shields.io/badge/Sanity.io-v3-F03E3E?style=for-the-badge&logo=sanity&logoColor=white)](https://www.sanity.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

The official web platform and headless content management infrastructure for young adult and fantasy novel author **Mandy Tremelling** (author of *My World of Glass* and *Pulchra Arcanum*).

This platform leverages a decoupled, jamstack-inspired layout architecture to achieve high performance, content flexibility, and an elegant visual design tailored for a modern literary portfolio.

---

## 🚀 Architectural Overview

The core architecture separates the content-delivery layer from data persistence, enabling zero-hydration-overhead performance on the client side coupled with flexible editing workflows:

*   **Next.js App Router & Server Components:** Built entirely around React Server Components (RSC) to serve pre-rendered, data-dense layouts. By minimizing client-side JavaScript bundles, the application maximizes initial page load performance and cumulative layout stability.
*   **Structured Content via Sanity Content Lake:** Content architecture is fully decoupled. All fields—ranging from book synopses and metadata to dynamic blog entries—are queried via **GROQ** (Graph Relational Object Queries), allowing highly efficient, single-roundtrip document fetching.
*   **Design Tokens via Tailwind CSS:** Built with a highly customized utility tokens configuration. The theme layer extends standard utilities with specialized typographic scales, fluid layout configurations, and transitions optimized for an immersive reader experience.
*   **Strict Boundary Typing with TypeScript:** Avoids production runtime errors by enforcing comprehensive type-safety across all network requests. The application maps external Sanity document interfaces directly into internal React component definitions.

---

## 🛠️ Stack Deep Dive

### Next.js Engine & Content Streaming
*   **Incremental Static Regeneration (ISR):** Content is generated statically for near-zero response latencies. Pages use time-based and on-demand cache validation hooks to automatically rebuild layouts in the background when the content state updates.
*   **Asynchronous Streaming with React Suspense:** Heavier background data fetches (such as populating cross-referenced book series lists or media galleries) are isolated inside non-blocking Suspense boundaries to maintain layout continuity.
*   **Next-Gen Image Processing:** Images pulled from the asset lake pass through a centralized optimization pipeline (`next/image`), serving modern configurations (`.webp`), targeted responsive `srcset` definitions, and low-quality data placeholders to eliminate visible layout shifting.
*   **Optimized Typography:** The codebase employs `next/font` to seamlessly embed the Geist font family, stripping away extraneous weight variants to drastically cut down standard font loading blockages.

### Headless Sanity (v3 Studio)
*   **Embedded Studio Routing:** The administration studio is hosted directly within the Next.js routing architecture (under `/studio`), eliminating the operational complexity of deploying, maintaining, and permissioning a standalone administrative application.
*   **Live Preview Matrix:** Using `@sanity/visual-editing` combined with Next.js Draft Mode, authenticated editors can interact with live page structures, seeing data modifications update in real time prior to production builds.

### Tailwind CSS Design Integration
*   **Just-In-Time (JIT) Compiling:** Production pipelines evaluate the markup file by file, compiling down a hyper-lean, bespoke utility sheet containing only the styles explicitly active in production components.
*   **Mobile-First Fluid Layouts:** Employs precise breakpoint bounds and native CSS grid configurations to render typography fluidly across diverse screen form factors.

---

## 📂 Project Structure

```text
├── src/
│   ├── app/                 # Next.js App Router (Pages, Layouts, API Endpoints)
│   │   ├── (site)/          # Active public-facing presentation layouts
│   │   ├── studio/          # Integrated Sanity administrative interface
│   │   └── api/             # Cache revalidation hooks & contact payloads
│   ├── components/          # Reusable atomic presentation UI components
│   └── sanity/              # Sanity Connection Config
│       ├── schemaTypes/     # Content schemas (Novels, Posts, Settings)
│       ├── lib/             # API client instances and image URL builders
│       └── env.ts           # Runtime environment verification and guards
├── public/                  # Raw engine assets (metadata manifests, icons)
├── tailwind.config.ts       # Comprehensive theme override configuration
└── tsconfig.json            # Strict-mode TypeScript compiler configuration
```

## ⚙️ Local Development Setup

Follow these steps to configure, execute, and debug the repository within your local development environment:

### 1. Clone & Install Dependencies
Ensure you are using Node.js 18 or greater before running the installation script.
```bash
git clone https://github.com/TheWerbinator/mandy-tremelling.git
cd mandy-tremelling
npm install
```

### 2. Configure Environment Secrets
Create a `.env.local` configuration file in the root of the project directory. Populate the fields with your project's distinct Sanity identifiers and cryptographic keys:
```bash
# Sanity Core Connection Identifiers
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id_here"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-03-15"

# Private access token for live content previews
SANITY_API_READ_TOKEN="your_read_token_here"

# Secure random token string for verifying webhooks
SANITY_REVALIDATE_SECRET="your_secure_random_string"
```

### 3. Initialize the Development Engine
Boot up the local execution ecosystem using your preferred package manager runner:
```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun dev
```

Open `http://localhost:3000` inside your web browser to view the active environments:
- Consumer Website: Serving directly from the root context (/)
- Sanity Content Studio: Accessible securely via the integrated route (/studio)

Any adjustments made inside component source files will trigger hot module replacement (HMR) to refresh the browser view automatically.

## 🚀 Building and Deploying
The repository is pre-configured and optimized for headless hosting environments like Vercel or Netlify.

**Production Compiles**
To audit and test your production build artifacts locally before pushing changes live, execute the compilation pipeline:
```bash
npm run build
npm run start
```

**Configuring On-Demand Cache Invalidation**
The application exposes an edge-ready route to automatically clear out cached pages the moment the database registers updates. Configure a webhook in your Sanity Management Dashboard with the following settings:
```bash
URL: https://your-production-domain.com/api/revalidate
Trigger On: Create, Update, Delete
```

Ensure the payload authorization header exactly matches the private `SANITY_REVALIDATE_SECRET` environment string configured on your live hosting server. For full deployment architectural patterns, review the official [Next.js Deployment Documentation](https://nextjs.org/docs/pages/getting-started/deploying).
