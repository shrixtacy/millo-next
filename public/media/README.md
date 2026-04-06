# Media Folder

Drop all brand assets here. They'll be accessible at `/media/filename` in the app.

## Recommended structure

```
public/media/
├── hero/           → Hero section background, hero product shots
├── products/       → Product images (use these as fallbacks or static shots)
├── team/           → Team member photos
├── brand/          → Logo files, icons, brand assets
└── about/          → About page images (farm photos, factory, etc.)
```

## Usage in code

```tsx
// In any component:
<Image src="/media/hero/hero-bg.jpg" alt="..." fill />
<Image src="/media/team/ashutosh.jpg" alt="Ashutosh Patra" width={200} height={200} />
```

## Supported formats
- Images: .jpg, .jpeg, .png, .webp (webp preferred for performance)
- Videos: .mp4, .webm
- SVG: .svg

## Tips
- Keep product images square (1:1) at minimum 800×800px
- Team photos work best at 400×400px square
- Hero images should be at least 1920×1080px
- Use .webp format for best performance
