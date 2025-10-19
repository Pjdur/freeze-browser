# Freeze Browser

A simple, secure Electron-based web browser with a clean interface and essential navigation features.

## Features

- **Secure Browsing**: Uses Electron's BrowserView for isolated web content rendering
- **URL and Search Support**: Enter URLs directly or search queries (defaults to Google)
- **Navigation Controls**: Back, forward, and reload buttons
- **Modern UI**: Clean, responsive design with a gradient toolbar
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

The built application will be in the `dist` directory.

## How to Use

1. Launch the app using `npm start`
2. In the address bar, enter:
   - A full URL (e.g., `https://www.example.com`)
   - A search query (e.g., `electron browser`)
3. Press Enter to navigate
4. Use the navigation buttons:
   - ← Back
   - → Forward
   - ↻ Reload

## Project Structure

```
freeze-browser/
├── index.html          # Main UI with toolbar and scripts
├── index.js            # Main Electron process
├── preload.js          # Preload script for secure IPC
├── package.json        # Project configuration and dependencies
├── TODO.md             # Development task list
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
