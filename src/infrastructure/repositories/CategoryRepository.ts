import CategoryDAO from "../DAOs/CategoryDAO";
import Category from "../../domain/Category";
import CategoryModel from "../models/CategoryModel";

class CategoryRepository {
  categoryDAO: CategoryDAO;

  constructor() {
    this.categoryDAO = new CategoryDAO();
  }

  /*
   * Mapper Functions
   */
  private modelToDomain = (categoryModel: CategoryModel): Category => {
    return new Category(
      categoryModel.getCategoryID(),
      categoryModel.getCategoryName(),
    );
  };

  private domainToModel = (category: Category): CategoryModel => {
    return new CategoryModel(
      category.getCategoryID(),
      category.getCategoryName(),
    );
  };

  /*
   * CRUD operations
   */

  //public getCategories

  public getCategory = (categoryID: string): Category | null => {
    const categoryModel = this.categoryDAO.readCategory(categoryID);

    if (categoryModel == null) return null;

    const category = this.modelToDomain(categoryModel);

    return category;
  };

  //public getDescriptors

}

export default CategoryRepository;
