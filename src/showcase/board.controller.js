class BoardController {
    constructor(BooksService, FileService) {

        this.books = BooksService.books;

        this.getBookCoverURL = function(coverId) {
            return FileService.getImgURL(coverId);
        };

    }
}

BoardController.$inject = ['BooksService', 'FileService'];

export default BoardController;