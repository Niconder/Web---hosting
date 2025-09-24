# Web Hosting - Gisteck

A complete web hosting solution for the Gisteck web page with React build support and future email functionality.

## 🚀 Features

- **React Build Hosting**: Ready to host React application builds
- **Multiple Platform Support**: Configured for Vercel, Netlify, and GitHub Pages
- **Email Ready**: Infrastructure prepared for email sending/receiving
- **Data Storage Ready**: Prepared for future data storage functionality
- **Express Server**: Node.js server for API endpoints and static file serving

## 📁 Project Structure

```
├── public/              # Static files for web hosting
│   ├── index.html      # Main HTML entry point
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   └── images/         # Image assets
├── build/              # React build files (upload your build here)
├── server/             # Node.js server configuration
│   └── server.js       # Express server with API endpoints
├── assets/             # Additional assets
├── deploy.sh           # Deployment script
├── package.json        # Node.js dependencies
├── .env.example        # Environment variables template
└── README.md          # This file
```

## 🛠️ Setup

### 1. Upload React Build

1. Build your React application: `npm run build`
2. Copy the contents of your `build` folder to the `build/` directory in this repository
3. Run the deployment script: `./deploy.sh`

### 2. Local Development

```bash
# Install dependencies
npm install

# Start the server
npm start

# Server will run on http://localhost:3000
```

### 3. Deploy to Hosting Platforms

#### Vercel
- Connect your repository to Vercel
- Vercel will automatically use the `vercel.json` configuration

#### Netlify
- Connect your repository to Netlify
- Netlify will use the `netlify.toml` configuration

#### GitHub Pages
- Enable GitHub Pages in repository settings
- Set source to the `public` folder
- Uses `_config.yml` for Jekyll configuration

## 📧 Email Functionality (Coming Soon)

The server is prepared for email functionality with API endpoints:

- `POST /api/contact` - Contact form submissions
- `POST /api/subscribe` - Email subscriptions

### Environment Setup for Email

1. Copy `.env.example` to `.env`
2. Configure your email service credentials:
   ```
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-email@domain.com
   SMTP_PASS=your-password
   FROM_EMAIL=noreply@yourdomain.com
   ```

## 💾 Data Storage (Coming Soon)

Database configuration is prepared in the environment variables:

```
DATABASE_URL=your-database-url
DB_HOST=localhost
DB_PORT=5432
DB_NAME=gisteck_db
DB_USER=your-username
DB_PASS=your-password
```

## 🔧 API Endpoints

- `GET /` - Serves the React application
- `GET /api/health` - Health check endpoint
- `POST /api/contact` - Contact form (placeholder)
- `POST /api/subscribe` - Email subscription (placeholder)

## 📋 Deployment Checklist

- [ ] Upload React build files to `build/` directory
- [ ] Run `./deploy.sh` to deploy build to `public/`
- [ ] Test locally with `npm start`
- [ ] Configure environment variables for production
- [ ] Deploy to chosen hosting platform
- [ ] Configure custom domain (optional)
- [ ] Set up email service (when ready)
- [ ] Set up database (when ready)

## 🔒 Security

- Helmet.js for security headers
- CORS configuration
- Request size limits
- Environment variable protection

## 📝 License

ISC License - See package.json for details
