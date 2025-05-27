# Facebook Messenger Bot with Gemini AI Integration

A Node.js-based Facebook Messenger bot that integrates with **Google Gemini AI** for intelligent responses. Supports dynamic command handling, modular structure, and real-time messaging via Facebook's Graph API.

---

## Features

- **Gemini AI Integration**  
  Uses Google Gemini to generate intelligent, human-like responses.

- **Prefix-Based Commands**  
  Custom commands triggered with a prefix (e.g., `-animequote`, `-help`).

- **Modular Command System**  
  Easily add commands in the `commands/` directory.

- **Dynamic Command Loading**  
  Auto-loads all `.js` command files including from subfolders.

- **SQLite Logging**  
  Logs user queries and responses to a local SQLite database.

- **Messenger Platform Integration**  
  Sends and receives messages via the Facebook Graph API.

---

## Demo

Example command:  
`-animequote`  
*Returns a random inspirational anime quote using Gemini AI.*

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Horror-king/Yau-5-messenger-page-bot.git
cd facebook-messenger-gemini-bot
