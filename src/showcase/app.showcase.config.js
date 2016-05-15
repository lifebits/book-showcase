routing.$inject = ['$stateProvider'];

export default function routing($stateProvider) {

    $stateProvider
        .state('showcase', {
            url: '/showcase',
            resolve: {
                goodsInit: ['BooksService',
                    function(BooksService) {
                        return BooksService.getBooksFromServer().then (
                            result => BooksService.books = result
                        );
                    }]
            },
            template: '<board-books/>'
        })
        .state('showcase.book', {
            url: '/:bookId',
            resolve: {
                goodsInit: ['BooksService', '$stateParams',
                    function(BooksService, $stateParams) {
                        let bookId = $stateParams.bookId;
                        return BooksService.getBookFromServer(bookId).then (
                            result => BooksService.book = result
                        ).then(
                            () => BooksService.getBundlesBookFromServer(bookId)
                        ).then(
                            bundles => BooksService.bundles = bundles
                        ).catch(error => {
                            console.log(error);
                        });
                    }]
            },
            template: '<book-info/>'
        });

}