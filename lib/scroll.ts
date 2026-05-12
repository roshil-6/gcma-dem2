export function scrollIntoViewSafe(
  element: Element,
  options: ScrollIntoViewOptions = { behavior: 'smooth', block: 'start' }
) {
  try {
    const result = element.scrollIntoView(options) as void | Promise<void>
    if (result && typeof (result as Promise<void>).catch === 'function') {
      void (result as Promise<void>).catch(() => {})
    }
  } catch {
    element.scrollIntoView()
  }
}
