# Freeze Browser

A simple, secure Electron-based web browser with a clean interface, tabbed browsing, and essential navigation features.

## Features

- **Tabbed Browsing**: Open multiple tabs, switch between them, and close tabs easily
- **Secure Browsing**: Uses Electron's webview for isolated web content rendering
- **URL and Search Support**: Enter URLs directly or search queries (defaults to Google)
- **Navigation Controls**: Back, forward, and reload buttons
- **Link Interception**: Links clicked in web pages open in new tabs automatically
- **Keyboard Shortcuts**: Ctrl+T for new tab, Ctrl+W to close current tab
- **Modern UI**: Clean, responsive design with a gradient toolbar and tab bar
- **IPC Communication**: Secure inter-process communication between main and renderer processes
- **Cross-Platform**: Built with Electron for Windows, macOS, and Linux

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pjdur/freeze-browser.git
   cd freeze-browser
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development

Run the app in development mode:
```bash
npm start
```

### Building

Build the app for your current platform:
```bash
npm run build
```

Build specifically for Windows:
```bash
npm run build:win
```

Build specifically for macOS:
```bash
npm run build:mac
```

Build specifically for Linux:
```bash
npm run build:linux
```

Build and unpack the application:
```bash
npm run build:unpack
```

The built application will be in the `dist` directory.

## How to Use

1. Launch the app using `npm start`
2. Use the tab bar to manage tabs:
   - Click the "+" button to open a new tab
   - Click on a tab to switch to it
   - Click the "×" button on a tab to close it
3. In the address bar, enter:
   - A full URL (e.g., `https://www.example.com`)
   - A search query (e.g., `electron browser`)
4. Press Enter to navigate in the active tab
5. Use the navigation buttons:
   - ← Back
   - → Forward
   - ↻ Reload
6. Use keyboard shortcuts:
   - Ctrl+T: Open a new tab
   - Ctrl+W: Close the current tab
7. Links clicked in web pages will automatically open in new tabs

## Project Structure

```
freeze-browser/
├── index.html          # Main UI with toolbar and scripts
├── index.js            # Main Electron process
├── preload.js          # Preload script for secure IPC
├── webview-preload.js  # Preload script for webview link interception
├── package.json        # Project configuration and dependencies
├── README.md           # This file
└── dist/               # Built application output (after build)
```

## Development

The app uses:
- **Electron**: For cross-platform desktop app framework
- **BrowserView**: For secure web content rendering
- **IPC**: For communication between main and renderer processes
- **Electron Builder**: For packaging and distribution

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License

## Author

Pjdur
