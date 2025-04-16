# ChatView AI Landing Page

This is a landing page for ChatView AI, a revolutionary platform that transforms existing chat platforms into personalized, visual workspaces powered by Artificial Intelligence.

## Project Overview

The landing page showcases the key features and benefits of ChatView AI:

- **Personalized Visual Canvas**: Create a unique visual workspace tailored to individual needs and workflow.
- **AI-Powered Dynamic Content**: AI intelligently curates and presents information within ChatView.
- **Intuitive Chat Command Interface**: Manage the entire visual workspace using natural language chat commands.
- **Extensible & Integratable**: Connect with favorite apps, services, and data sources.

## Project Structure

```
chatview/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # CSS styles
├── js/
│   └── main.js         # JavaScript functionality
├── img/                # SVG images for the website
│   ├── chatview-logo.svg
│   ├── hero-mockup.svg
│   ├── solution-mockup.svg
│   ├── feature-canvas.svg
│   ├── feature-ai.svg
│   ├── feature-commands.svg
│   └── feature-integrations.svg
└── README.md           # Project documentation
```

## Running the Website

Since this is a static website, you can run it using any web server. Here are a few options:

### Option 1: Using Python's built-in HTTP server

```bash
# Python 3
python -m http.server

# Python 2
python -m SimpleHTTPServer
```

Then open your browser and navigate to `http://localhost:8000`

### Option 2: Using Node.js and http-server

First, install http-server:

```bash
npm install -g http-server
```

Then run:

```bash
http-server
```

And navigate to the URL provided in the terminal output.

### Option 3: Using PHP's built-in server

```bash
php -S localhost:8000
```

Then open your browser and navigate to `http://localhost:8000`

## Customization

### Images

The current images are SVG placeholders. Replace them with actual product screenshots or professional illustrations by:

1. Adding your image files to the `img/` directory
2. Updating the image paths in `index.html`

### Content

Update the marketing content in `index.html` to match your specific messaging and branding.

### Styles

Customize the look and feel by modifying the CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #4f46e5;
    --primary-dark: #3730a3;
    --primary-light: #818cf8;
    --secondary-color: #10b981;
    /* ... other variables ... */
}
```

## Browser Compatibility

This landing page is designed to be responsive and compatible with modern browsers including:

- Chrome
- Firefox
- Safari
- Edge

## License

[Add your license information here]

## Contact

[Add your contact information here]
