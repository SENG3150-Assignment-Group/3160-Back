class AccountGroupsModel {
  accountID: string;
  groupID: string;
  dateJoined: string;

  constructor(accountID: string, groupID: string, dateJoined: string) {
    this.accountID = accountID;
    this.groupID = groupID;
    this.dateJoined = dateJoined;
  }

  /*
   * Getters
   */
  public getAccountID = (): string => {
    return this.accountID;
  };

  public getGroupID = (): string => {
    return this.groupID;
  };

  public getDateJoined = (): string => {
    return this.dateJoined;
  };
}

export default AccountGroupsModel;
