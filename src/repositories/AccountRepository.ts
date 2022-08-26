import AccountDAO from "../DAO/AccountDAO";
import AccountAggregate from "../domain/Aggregates/AccountAggregate";
import BookingDAO from "../DAO/BookingDAO";
import PackageDAO from "../DAO/PackageDAO";
import Account from "../domain/Account";
import Booking from "../domain/Booking";
import Package from "../domain/Package";
import AccountType from "../domain/AccountType";

class AccountRepository {
  public getAccount = async (
    accountId: number
  ): Promise<AccountAggregate | null> => {
    const accountDAO = new AccountDAO();
    const accountModel = await accountDAO.read(accountId);

    if (accountModel == null) return null;

    const bookingDAO = new BookingDAO();
    const packageDAO = new PackageDAO();

    const bookingModels = await bookingDAO.readAccountsBookings(accountId);
    const packageModels = await packageDAO.readAccountsPackages(accountId);

    const account = Account.modelToDomain(accountModel);
    const bookings = bookingModels.map((model) => Booking.modelToDomain(model));
    const packages = packageModels.map((model) => Package.modelToDomain(model));

    const accountAggregate = new AccountAggregate(account, packages, bookings);

    return accountAggregate;
  };

  public createAccount = async (
    accountType: AccountType,
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<AccountAggregate | null> => {
    const accountDAO = new AccountDAO();
    const accountModel = await accountDAO.create(
      accountType,
      firstName,
      lastName,
      email,
      password
    );

    if (accountModel == null) return null;

    const account = Account.modelToDomain(accountModel);
    const bookings = new Array<Booking>();
    const packages = new Array<Package>();

    return new AccountAggregate(account, packages, bookings);
  };

  public login = async (
    email: string,
    password: string
  ): Promise<AccountAggregate | null> => {
    const accountDAO = new AccountDAO();
    const accountModel = await accountDAO.readByEmailPassword(email, password);

    if (accountModel == null) return null;

    const account = Account.modelToDomain(accountModel);
    const bookingDAO = new BookingDAO();
    const packageDAO = new PackageDAO();

    const bookingModels = await bookingDAO.readAccountsBookings(
      account.getAccountId()
    );
    const packageModels = await packageDAO.readAccountsPackages(
      account.getAccountId()
    );

    const bookings = bookingModels.map((model) => Booking.modelToDomain(model));
    const packages = packageModels.map((model) => Package.modelToDomain(model));

    return new AccountAggregate(account, packages, bookings);
  };

  public setCreditCardDetails = async (
    email: string,
    creditCardNumber: string,
    creditCardDate: string,
    creditCardSecurity: string
  ) => {
    const accountDAO = new AccountDAO();
    await accountDAO.setCreditCardDetails(
      email,
      creditCardNumber,
      creditCardDate,
      creditCardSecurity
    );
  };

  public deleteAccount = async (accountId: number): Promise<number> => {
    const accountDAO = new AccountDAO();
    return await accountDAO.delete(accountId);
  };
}
export default AccountRepository;
