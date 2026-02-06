# Backend Integration Contracts

## Overview
This document outlines the integration between frontend mock data and Firebase backend for the Besong Wisdom Portfolio Website.

## Current Mock Data Structure

### 1. Profile Data (`profileData`)
```javascript
{
  name: string,
  title: string,
  bio: string,
  email: string,
  location: string,
  profileImage: string (URL),
  social: {
    github: string (URL),
    linkedin: string (URL),
    twitter: string (URL)
  }
}
```
**Firestore Collection**: `profile`
**Document ID**: `main`

### 2. About Data (`aboutData`)
```javascript
{
  fullBio: string,
  highlights: string[]
}
```
**Firestore Collection**: `profile`
**Document ID**: `main` (merged with profile data)

### 3. Skills Data (`skillsData`)
```javascript
[
  {
    category: string,
    skills: string[]
  }
]
```
**Firestore Collection**: `skills`
**Document Structure**: Each category is a separate document

### 4. Projects Data (`projectsData`)
```javascript
[
  {
    id: string,
    title: string,
    description: string,
    techStack: string[],
    image: string (URL),
    githubUrl: string,
    liveUrl: string,
    featured: boolean
  }
]
```
**Firestore Collection**: `projects`
**Document Structure**: Each project is a separate document with auto-generated ID

### 5. Experience Data (`experienceData`)
```javascript
[
  {
    id: string,
    title: string,
    company: string,
    location: string,
    startDate: string (YYYY-MM),
    endDate: string | null,
    current: boolean,
    description: string,
    achievements: string[]
  }
]
```
**Firestore Collection**: `experience`
**Document Structure**: Each experience is a separate document

### 6. Contact Messages (`contactMessages`)
```javascript
[
  {
    id: string,
    name: string,
    email: string,
    message: string,
    timestamp: string (ISO)
  }
]
```
**Firestore Collection**: `contactMessages`
**Document Structure**: Each message is a separate document

## Firebase Implementation Plan

### Phase 1: Firebase Configuration
- Create `/app/frontend/src/firebase/config.js` with Firebase initialization
- Use environment variables from frontend/.env

### Phase 2: Firebase Services
- Create `/app/frontend/src/firebase/services.js` with CRUD operations:
  - `getProfile()` - Fetch profile data
  - `getSkills()` - Fetch all skills
  - `getProjects()` - Fetch all projects
  - `getExperience()` - Fetch all experience entries
  - `submitContactMessage(data)` - Save contact form submission
  - Admin functions for CRUD operations

### Phase 3: Authentication
- Create `/app/frontend/src/firebase/auth.js`
- Implement Firebase Authentication for admin access
- Create AuthContext for managing auth state

### Phase 4: Frontend Integration
**Files to Update:**
1. `/app/frontend/src/components/Hero.jsx` - Replace mock with Firebase
2. `/app/frontend/src/components/About.jsx` - Replace mock with Firebase
3. `/app/frontend/src/components/Skills.jsx` - Replace mock with Firebase
4. `/app/frontend/src/components/Projects.jsx` - Replace mock with Firebase
5. `/app/frontend/src/components/Experience.jsx` - Replace mock with Firebase
6. `/app/frontend/src/components/Contact.jsx` - Replace mock submission with Firebase

**Integration Pattern:**
```javascript
// Example for each component
useEffect(() => {
  const fetchData = async () => {
    const data = await getDataFromFirebase();
    setData(data);
  };
  fetchData();
}, []);
```

### Phase 5: Admin Dashboard
Create admin routes and components:
- `/admin` - Admin login page
- `/admin/dashboard` - Main admin dashboard
- `/admin/profile` - Edit profile
- `/admin/skills` - Manage skills
- `/admin/projects` - Manage projects
- `/admin/experience` - Manage experience
- `/admin/messages` - View contact messages

## Migration Strategy

1. **Keep mock.js** as fallback during development
2. **Create Firebase services** layer
3. **Update components** one by one to use Firebase
4. **Add loading states** for async data fetching
5. **Add error handling** for Firebase operations
6. **Implement admin dashboard** last

## Environment Variables Required

Frontend `.env`:
- VITE_FIREBASE_API_KEY
- VITE_FIREBASE_AUTH_DOMAIN
- VITE_FIREBASE_PROJECT_ID
- VITE_FIREBASE_STORAGE_BUCKET
- VITE_FIREBASE_MESSAGING_SENDER_ID
- VITE_FIREBASE_APP_ID
- VITE_CLOUDINARY_CLOUD_NAME (for image uploads)
- VITE_CLOUDINARY_UPLOAD_PRESET

## Data Flow

### Public Pages (Read-Only)
```
Component → Firebase Service → Firestore → Display Data
```

### Contact Form
```
Form Submit → Firebase Service → Firestore Collection → Success Toast
```

### Admin Dashboard (Authenticated)
```
Admin Login → Firebase Auth → Protected Route → Admin Components → CRUD Operations
```

## Error Handling

- Network errors: Show user-friendly message
- Loading states: Display skeletons or loaders
- Empty data: Show appropriate empty states
- Auth errors: Redirect to login

## Testing Checklist

- [ ] Firebase connection successful
- [ ] Profile data loads correctly
- [ ] Skills display properly
- [ ] Projects load with images
- [ ] Experience timeline renders
- [ ] Contact form submits to Firestore
- [ ] Admin authentication works
- [ ] Admin can perform CRUD operations
- [ ] Loading states display correctly
- [ ] Error handling works properly
