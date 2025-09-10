# Hostinger Deployment Guide

## Prerequisites

1. **Hostinger Account**: Ensure you have a hosting plan that supports static websites or Node.js
2. **GitHub Repository**: Your code should be in a GitHub repository
3. **FTP Credentials**: Available in your Hostinger control panel

## Setup Steps

### 1. GitHub Repository Setup

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### 2. Configure GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:
- `HOSTINGER_FTP_SERVER`: Your FTP server (e.g., ftp.yourdomain.com)
- `HOSTINGER_FTP_USERNAME`: Your FTP username
- `HOSTINGER_FTP_PASSWORD`: Your FTP password

### 3. Hostinger FTP Information

Find your FTP credentials in Hostinger control panel:
1. Go to Files → File Manager
2. Look for FTP accounts or connection details
3. Typically found under "Website" section

### 4. Deployment Process

The GitHub Action will:
1. Build your Next.js app as static files
2. Upload to Hostinger via FTP
3. Deploy to your domain automatically

### 5. Custom Domain Setup

If using a custom domain:
1. Update `basePath` in `next.config.ts` if needed
2. Configure your domain in Hostinger control panel
3. Update DNS settings if required

### 6. Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
npm run build
```

Then upload the `out/` folder contents to your Hostinger `public_html` directory.

## Environment Variables

For production environment variables, add them to your Hostinger hosting environment or include them in the build process.

## Troubleshooting

1. **Build Errors**: Check the GitHub Actions logs
2. **FTP Issues**: Verify credentials and server details
3. **Static Export Issues**: Ensure all images use `unoptimized: true`
4. **Path Issues**: Check `basePath` configuration

## Notes

- The build creates static files in the `out/` directory
- Images are unoptimized for static hosting compatibility
- The site will be deployed to your domain root (`public_html`)
