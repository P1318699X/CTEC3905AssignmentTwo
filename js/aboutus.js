document.onload = (function(){
    // For reference by the listeners
    var backButtonVar    = document.getElementById("backButton");
    var forwardButtonVar = document.getElementById("forwardButton");


    // Listeners
    backButtonVar.addEventListener("click", backBtn_Clicked);
    forwardButtonVar.addEventListener("click", forwardBtn_Clicked);

    // For the carousel in AboutUs.html
    var /* Index counter for the carousel */                index       = 0, 
        /* All the image DIVs in the container */           images      = $('#imageContainer div'), 
        /* The number of DIVs in the image container */     imageCount  = images.length,
        /* All the text DIVs in the container */            blocks      = $('#textContainer div'),
        /* The number of DIVs in the text container*/       blockCount  = text.length;

    function moveItems()
    {
        // If the index is less than zero, wrap around to the highest item in the list.
        if      (index < 0)              index = imageCount - 1;
        // If the index is more than the number of images, wrap down to zero.
        else if (index > imageCount - 1) index = 0;
        // Finds out what the image is being shown at the current index.
        var image = $('#imageContainer div').eq(index);
        var block = $('#textContainer div').eq(index);
        // Hides the other images in the container.
        images.hide();
        blocks.hide();
        // Sets the image at the index in question to show.
        image.css('display','inline-block');
        block.css('display','inline-block');
    }

    // Back Button
    function backBtn_Clicked()
    {
        //Index Decreased by 1
        index -= 1;
        moveItems();
    }

    // Forward Button
    function forwardBtn_Clicked()
    {
        //Index Increased by 1
        index += 1;
        moveItems();
    }
}());