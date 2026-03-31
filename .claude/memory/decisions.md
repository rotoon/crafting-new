# Key Decisions & Architecture

## Design Decisions
| Decision | Rationale |
|----------|-----------|
| Custom CSS over Tailwind | Full design control, luxury aesthetic requirements |
| Client-side only components | Interactive features (scroll, animations, counters) |
| Parallax on Hero section | Visual engagement and modern feel |
| Intersection Observer pattern | Performance-optimized animations |
| Canvas for dot pattern | Responsive, dynamic visual element |

## Architecture Patterns
- **Component Structure:** Functional components with hooks
- **State Management:** Local useState/useRef (no Redux/Zustand needed)
- **Animation:** CSS transitions + JS scroll/intersection handlers
- **Image Optimization:** Next.js Image component with priority hints

## Development Approach
- TypeScript strict mode enabled
- No external component libraries
- Pure React patterns
- Custom styling system
