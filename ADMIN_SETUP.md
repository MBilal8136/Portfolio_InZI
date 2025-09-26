# Admin Panel Setup Guide

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Set up Environment Variables
Create a `.env.local` file in the root directory with:

```env
# Database
DATABASE_URL="file:./dev.db"

# JWT Secret (change this in production)
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"

# EmailJS Configuration (optional - for email notifications)
NEXT_PUBLIC_EMAILJS_SERVICE_ID="your_service_id_here"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="your_template_id_here"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="your_public_key_here"
```

### 3. Initialize Database
```bash
# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push

# Initialize with admin user and sample data
npm run db:init
```

### 4. Start Development Server
```bash
npm run dev
```

## 🔐 Admin Access

**Default Admin Credentials:**
- **Email:** admin@inzisandhu.com
- **Password:** admin123

**Admin Panel URL:** http://localhost:3000/admin/login

## 📝 Features Added

### Admin Panel
- ✅ **Authentication System** - Secure login with JWT tokens
- ✅ **Dashboard** - Overview of posts and messages
- ✅ **Blog Management** - Create, edit, delete blog posts
- ✅ **Contact Management** - View and manage contact messages
- ✅ **Responsive Design** - Works on all devices

### Blog System
- ✅ **Public Blog Section** - Added to main portfolio
- ✅ **Blog Listing Page** - `/blog` with pagination
- ✅ **Individual Post Pages** - `/blog/[slug]`
- ✅ **Rich Content Support** - HTML content support
- ✅ **SEO Friendly** - Proper meta tags and URLs

### Contact System
- ✅ **Database Storage** - All messages saved to database
- ✅ **Admin Management** - View, mark as read, delete messages
- ✅ **Email Notifications** - Optional EmailJS integration
- ✅ **Form Validation** - Client and server-side validation

## 🗂️ File Structure

```
src/
├── app/
│   ├── admin/                 # Admin panel pages
│   │   ├── login/            # Admin login
│   │   ├── dashboard/        # Admin dashboard
│   │   ├── blog/             # Blog management
│   │   └── messages/         # Contact management
│   ├── blog/                 # Public blog pages
│   │   ├── page.tsx          # Blog listing
│   │   └── [slug]/           # Individual posts
│   └── api/                  # API routes
│       ├── admin/            # Admin API endpoints
│       ├── blog/             # Public blog API
│       └── contact/          # Contact form API
├── components/
│   └── BlogSection.tsx       # Blog section for homepage
├── lib/
│   ├── auth.ts              # Authentication utilities
│   └── db.ts                # Database connection
└── prisma/
    └── schema.prisma        # Database schema
```

## 🔧 API Endpoints

### Admin API
- `POST /api/admin/login` - Admin login
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/admin/blog` - List all blog posts
- `POST /api/admin/blog` - Create new post
- `PUT /api/admin/blog/[id]` - Update post
- `DELETE /api/admin/blog/[id]` - Delete post
- `GET /api/admin/messages` - List contact messages
- `PUT /api/admin/messages/[id]` - Update message
- `DELETE /api/admin/messages/[id]` - Delete message

### Public API
- `GET /api/blog` - List published posts (with pagination)
- `GET /api/blog/[slug]` - Get single post
- `POST /api/contact` - Submit contact form

## 🎨 Customization

### Adding New Admin Users
You can add more admin users by running this in your database:

```sql
INSERT INTO admins (email, password, name) 
VALUES ('newadmin@example.com', 'hashed_password', 'Admin Name');
```

### Styling
The admin panel uses the same design system as your portfolio:
- Dark theme with red accents
- Framer Motion animations
- Tailwind CSS styling
- Responsive design

### Content Management
- Blog posts support HTML content
- Featured images via URL
- Tag system for categorization
- Draft/published status
- SEO-friendly slugs

## 🚀 Deployment

### For Full-Stack Hosting (Current Setup)
The current setup is configured for full-stack deployment with API routes. You can deploy to:

1. **Vercel** (Recommended)
   - Connect your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy automatically on push

2. **Railway**
   - Connect your GitHub repository
   - Add environment variables
   - Deploy with database support

3. **Netlify** (with serverless functions)
   - Connect your GitHub repository
   - Configure build settings
   - Add environment variables

### Database Hosting Options
For production, you'll need a hosted database:

1. **PlanetScale** (MySQL)
2. **Supabase** (PostgreSQL)
3. **Railway** (PostgreSQL)
4. **Vercel Postgres**

### Environment Variables for Production
```env
DATABASE_URL="your_production_database_url"
JWT_SECRET="your_strong_production_secret"
NEXT_PUBLIC_EMAILJS_SERVICE_ID="your_service_id"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="your_template_id"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="your_public_key"
```

## 🔒 Security Notes

- Change the default admin password immediately
- Use a strong JWT secret in production
- Consider adding rate limiting for API endpoints
- Implement proper CORS policies
- Add input sanitization for blog content

## 📱 Mobile Support

The admin panel is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

All features are accessible on mobile devices with touch-friendly interfaces.

## 🆘 Troubleshooting

### Database Issues
```bash
# Reset database
rm prisma/dev.db
npm run db:push
npm run db:init
```

### Authentication Issues
- Check JWT_SECRET is set
- Verify admin credentials
- Clear browser localStorage

### Build Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run db:generate
```

## 📞 Support

If you encounter any issues:
1. Check the console for error messages
2. Verify all environment variables are set
3. Ensure database is properly initialized
4. Check network requests in browser dev tools

The admin panel is now fully integrated with your portfolio! 🎉
