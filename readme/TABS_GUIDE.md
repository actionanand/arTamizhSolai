# Tabs Guide

## Overview

The Tabs system allows you to create interactive tabbed content in your markdown files, similar to Docusaurus. Perfect for organizing related content, code examples in different languages, platform-specific instructions, or any content that benefits from a tabbed interface.

## Basic Syntax

The tabs feature uses a container syntax with individual tab items:

```markdown
:::tabs
::tab[Tab Title 1]{Content for the first tab}
::tab[Tab Title 2]{Content for the second tab}
::tab[Tab Title 3]{Content for the third tab}
:::
```

## Simple Example

```markdown
:::tabs
::tab[Overview]{This is the overview section with general information about the topic.}
::tab[Details]{Here are the detailed explanations and in-depth information.}
::tab[Examples]{Check out these practical examples and use cases.}
:::
```

## Common Use Cases

### 1. Code Examples in Different Languages

Perfect for showing the same functionality in multiple programming languages:

```markdown
:::tabs
::tab[JavaScript]{const greeting = 'Hello, World!'; console.log(greeting);}
::tab[Python]{greeting = 'Hello, World!' print(greeting)}
::tab[Java]{String greeting = "Hello, World!"; System.out.println(greeting);}
::tab[Ruby]{greeting = 'Hello, World!' puts greeting}
:::
```

### 2. Platform-Specific Instructions

Show installation or setup instructions for different operating systems:

```markdown
:::tabs
::tab[Windows]{Download the .exe installer and run it. Follow the installation wizard to complete setup.}
::tab[macOS]{Use Homebrew: brew install package-name, or download the .dmg file from our website.}
::tab[Linux]{Use apt-get: sudo apt-get install package-name, or build from source.}
:::
```

### 3. Framework Comparisons

Compare implementations across different frameworks:

```markdown
:::tabs
::tab[React]{function Component() { return <div>Hello World</div>; }}
::tab[Vue]{<template><div>Hello World</div></template>}
::tab[Angular]{@Component({ template: '<div>Hello World</div>' }) export class AppComponent {}}
:::
```

### 4. Before and After Examples

Show the difference between old and new approaches:

```markdown
:::tabs
::tab[Before]{The old implementation was verbose and hard to maintain with lots of boilerplate code.}
::tab[After]{The new approach is clean, concise, and follows modern best practices with minimal code.}
:::
```

### 5. Feature Comparison

Compare different options or plans:

```markdown
:::tabs
::tab[Free Plan]{Basic features: 5 projects, 100MB storage, Community support}
::tab[Pro Plan]{Everything in Free plus: Unlimited projects, 10GB storage, Email support, Priority processing}
::tab[Enterprise]{Everything in Pro plus: Custom storage, 24/7 phone support, SLA guarantee, Dedicated account manager}
:::
```

### 6. Tutorial Steps

Break down complex processes into manageable steps:

```markdown
:::tabs
::tab[Step 1: Setup]{Install the required dependencies and initialize your project configuration.}
::tab[Step 2: Configure]{Set up your environment variables and configuration files according to your needs.}
::tab[Step 3: Build]{Run the build command and verify that everything compiles without errors.}
::tab[Step 4: Deploy]{Deploy your application to production and monitor for any issues.}
:::
```

## Features

### Interactive Switching
- Click any tab to view its content
- Only one tab is active at a time
- Smooth transitions between tabs
- Visual feedback on hover and active states

### Keyboard Navigation
- Use **Arrow Left** and **Arrow Right** to navigate between tabs
- Press **Home** to jump to the first tab
- Press **End** to jump to the last tab
- Fully keyboard accessible for better usability

### Responsive Design
- Desktop: Horizontal tabs with equal width
- Mobile: Vertical stacked tabs for better touch interaction
- Adapts to different screen sizes automatically

### Accessibility
- Proper ARIA attributes for screen readers
- Keyboard navigation support
- Focus indicators for keyboard users
- Semantic HTML structure

### Visual Styling
- Clean, professional design
- Active tab highlighting with bottom border
- Smooth fade-in animation when switching
- Hover effects for better interactivity
- Dark mode support

## Styling Variants

### Default Tabs
Standard horizontal tabs with subtle styling:

```markdown
:::tabs
::tab[Tab 1]{Content 1}
::tab[Tab 2]{Content 2}
:::
```

### Compact Tabs (Future Enhancement)
Smaller padding for tighter layouts:

```html
<div class="tabs tabs--compact">
  <!-- tabs content -->
</div>
```

### Bordered Tabs (Future Enhancement)
Colored border for emphasis:

```html
<div class="tabs tabs--bordered">
  <!-- tabs content -->
</div>
```

### Pills Tabs (Future Enhancement)
Rounded pill-style tabs:

```html
<div class="tabs tabs--pills">
  <!-- tabs content -->
</div>
```

## Best Practices

### 1. Keep Tab Titles Concise
✅ **Good:** `::tab[JavaScript]{...}`
❌ **Avoid:** `::tab[JavaScript Implementation Example]{...}`

### 2. Use 2-6 Tabs
- Too few tabs (1): No benefit from tabs
- Optimal: 2-6 tabs for easy navigation
- Too many (7+): Consider alternative organization

### 3. Balance Content Length
- Keep tab content relatively similar in length
- Avoid one very long tab and several short ones
- Split very long content into separate sections

### 4. Logical Organization
- Group related content together
- Use consistent ordering (alphabetical, by difficulty, etc.)
- Put the most common/important tab first

### 5. Clear Tab Labels
- Use descriptive but brief labels
- Make the content purpose obvious
- Avoid ambiguous titles

## Accessibility Guidelines

### For Content Creators
1. **Use descriptive tab titles** that clearly indicate content
2. **Order tabs logically** from most to least important
3. **Ensure all tabs have content** - no empty tabs
4. **Keep content self-contained** within each tab

### For Users
1. **Mouse users**: Click any tab to view its content
2. **Keyboard users**: Tab to focus, arrows to navigate, Enter to select
3. **Screen reader users**: Tabs are announced with proper roles and states

## Technical Details

### HTML Structure
```html
<div class="tabs" id="tab-group-1" role="tablist">
  <div class="tabs__header">
    <button class="tabs__tab tabs__tab--active" role="tab" aria-selected="true">Tab 1</button>
    <button class="tabs__tab" role="tab" aria-selected="false">Tab 2</button>
  </div>
  <div class="tabs__content">
    <div class="tabs__panel tabs__panel--active" role="tabpanel">Content 1</div>
    <div class="tabs__panel" role="tabpanel">Content 2</div>
  </div>
</div>
```

### CSS Classes
- `.tabs` - Main container
- `.tabs__header` - Tab buttons container
- `.tabs__tab` - Individual tab button
- `.tabs__tab--active` - Active tab state
- `.tabs__content` - Panels container
- `.tabs__panel` - Individual content panel
- `.tabs__panel--active` - Active panel state

### JavaScript API
```typescript
// Switch to a specific tab
window.switchTab(event, 'tab-group-1', 2);

// Initialize all tabs (called automatically)
initializeTabs();
```

## Combining with Other Features

Tabs work seamlessly with other markdown features:

### With Text Formatting
```markdown
:::tabs
::tab[Bold]{This is ::bold{bold text} in a tab}
::tab[Color]{This is ::color[red]{colored text} in a tab}
:::
```

### With Card Formatting
```markdown
:::tabs
::tab[Quote]{::quote[Einstein]{Imagination is more important than knowledge.}}
::tab[Verse]{::verse[Bhagavad Gita]{Knowledge is the light that dispels darkness.}}
:::
```

### With Lists
```markdown
:::tabs
::tab[Features]{• Feature 1 • Feature 2 • Feature 3}
::tab[Benefits]{1. Benefit one 2. Benefit two 3. Benefit three}
:::
```

## Examples Gallery

### Product Features

```markdown
:::tabs
::tab[Features]{Our product includes real-time collaboration, cloud storage, version control, and automated backups.}
::tab[Pricing]{Starting at $9/month for individuals, $29/month for teams, and custom pricing for enterprise.}
::tab[Support]{24/7 email support, live chat during business hours, comprehensive documentation, and video tutorials.}
:::
```

### API Documentation

```markdown
:::tabs
::tab[Request]{POST /api/users - Create a new user with name, email, and password in JSON body.}
::tab[Response]{Returns 201 Created with user object including id, name, email, and created_at timestamp.}
::tab[Errors]{400 Bad Request for validation errors, 409 Conflict if email exists, 500 for server errors.}
:::
```

### Configuration Options

```markdown
:::tabs
::tab[Development]{Debug mode enabled, hot reload active, source maps included, verbose logging.}
::tab[Production]{Minified code, caching enabled, error tracking, performance monitoring, optimized assets.}
::tab[Testing]{Mock data, isolated environment, code coverage, automated tests, CI/CD integration.}
:::
```

## Troubleshooting

### Tabs Not Appearing
- Ensure the tabs pipe is imported in your component
- Check that the syntax is correct (:::tabs and :::)
- Verify tabs.css is imported in your global styles

### Tabs Not Switching
- Make sure tabs-helper.ts is imported in your app
- Check browser console for JavaScript errors
- Verify onclick handlers are properly bound

### Styling Issues
- Confirm tabs.css is loaded
- Check for CSS conflicts with other styles
- Verify dark mode media query is working

## Performance Considerations

- Tabs are rendered on page load
- Only the active panel is visible (others are hidden with CSS)
- No lazy loading - all content loads upfront
- Minimal JavaScript overhead
- Smooth animations use CSS transitions

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential features for future versions:
- Persistent tab selection (remembers choice)
- URL hash navigation (#tab-name)
- Lazy loading of tab content
- Nested tabs support
- Tab groups synchronization
- Custom icons in tabs
- Vertical tabs orientation
- Collapsible tabs on mobile

## Related Documentation

- [Text Formatting Guide](TEXT_FORMATTING_GUIDE.md) - Text styling options
- [Card Formatting Guide](CARD_FORMATTING_GUIDE.md) - Card and quote styles
- [Code Examples Guide](CODE_EXAMPLES_GUIDE.md) - Code block formatting
- [Admonitions Guide](ADMONITIONS.md) - Alert and callout boxes

## Quick Reference

### Basic Tabs
```markdown
:::tabs
::tab[Title 1]{Content 1}
::tab[Title 2]{Content 2}
:::
```

### Multiple Tabs
```markdown
:::tabs
::tab[Tab A]{Content A}
::tab[Tab B]{Content B}
::tab[Tab C]{Content C}
::tab[Tab D]{Content D}
:::
```

### Keyboard Shortcuts
- **Arrow Left/Right**: Navigate tabs
- **Home**: First tab
- **End**: Last tab
- **Tab**: Focus next element
- **Shift + Tab**: Focus previous element

---

**Pro Tip:** Use tabs to reduce cognitive load by organizing related content that users might want to compare or choose between. They're perfect for "choose your own adventure" style documentation!

Happy tabbing! 📑✨
