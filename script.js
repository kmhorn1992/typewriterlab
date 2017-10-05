var sentences = [
    'In West Philadelphia, born and raised',
    'On the playground is where I spent most of my days',
    'Chillin out, maxin, relaxin all cool',
    'And all shootin some b-ball outside of the school',
    'When a couple of guys who were up to no good',
    'Started makin trouble in my neighborhood',
    'I got in one lil fight and my mom got scared',
    'said youre moving with your auntie and uncle in Bel-Air',
];
var upkey,
    lowkey;
sentencecounter = 0;


$(document).ready(() => {
    //variables for keyboard//
    upkey = $('#keyboard-upper-container');
    lowkey = $('#keyboard-lower-container');
    
    
if ('#keyboard-upper-container') {
    upkey.hide();        
        
}
   
    $(document).on('keyup keydown', (e) => {
        handleKeyPress(e.type, e.shiftKey, e.keyCode);
    });
});

toggleKeyboards();

    function toggleKeyboards(showUpKey) {
        
        if (showUpKey) {
            lowkey.hide();
            upkey.show();
        } else {
            upkey.hide();
            lowkey.show();
        }
    }
    function handleKeyPress(type, isShift, keyCode) {
        if (keyCode === 16) {
            if (type === 'keydown') {
                toggleKeyboards(true);
            } else {
                toggleKeyboards();
            }
        }
       
        var trueKeyCode = configureTrueKeyCode(keyCode, isShift);

        handleHighlight(trueKeyCode, type);
    }

    function handleHighlight(keyCode, type) {
        if (type === 'keydown') {
            $('#' + keyCode).css('background-color', 'blue');
        } else {
            $('#' + keyCode).css('background-color', '#f5f5f5');
        }
    }

    function configureTrueKeyCode(keyCode, isShift) {
        if (isShift === false && keyCode >= 65 && keyCode <= 90) {
            return keyCode + 32;
        }

        return keyCode;
    }

   