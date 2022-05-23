class User 
{
    static count=0
    constructor(username, email, password)
    {
        this.username = username;
        this.email=email;
        this.password=password;
        User.count++
    }
}

printNumberofUser()
{
    console.log('Number of User Registered='+User.count)
    console.log(`${this.username} $ {this.email} ${this.password}`)
}
const Ankit = new User ('Ankit Roy','roy.ankit15@gmail.com','12345')
const User1 = new User ('User1','User1.@gmail.com','12345')
const User2 = new User ('User2','User2@gmail.com','12345')
const User3 = new User ('User3','User3@gmail.com','12345')

Ankit.printNumberofUser();
