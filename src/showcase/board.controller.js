class BoardController {
    constructor(BooksResourceService, BooksRestangularService, FileService) {

        this.books = BooksRestangularService.books;

        this.getBookCoverURL = function(coverId) {
            return FileService.getImgURL(coverId);
        };

    }
}

BoardController.$inject = ['BooksResourceService', 'BooksRestangularService', 'FileService'];

export default BoardController;