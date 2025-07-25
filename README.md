# Recipe Generator - Next.js Application

A modern recipe generator built with Next.js, featuring authentication via Appwrite, and a responsive user interface for managing and discovering recipes.

## Features

- 🔐 **Authentication** - Secure login system using Appwrite
- 🍳 **Recipe Management** - Browse and search through various recipes
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ⚡ **Modern Stack** - Next.js 15 with App Router
- 🎨 **Clean UI** - Modern interface with category-based navigation
- 🚀 **Performance Optimized** - Built with the latest Next.js features

## Tech Stack

- **Frontend**: Next.js 15.4, React 19, Tailwind CSS
- **Authentication**: Appwrite
- **UI Components**: Custom components with Tailwind CSS
- **State Management**: React hooks and context
- **Deployment**: Ready for modern hosting platforms
- **Icons**: Lucide React

## Prerequisites

Before running this application, make sure you have:

- Node.js 18+ installed
- Appwrite instance set up
- npm or yarn package manager

## Installation Steps

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone https://github.com/SanaUllah04/Recipe-Generator.git
cd Recipe-Generator/grand_project

# Install dependencies
npm install
```

### 2. Environment Configuration

Create a `.env.local` file in the root directory and configure your Appwrite credentials:

```env
# Appwrite Configuration
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id

# Next.js Configuration
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 3. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.
