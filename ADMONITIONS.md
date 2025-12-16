# Admonitions / Callouts

Admonitions are special content blocks used to highlight important information, warnings, tips, and other notice-type content in your markdown blog posts.

## Syntax

All admonitions follow this basic syntax:

```markdown
:::type[Optional Custom Title]
Your content here.
Can span multiple lines.
:::
```

## Available Types

### 1. **tip** - Helpful Tips
Use for helpful hints and suggestions.

```markdown
:::tip[Pro Tip]
This is a helpful tip that readers might find useful.
:::
```

### 2. **info** - Information
Use for general information and clarifications.

```markdown
:::info[Note]
This is informational content.
:::
```

### 3. **note** - Important Notes
Use for important notes and reminders.

```markdown
:::note[Important]
This is important information you don't want readers to miss.
:::
```

### 4. **success** - Success Messages
Use to highlight successful outcomes or positive results.

```markdown
:::success[Great!]
This task was completed successfully.
:::
```

### 5. **warning** - Warnings
Use to alert readers about potential issues.

```markdown
:::warning[Watch Out]
This might cause issues if not done correctly.
:::
```

### 6. **danger** - Danger / Critical
Use for critical warnings and important safety notices.

```markdown
:::danger[Critical]
Do not do this or serious problems will occur.
:::
```

### 7. **caution** - Caution
Use for cautionary messages and potential pitfalls.

```markdown
:::caution[Be Careful]
This requires careful attention to detail.
:::
```

### 8. **collapse** - Collapsible Content
Use to create expandable/collapsible sections.

```markdown
:::collapse[Click to expand]
This content is hidden by default and can be expanded by clicking.
:::
```

## Examples

### Basic Tip
```markdown
:::tip
Always test your changes before deploying.
:::
```

### Custom Title
```markdown
:::warning[Security Note]
Make sure to sanitize user inputs to prevent XSS attacks.
:::
```

### Multi-line Content
```markdown
:::info[Installation Steps]
1. Install dependencies with `npm install`
2. Run development server with `npm run dev`
3. Open browser to localhost:5173
:::
```

### Collapsible Section
```markdown
:::collapse[Advanced Configuration]
These are advanced settings for experienced users:
- Setting A: Controls behavior X
- Setting B: Controls behavior Y
- Setting C: Controls behavior Z
:::
```

## Default Titles

If no custom title is provided, default titles are used:

- `tip` → "Tip"
- `info` → "Info"
- `note` → "Note"
- `success` → "Success"
- `warning` → "Warning"
- `danger` → "Danger"
- `caution` → "Caution"
- `collapse` → "Details"

## Styling

Each admonition type has a unique color scheme and icon:

- **Tip**: Blue background with light bulb icon
- **Info**: Blue background with info circle icon
- **Note**: Gray background with note icon
- **Success**: Green background with checkmark icon
- **Warning**: Yellow background with warning triangle icon
- **Danger**: Red background with exclamation icon
- **Caution**: Red background with caution icon
- **Collapse**: Purple background with expandable details

All admonitions have accompanying icons for visual identification.

## Tips for Usage

1. Use `tip` for helpful shortcuts and best practices
2. Use `warning` and `danger` to prevent user errors
3. Use `info` for clarifications and additional context
4. Use `collapse` for optional or advanced information
5. Keep content concise but informative
6. Use markdown formatting within admonitions (bold, italic, code blocks, etc.)

## Features

- **Icons**: Each admonition type has a unique SVG icon
- **Responsive**: Admonitions are fully responsive and mobile-friendly
- **Customizable Titles**: Override default titles with your own text in square brackets
- **Collapsible**: The `collapse` type creates interactive expandable sections with smooth animations
- **Markdown Support**: Basic markdown formatting works within admonition content
