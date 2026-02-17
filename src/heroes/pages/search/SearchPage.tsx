import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrums } from "@/components/custom/CustomBreadcrums";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useQuery } from "@tanstack/react-query";
import { searchHeroesAction } from "@/heroes/actions/search-heroes.action";
import { useSearchParams } from "react-router";

export const SearchPage = () => {

const [ searchParams ] = useSearchParams();

   const name = searchParams.get('name') ?? undefined;
   const strength = searchParams.get('strength') ?? undefined;
  //  const heroteam = searchParams.get('team') ?? undefined;
  //  const heroCategory = searchParams.get('category') ?? undefined;
  //  const heroUniverse = searchParams.get('universe') ?? undefined;
  //  const heroStatus = searchParams.get('status') ?? undefined;
   
   
  
    const {data:heroes = [] } = useQuery({
      queryKey:['search', {name, strength}],
      queryFn: () => searchHeroesAction({name, strength}),
      staleTime: 1000 * 60 * 5,
      
    });
  
  console.log({heroes})

  return (
    <>
     <CustomJumbotron title="Superhero Search" description="Discover, explore, and manage your favorite superheroes and villains"/>

<CustomBreadcrums currentPage="Buscador de heroes" 
     breadcrums={[
      {label:'home1', to: '/'},
      {label:'home2', to: '/'},
      {label:'home3', to: '/'},
      ]}
/>

  {/* Stats Dashboard */}
     <HeroStats />

     {/* Filter and search */}
     <SearchControls />

     <HeroGrid heroes={heroes} />
    </>
  )
}

export default SearchPage;