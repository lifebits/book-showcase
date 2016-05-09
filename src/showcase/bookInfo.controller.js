class BookInfoController {
    constructor(BooksService, FileService, $state) {

        this.book = BooksService.book;

        this.getBookCoverURL = function(coverId) {
            return FileService.getImgURL(coverId);
        };

        this.closeComponent = function() {
            $state.go('^');
        };

    }
}

BookInfoController.$inject = ['BooksService', 'FileService', '$state'];

export default BookInfoController;