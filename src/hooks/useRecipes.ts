import { useContext, useState } from 'react';
import { RecipeContext } from '../context/RecipeContext';

type Difficulty = 'Fácil' | 'Intermedio' | 'Difícil';

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipes debe ser usado dentro de un RecipeProvider');
  }

  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | null>(null);

  const filterByDifficulty = (recipes: any[], difficulty: Difficulty) => {
    return recipes.filter(recipe => recipe.difficulty === difficulty);
  };

  return {
    ...context,
    difficultyFilter,
    setDifficultyFilter,
    filterByDifficulty,
  };
};

