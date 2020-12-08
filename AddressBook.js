class AddressBook {

    //constructor
    constructor(...params)
    {
        //defining first name, last name, address , city, state, zip, phone number and email
        this.firstName= params[0];
        this.lastName= params[1];
        this.address= params[2];
        this.city= params[3];
        this.state= params[4];
        this.zip= params[5];
        this.phoneNumber= params[6];
        this.email= params[7];
    }

    //getter and setter for first name
    get firstName(){return this._firstName;}
    set firstName(firstName)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(firstName))
            this._firstName= firstName;
        else throw "Invalid first Name";
    }
    //getter and setter for last name
    get lastName(){return this._lastName;}
    set lastName(lastName)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(lastName))
            this._lastName= lastName;
        else throw "Invalid last Name";
    }
    //getter and setter for address
    get address(){return this._address;}
    set address(address)
    {
        let addressRegex= RegExp('^[A-Z0-9a-z]{4,}$');
        if(addressRegex.test(address))
            this._address= address;
        else throw "Incorrect Address";
    }
    //getter and setter for city
    get city(){return this._city;}
    set city(city)
    {
        let cityRegex= RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(cityRegex.test(city))
            this._city= city;
        else throw "Incorrect city";
    }
    //getter and setter for state
    get state(){return this._state;}
    set state(state)
    {
        let stateRegex= RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(stateRegex.test(state))
            this._state= state;
        else throw "Incorrect State";
    }
    //getter and setter for zip
    get zip(){return this._zip;}
    set zip(zip)
    {
        let zipRegex= RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        if(zipRegex.test(zip))
            this._zip= zip;
        else throw "Incorrect zip";
    }
    //getter and setter for phoneNumber
    get phoneNumber(){return this._phoneNumber;}
    set phoneNumber(phoneNumber)
    {
        let phoneNumberRegex= RegExp('^[7-9]{1}[0-9]{9}$');
        if(phoneNumberRegex.test(phoneNumber))
            this._phoneNumber= phoneNumber;
        else throw "Incorrect phone number";   
    }
     //getter and setter for email
    get email(){return this._email;}
    set email(email)
    {
        let emailRegex= RegExp('^[a-z]{1}[a-z0-9]{2,}([._+-]?[a-z0-9]+)?[@]{1}[a-z1-9]+[.]{1}(co|net|com|gov)([.]{1}[a-z]{2,3})?$')
        if(emailRegex.test(email))
            this._email= email;
        else throw "Invalid Email";
    }
     //defining method toString()
    toString()
    {
        return "first Name: "+this.firstName+", last Name: "+this.lastName+", Address: "+ this.address+
        ", City: "+ this.city+", State: "+this.state+", Zip: "+this.zip+", Phone Number: "+
        this.phoneNumber+", email: "+this.email; 
    }
}

let addressBookArray= new Array();

prompt= require('readline-sync');
while(true)
{
    try
    {
     let firstName= prompt.question("Please enter your firstName: ");
     if(firstName=="")
      break;
     let lastName= prompt.question("Please enter your lastName: ");
     let address= prompt.question("Please enter your Address: ");
     let city= prompt.question("Please enter your city: ");
     let state= prompt.question("Please enter your state: ");
     let zip= prompt.question("Please enter your zip: ");
     let phoneNumber= prompt.question("Please enter your phonenumber: ");
     let email = prompt.question("please enter your email: ");
     let addressBook= new AddressBook(firstName,lastName,address,city,state,zip,phoneNumber,email);
     addressBookArray.push(addressBook);
     console.log("\nDetails entered successfully, please enter first name to add more details else press enter");
    }
    catch(e)
    {
        console.error(e);
        console.log("Please enter input again, values entered is not in correct format");
    }
}  

console.log("Printing Array Address Book : ");
addressBookArray.forEach(contact => console.log(contact.toString()));