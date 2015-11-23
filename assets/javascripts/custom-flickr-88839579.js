/*
	Programmer: Lukasz Czerwinski
	CodeCanyon: http://codecanyon.net/user/Lukasz_Czerwinski
	 
	If this script you like, please put a comment on codecanyon.
	
*/


    $(document).ready(function (){ 
    $("#gallery").flickrGallery({
    //FLICKR API KEY
        Key: '4de42ec27058d6709f4f7fa4c2e7690a',
        //Secret
        Secret: '6377fe4662450635',
        //FLICKR user ID
        User: '137571825@N03',
        //Flickr PhotoSet ID
        PhotoSet: '72157660449706100',
        /*-- VIEWBOX SETTINGS --*/ 
        Speed   : 400,    //Speed of animations
        navigation  : 1,    //(true) Navigation (arrows)
        keyboard  : 1,    //(true) Keyboard navigation 
        numberEl  : 1     //(true) Number elements
    });
    });
