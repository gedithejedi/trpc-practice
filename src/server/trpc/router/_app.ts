import { router } from "../trpc";
// import { exampleRouter } from "./example";
import { pokemonRouter } from "./getPokemon";

export const appRouter = router({
  example: pokemonRouter,
});


// export type definition of API
export type AppRouter = typeof appRouter;
