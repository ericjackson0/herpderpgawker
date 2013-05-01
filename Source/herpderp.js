/**
 * Changes all comments (or comment sections, on old Gawker sites) with
 * herp derped text. Inspired by Herp Derp for YouTube by Tanner Stokes:
 * @link http://www.tannr.com/herp-derp-youtube-comments/
 * 
 * @author Eric Jackson
 */

// Only select un-derped text
// New Gawker sites (Kinja 1.0)
$('.reply-content, p.ctx').html(randomDerp);

// Old Gawker sites use iframes, so the actual comments can't be changed
$('#comments').html(randomDerp);

/**
 * Converts text to herp derped text.
 * @returns {String} the herp derped text
 */
function randomDerp() {
    // Save original comments
    this.derpOriginal = $(this).html();
    
    // Restore actual comments when hovered over
    $(this).hoverIntent(function() {
        $(this).html(this.derpOriginal);
    });
    
    // Length of our herp derped sentence
    var randomLength = (Math.floor(Math.random()*15)+1);
    
    // Array to hold our new comment
    var wordArray = new Array(randomLength);

    // Add "herp" and "derp" to the array to use for replacing comments
    for(var i = 0; i < randomLength; i++) {
        var randomBit = (Math.floor(Math.random()*2));
        if(randomBit === 1) {
            wordArray[i] = 'herp';
        }
        else {
            wordArray[i] = 'derp';
        }
    }

    // Add derped class tag
    $(this).addClass("derped");
    
    // Return the derped text
    return '<p>' + wordArray.join(' ') + '</p>';
}

/**
 * Runs the herp derper every second.
 */
setInterval(function() {    
    // Only select non-derped elements
    // New Gawker
    $('.reply-content, p.ctx').not('.derped').html(randomDerp);
    
    // Old Gawker
    $('#comments').not('.derped').html(randomDerp);
}, 1000);