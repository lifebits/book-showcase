export default function() {
    return {
        restrict: 'A',
        controller:['$element', 'FileService', function($element, FileService) {
            $element.bind('load', function() {
                //console.log('image is loaded');
            });
            $element.bind('error', function(){
                $element[0].src = FileService.getDefaultImg();
                //console.log('image could not be loaded');
            });
        }]
    };
}