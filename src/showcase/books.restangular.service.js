class BookServiceRestangular {

    constructor(Restangular, $state) {

        const catalog = Restangular.all("catalog");

        this.getBooksFromServer = function() {
            return catalog.getList().then(
                response => response
            )
        };

        this.getBookFromServer = (bookId) => {
            return catalog.get(bookId).then(
                response => response
            )
        };

        this.getBundlesBookFromServer = () => {
            return this.book.getList('bundles').then(
                response => response
            )
        };

        //Move to RUN section
        Restangular.setErrorInterceptor(function(response) {
            if (response.status === 400) {
                $state.go('404', {error: response.status + ': ' + response.statusText});
                return false
            }
            return true
        });

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

    get bundles() {
        return this.currentBundles
    }

    set bundles(newValue) {
        this.currentBundles = newValue;
    }

}

BookServiceRestangular.$inject = ['Restangular', '$state'];

export default BookServiceRestangular;