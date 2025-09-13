# Your Voice Feedback Application

A modern feedback platform built with Next.js and TypeScript. This project enables users to submit, view, and manage feedback with a clean and responsive UI.

## Features

- Submit feedback with text input
- View a list of feedback items
- Hashtag sidebar for filtering feedback
- Responsive design for desktop and mobile
- Modular and reusable component structure
- Custom React hooks for state management
- Centralized feedback store

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) (if used)
- [ESLint](https://eslint.org/) (for code quality)

## Project Structure

```
.
├── app/                # Next.js app directory (layout, pages, global styles)
├── components/         # Reusable React components
│   ├── feedback/       # Feedback-related UI components
│   └── sidebar/        # Sidebar and hashtag list components
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries (constants, helpers)
├── public/             # Static assets (images, icons)
├── service/            # Service functions (API calls, business logic)
├── store/              # State management (feedback store)
├── types/              # TypeScript types and interfaces
├── package.json
├── tsconfig.json
└── README.md
```

## Folder Highlights

- `app/` - Main app layout, global styles, and entry points
- `components/feedback/` - Feedback form, list, and item components
- `components/sidebar/` - Sidebar and hashtag list UI
- `hooks/` - Custom hooks for feedback logic
- `service/` - API service functions for fetching and posting feedback
- `store/` - Zustand store for feedback state management
- `types/` - TypeScript type definitions

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

[MIT](LICENSE)

**Developed by jacobferreras**
