class BookInfoController {
    constructor(BooksResourceService, BooksRestangularService, FileService, $state) {

        this.book = BooksRestangularService.book;
        this.bundles = BooksRestangularService.bundles;

        this.getBookCoverURL = function(coverId) {
            return FileService.getImgURL(coverId);
        };

        this.closeComponent = function() {
            $state.go('^');
        };

    }
}

BookInfoController.$inject = ['BooksResourceService', 'BooksRestangularService', 'FileService', '$state'];

export default BookInfoController;