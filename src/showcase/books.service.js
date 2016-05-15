class BookService {

    constructor($resource, $state) {

        const catalogResource = $resource(
            'https://ds.aggregion.com/api/public/catalog/:catalogController:bookId/:goodsController/:goodsOptions',
            {
                bookId: "@bookId",
                goodsOptions: "@goodsOptions",
                catalogController: "@catalogController",
                goodsController: "@goodsController"
            },
            {
                catalog: {
                    method: 'GET',
                    isArray: true
                },
                book: {
                    method: 'GET',
                    params: {
                        catalogController: '@bookId'
                    }
                },
                bundles: {
                    method: 'GET',
                    params: {
                        goodsController: 'bundles'
                    },
                    isArray: true
                },
                bundle: {
                    method: 'GET',
                    params: {
                        goodsOptions: '55ae61c1ac8916001aae0bdb'
                    }
                }
            }
        );

        this.getBooksFromServer = () => {
            return catalogResource.catalog().$promise.then(
                response => response,
                error => {
                    $state.go('404', {error: 'Catalog ' + error.statusText});
                }
            );
        };

        this.getBookFromServer = (bookId) => {
            return catalogResource.book({bookId: bookId}).$promise.then(
                response => response,
                error => {
                    $state.go('404', {error: 'Book ' + error.statusText});
                }
            );
        };

        this.getBundlesBookFromServer = (bookId) => {
            return catalogResource.bundles({bookId: bookId}).$promise.then(
                response => response,
                error => {
                    console.log(error)
                }
            );
        };

        this.getBundleBookFromServer = (bookId) => {
            return catalogResource.bundle({bookId: bookId}).$promise.then(
                response => response,
                error => {
                    console.log(error)
                }
            );
        };

    }

    static aaa() {
        return "aaa"
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

BookService.$inject = ['$resource', '$state'];

export default BookService