import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import {PokemonClient} from "pokenode-ts"

export const pokemonRouter = router({
  getPokemonById: publicProcedure
    .input(z.object({ id: z.number()}))
    .query( async ({ input }) => {
        const api = new PokemonClient();
        
        if(input.id !== 0){
            const pokemon = await api.getPokemonById(input.id);
            //   console.log(pokemon);
            return pokemon
        }else{
            return false
        }
            
    //   return {
    //     id: `The is is: ${input?.id ?? "null"}`,
    //   };
    }),
});
