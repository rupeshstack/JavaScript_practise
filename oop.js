var checking , savings;

function Account(accountNumber) // this is our Account class
{
    
    this.accountNumber = accountNumber; // property storing acc no.
    this.total_balance = 0 // property storing fund account
    this.deposit = function(amount)// Method to deposit amount in account
                     { 
                         if(amount===Number(amount))
                         {
                             this.total_balance+=amount; 
                         }
         
                     };

    this.balance = function()
    {
        return this.total_balance;

    };


}

rupesh = new Account("03");
rupesh.deposit(500000);
rupesh.deposit(500000);
rupesh.deposit(500000);

ritesh = new Account("04");
ritesh.deposit(500000);
ritesh.deposit(12000000);


console.log(rupesh.balance());
console.log(ritesh.balance());










