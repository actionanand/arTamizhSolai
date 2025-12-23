# Text Formatting Guide

This guide explains how to use custom text formatting in your blog posts. The text formatting system allows you to style text with colors, backgrounds, font weights, alignments, and more using simple syntax.

## Overview

The text formatting feature uses a custom syntax with double colons (`::`) followed by a format type and parameters. This is processed by the `TextFormatPipe` which transforms your custom syntax into styled HTML.

## Basic Syntax

All formatting follows this pattern:
```
::formatType[parameter]{text to format}
```

For formats without parameters:
```
::formatType{text to format}
```

## Available Formats

### 1. Background Color

Add a background color to text.

**Syntax:** `::bg[color]{text}`

**Examples:**
```markdown
::bg[yellow]{This text has a yellow background}
::bg[#ffcccc]{This text has a custom pink background}
::bg[rgba(255,0,0,0.2)]{This text has a semi-transparent red background}
```

**Supported colors:**
- Named colors: `red`, `blue`, `green`, `yellow`, `orange`, `purple`, `pink`, `cyan`, etc.
- Hex colors: `#fff`, `#ff0000`, `#00ff00`
- RGB/RGBA: `rgb(255,0,0)`, `rgba(0,255,0,0.5)`

### 2. Text Color

Change the color of text.

**Syntax:** `::color[color]{text}`

**Examples:**
```markdown
::color[red]{This text is red}
::color[#0066cc]{This text is blue}
::color[rgba(0,128,0,0.8)]{This text is semi-transparent green}
```

### 3. Font Weight

Control the boldness/weight of text.

**Syntax:** `::weight[value]{text}`

**Examples:**
```markdown
::weight[bold]{This text is bold}
::weight[300]{This text is light}
::weight[700]{This text is bold (numeric)}
::weight[900]{This text is extra bold}
```

**Supported values:**
- Named: `normal`, `bold`, `bolder`, `lighter`
- Numeric: `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`

### 4. Text Alignment

Align text to left, center, right, or justify.

**Syntax:** `::align[direction]{text}`

**Examples:**
```markdown
::align[center]{This text is centered}
::align[right]{This text is right-aligned}
::align[justify]{This text is justified and will expand to fill the available width}
```

**Supported values:** `left`, `center`, `right`, `justify`

### 5. Bold

Make text bold (shorthand).

**Syntax:** `::bold{text}`

**Example:**
```markdown
::bold{This text is bold}
```

### 6. Italic

Make text italic.

**Syntax:** `::italic{text}`

**Example:**
```markdown
::italic{This text is italic}
```

### 7. Strikethrough

Add a line through text.

**Syntax:** `::strike{text}`

**Example:**
```markdown
::strike{This text is crossed out}
```

### 8. Combination Format

Apply multiple formatting styles at once.

**Syntax:** `::combo[attr1:val1;attr2:val2;...]{text}`

**Available attributes:**
- `bg`: Background color
- `color`: Text color
- `weight`: Font weight
- `align`: Text alignment
- `bold`: `true` for bold
- `italic`: `true` for italic
- `strike`: `true` for strikethrough

**Examples:**
```markdown
::combo[bg:yellow;color:red]{Yellow background with red text}
::combo[bg:#f0f0f0;color:#333;weight:bold]{Complex styled text}
::combo[color:blue;italic:true;weight:600]{Blue italic semi-bold text}
::combo[bg:lightgreen;align:center]{Centered text with light green background}
```

## Complete Examples

### Example 1: Highlighting Important Information
```markdown
This is normal text, but ::bg[yellow]{this part is highlighted} for emphasis.
```

### Example 2: Color-Coded Status
```markdown
Status: ::color[green]{Active} | ::color[orange]{Pending} | ::color[red]{Inactive}
```

### Example 3: Mixed Formatting
```markdown
The ::bold{quick} ::color[brown]{brown} ::italic{fox} jumps over the ::strike{lazy} energetic dog.
```

### Example 4: Styled Headings
```markdown
## ::align[center]{Welcome to My Blog}

::align[center]{::color[#666]{A journey through code and creativity}}
```

### Example 5: Call-Out Box Effect
```markdown
::combo[bg:#e8f4f8;color:#0066cc;weight:bold;align:center]{🎉 Special Announcement 🎉}

::combo[bg:#f9f9f9;color:#333]{This is an important update about our services.}
```

### Example 6: Feature Comparison
```markdown
| Feature | Status |
|---------|--------|
| Dark Mode | ::color[green]{✓ Available} |
| Mobile App | ::color[orange]{⚠ Coming Soon} |
| API Access | ::color[red]{✗ Not Available} |
```

## Best Practices

### 1. Don't Overuse
Use formatting sparingly for emphasis. Too much formatting can make content hard to read.

**Good:**
```markdown
The ::bold{most important} thing to remember is...
```

**Avoid:**
```markdown
::color[red]{The} ::color[blue]{most} ::color[green]{important} ::color[yellow]{thing}...
```

### 2. Ensure Contrast
Make sure text colors have sufficient contrast with backgrounds for readability.

**Good:**
```markdown
::combo[bg:darkblue;color:white]{High contrast text}
```

**Avoid:**
```markdown
::combo[bg:yellow;color:lightyellow]{Low contrast text}
```

### 3. Be Consistent
Use consistent colors and styles for similar types of content.

**Good:**
```markdown
::color[green]{Success message}
::color[green]{Another success message}
```

### 4. Test Readability
Always preview your formatted text to ensure it looks good and is readable.

### 5. Semantic Meaning
Use colors and formatting to convey meaning, not just decoration.

**Good:**
```markdown
Status: ::color[green]{Active} - ::color[red]{Critical}
```

## Nesting Limitations

Currently, you cannot nest formatting tags. Each formatting applies to a single piece of text.

**This works:**
```markdown
::bold{This is bold} and ::italic{this is italic}
```

**This doesn't work:**
```markdown
::bold{This is ::color[red]{bold and red}}
```

**Instead, use combo:**
```markdown
::combo[weight:bold;color:red]{This is bold and red}
```

## Accessibility Considerations

1. **Color alone**: Don't rely solely on color to convey information. Use icons or text labels too.
   ```markdown
   ::color[green]{✓ Success} - Good
   ::color[green]{} - Bad (no context)
   ```

2. **Contrast ratios**: Maintain WCAG compliant contrast ratios (at least 4.5:1 for normal text).

3. **Strikethrough**: Provide context when using strikethrough.
   ```markdown
   Price: ::strike{$99.99} ::bold{$49.99} (50% off!)
   ```

## Technical Implementation

The formatting is implemented using:
- **TextFormatPipe**: Angular pipe that transforms custom syntax to HTML
- **CSS classes**: For alignment and structural styling
- **Inline styles**: For dynamic colors and weights
- **Sanitization**: All color and weight values are sanitized for security

## Troubleshooting

### Formatting Not Appearing
1. Make sure the pipe is imported in your component
2. Check that the syntax is correct (double colons, proper brackets)
3. Verify there are no typos in the format name

### Colors Not Working
1. Ensure color names are spelled correctly
2. Check hex colors start with `#`
3. Verify RGB/RGBA syntax is correct

### Alignment Not Working
1. Alignment creates block-level elements, so it works best on separate lines
2. Check the alignment value is valid (`left`, `center`, `right`, `justify`)

## Examples in Action

See the blog post "Text Formatting Showcase" for live examples of all formatting options.

## Summary

The text formatting system provides powerful styling options while maintaining simplicity:
- 🎨 **Colors**: Background and text colors
- 📝 **Text styles**: Bold, italic, strikethrough
- ⚖️ **Weight**: Control font thickness
- 📐 **Alignment**: Left, center, right, justify
- 🎯 **Combo**: Combine multiple styles

Use these tools to make your blog posts more engaging and easier to read!
