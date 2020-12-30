var rupesh,ritesh;

function Account(accountNumber) // ---> This is our class
{
    
    this.accountNumber= accountNumber; // property storing account number
    this.total_balance = 0; // property storing total_balance
    
    this.deposit = function(amount)
                         {
                             this.total_balance+=amount;
                         }; // this property method adds amount to account number
    
    this.checkbalance = function()
                               {
                                   console.log(this.total_balance);
                               };

}

rupesh = new Account("123");
ritesh = new Account("456");

rupesh.deposit(1000000);
rupesh.deposit(1000000);

ritesh.deposit(1000000);
ritesh.deposit(2000000);

rupesh.checkbalance();
ritesh.checkbalance();

