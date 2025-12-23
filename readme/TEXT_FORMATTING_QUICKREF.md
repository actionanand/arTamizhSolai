# Text Formatting Quick Reference

## Syntax Overview

All formatting uses the pattern: `::formatType[parameter]{text}`

## Basic Formats

| Format | Syntax | Example |
|--------|--------|---------|
| **Bold** | `::bold{text}` | `::bold{Important}` |
| **Italic** | `::italic{text}` | `::italic{Emphasis}` |
| **Strikethrough** | `::strike{text}` | `::strike{Removed}` |

## Color Formats

| Format | Syntax | Example |
|--------|--------|---------|
| **Text Color** | `::color[value]{text}` | `::color[red]{Error}` |
| **Background** | `::bg[value]{text}` | `::bg[yellow]{Highlight}` |

### Color Values
- Named: `red`, `blue`, `green`, `yellow`, `orange`, `purple`, `pink`, etc.
- Hex: `#fff`, `#ff0000`, `#00ff00`
- RGB: `rgb(255,0,0)`
- RGBA: `rgba(255,0,0,0.5)`

## Font Weight

| Format | Syntax | Example |
|--------|--------|---------|
| **Weight** | `::weight[value]{text}` | `::weight[700]{Bold}` |

### Weight Values
- Named: `normal`, `bold`, `bolder`, `lighter`
- Numeric: `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`

## Text Alignment

| Format | Syntax | Example |
|--------|--------|---------|
| **Align** | `::align[value]{text}` | `::align[center]{Centered}` |

### Alignment Values
- `left` - Left aligned
- `center` - Center aligned
- `right` - Right aligned
- `justify` - Justified

## Combination Format

Combine multiple styles in one:

**Syntax:** `::combo[attr1:val1;attr2:val2]{text}`

### Available Attributes
- `bg` - Background color
- `color` - Text color
- `weight` - Font weight
- `align` - Text alignment
- `bold` - Set to `true` for bold
- `italic` - Set to `true` for italic
- `strike` - Set to `true` for strikethrough

### Examples
```
::combo[bg:yellow;color:red]{Text}
::combo[bg:#f0f0f0;color:#333;weight:bold]{Text}
::combo[color:blue;italic:true;weight:600]{Text}
```

## Common Patterns

### Status Indicators
```
::color[green]{✓ Success}
::color[orange]{⚠ Warning}
::color[red]{✗ Error}
```

### Highlighting
```
::bg[yellow]{Important note}
::bg[lightgreen]{Success message}
::bg[lightcoral]{Warning message}
```

### Call-out Boxes
```
::combo[bg:#e8f4f8;color:#0066cc;weight:bold]{Title}
::combo[bg:#f9f9f9;color:#333]{Content text}
```

### Centered Headers
```
::align[center]{::combo[weight:bold;color:#0066cc]{Heading}}
```

## Tips

1. ✓ Use sparingly for maximum impact
2. ✓ Maintain color consistency
3. ✓ Ensure good contrast (4.5:1 ratio)
4. ✓ Don't rely on color alone
5. ✗ Avoid over-formatting
6. ✗ Don't nest formats (use combo instead)

## See Also

- [Complete Text Formatting Guide](TEXT_FORMATTING_GUIDE.md)
- [Blog Post: Text Formatting Showcase](../src/content/2023-12-24-text-formatting-showcase.md)
