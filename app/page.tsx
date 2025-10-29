import { AboutComponent } from "@/components/AboutComponent";
import { EducationSection } from "@/components/EducationSection";
import { HeaderComponent } from "@/components/HeaderComponent";
import ProjectsSection from "@/components/ProjectSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import TechStackSection from "@/components/TechStackSection";


export default function Home() {
  return (
    <div >
      <HeaderComponent/>
      <AboutComponent/>
      <TechStackSection/>
      <EducationSection/>
      <ProjectsSection/>
      <ExperienceSection/>
      <ContactSection/>

    </div>
  );
}
