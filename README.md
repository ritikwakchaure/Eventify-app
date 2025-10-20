# Eventify - Event Management System

## Overview

Eventify is a React-based web application for discovering, managing, and organizing events. It provides features for browsing events, viewing event details, adding new events, and deleting existing ones.

## Features

- 🗓️ Browse and filter upcoming events
- 🔍 Search events by title and tags
- 📝 Add new events with comprehensive details
- ❌ Delete existing events
- 📱 Fully responsive design
- ℹ️ Detailed event pages with:
  - Event information
  - Location and timing
  - Speaker profiles
  - Pricing details

## Tech Stack

- **Frontend**: React.js
- **Routing**: React Router Dom
- **State Management**: React Hooks
- **Routing**: Express.js
- **Backend**: Node.js
- **Database**: MongoDB
- **Styling**: Bootstrap 5
- **Icons**: React Icons

## Backend Setup

The application requires a backend API running at `https://eventify-app-backend.vercel.app` with these endpoints:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/events` | GET | Get all events |
| `/events/id/:id` | DELETE | Delete event |
| `/events` | POST | Create new event |

## Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── Events.js
│   └── ...
├── pages/
│   ├── EventDetails.js
│   ├── AddEvent.js
│   ├── AboutUs.js
│   └── ContactUs.js
├── App.js
└── index.js
```