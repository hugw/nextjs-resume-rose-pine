import { cn } from '../../utils/cn'

export const Typography = ({
  content,
  className,
}: {
  content: string
  className?: string
}) => {
  return (
    <div
      className={cn(
        'prose-a:text-theme-accent prose-a:no-underline prose-a:transition-all prose-a:duration-200 prose-a:hover:text-theme-text',
        'prose-strong:text-theme-text prose-strong:font-bold',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
