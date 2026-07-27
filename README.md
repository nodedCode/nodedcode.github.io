# nodedCode Studio

Production Web Application and Technical Directory
Registered BBID: AA008810168T
Classification: Proprietary and Confidential

## Overview

This repository contains the official single-page application and digital product directory for nodedCode Studio. Built with React and Vite, the platform embodies our foundational engineering principles: tailored code, enterprise quality, and modern web solutions.

The application features a responsive visual design system, subtle animations, custom typography, and a synchronized data layer that interfaces with remote Google Sheets feeds while maintaining dependable offline fallbacks.

## Architecture and Data Flow

The platform uses a decoupled architecture. Content for products, tools, and reading articles is dynamically loaded from remote Google Sheets via OpenSheet endpoints. If network latency occurs or remote endpoints become unavailable, the application automatically pivots to internal local fallbacks in config.json, ensuring continuous availability.

```mermaid
graph TD
    subgraph Client [Client Application]
        SPA[React Application<br/>src/App.jsx]
        Router[Navigation Controller<br/>#home, #services, #products, #read, #contact]
        Views[View Components<br/>Products Table | Article Cards | Modal]
    end

    subgraph Data [Data Sources]
        SheetProd[Remote Feed: Products]
        SheetRead[Remote Feed: Read and Articles]
        SheetVerify[Remote Feed: Verification]
        Fallback[Local Fallback<br/>public/config.json]
    end

    subgraph Static [Editorial and Media]
        Articles[Article Templates<br/>public/articles/*.html]
        Media[Studio Assets<br/>logo.jpg | favicon.ico]
    end

    SheetProd -->|Fetch API| SPA
    SheetRead -->|Fetch API| SPA
    SheetVerify -->|Fetch API| SPA
    Fallback -->|State Fallback| SPA

    SPA --> Router
    Router --> Views
    Views -->|Links| Articles
    Views -->|Renders| Media
```

## Project Structure

```text
nodedcode.studio/
├── public/
│   ├── articles/               # Standalone article HTML templates and published case studies
│   ├── config.json             # Core system configuration, text copy, and offline fallbacks
│   ├── favicon.ico             # Studio favicon
│   ├── logo.jpg                # Studio logo image
│   └── noise.svg               # Background texture asset
├── src/
│   ├── App.jsx                 # Main application controller, routing logic, and view components
│   ├── main.jsx                # Application entry point and DOM render setup
│   └── index.css               # Main stylesheet and styling utilities
├── index.html                  # Root HTML document with semantic structure and metadata
├── package.json                # Project scripts and dependency definitions
├── vite.config.js              # Vite build configuration
├── README.md                   # Project documentation
└── LICENSE                     # Proprietary legal agreement
```

## Content Management

The platform is designed for streamlined content updates. Products, tools, and reading materials are managed through connected Google Sheets spreadsheets. When new rows or articles are published in the sheets, the application updates automatically on client browser refresh without requiring code modifications or rebuilds. Standardized HTML templates are provided in the articles directory for writing standalone editorial articles and case studies.

## Development and Build

To run the project locally for development or testing:

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

To compile and optimize the application for production deployment:

```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

## License and Legal

This software, including all source code, design assets, and architectural structure, is proprietary to nodedCode Studio.

Copyright (c) 2026 nodedCode Studio. All Rights Reserved.
Unauthorized reproduction, modification, distribution, decompilation, or public display of this codebase is strictly prohibited. Please refer to the included LICENSE file for binding legal terms.
