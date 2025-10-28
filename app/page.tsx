import { AboutComponent } from "@/components/AboutComponent";
import { EducationSection } from "@/components/EducationSection";
import { HeaderComponent } from "@/components/HeaderComponent";
import ProjectsSection from "@/components/ProjectSection";
import ExperienceSection from "@/components/ExperienceSection";


export default function Home() {
  return (
    <div >
      <HeaderComponent/>
      <AboutComponent/>
      <EducationSection/>
      <ProjectsSection/>
      <ExperienceSection/>

    </div>
  );
}
