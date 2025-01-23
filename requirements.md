# Wi-Fi Management Solution Requirements

## Overview

This document outlines the detailed steps and features required to develop a comprehensive Wi-Fi management solution. The solution is intended to automate and streamline ISP operations while providing a user-friendly interface for both administrators and end-users. The project will be implemented using Next.js, JavaScript, Neon DB, and deployed on Vercel.Other deployment options I wiil add them later .

---

## Project Phases

The project will be implemented in two phases:

- **Phase 1:** Core (Primary) Features
- **Phase 2:** Additional (Secondary) Features

---

## Phase 1: Core (Primary) Features

The first version of the software will focus on essential functionalities to ensure smooth operation and immediate value for the ISP.

### 1. Payment Automation

- **Description:** Automate billing processes, including payment tracking, reminders, and confirmation.
- **Key Features:**
  - Send reminders via SMS: 2 days before, 1 day before, and on the day of disconnection.
  - Notify users after payment with next disconnection date.
  - Support for M-Pesa and other mobile payment integrations.

### 2. Hotspot Management

- **Description:** Manage hotspot users, including creating, disabling, and enabling accounts.
- **Key Features:**
  - Assign specific bandwidth and data limits.
  - Generate unique login credentials for hotspot users.

### 3. PPPoE Management

- **Description:** Automate PPPoE user account creation, disabling, and reactivation.
- **Key Features:**
  - Integration with MikroTik routers for PPPoE account management.
  - Real-time status updates for PPPoE users.

### 4. Automatic Disconnections and Reconnections

- **Description:** Ensure accounts are automatically disabled upon non-payment and re-enabled after payment.
- **Key Features:**
  - Cron jobs or scheduled tasks to check payment status.
  - Real-time updates to router settings via MikroTik API.

### 5. SMS Gateway

- **Description:** Use an SMS gateway to send notifications at Ksh 0.4 per message.
- **Key Features:**
  - Integrate with a reliable SMS provider.
  - Send payment reminders, disconnection alerts, and reactivation confirmations.

### 6. Remote MikroTik Management

- **Description:** Provide remote management capabilities for MikroTik devices.
- **Key Features:**
  - Access routers via Winbox or a web-based interface.
  - Support unlimited MikroTik devices.

### 7. Invoicing

- **Description:** Generate and send invoices for payments.
- **Key Features:**
  - Automate invoice creation upon payment.
  - Provide downloadable and printable PDF invoices.

### 8. Data and Analytics

- **Description:** Track system usage and performance.
- **Key Features:**
  - User payment history.
  - Bandwidth and data usage statistics.
  - Overall system health metrics.

---

## Phase 2: Additional (Secondary) Features

These features will enhance the system over time but are not required for the initial release.

### 1. Feature Requests

- Allow admins to submit and track feature requests for future updates.

### 2. Package Management

- Enable admins to create and manage internet packages with varying speeds, data limits, and prices.

### 3. Self-Service Portal for PPPoE Users

- Provide a portal where users can log in, view account details, and make payments.

### 4. No Paybill Required for Hotspot Payments

- Facilitate hotspot payments without the need for a dedicated paybill number.

### 5. Real-Time Router Status Notifications

- Notify admins if a router goes offline or comes back online.

### 6. Lead Tracking

- Track leads within the system and convert them to paying clients.

### 7. Two-Factor Authentication (2FA)

- Enhance security by requiring users to verify logins via 2FA.

---

## Development Steps

### Step 1: Requirements Gathering

- Understand all feature requirements.
- Discuss with stakeholders (e.g., your uncle) for any additional details.

### Step 2: Tech Stack Setup

- Initialize a Next.js project.
- Set up Neon DB for database management.
- Configure Vercel for deployment.

### Step 3: Database Design

- Tables:
  - **Users:** For storing user details (e.g., name, contact info, payment status).
  - **Payments:** To track transactions.
  - **Routers:** To manage connected devices.
  - **Notifications:** For SMS and email messages.

### Step 4: Router Integration

- Use MikroTik API to:
  - Manage hotspot and PPPoE users.
  - Automate disconnections and reconnections.
- Test with sample routers for validation.

### Step 5: SMS Integration

- Choose an SMS provider (e.g., Africa's Talking, Twilio).
- Set up an API to send notifications.

### Step 6: Payment Integration

- Integrate with M-Pesa API or other relevant payment systems.
- Automate payment validation and user account updates.

### Step 7: Frontend Development

- Admin Dashboard:
  - View user statuses and manage accounts.
  - Monitor system analytics.
- User Portal:
  - Allow users to view payment status and renew subscriptions.

### Step 8: Testing

- Test the entire system, including:
  - Router API integration.
  - Payment automation.
  - SMS notifications.

### Step 9: Deployment

- Deploy the solution to Vercel.
- Monitor for issues and iterate as needed.

---

## Conclusion

This document serves as a roadmap to develop the Wi-Fi management solution. Start with the core features to deliver immediate value and expand functionality over time by implementing the additional features. Feel free to refine based on your progress and feedback from stakeholders.
