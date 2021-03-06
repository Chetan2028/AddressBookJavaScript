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
    
     // UC 7 -> Check  for duplicates
    if(addressBookArray.find(contacts=>contacts.firstName==addressBook.firstName && contacts.lastName==addressBook.lastName))
        throw "Details you are entering already exists";
    else
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

try
{ 
    //Creating object for class Address book with parameters for constructor
    let addressBookObject= new AddressBook("Chetan","Malagoudar","Srinagar","Belgaum","Karnataka","125 121","8570934858","chetan.malagoudar@google.com");
    //creating array and pushing address book object inside array
    addressBookArray.push(addressBookObject);
    addressBookArray.push(new AddressBook("Rashmi","Sollapure","Sector14","Wayand","Kerala","125001","9595959595","rashmi.sollapure@gmail.com"));
    addressBookArray.push(new AddressBook("Iranna","Magdum","Ameerpet","Hyderabad","Telangana","136 119","7895432343","iranna.magdum@dell.com"));
    addressBookArray.push(new AddressBook("Abhishek","Apte","Chinchwad","Pune","Maharastra","478458","7412365985","abhi.apte@gmail.com"));
    //printing all the details pushed in array
    console.log("\nPrinting Address book array\n")
    addressBookArray.forEach(contact=>console.log(contact.toString()));
    //Editing Details in the address book using filter and foreach
    console.log("\nEditing the array\n")
    addressBookArray.filter(contact=>contact.firstName=="Chetan"&& contact.city=="Belgaum").forEach(contact=>{contact.lastName="Patil"; contact.address="Sadashivnagar"} );;
    addressBookArray.forEach(contact=>console.log(contact.toString()));
}
catch(e)
{
    console.error(e);
}

//UC 5 -> Delete Contact
for(let contact=0;contact<addressBookArray.length;contact++)
 {
     if(addressBookArray[contact].firstName=="Chetan" && addressBookArray[contact].lastName=="Patil")
     {
         addressBookArray.splice(contact,1);
     }

 }
console.log("Deleting Elements : \n");
addressBookArray.forEach(contact=>console.log(contact.toString()));

//UC6 -> Count Contacts
let addressBookCount= addressBookArray.reduce((count,contact)=>count= count+1,0);
console.log("UC6 Printing the count of address book contacts: "+addressBookCount);


//UC 8 -> Search contacts by city or state
console.log("\nUC8 Searcing for contacts in city Hyderabad\n")
addressBookArray.filter(contact=>contact.city.includes("Hyderabad")).forEach(contact=>console.log(contact.toString()));

addressBookArray.filter(contact => contact.state.includes("Kerala")).forEach(contact=>console.log("UC8 Searching for contacts in state Kerala:\n"+contact.toString()));


// UC 9 -> To view contacts by city or state
let citiesArray= new Array();
addressBookArray.forEach(contact=>{if(!citiesArray.includes(contact.city)) {citiesArray.push(contact.city)}});
 //iterating over each city and printing values for each city
console.log("\nUC9 viewing persons for each city\n");
console.log(citiesArray + "\n");
for(let cities of citiesArray)
{
    //printing city
    console.log(cities+"==>");
    //printing all the contact details for each city using foreach and filter
    console.log(addressBookArray.filter(contact=>contact.city==cities).forEach(contact=>console.log(contact.toString())));
}
//creating array of states, adding all states in one array
let statesArray= new Array();
addressBookArray.forEach(contact=>{if(!statesArray.includes(contact.state)) {statesArray.push(contact.state)}});
//iterating over each city and printing values for each state
console.log("\nUC9 viewing persons for each state\n");
console.log(statesArray + "\n");
for(let states of statesArray)
{
    //printing state
    console.log(states+"==>");
    //printing all the contact details for each state using foreach and filter
    console.log(addressBookArray.filter(contact=>contact.state==states).forEach(contact=>console.log(contact.toString())));
}

//UC11 sorting entries on the person name
//creating personNames array which contain first names and last names of each individual in address book
let personNames= new Array();
addressBookArray.forEach(contact=>{
    if(!personNames.includes(contact.firstName+" "+contact.lastName))
    {
        personNames.push(contact.firstName+" "+contact.lastName);
    }
});
//sorting personNames array
console.log(personNames.sort());
console.log("\nPrinting contacts sorted by names");
for(let person of personNames)
{
    //filtering contacts by checking if first name and last name include person from person names and printing each contact which is filtered.
    addressBookArray.filter(contacts=>person.includes(contacts.firstName+" "+contacts.lastName)).forEach(contact=>console.log(contact.toString()));
}