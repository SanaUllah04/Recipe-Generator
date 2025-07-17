# Recipe Generator - Next.js Application

A modern AI-powered recipe generator built with Next.js, featuring magic link authentication, AI integration via n8n, and data storage with Supabase + MongoDB.

## Features

- 🔐 **Magic Link Authentication** - Passwordless login via Supabase Auth
- 🤖 **AI Recipe Generation** - Smart recipe creation using n8n workflows
- 🗄️ **Dual Database** - Supabase for auth, MongoDB for recipe storage
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ⚡ **Modern Stack** - Next.js 14 with App Router
- 🚀 **CI/CD Ready** - Configured for Vercel deployment

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Authentication**: Supabase Auth with Magic Links
- **Database**: MongoDB (recipes), Supabase (auth)
- **AI Integration**: n8n webhooks
- **Deployment**: Vercel
- **Icons**: Lucide React

## Prerequisites

Before running this application, make sure you have:

- Node.js 18+ installed
- MongoDB instance (local or cloud)
- Supabase project
- n8n instance (optional for AI features)

## Installation Steps

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <your-repo-url>
cd recipe-generator

# Install dependencies
npm install
```

### 2. Environment Configuration

Create a `.env.local` file in the root directory:

```bash
# Copy the example file
cp .env.example .env.local
```

Fill in your environment variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/recipe_generator

# n8n Configuration (optional)
N8N_WEBHOOK_URL=http://localhost:5678/webhook/recipe-generator

# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret_key
```

### 3. Database Setup

#### MongoDB Setup
1. Install MongoDB locally or use MongoDB Atlas
2. Create a database named `recipe_generator`
3. Collections will be created automatically

#### Supabase Setup
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Create a new project
3. Go to Settings > API to