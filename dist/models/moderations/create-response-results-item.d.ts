import CreateResponseResultsItemCategories from './create-response-results-item-categories';
import CreateResponseResultsItemCategoryScores from './create-response-results-item-category-scores';
export default interface CreateResponseResultsItem {
  flagged: boolean;
  categories: CreateResponseResultsItemCategories;
  category_scores: CreateResponseResultsItemCategoryScores;
}
