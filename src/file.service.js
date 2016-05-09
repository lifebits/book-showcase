class GetFileService {

    constructor() {

        this.defaultImg = 'https://storage.aggregion.com/api/files/12ce171be47031a58f6d12ddefca93d52bda709b1b720d50cf48747d6cd44cb6/shared/data';

        this.getImgURL = function(imgId) {
            return 'https://storage.aggregion.com/api/files/'+ imgId +'/shared/data'
        };

        this.getDefaultImg = () => this.defaultImg;

    }

}

export default GetFileService