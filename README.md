# InternTrack

InternTrack is a clean internship discovery and application tracking app built with Next.js and Supabase. It gives students a simple place to browse internships, sign up or log in, and track the roles they have already applied to.

## Features

- Landing page with a polished hero section and internship preview
- Email/password authentication with Supabase
- Dashboard showing a curated internship list
- One-click apply flow with persisted application state
- Responsive UI that works well on desktop and mobile

## Tech Stack

- Next.js 16
- React 19
- Supabase Auth and database
- Tailwind CSS 4

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the project root and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - start the local development server
- `npm run build` - create a production build
- `npm run start` - run the production server
- `npm run lint` - run ESLint

## Project Structure

```text
app/
	page.js          Home page
	login/page.js    Login screen
	signup/page.js   Signup screen
	dashboard/page.js Internship dashboard
components/
	ApplicationList.js
	InternshipCard.js
	Navbar.js
lib/
	supabaseClient.js
```

## How It Works

1. Users land on the home page and can go to sign up or login.
2. Authentication is handled through Supabase.
3. The dashboard renders internship cards and tracks application status.
4. Applications are stored in the `applications` table for persistence.

## Supabase Requirements

This app expects a Supabase project with authentication enabled and an `applications` table that stores at least:

- `internship_id`
- `user_id`
- `user_email`

## Notes

- The dashboard currently includes sample internship data as the default experience.
- If the user is not logged in, applying redirects to the login page.

## Deployment Link'

- https://intern-track-one.vercel.app/
