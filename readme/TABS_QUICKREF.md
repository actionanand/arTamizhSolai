# Tabs Quick Reference

## Basic Syntax

```markdown
:::tabs
::tab[Title]{Content}
::tab[Title]{Content}
:::
```

## Examples

### Two Tabs
```markdown
:::tabs
::tab[Option A]{Description of option A}
::tab[Option B]{Description of option B}
:::
```

### Code Languages
```markdown
:::tabs
::tab[JavaScript]{const x = 10;}
::tab[Python]{x = 10}
::tab[Java]{int x = 10;}
:::
```

### Platforms
```markdown
:::tabs
::tab[Windows]{Install via .exe}
::tab[macOS]{Install via .dmg}
::tab[Linux]{Install via apt-get}
:::
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| **Click** | Switch to tab |
| **Arrow Left** | Previous tab |
| **Arrow Right** | Next tab |
| **Home** | First tab |
| **End** | Last tab |

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.tabs` | Main container |
| `.tabs__header` | Tab buttons area |
| `.tabs__tab` | Individual tab button |
| `.tabs__tab--active` | Active tab |
| `.tabs__content` | Content area |
| `.tabs__panel` | Individual panel |
| `.tabs__panel--active` | Active panel |

## Best Practices

✅ **Do:**
- Use 2-6 tabs
- Keep titles short
- Balance content length
- Order logically

❌ **Don't:**
- Use single tabs
- Create empty tabs
- Nest tabs
- Mix unrelated content

## Common Patterns

### Tutorial Steps
```markdown
:::tabs
::tab[Step 1]{Setup instructions}
::tab[Step 2]{Configuration}
::tab[Step 3]{Deployment}
:::
```

### API Docs
```markdown
:::tabs
::tab[Request]{POST /api/users}
::tab[Response]{200 OK with user data}
::tab[Errors]{400, 401, 500 codes}
:::
```

### Comparison
```markdown
:::tabs
::tab[Free]{Basic features}
::tab[Pro]{Advanced features}
::tab[Enterprise]{All features}
:::
```

## Responsive Behavior

- **Desktop**: Horizontal tabs
- **Mobile**: Vertical stack

## Accessibility

- Full keyboard support
- ARIA attributes
- Screen reader friendly
- Focus indicators

## See Also

- [Complete Tabs Guide](TABS_GUIDE.md)
- [Card Formatting](CARD_FORMATTING_QUICKREF.md)
- [Text Formatting](TEXT_FORMATTING_QUICKREF.md)

---

**Quick Start:**
```markdown
:::tabs
::tab[First]{Your first tab content}
::tab[Second]{Your second tab content}
:::
```
