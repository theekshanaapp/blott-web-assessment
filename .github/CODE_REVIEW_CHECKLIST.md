# Code Review Checklist

**Mandatory checks for every PR. Block merge if any item fails.**

## 🖥️ Rendering Model

- [ ] No unnecessary `"use client"` directives
- [ ] Server Components used for data fetching
- [ ] Client Components only for interactivity/hooks
- [ ] Client components are leaf nodes when possible
- [ ] Suspense boundaries used for async server components

## 📊 Data Ownership

- [ ] No duplicate data fetching
- [ ] Server data passed as props (not re-fetched in client)
- [ ] State in lowest common ancestor
- [ ] No prop drilling beyond 3 levels
- [ ] Context used appropriately (not overused)

## ⚠️ Error & Empty States

- [ ] All async operations have error handling
- [ ] Empty states handled for all lists/collections
- [ ] User-friendly error messages (not technical jargon)
- [ ] Error boundaries in place for client components
- [ ] Loading states match loaded state structure

## 🏗️ State Hierarchy

- [ ] UI state in component (not lifted unnecessarily)
- [ ] Shared state in Context (not global state)
- [ ] Server state in Server Components
- [ ] State location documented/commented
- [ ] No state in wrong location

## ♿ Accessibility

- [ ] All interactive elements keyboard accessible
- [ ] ARIA labels on icon-only buttons
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA
- [ ] Semantic HTML used correctly
- [ ] Screen reader tested (for new interactive components)

## ⚡ Performance

- [ ] List items memoized with `React.memo`
- [ ] Images use Next.js `Image` component
- [ ] No large bundles (>100KB gzipped per route)
- [ ] Code splitting for heavy components
- [ ] No unnecessary re-renders
- [ ] `useMemo`/`useCallback` used appropriately

## 🎨 Design System

- [ ] Uses design tokens (no magic numbers)
- [ ] No inline styles (except CSS limitations)
- [ ] Uses primitives where applicable
- [ ] Responsive without breakpoint hacks
- [ ] Follows component boundaries (primitives → patterns → features)

## 📝 Code Quality

- [ ] TypeScript types (no `any`)
- [ ] ESLint passes
- [ ] No console.logs in production code
- [ ] Comments explain "why" not "what"
- [ ] Component APIs documented

---

**Reviewer Action:**
- ✅ Approve if all checks pass
- ❌ Request changes if any check fails
- 💬 Comment if clarification needed
