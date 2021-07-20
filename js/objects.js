(function() {
	"use strict";

	/**
	 * TODO:
	 * Create an object with firstName and lastName properties that are strings
	 * with your first and last name. Store this object in a variable named
	 * `person`.
	 *
	 * Example:
	 *  > console.log(person.firstName) // "Rick"
	 *  > console.log(person.lastName) // "Sanchez"
	 */

	// var person = {
	// 	firstName: 'Ian',
	// 	lastName: 'Arellano'
	// };
	// console.log(person.firstName);
	// console.log(person.lastName);

	/**
	 * TODO:
	 * Add a sayHello method to the person object that returns a greeting using
	 * the firstName and lastName properties.
	 * console.log the returned message to check your work
	 *
	 * Example
	 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
	 */

	// var person = {
	// 	firstName: 'Ian',
	// 	lastName: 'Arellano',
	// 	sayHello: function (){
	// 		return "Hello " + this.firstName + " " + this.lastName + "!";
	// 	}
	// };
	//
	// console.log(person.sayHello());

	/** TODO:
	 * HEB has an offer for the shoppers that buy products amounting to
	 * more than $200. If a shopper spends more than $200, they get a 12%
	 * discount. Write a JS program, using conditionals, that logs to the
	 * browser, how much Ryan, Cameron and George need to pay. We know that
	 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
	 * display a line with the name of the person, the amount before the
	 * discount, the discount, if any, and the amount after the discount.
	 *
	 * Uncomment the lines below to create an array of objects where each object
	 * represents one shopper. Use a foreach loop to iterate through the array,
	 * and console.log the relevant messages for each person
	 */

	// var shoppers = [
	//     {name: 'Cameron', amount: 180},
	//     {name: 'Ryan', amount: 250},
	//     {name: 'George', amount: 320}
	// ];
	//
	// shoppers.forEach(function (shopper){
	// 	if(shopper.amount > 200){
	// 		console.log('Congratulations ' + shopper.name + ', you have spent over $200! Your total is $' + shopper.amount + ". You get a 12% discount. Your new total is: " + (shopper.amount - (shopper.amount * .12)) + ".");
	// 	} else {
	// 		console.log("I'm sorry " + shopper.name + ", you did not spend over $200. You spent $" + shopper.amount);
	// 	}
	// });

	/** TODO:
	 * Create an array of objects that represent books and store it in a
	 * variable named `books`. Each object should have a title and an author
	 * property. The author property should be an object with properties
	 * `firstName` and `lastName`. Be creative and add at least 5 books to the
	 * array
	 *
	 * Example:
	 * > console.log(books[0].title) // "The Salmon of Doubt"
	 * > console.log(books[0].author.firstName) // "Douglas"
	 * > console.log(books[0].author.lastName) // "Adams"
	 */

	// var books = [
	// 	{
	// 		title: 'Harry Potter and the Philosopher\'s Stone\t',
	// 		author: {
	// 			firstName: 'J.K.',
	// 			lastName: 'Rowling',
	// 		}
	// 	},
	// 	{
	// 		title: 'The Little Prince',
	// 		author: {
	// 			firstName: 'Antoine',
	// 			lastName: 'de Saint-Exupéry',
	// 		}
	// 	},
	// 	{
	// 		title: 'Dream of the Red Chamber',
	// 		author: {
	// 			firstName: 'Cao',
	// 			lastName: 'Xueqin',
	// 		}
	// 	},
	// 	{
	// 		title: 'The Hobbit',
	// 		author: {
	// 			firstName: 'J.R.R.',
	// 			lastName: 'Tolkien',
	// 		}
	// 	},
	// 	{
	// 		title: 'And Then There Were None',
	// 		author: {
	// 			firstName: 'Agatha',
	// 			lastName: 'Christie',
	// 		}
	// 	}
	// ];


	/**
	 * TODO:
	 * Loop through the books array and output the following information about
	 * each book:
	 * - the book number (use the index of the book in the array)
	 * - the book title
	 * - author's full name (first name + last name)
	 *
	 * Example Console Output:
	 *
	 *      Book # 1
	 *      Title: The Salmon of Doubt
	 *      Author: Douglas Adams
	 *      ---
	 *      Book # 2
	 *      Title: Walkaway
	 *      Author: Cory Doctorow
	 *      ---
	 *      Book # 3
	 *      Title: A Brief History of Time
	 *      Author: Stephen Hawking
	 *      ---
	 *      ...
	 */

	// books.forEach(function (book, index){
	// 		console.log('Book # ' + ++index);
	// 		console.log('Title: ' + book.title);
	// 		console.log('Author: ' + book.author.firstName + ' ' + book.author.lastName);
	// 		console.log('---');
	// });

	/**
	 * Bonus:
	 * - Create a function named `createBook` that accepts a title and author
	 *   name and returns a book object with the properties described
	 *   previously. Refactor your code that creates the books array to instead
	 *   use your function.
	 * - Create a function named `showBookInfo` that accepts a book object and
	 *   outputs the information described above. Refactor your loop to use your
	 *   `showBookInfo` function.
	 */

	function CreateBook (title, firstName, lastName) {
			this.title = title;
			this.authorFirstName = firstName;
			this.authorLastName = lastName;
		}

	// var view = {
	// 	showBookInfo: function (books) {
	// 		console.log(books.title + ' was written by ' + books.authorFirstName + ' ' + books.authorLastName);
	// 	}
	// }

	// view.showBookInfo(books.createBook('Harry Potter', 'JK', 'Rowling'));

	var bookList = [];
			bookList[0] = new CreateBook('harry potter', 'jk', 'rowling');
			bookList[1] = new CreateBook('harry potter', 'pogchamp');

	bookList.forEach(function (book, index){
		console.log('Book # ' + ++index);
		console.log('Title: ' + book.title);
		console.log('Author: ' + book.authorFirstName + ' ' + book.authorLastName);
		console.log('---');
	});

	// function CreateBook(title, author){
	// 	this.title = title;
	// 	var splitNames = author.split(' ');
	// 	this.author = {
	// 		firstName: splitNames[0],
	// 		lastName: splitNames[1]
	// 	};
	// };
	// var booksRefactored = [];
	// booksRefactored[0] = new CreateBook("The Lesser Key of Solomon", "Anonymous");
	// booksRefactored[1] = new CreateBook("Emerald Tablet", "Hermes Trismegistus");
	// booksRefactored[2] = new CreateBook("Book of Enoch", "Enoch");
	// booksRefactored[3] = new CreateBook("Nag Hammadi library", "Unknown Authors");
	// booksRefactored[4] = new CreateBook("Ra Material", "Multiple Authors");
	// function showBookInfo(book) {
	// 	if (typeof book === 'object') {
	// 		console.log("Title: " + book.title);
	// 		console.log("Author: " + book.author.firstName + " " + book.author.lastName);
	// 		console.log("---");
	// 	}
	// }
	// booksRefactored.forEach(function(book) {
	// 	showBookInfo(book);
	// })


})();
