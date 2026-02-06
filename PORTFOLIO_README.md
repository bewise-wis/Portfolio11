# Besong Wisdom Portfolio Website

A modern, professional portfolio website built with React and Firebase, featuring a dark mode design and a powerful admin dashboard for content management.

## Features

### Public Website
- **Hero Section**: Professional introduction with profile, title, and social links
- **About Section**: Detailed background and highlights
- **Skills Section**: Categorized technical skills display
- **Projects Section**: Portfolio showcase with images and links
- **Experience Section**: Work timeline with achievements
- **Contact Form**: Firebase-integrated contact form
- **Responsive Design**: Mobile-friendly layout
- **Dark Mode**: Clean, professional dark theme

### Admin Dashboard
- **Firebase Authentication**: Secure admin access
- **Content Management**: Edit all website content dynamically
- **Database Seeding**: One-click initialization with sample data
- **Protected Routes**: Authenticated access to admin features

## Tech Stack

- **Frontend**: React 19, Tailwind CSS, shadcn/ui
- **Backend**: Firebase (Firestore, Authentication)
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with custom dark theme

## Setup Instructions

### Prerequisites
- Node.js 18+ and Yarn
- Firebase project with Firestore and Authentication enabled

### Installation

1. Clone the repository and navigate to frontend directory:
```bash
cd /app/frontend
```

2. Install dependencies (already installed):
```bash
yarn install
```

3. Configure environment variables in `/app/frontend/.env`:
```env
REACT_APP_BACKEND_URL=https://besongwisdom.online
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud_name
REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

4. Start the development server:
```bash
yarn start
```

## Firebase Setup

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firestore Database
4. Enable Authentication (Email/Password)

### 2. Configure Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public read access for all collections
    match /{document=**} {
      allow read: if true;
    }
    
    // Admin write access only
    match /{document=**} {
      allow write: if request.auth != null;
    }
    
    // Contact messages - anyone can create
    match /contactMessages/{message} {
      allow create: if true;
    }
  }
}
```

### 3. Create Admin User
1. Go to Firebase Console > Authentication
2. Add a new user with email/password
3. Note the credentials for admin access

### 4. Seed Database
1. Log in to admin dashboard at `/admin/login`
2. Click "Seed Database" button
3. Database will be populated with initial content

## Admin Dashboard Routes

- `/admin/login` - Admin login page
- `/admin/dashboard` - Main admin dashboard

## Support

For issues or questions, contact: contact@besongwisdom.online

---

**Built with ❤️ using React and Firebase**
