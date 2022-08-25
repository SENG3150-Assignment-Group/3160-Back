import { ModelStatic, Model } from "sequelize";
import sequelize from "../database/";

/*interface InvoiceAttributes {
    //TransactionId: number;
    Date: Date;
    CreditCardNumber: string;
    Subtotal: number;
    Tax: number;
    RefundAmount: number;
}*/

class InvoiceDAO {
    private model: ModelStatic<Model<any>>;

    constructor() {
        this.model = sequelize.models.Invoice;
    }

    public readInvoice = async(
        transactionId: number
    ): Promise<Model<any> | null> => {
        return await this.model.findByPk(transactionId);
    };

    public readAllInvoices = async(): Promise<Model<any>[]> => {
        return await this.model.findAll();
    };

    public createInvoice = async(
        bookingId: number,
        date: Date,
        creditCardNumber: string,
        subTotal: number,
        tax: number,
        refundAmount: number
    ) => {
        await this.model.create({
            BookngId: bookingId,
            Date: date,
            CreditCardNumber: creditCardNumber,
            Subtotal: subTotal,
            Tax: tax,
            RefundAmount: refundAmount
        })
    }
}

export default InvoiceDAO;