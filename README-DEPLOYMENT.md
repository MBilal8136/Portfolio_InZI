# 🚀 Portfolio Deployment to Hostinger

## Overview
This portfolio is configured for automatic deployment to Hostinger using GitHub Actions CI/CD pipeline.

## 📋 Prerequisites

1. **GitHub Account** - For repository and CI/CD
2. **Hostinger Hosting Account** - Any plan supporting static websites
3. **FTP Access** - Available in Hostinger control panel

## 🔧 Setup Instructions

### 1. Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial portfolio commit"
```

### 2. Create GitHub Repository

1. Go to GitHub and create a new repository
2. Connect your local repository:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 3. Configure GitHub Secrets

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions**

Add these secrets:
- `HOSTINGER_FTP_SERVER`: Your FTP server (e.g., `ftp.yourdomain.com`)
- `HOSTINGER_FTP_USERNAME`: Your FTP username
- `HOSTINGER_FTP_PASSWORD`: Your FTP password

**Finding FTP Credentials in Hostinger:**
1. Login to Hostinger control panel
2. Go to **Files** → **File Manager**
3. Look for **FTP Accounts** or connection details
4. Create FTP account if needed

### 4. Automatic Deployment

Once configured, the CI/CD pipeline will:
- ✅ Trigger on every push to `main` branch
- ✅ Build your Next.js app as static files
- ✅ Deploy automatically to Hostinger
- ✅ Your site goes live instantly!

## 📝 Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Local deployment test
npm run deploy:local

# Manual build and deploy reminder
npm run deploy
```

## 🔄 Deployment Process

### Automatic (Recommended)
1. Make changes to your code
2. Commit and push to GitHub
3. GitHub Actions automatically builds and deploys
4. Site updates live on your domain

### Manual
1. Run `npm run build`
2. Upload contents of `out/` folder to Hostinger `public_html`
3. Site updates immediately

## 🌐 Domain Configuration

### Custom Domain
If using a custom domain, update in Hostinger:
1. Go to **Domains** section
2. Point domain to your hosting account
3. Update DNS if needed

### Subdirectory Deployment
If deploying to a subdirectory:
1. Update `basePath` in `next.config.ts`
2. Change FTP `server-dir` in GitHub Actions workflow

## 🐛 Troubleshooting

### Build Issues
- Check GitHub Actions logs in repository
- Ensure all dependencies are installed
- Verify Next.js configuration

### FTP Issues
- Verify FTP credentials in GitHub secrets
- Check Hostinger FTP server status
- Ensure correct server directory path

### Image Loading Issues
- Images are configured for static hosting
- Unsplash images use `unoptimized: true`
- All external images are supported

## 📊 Monitoring

- **GitHub Actions**: Monitor deployments in repository Actions tab
- **Hostinger**: Check file uploads in File Manager
- **Live Site**: Verify changes at your domain

## 🔒 Security Notes

- FTP credentials are stored as GitHub secrets
- Never commit sensitive information
- Use environment variables for API keys

## 📱 Performance

- Static export ensures fast loading
- Images are optimized for web
- CSS and JS are minified
- Perfect for portfolio sites

## 🆘 Support

If you encounter issues:
1. Check GitHub Actions logs
2. Verify Hostinger control panel
3. Ensure FTP credentials are correct
4. Contact Hostinger support if needed

---

**Happy Deploying! 🎉**
