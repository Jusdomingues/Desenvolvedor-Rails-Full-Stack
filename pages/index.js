import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import RecipeCard from '../components/recipeCard/recipeCard';

export default function Index(){
  return (
    <div>
      <Header title="AR.UNA.S" />

      <main>

        <RecipeCard
          name="ARUNAS"
          category="ARUNAS"
          picture="public\img\ARUNAS\Landy's (2).png"
          link="/pedras/arunas"
        />

        <RecipeCard
          name="Quartzo Rosa"
          category="Quartzo"
          picture="public\img\ARUNAS\quartzo rosa.jpg"
          link="/pedras/quartzo"
        />
        <RecipeCard
          name="Turmalina Negra" 
          category="Turmalina"
          picture="public\img\ARUNAS\turmalina.jpg" 
          link="/pedras/turmalina"
        />
      

      </main>

      <Footer />
    </div>
  )
}