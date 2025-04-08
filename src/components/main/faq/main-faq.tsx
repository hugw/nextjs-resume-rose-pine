import { ChevronRight } from 'lucide-react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/shared/collapsible'
import { Faq } from 'content-collections'
import { Typography } from '@/components/shared/typography'

type MainFaqProps = {
  questions: Faq[]
}

export const MainFaq = ({ questions }: MainFaqProps) => {
  const sortedQuestions = questions.sort((a, b) => a.order - b.order)

  return (
    <div className="flex flex-col">
      {sortedQuestions.map((item, index) => (
        <div
          key={index}
          className="border-b-theme-border mb-theme-5x pb-theme-5x border-b last:border-b-0"
        >
          <Collapsible defaultOpen={index === 0}>
            <CollapsibleTrigger asChild>
              <div className="group flex cursor-pointer">
                <h3 className="flex-1 font-semibold">{item.question}</h3>
                <div className="rotate-0 group-data-[state=open]:rotate-90">
                  <ChevronRight
                    className="text-theme-muted h-6 w-6"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Typography
                content={item.html}
                className="prose-sm text-theme-subtle mt-theme-5x pr-theme-10x"
              />
            </CollapsibleContent>
          </Collapsible>
        </div>
      ))}
    </div>
  )
}
