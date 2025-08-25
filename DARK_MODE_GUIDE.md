# Dark Mode Control Guide

## New CSS Variables System

I've implemented a cleaner dark mode system using CSS custom properties (variables) that gives you much better control over colors.

### CSS Variables Available

Located in `src/assets/base.scss`:

```scss
:root {
  /* Light mode colors */
  --text-primary: #2c3e50;      /* Main text */
  --text-secondary: #495057;    /* Secondary text */
  --text-muted: #6c757d;        /* Muted text */
  --bg-primary: #ffffff;        /* Primary background */
  --bg-secondary: #f8f9fa;      /* Secondary background */
  --icon-color: #495057;        /* Icon colors */
  --skill-bg: rgba(248, 249, 250, 0.5); /* Skill item backgrounds */
}

.night-mode-wrapper {
  /* Dark mode colors - automatically applied when toggle is on */
  --text-primary: #f8f9fa;      /* Main text - bright white */
  --text-secondary: #e9ecef;    /* Secondary text - light grey */
  --text-muted: #dee2e6;        /* Muted text - medium grey */
  --bg-primary: #333;           /* Primary background - dark grey */
  --bg-secondary: #444;         /* Secondary background - lighter dark grey */
  --icon-color: #f8f9fa;        /* Icon colors - bright white */
  --skill-bg: #333;             /* Skill item backgrounds - dark */
}
```

## How to Use

### In Component Styles
Instead of hardcoded colors, use the CSS variables:

```scss
.my-element {
  color: var(--text-primary);     /* Will be dark in light mode, white in dark mode */
  background: var(--bg-secondary); /* Will adapt automatically */
}
```

### Adding New Colors
To add a new color that changes with dark mode:

1. Add it to both `:root` and `.night-mode-wrapper` in `base.scss`
2. Use `var(--your-color-name)` in your components

### Special Cases

#### Eric Tarter Name (Always Dark Grey)
```scss
.bio-personal h1 {
  color: #495057 !important; /* Fixed color, doesn't change */
}
```

#### Vue Icons (SVG Components)
```scss
:deep(.skill-icon svg) {
  color: var(--icon-color) !important;
  fill: var(--icon-color) !important;
}
```

## Benefits of This System

1. **Centralized Control**: All dark mode colors defined in one place
2. **Consistent**: All components use the same color scheme
3. **Maintainable**: Easy to adjust colors globally
4. **No Conflicts**: Removed automatic `prefers-color-scheme` detection
5. **Better Vue Icon Support**: Proper SVG targeting with `:deep()` selectors

## Making Changes

### To adjust dark mode colors:
Edit the CSS variables in `src/assets/base.scss` under `.night-mode-wrapper`

### To add dark mode to a new component:
Use `var(--variable-name)` instead of hardcoded colors

### To override specific elements:
Use `:global(.night-mode-wrapper)` for targeting dark mode specifically

## Fixed Issues

- ✅ Vue icon components now change color properly in dark mode
- ✅ Eric Tarter name stays dark grey in both modes
- ✅ Consistent text contrast across all components
- ✅ No more conflicting CSS selectors
- ✅ Better maintainability with CSS variables
