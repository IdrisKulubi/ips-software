# Wi-Fi Management Solution

A comprehensive ISP management system built with Next.js 14, TypeScript, and modern web technologies. This solution helps automate and streamline ISP operations while providing a user-friendly interface for both administrators and end-users.

## Features

### Core Features (Phase 1)

- 🔄 **Payment Automation**
  - Automated billing processes
  - SMS reminders (2 days before, 1 day before, day of disconnection)
  - M-Pesa integration
  - Payment confirmation notifications

- 🌐 **Hotspot Management**
  - User account creation and management
  - Bandwidth and data limit controls
  - Unique login credential generation

- 🔌 **PPPoE Management**
  - Automated account lifecycle management
  - MikroTik router integration
  - Real-time status monitoring

- 📱 **SMS Gateway Integration**
  - Cost-effective messaging (Ksh 0.4 per message)
  - Automated notifications
  - Payment reminders

- 📊 **Analytics Dashboard**
  - Payment history tracking
  - Bandwidth usage statistics
  - System health monitoring

### Additional Features (Phase 2)

- 🔐 Two-Factor Authentication (2FA)
- 📦 Package Management System
- 🖥️ Self-Service Portal
- 📈 Lead Tracking
- 🔔 Real-Time Router Status Notifications

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI
- **Database:** Neon DB
- **Authentication:** [Coming Soon]
- **Payment Integration:** M-Pesa
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- Package manager (npm, yarn, or pnpm)
- Git

### Installation

1. Clone the repository:
```bash
git clone <https://github.com/IdrisKulubi/ips-software.git>
cd ips-software
```

2. Install dependencies:
```bash
npm install
or
yarn install
or
pnpm install
```

3. Set up environment variables:
```bash
npm run dev
or
yarn dev
or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
```bash
ips-software/
├── src/
│ ├── app/
│ ├── components/
│ │ ├── ui/
│ │ └── themes/
│ ├── hooks/
│ └── lib/
├── public/
└── [configuration files]
```

## Development Guidelines

- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error handling
- Write self-documenting code
- Follow the established project structure

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

[Add your license here]

## Support

For support, email [kulubiidris@gmail.com] .

## Acknowledgments

- Next.js team for the amazing framework
- Shadcn UI for the beautiful components
- All contributors who have helped shape this project
