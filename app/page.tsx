import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { ProjectsCarousel } from "./components/ProjectsCarousel";
import { Services } from "./components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Services />
      <ProjectsCarousel />
    </>
  );
}
