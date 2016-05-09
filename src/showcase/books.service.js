class BookService {

    constructor($resource) {

        this.url = "https://ds.aggregion.com/api/public/catalog/:id";
        this.booksAPI = $resource(this.url);

        this.getBooksFromServer = () => {
            return this.booksAPI.query().$promise.then(
                response => response,
                error => console.log("BookService: Books " + error.statusText + " " + error.status)
            );
        };

        this.getBookFromServer = (bookId) => {
            return this.booksAPI.get({id: bookId}).$promise.then(
                response => response,
                error => console.log("BookService: Book " + error.statusText + " " + error.status)
            );
        };

    }

    get books() {
        return this.currentBooks
    }

    set books(newValue) {
        this.currentBooks = newValue;
    }

    get book() {
        return this.currentBook
    }

    set book(newValue) {
        this.currentBook = newValue;
    }

}

BookService.$inject = ['$resource'];

export default BookService