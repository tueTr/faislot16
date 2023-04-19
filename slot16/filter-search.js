(function(){                                        //Lives in an IIFE
    var $imgs = $('#gallery img');                  //Get the image
    var $search = $('#filter-search');              //Get the input element
    var cache = [];                                 //create an array called cache
    
    $imgs.each(function(){                          //for each image
        cache.push({                                //add an object to the cache array
            element: this,                          //This image
            text: this.alt.trim().toLowerCase()     //its alt text (lowercase trimmed)
        });
    });
    
    function filter(){                              //declare filter function
        var query = this.value.trim().toLowerCase();//get the query
        cache.forEach(function(img){                //for each entru in cache pass image
            var index = 0;                          //set index to 0
            if (query) {                            // If there are some query texts
                index = img.text.index0f(query);    //Find if query text is in there
            }
            img.element.style.display = index === -1 ? 'none' : '';//show / hide
        });
    };
    if('oninput' in $search[0]){                    // if browser supports input event
        $search.on('input', filter);                //use input event to call filter()
    }else {                                         //otherwise
        $search.on('keyup', filter);                //Use keyup event to call filter
    }
}());