import { ProfileHeader } from "@/components/profile-header"
import { SocialLinks } from "@/components/social-links"
import { ProjectLinks } from "@/components/project-links"

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <ProfileHeader />
        <SocialLinks />
        <ProjectLinks />
      </div>
    </main>
  )
}
