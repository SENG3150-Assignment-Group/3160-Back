import { ModelStatic, Model } from "sequelize";
import sequelize from "../database/";

interface InvoiceAttributes {
    TransactionId: number;
    Date: Date;
    CreditCardNumber: string;
    Subtotal: number;
    Tax: number;
    RefundAmount: number;
}

class InvoiceDAO {
    private model: ModelStatic<Model<InvoiceAttributes>>;

    constructor() {
        this.model = sequelize.models.Invoice;
    }

    public readInvoice = async(
        transactionId: number
    ): Promise<Model<InvoiceAttributes> | null> => {
        return await this.model.findByPk(transactionId);
    };

    public readAllInvoices = async(): Promise<Model<InvoiceAttributes>[]> => {
        return await this.model.findAll();
    };
}

export default InvoiceDAO;