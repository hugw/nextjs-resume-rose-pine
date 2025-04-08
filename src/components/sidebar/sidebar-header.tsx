import { Basics } from 'content-collections'
import Image from 'next/image'

type SidebarHeaderProps = {
  profile: Basics['profile']
  labels: Basics['labels']
}

export const SidebarHeader = ({ profile, labels }: SidebarHeaderProps) => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <div className="theme-pulse-border border-theme-border/50 mb-theme-5x md:mb-theme-10x w-[150px] overflow-hidden rounded-full border-4">
        <div className="border-theme-border w-full overflow-hidden rounded-full border-4">
          <Image
            src="/avatar.jpg"
            alt={profile.name}
            width={150}
            height={150}
          />
        </div>
      </div>
      <p
        className="from-theme-secondary to-theme-secondary/90 text-theme-highlight-low mb-theme-1x p-theme-2x text-theme-sm cursor-default rounded-full rounded-bl-none bg-gradient-to-r py-1"
        dangerouslySetInnerHTML={{ __html: labels.hello }}
      />

      <h1 className="text-theme-text text-theme-4xl font-black tracking-tight">
        {profile.name}
      </h1>
      <h2 className="text-theme-subtle pt-theme-1x text-theme-xl font-bold tracking-tight">
        {profile.role}
      </h2>
      {profile.headline && (
        <p className="text-theme-subtle pt-theme-5x tracking-[-0.5px]">
          {profile.headline}
        </p>
      )}
    </div>
  )
}
