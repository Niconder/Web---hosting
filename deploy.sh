#!/bin/bash

# Deployment script for React build
echo "🚀 Deploying Gisteck Web Application"

# Check if build directory exists
if [ ! -d "build" ]; then
    echo "❌ Build directory not found. Please upload your React build first."
    echo "   Create a 'build' directory and copy your React build files there."
    exit 1
fi

# Backup existing public files
echo "📦 Backing up existing public files..."
if [ -d "public_backup" ]; then
    rm -rf public_backup
fi
cp -r public public_backup

# Copy React build to public directory
echo "📂 Copying React build files..."
cp -r build/* public/

# Ensure index.html exists
if [ ! -f "public/index.html" ]; then
    echo "❌ No index.html found in build. Deployment failed."
    echo "   Restoring backup..."
    rm -rf public
    mv public_backup public
    exit 1
fi

echo "✅ React build deployed successfully!"
echo "📄 Files deployed to public/ directory"
echo "🌐 Your application is ready for hosting"

# Show deployment summary
echo ""
echo "📊 Deployment Summary:"
echo "   - React build copied from build/ to public/"
echo "   - Static files ready for hosting"
echo "   - Backup available in public_backup/"
echo ""
echo "🎯 Next steps:"
echo "   1. Test locally: node server/server.js"
echo "   2. Deploy to your hosting platform"
echo "   3. Configure custom domain (if needed)"