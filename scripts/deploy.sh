#!/bin/bash

# Hostinger Deployment Script
# Make this file executable: chmod +x scripts/deploy.sh

echo "🚀 Starting deployment to Hostinger..."

# Build the Next.js application
echo "📦 Building Next.js application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Static files generated in 'out' directory"
    echo "🌐 Ready for deployment to Hostinger"
    echo ""
    echo "Next steps:"
    echo "1. Upload the 'out' folder contents to your Hostinger public_html directory"
    echo "2. Or use the GitHub Actions workflow for automatic deployment"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
