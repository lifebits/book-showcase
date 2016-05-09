routing.$inject = ['$stateProvider'];

export default function routing($stateProvider) {
    $stateProvider
        .state('showcase', {
            url: '/showcase',
            resolve: {
                goods: ['BooksService',
                    function(BooksService) {
                        return BooksService.getBooksFromServer().then (
                            result => {
                                BooksService.books = result
                            }
                        );
                    }]
            },
            template: '<board-books/>'
        })
        .state('showcase.book', {
            url: '/:bookId',
            resolve: {
                goods: ['BooksService', '$stateParams',
                    function(BooksService, $stateParams) {
                        return BooksService.getBookFromServer($stateParams.bookId).then (
                            result => {
                                BooksService.book = result
                            }
                        );
                    }]
            },
            template: '<book-info/>'
        });




}