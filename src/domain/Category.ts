class Category{
    categoryId: number;
    categoryName: string;

    constructor(
        categoryId: number,
        categoryName: string
    ) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
    }

    // Getters
    public getCategoryId = (): number => {
        return this.categoryId;
    }
    public getCategoryName = (): string => {
        return this.categoryName;
    }

    // Setters
    public setCategoryId = (categoryId: number) => {
        this.categoryId = categoryId;
    }
    public setCategoryName = (categoryName: string) => {
        this.categoryName = categoryName;
    }

}