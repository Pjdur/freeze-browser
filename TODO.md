# TODO: Add Webview to Electron Browser App with IPC and Electron Builder

- [x] Add `<webview>` element to `index.html` below the input field, with initial src set to a default (e.g., about:blank or a homepage like https://www.google.com).
- [x] Update CSS in `index.html` to create a full-screen layout: top toolbar with input, webview filling remaining space. Improve input styling with padding, border-radius, focus effects, and modern aesthetics (e.g., shadows, gradients).
- [x] Add JavaScript to `index.html` for input handling: Attach 'keydown' event listener to input for Enter key. Check if input is a URL (starts with http/https), else treat as search query (prepend Google search URL). Set webview src accordingly, clear input after loading, and add basic error handling (e.g., alert on load failure).
- [x] Test the app by running `npm start` to verify webview loads content from input, styling looks good, and functionality works (e.g., URL loading, search queries).
- [x] Refactor to use BrowserView in main process (index.js) for better security, controlled via IPC from renderer.
- [x] Update renderer (index.html) to use IPC to send load requests to main process instead of direct webview manipulation.
- [x] Add electron-builder to package.json for installable builds, update scripts and config.
- [x] Install electron-builder dependency.
- [ ] Test IPC integration and build process.
- [ ] Handle edge cases: Invalid URLs, loading states, responsiveness for different window sizes.
