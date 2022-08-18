class Descriptor{
    descriptorId: number;
    categoryId: number;
    descriptorName: string;

    constructor(
        descriptorId: number,
        categoryId: number,
        descriptorName: string
    ) {
        this.descriptorId = descriptorId;
        this.categoryId = categoryId;
        this.descriptorName = descriptorName;
        
    }

    // Getters
    public getDescriptorId = (): number => {
        return this.descriptorId;
    }
    public getCategoryId = (): number => {
        return this.categoryId;
    }
    public getDescriptorName = (): string => {
        return this.descriptorName;
    }

    // Setters
    public setDescriptorId = (descriptorId: number) => {
        this.descriptorId = descriptorId;
    }
    public setCategoryId = (categoryId: number) => {
        this.categoryId = categoryId;
    }
    public setDescriptorName = (descriptorName: string) => {
        this.descriptorName = descriptorName;
    }
}
export default Descriptor;