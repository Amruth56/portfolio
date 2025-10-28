import { AboutComponent } from "@/components/AboutComponent";
import { EducationSection } from "@/components/EducationSection";
import { HeaderComponent } from "@/components/HeaderComponent";
import ProjectsSection from "@/components/ProjectSection";


export default function Home() {
  return (
    <div >
      <HeaderComponent/>
      <AboutComponent/>
      <EducationSection/>
      <ProjectsSection/>

    </div>
  );
}
