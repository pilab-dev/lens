# AGENTS.md - Lens Monorepo Development Guide

## Build, Lint, and Test Commands

### Installation & Setup
```bash
pnpm install                    # Install all dependencies
pnpm run all:install          # Full reinstall (cleans node_modules)
```

### Build Commands
```bash
pnpm run build                 # Build all packages
pnpm run build:app            # Build the Lens application
pnpm run dev                  # Development build with watch mode
pnpm run start                # Start development server
pnpm run clean                # Clean all build artifacts
```

### Lint Commands
```bash
pnpm run lint                 # Lint all packages (lerna run lint)
pnpm run lint:fix             # Auto-fix linting issues
```

### Test Commands
```bash
pnpm run test:unit            # Run unit tests across all packages
pnpm run test:unit:watch     # Run tests in watch mode
pnpm run test:integration     # Run integration tests
```

**Running a single test:**
```bash
# From root, run jest in watch mode
pnpm run test:unit:watch

# Or run jest directly for a specific file/pattern
pnpx jest --watch --testPathPattern="packages/your-package"
```

### Code Style Guidelines

#### General
- This is a **monorepo** using Lerna with pnpm workspaces
- Packages are located in `packages/` and `open-lens/`
- Each package has its own `package.json`, `tsconfig.json`, and often `jest.config.js`
- React 17 is used (overridden in root package.json)

#### TypeScript
- Strict mode enabled (`"strict": true` in tsconfig.json)
- Use explicit types; avoid `any`
- Use `importsNotUsedAsValues: "error"` (only import types with `import type`)
- Target ES2019, Module ES2022

#### ESLint Configuration
The project uses `@openlens/eslint-config` which extends:
- `plugin:@typescript-eslint/recommended`
- `react-app` + `react-app/jest`
- `airbnb-typescript`
- `prettier`
- Security and XSS plugins

#### Formatting (Prettier)
- **Print width:** 120 characters
- **Tab width:** 2 spaces (no tabs)
- **Quotes:** Double quotes (`"`) - single quotes only when escaping
- **Trailing commas:** All
- **Semicolons:** Yes
- **Arrow functions:** Always wrap in parentheses (`(x) => x`)

#### Naming Conventions
- **Files:** PascalCase for components/classes, kebab-case for utilities
- **Classes:** PascalCase
- **Functions/variables:** camelCase
- **Interfaces:** PascalCase (no "I" prefix)
- **Constants:** SCREAMING_SNAKE_CASE

#### Imports
- Use `import type { Foo }` for type-only imports
- Sort imports using `simple-import-sort` (configured in ESLint)
- Do not use file extensions in imports

#### Code Style Rules
- **Curly braces:** Required for all control structures
- **No for-in loops:** Use `Object.keys()`, `Object.values()`, or `Object.entries()`
- **No `with` statements:** Disallowed in strict mode
- **Object shorthand:** Required (`{ foo }` not `{ foo: foo }`)
- **Template literals:** Required over string concatenation

#### React Specific
- Use React Hooks (`rules-of-hooks` enforced)
- JSX files can have `.tsx` extension
- PropTypes are not required (disabled)

#### Error Handling
- Use proper async/await with try-catch for async operations
- Enable `no-floating-promises` rule awareness
- Always handle promise rejections

#### Testing
- Jest is the test runner
- React Testing Library for component tests
- Test files are co-located: `*.test.ts` or `*.test.tsx` next to source files

## Package Structure

```
packages/
  core/                 # Main Lens core
  extension-api/        # Extension API
  infrastructure/       # Build tools, configs (jest, webpack, eslint, typescript)
  technical-features/  # Feature modules (messaging, application, etc.)
  ui-components/       # React UI components
  utility-features/    # Utility packages
open-lens/             # The main Electron application
```

## Common Tasks

### Adding a new package
1. Create directory in `packages/`
2. Add `package.json`, `tsconfig.json`, `jest.config.js`
3. Add to workspace in root `package.json`
4. Run `pnpm install` to link

### Running a specific package
```bash
pnpm run build -- --scope @openlens/package-name
pnpm run test:unit -- --scope @openlens/package-name
```
