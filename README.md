# 🎬 Movie Ticket Booking App
A full-stack movie ticket booking application built with the MERN stack, featuring real-time movie data, secure payments, and comprehensive user management.

## ✨ Features
🎥 Movie Browsing - Browse latest movies with TMDB integration
🎫 Ticket Booking - Select seats, choose showtimes, and book tickets
💳 Secure Payments - Stripe integration for safe transactions
👤 User Authentication - Complete auth system with Clerk
📧 Email Notifications - Automated booking confirmations via Brevo
⚡ Background Processing - Event-driven workflows with Inngest
👨‍💼 Admin Panel - Theater and movie management
📱 Responsive Design - Works seamlessly on all devices
🔄 Real-time Updates - Live seat availability and booking status

## 📱 Application Screenshots

### User Interface
The application features a modern, responsive design with an intuitive user experience:

#### 🏠 Homepage
- **Hero Section**: Features prominent movie displays with high-quality visuals
- **Navigation**: Clean navigation bar with Home, Movies, Theaters, and Releases sections
- **Featured Movies**: Showcase of current popular films like "Guardians of the Galaxy"
- **Movie Details**: Quick access to movie information including genre, duration, and ratings

#### 🎬 Movies Page
- **Now Showing**: Grid layout displaying currently available movies
- **Movie Cards**: Each card shows movie poster, title, genre, duration, year, and user ratings
- **Quick Actions**: Direct "Buy Tickets" buttons for immediate booking
- **Rating System**: Star ratings with numerical scores for user reviews

#### 🎥 Movie Details
- **Comprehensive Information**: Full movie descriptions, cast details, and specifications
- **Interactive Elements**: Watch trailer buttons and wishlist functionality
- **Cast Display**: Visual cast member gallery with names and roles
- **Booking Integration**: Seamless transition to ticket purchasing

#### 🎟️ Seat Selection
- **Theater Layout**: Visual representation of theater seating arrangement
- **Interactive Seats**: Click-to-select seat functionality with real-time availability
- **Timing Options**: Available showtime selection with date/time picker
- **Screen Visualization**: Clear indication of screen location and viewing perspective
- **Booking Progress**: "Proceed to Checkout" button for seamless flow

#### 💳 Payment Processing
- **Secure Checkout**: Stripe-powered payment interface
- **Multiple Currencies**: Support for local currency (INR) and USD
- **Payment Methods**: Credit/debit card integration with security features
- **Order Summary**: Clear breakdown of selected items and pricing
- **International Support**: Country/region selection for global users

#### 👨‍💼 Admin Dashboard
- **Analytics Overview**: Key metrics including total bookings, revenue, active shows, and user counts
- **Real-time Data**: Live statistics with visual indicators and charts
- **Show Management**: Easy-to-use interface for managing movie showtimes
- **Revenue Tracking**: Comprehensive financial overview with earnings breakdown

#### ⚙️ Admin Management
- **Movie Catalog**: Browse and select from extensive movie database
- **Show Scheduling**: Intuitive date and time selection for creating showtimes
- **Pricing Control**: Flexible pricing options for different shows
- **Content Management**: Easy addition of new movies and showtimes

#### 📊 Show Analytics
- **Performance Metrics**: Detailed booking statistics and earnings per show
- **Show Listings**: Comprehensive table view of all scheduled shows
- **Revenue Tracking**: Real-time earnings data with booking counts
- **Time Management**: Clear display of show schedules and timing

## 🛠️ Tech Stack
### Frontend (React)
- React - Component-based UI library
- React Router - Client-side routing
- Axios - HTTP client for API calls
- Tailwind CSS - Utility-first CSS framework
- React Query/SWR - Data fetching and caching
- React Hook Form - Form handling and validation
- React Hot Toast - Beautiful notifications
- Lucide React - Modern icon library

### Backend (Node.js)
- Node.js - JavaScript runtime environment
- Express.js - Web application framework
- MongoDB - NoSQL database
- Mongoose - MongoDB object modeling
- JWT - JSON Web Tokens for authentication
- Bcrypt - Password hashing
- Cors - Cross-Origin Resource Sharing
- Dotenv - Environment variable management
  
### Screenshots
<img width="1920" height="1080" alt="Screenshot (39)" src="https://github.com/user-attachments/assets/2f2d0741-8bda-442c-9d24-f60c0e25f073" />
<img width="1920" height="1080" alt="Screenshot (38)" src="https://github.com/user-attachments/assets/5bde7c2d-4cf6-4419-b8f1-4a781ae769f4" />
<img width="1920" height="1080" alt="Screenshot (37)" src="https://github.com/user-attachments/assets/7029eced-c102-4ba1-bfac-598024c1808e" />
<img width="1920" height="1080" alt="Screenshot (36)" src="https://github.com/user-attachments/assets/91a3d536-f7f6-4f48-b986-e4a6a7df2f98" />
<img width="1920" height="1080" alt="Screenshot (35)" src="https://github.com/user-attachments/assets/102ca5a9-0480-4c24-86d2-cd7d7d76da2d" />
<img width="1920" height="1080" alt="Screenshot (34)" src="https://github.com/user-attachments/assets/c8d9b424-5314-4ddb-9bec-cb5f0d993597" />
<img width="1920" height="1080" alt="Screenshot (33)" src="https://github.com/user-attachments/assets/e8480b19-e19d-4bc9-bb0b-3cc8a7082171" />
<img width="1920" height="1080" alt="Screenshot (32)" src="https://github.com/user-attachments/assets/0adc5fd1-7834-4abc-a2c1-10f6ba61ced7" />
<img width="1920" height="1080" alt="Screenshot (31)" src="https://github.com/user-attachments/assets/e9860230-d54e-441c-9763-1d94d519381e" />




### Third-Party Services
- TMDB API - Movie database and information
- Clerk - Authentication and user management
- Stripe - Payment processing
- Brevo - Email service provider
- Inngest - Background job processing
- Cloudinary - Image and media management

## 📋 Prerequisites
Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
  Download from: https://nodejs.org/
- MongoDB (Local installation or Atlas account)
- Git for version control

## 🚀 Quick Start
### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/movieticketbookingapp.git
cd movieticketbookingapp
```

### 2. Environment Setup
You'll need to set up accounts and obtain API keys from the following services:

#### Required Service Accounts:
- **MongoDB Atlas** 🗄️
  Create account: https://www.mongodb.com/cloud/atlas/register
  Create a cluster and get your connection string
- **TMDB (The Movie Database)** 🎬
  Sign up: https://www.themoviedb.org
  Go to Settings → API → Create API Key
- **Brevo (Email Service)** 📧
  Register: https://www.brevo.com
  Get SMTP credentials from account settings
- **Inngest (Background Jobs)** ⚡
  Create account: https://www.inngest.com
  Get your event and signing keys
- **Clerk (Authentication)** 🔐
  Sign up: https://clerk.com
  Create an application and get keys
  Configure webhooks: https://dashboard.clerk.com
- **Stripe (Payments)** 💳
  Register: https://dashboard.stripe.com/register
  Get your publishable and secret keys

## 🖥️ Server Setup
### Step 1: Navigate to Server Directory
```bash
cd server
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Create Environment File
Create a `.env` file in the server directory with the following variables:

```env
# Database Configuration
MONGODB_URI=your_mongodb_connection_string

# TMDB Configuration
TMDB_API_KEY=your_tmdb_api_key
TMDB_BASE_URL=https://api.themoviedb.org/3

# Email Configuration (Brevo)
BREVO_SMTP_HOST=smtp-relay.brevo.com
BREVO_SMTP_PORT=587
BREVO_SMTP_USER=your_brevo_email
BREVO_SMTP_PASS=your_brevo_password
FROM_EMAIL=your_sender_email

# Background Jobs (Inngest)
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# Authentication (Clerk)
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

# Payment Processing (Stripe)
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Server Configuration
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key

# CORS Configuration
CLIENT_URL=http://localhost:3000
```

### Step 4: Start the Server
```bash
npm run server
```
The server will start running on http://localhost:5000

## 🎨 Client Setup
### Step 1: Navigate to Client Directory
```bash
cd client
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Create Environment File
Create a `.env` file in the client directory:

```env
# Clerk Configuration
REACT_APP_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Backend Configuration
REACT_APP_BACKEND_URL=http://localhost:5000
# For production: REACT_APP_BACKEND_URL=your_deployed_backend_url

# Stripe Configuration
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# TMDB Configuration (if needed on frontend)
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/w500
```

### Step 4: Start the Client
```bash
npm run dev
```
The client will start running on http://localhost:3000

## ⚙️ Additional Configuration
### Admin User Setup
To create an admin user in Clerk:

1. Go to your Clerk Dashboard
2. Navigate to Users section
3. Select the user you want to make admin
4. Go to Private Metadata
5. Add the following JSON:
```json
{
  "role": "admin"
}
```

### Webhook Configuration
#### Clerk Webhooks
1. Go to https://dashboard.clerk.com
2. Navigate to Webhooks
3. Add endpoint: `your_backend_url/api/webhooks/clerk`
4. Select events: `user.created`, `user.updated`, `user.deleted`

#### Stripe Webhooks
1. Go to Stripe Dashboard
2. Navigate to Developers → Webhooks
3. Add endpoint: `your_backend_url/api/webhooks/stripe`
4. Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`

## 🚀 Deployment
### Backend Deployment (Vercel)
1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Vercel**
- Connect your GitHub repository
- Add all environment variables
- Deploy the project

3. **Sync with Inngest**
- Visit: https://www.inngest.com
- Sync your deployed application
- Update webhook URLs

### Frontend Deployment
- Update `REACT_APP_BACKEND_URL` to your deployed backend URL
- Build and deploy to Vercel, Netlify, or your preferred platform

## 📁 Project Structure
```
movieticketbookingapp/
├── client/                     # React frontend
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── pages/             # Page components
│   │   ├── hooks/             # Custom hooks
│   │   ├── services/          # API services
│   │   ├── utils/             # Utility functions
│   │   ├── styles/            # CSS files
│   │   └── App.js             # Main app component
│   ├── .env                   # Environment variables
│   └── package.json           # Dependencies
├── server/                     # Node.js backend
│   ├── controllers/           # Route controllers
│   ├── models/                # Database models
│   ├── routes/                # API routes
│   ├── middleware/            # Custom middleware
│   ├── services/              # Business logic
│   ├── utils/                 # Helper functions
│   ├── config/                # Configuration files
│   ├── .env                   # Environment variables
│   ├── server.js              # Entry point
│   └── package.json           # Dependencies
└── README.md                   # Project documentation
```

## 📜 Available Scripts
### Server Scripts
```bash
npm run server    # Start development server with nodemon
npm start         # Start production server
npm run build     # Build for production
npm test          # Run tests
```

### Client Scripts
```bash
npm start         # Start development server
npm run build     # Build for production
npm test          # Run tests
npm run eject     # Eject from Create React App
```

## 🎯 Key Features Breakdown
### Movie Management
- Fetch movies from TMDB API
- Display movie details, trailers, and ratings
- Search and filter functionality
- Genre-based categorization

### Booking System
- Interactive seat selection with theater layout visualization
- Multiple showtime options with calendar integration
- Real-time seat availability updates
- Booking confirmation system with email notifications

### Payment Integration
- Secure Stripe payment processing with multiple currency support
- Multiple payment methods support (cards, digital wallets)
- Transaction history and receipt generation
- Refund management and processing

### User Management
- Secure authentication with Clerk integration
- User profiles and preference management
- Comprehensive booking history
- Admin panel for complete theater management

## 🔧 Troubleshooting
### Common Issues
**Server won't start**
- Check if MongoDB is running
- Verify all environment variables are set
- Ensure port 5000 is not in use

**Client can't connect to server**
- Verify server is running on correct port
- Check CORS configuration
- Ensure `REACT_APP_BACKEND_URL` is correct

**Payment issues**
- Verify Stripe keys are correct
- Check webhook endpoints
- Test with Stripe test cards

**Email not sending**
- Verify Brevo SMTP credentials
- Check spam folder
- Test SMTP connection

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments
- TMDB for providing comprehensive movie data
- Clerk for seamless authentication
- Stripe for secure payment processing
- Brevo for reliable email services
- Inngest for background job processing

## 📞 Support
If you encounter any issues or have questions:
- Check the Issues page
- Create a new issue with detailed description
- Join our community discussions

## ⚠️ Important Notes:
- Always run the server before starting the client
- Make sure all environment variables are properly configured
- Test payment flows with Stripe test mode before going live
- Regularly backup your MongoDB database

**Happy coding!** 🎬✨
