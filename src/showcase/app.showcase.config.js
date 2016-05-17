routing.$inject = ['$stateProvider', 'RestangularProvider'];

export default function routing($stateProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('https://ds.aggregion.com/api/public/');

    $stateProvider
        .state('showcase', {
            url: '/showcase',
            resolve: {
                goodsResourceInit: ['BooksResourceService',
                    function(BooksResourceService) {
                        return BooksResourceService.getBooksFromServer().then (
                            result => BooksResourceService.books = result
                        );
                    }],
                goodsRestangularInit: ['BooksRestangularService',
                    function(BooksRestangularService) {
                        return BooksRestangularService.getBooksFromServer().then (
                            response => BooksRestangularService.books = response
                        );
                    }]
            },
            template: '<board-books/>'
        })
        .state('showcase.book', {
            url: '/:bookId',
            resolve: {
                goodsResourceInit: ['BooksResourceService', '$stateParams',
                    function(BooksResourceService, $stateParams) {
                        let bookId = $stateParams.bookId;
                        return BooksResourceService.getBookFromServer(bookId).then (
                            result => BooksResourceService.book = result
                        ).then(
                            () => BooksResourceService.getBundlesBookFromServer(bookId)
                        ).then(
                            bundles => BooksResourceService.bundles = bundles
                        ).catch(error => {
                            console.log(error)
                        });
                    }],
                goodsRestangularInit: ['BooksRestangularService', '$stateParams',
                    function(BooksRestangularService, $stateParams) {
                        let bookId = $stateParams.bookId;
                        return BooksRestangularService.getBookFromServer(bookId).then(
                            result => BooksRestangularService.book = result
                        ).then(
                            () => BooksRestangularService.getBundlesBookFromServer()
                        ).then(
                            bundles => BooksRestangularService.bundles = bundles
                        ).catch(error => {
                            console.log(error)
                        })
                    }]
            },
            template: '<book-info/>'
        });
}