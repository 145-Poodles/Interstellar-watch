var tickArrowDegree = 0;
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var startPoint = 510;
var morse;
var i = 0;
var j = 0;
var ticking = window.setInterval(ticks, 1000);
var minTicking = window.setInterval(minTicks, 1000);
// var lettersTicking = window.setInterval(letterTicks, 1000);
var pressed = false;
var message = 'lovers';
    message.toUpperCase();
var chars = message.split('');
// NORMAL CLOCK FUNCTION
// 
// function ticks() {
//   tickArrowDegree += 6;
//   $('#tick-arrow').css({'transform': 'rotate(' + tickArrowDegree + 'deg)'});
//   if (tickArrowDegree == 360) {
//     tickArrowDegree = 0;
//     longArrowDegree += 6;
//     $('#long-arrow').css({'transform': 'rotate(' + longArrowDegree + 'deg)'});
//   }
//   if (longArrowDegree == 360) {
//     longArrowDegree = 0;
//     shortArrowDegree += 30;
//         $('#short-arrow').css({'transform': 'rotate(' + shortArrowDegree + 'deg)'});
//   }
// }
$('body').keyup(function(e) {
  if (e.keyCode == 8) {
    pressed = true;
    $('#compiler').css('display', 'none');
  }
    if((e.keyCode == 32) && (pressed = true)) {
     $('#compiler').css('display', 'block');
    }
});
// function letterTicks() {
//   for (i = 0; i < chars.length; i++) {
//   switch (chars[i]) {
//       case 'A': letter = ['.', '-']; break;
//       case 'B': letter = ['-', '.', '.', '.']; break;
//       case 'C': letter = ['-', '.', '-', '.']; break;
//       case 'D': letter = ['-', '.', '.']; break;
//       case 'E': letter = ['.']; break;
//       case 'F': letter = ['.', '.', '-', '.']; break;
//       case 'G': letter = ['-', '-', '.']; break;
//       case 'H': letter = ['.', '.', '.', '.']; break;
//       case 'I': letter = ['.', '.']; break;
//       case 'J': letter = ['.', '-', '-', '-', '-']; break;
//       case 'K': letter = ['-', '.', '-']; break;
//       case 'L': letter = ['.', '-', '.', '.']; break;
//       case 'M': letter = ['-', '-']; break;
//       case 'N': letter = ['-', '.']; break;
//       case 'O': letter = ['-', '-', '-']; break;
//       case 'P': letter = ['.', '-', '-', '.']; break;
//       case 'Q': letter = ['-', '-', '.', '-']; break;
//       case 'R': letter = ['.', '-', '.']; break;
//       case 'S': letter = ['.', '.', '.']; break;
//       case 'T': letter = ['-']; break;
//       case 'U': letter = ['.', '.', '-']; break;
//       case 'V': letter = ['.', '.', '.', '-']; break;
//       case 'W': letter = ['.', '-', '-']; break;
//       case 'X': letter = ['-', '.', '.', '-']; break;
//       case 'Y': letter = ['-', '.', '-', '-']; break;
//       case 'Z': letter = ['-', '-', '.', '.']; break;
//       default: console.log('NaN'); break;
//     }
//     if (i >= morse.length) {
//         clearInterval(lettersTicking);
//         return;
//     }

//     if (chars[i] == '.') {
//         console.log(chars[i]);
//         tickArrowDegree = 516;
//         $('#compiler').append('<span>.</span>');
//         $('#tick-arrow').css({
//             'transform': 'rotate(' + tickArrowDegree + 'deg)'
//         });

//         setTimeout(function reset() {
//             $('#tick-arrow').css({
//                 'transform': 'rotate(' + startPoint + 'deg)'
//             });
//         }, 500);
//     } else {
//         console.log(chars[i]);
//         tickArrowDegree = 522;
//         $('#compiler').append('<span>-</span>');
//         $('#tick-arrow').css({
//             'transform': 'rotate(' + tickArrowDegree + 'deg)'
//         });

//         setTimeout(function reset() {
//             $('#tick-arrow').css({
//                 'transform': 'rotate(' + startPoint + 'deg)'
//             });
//         }, 500);
//     }
//     i++;
//   }
// }
function printHours() {
    switch (hours) {
      case 1: morse = ['.', '-', '-', '-', '-']; break;
      case 2: morse = ['.', '.', '-', '-', '-']; break;
      case 3: morse = ['.', '.', '.', '-', '-']; break;
      case 4: morse = ['.', '.', '.', '.', '-']; break;
      case 5: morse = ['.', '.', '.', '.', '.']; break;
      case 6: morse = ['-', '.', '.', '.', '.']; break;
      case 7: morse = ['-', '-', '.', '.', '.']; break;
      case 8: morse = ['-', '-', '-', '.', '.']; break;
      case 9: morse = ['-', '-', '-', '-', '.']; break;
      case 10: morse = ['.', '-', '-', '-', '-', '-', '-', '-', '-', '-']; break;
      case 11: morse = ['.', '-', '-', '-', '-', '.', '-', '-', '-', '-']; break;
      case 12: morse = ['.', '-', '-', '-', '-', '.', '.', '-', '-', '-']; break;
      case 13: morse = ['.', '-', '-', '-', '-', '.', '.', '.', '-', '-']; break;
      case 14: morse = ['.', '-', '-', '-', '-', '.', '.', '.', '.', '-']; break;
      case 15: morse = ['.', '-', '-', '-', '-', '.', '.', '.', '.', '.']; break;
      case 16: morse = ['.', '-', '-', '-', '-', '-', '.', '.', '.', '.']; break;
      case 17: morse = ['.', '-', '-', '-', '-', '-', '-', '.', '.', '.']; break;
      case 18: morse = ['.', '-', '-', '-', '-', '-', '-', '-', '.', '.']; break;
      case 19: morse = ['.', '-', '-', '-', '-', '-', '-', '-', '-', '.']; break;
      case 20: morse = ['.', '.', '-', '-', '-', '-', '-', '-', '-', '-']; break;
      case 21: morse = ['.', '.', '-', '-', '-', '.', '-', '-', '-', '-']; break;
      case 22: morse = ['.', '.', '-', '-', '-', '.', '.', '-', '-', '-']; break;
      case 23: morse = ['.', '.', '-', '-', '-', '.', '.', '.', '-', '-']; break;
      case 00: morse = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-']; break;
      default: console.log('NaN'); break;
    }
    if (i >= morse.length) {
        clearInterval(ticking);
        return;
    }

    if (morse[i] == '.') {
        console.log(morse[i]);
        tickArrowDegree = 516;
        $('#compiler').append('<span>.</span>');
        $('#tick-arrow').css({
            'transform': 'rotate(' + tickArrowDegree + 'deg)'
        });

        setTimeout(function reset() {
            $('#tick-arrow').css({
                'transform': 'rotate(' + startPoint + 'deg)'
            });
        }, 500);
    } else {
        console.log(morse[i]);
        tickArrowDegree = 522;
        $('#compiler').append('<span>-</span>');
        $('#tick-arrow').css({
            'transform': 'rotate(' + tickArrowDegree + 'deg)'
        });

        setTimeout(function reset() {
            $('#tick-arrow').css({
                'transform': 'rotate(' + startPoint + 'deg)'
            });
        }, 500);
    }
    i++;
}
function ticks() {
  printHours();
}
function minTicks() {
  if (hours > 9) {
      setTimeout(function printMinutes() {
      switch (minutes) {
      case 00: morseMin = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-']; break;
      case 01: morseMin = ['-', '-', '-', '-', '-', '.', '-', '-', '-', '-']; break;
      case 02: morseMin = ['-', '-', '-', '-', '-', '.', '.', '-', '-', '-']; break;
      case 03: morseMin = ['-', '-', '-', '-', '-', '.', '.', '.', '-', '-']; break;
      case 04: morseMin = ['-', '-', '-', '-', '-', '.', '.', '.', '.', '-']; break;
      case 05: morseMin = ['-', '-', '-', '-', '-', '.', '.', '.', '.', '.']; break;
      case 06: morseMin = ['-', '-', '-', '-', '-', '-', '.', '.', '.', '.']; break;
      case 07: morseMin = ['-', '-', '-', '-', '-', '-', '-', '.', '.', '.']; break;
      case 08: morseMin = ['-', '-', '-', '-', '-', '-', '-', '-', '.', '.']; break;
      case 09: morseMin = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '.']; break;
      case 10: morseMin = ['.', '-', '-', '-', '-', '-', '-', '-', '-', '-']; break;
      case 11: morseMin = ['.', '-', '-', '-', '-', '.', '-', '-', '-', '-']; break;
      case 12: morseMin = ['.', '-', '-', '-', '-', '.', '.', '-', '-', '-']; break;
      case 13: morseMin = ['.', '-', '-', '-', '-', '.', '.', '.', '-', '-']; break;
      case 14: morseMin = ['.', '-', '-', '-', '-', '.', '.', '.', '.', '-']; break;
      case 15: morseMin = ['.', '-', '-', '-', '-', '.', '.', '.', '.', '.']; break;
      case 16: morseMin = ['.', '-', '-', '-', '-', '-', '.', '.', '.', '.']; break;
      case 17: morseMin = ['.', '-', '-', '-', '-', '-', '-', '.', '.', '.']; break;
      case 18: morseMin = ['.', '-', '-', '-', '-', '-', '-', '-', '.', '.']; break;
      case 19: morseMin = ['.', '-', '-', '-', '-', '-', '-', '-', '-', '.']; break;
      case 20: morseMin = ['.', '.', '-', '-', '-', '-', '-', '-', '-', '-']; break;
      case 21: morseMin = ['.', '.', '-', '-', '-', '.', '-', '-', '-', '-']; break;
      case 22: morseMin = ['.', '.', '-', '-', '-', '.', '.', '-', '-', '-']; break;
      case 23: morseMin = ['.', '.', '-', '-', '-', '.', '.', '.', '-', '-']; break;
      case 24: morseMin = ['.', '.', '-', '-', '-', '.', '.', '.', '.', '-']; break;
      case 25: morseMin = ['.', '.', '-', '-', '-', '.', '.', '.', '.', '.']; break;
      case 26: morseMin = ['.', '.', '-', '-', '-', '-', '.', '.', '.', '.']; break;
      case 27: morseMin = ['.', '.', '-', '-', '-', '-', '-', '.', '.', '.']; break;
      case 28: morseMin = ['.', '.', '-', '-', '-', '-', '-', '-', '.', '.']; break;
      case 29: morseMin = ['.', '.', '-', '-', '-', '-', '-', '-', '-', '.']; break;
      case 30: morseMin = ['.', '.', '.', '-', '-', '-', '-', '-', '-', '-']; break;
      case 31: morseMin = ['.', '.', '.', '-', '-', '.', '-', '-', '-', '-']; break;
      case 32: morseMin = ['.', '.', '.', '-', '-', '.', '.', '-', '-', '-']; break;
      case 33: morseMin = ['.', '.', '.', '-', '-', '.', '.', '.', '-', '-']; break;
      case 34: morseMin = ['.', '.', '.', '-', '-', '.', '.', '.', '.', '-']; break;
      case 35: morseMin = ['.', '.', '.', '-', '-', '.', '.', '.', '.', '.']; break;
      case 36: morseMin = ['.', '.', '.', '-', '-', '-', '.', '.', '.', '.']; break;
      case 37: morseMin = ['.', '.', '.', '-', '-', '-', '-', '.', '.', '.']; break;
      case 38: morseMin = ['.', '.', '.', '-', '-', '-', '-', '-', '.', '.']; break;
      case 39: morseMin = ['.', '.', '.', '-', '-', '-', '-', '-', '-', '.']; break;
      case 40: morseMin = ['.', '.', '.', '.', '-', '-', '-', '-', '-', '-']; break;
      case 41: morseMin = ['.', '.', '.', '.', '-', '.', '-', '-', '-', '-']; break;
      case 42: morseMin = ['.', '.', '.', '.', '-', '.', '.', '-', '-', '-']; break;
      case 43: morseMin = ['.', '.', '.', '.', '-', '.', '.', '.', '-', '-']; break;
      case 44: morseMin = ['.', '.', '.', '.', '-', '.', '.', '.', '.', '-']; break;
      case 45: morseMin = ['.', '.', '.', '.', '-', '.', '.', '.', '.', '.']; break;
      case 46: morseMin = ['.', '.', '.', '.', '-', '-', '.', '.', '.', '.']; break;
      case 47: morseMin = ['.', '.', '.', '.', '-', '-', '-', '.', '.', '.']; break;
      case 48: morseMin = ['.', '.', '.', '.', '-', '-', '-', '-', '.', '.']; break;
      case 49: morseMin = ['.', '.', '.', '.', '-', '-', '-', '-', '-', '.']; break;
      case 50: morseMin = ['.', '.', '.', '.', '.', '-', '-', '-', '-', '-']; break;
      case 51: morseMin = ['.', '.', '.', '.', '.', '.', '-', '-', '-', '-']; break;
      case 52: morseMin = ['.', '.', '.', '.', '.', '.', '.', '-', '-', '-']; break;
      case 53: morseMin = ['.', '.', '.', '.', '.', '.', '.', '.', '-', '-']; break;
      case 54: morseMin = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '-']; break;
      case 55: morseMin = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.']; break;
      case 56: morseMin = ['.', '.', '.', '.', '.', '-', '.', '.', '.', '.']; break;
      case 57: morseMin = ['.', '.', '.', '.', '.', '-', '-', '.', '.', '.']; break;
      case 58: morseMin = ['.', '.', '.', '.', '.', '-', '-', '-', '.', '.']; break;
      case 59: morseMin = ['.', '.', '.', '.', '.', '-', '-', '-', '-', '.']; break;
      case 0: morseMin = ['-', '-', '-', '-', '-']; break;
      default: console.log('NaN'); break;
    }
    if (j >= morseMin.length) {
        clearInterval(minTicking);
        return;
    }

    if (morseMin[j] == '.') {
        console.log(morseMin[j]);
        tickArrowDegree = 516;
        $('#compiler').append('<span>.</span>');
        $('#tick-arrow').css({
            'transform': 'rotate(' + tickArrowDegree + 'deg)'
        });

        setTimeout(function reset() {
            $('#tick-arrow').css({
                'transform': 'rotate(' + startPoint + 'deg)'
            });
        }, 500);
    } else {
        console.log(morseMin[j]);
        $('#compiler').append('<span>-</span>');
        tickArrowDegree = 522;
        $('#tick-arrow').css({
            'transform': 'rotate(' + tickArrowDegree + 'deg)'
        });

        setTimeout(function reset() {
            $('#tick-arrow').css({
                'transform': 'rotate(' + startPoint + 'deg)'
            });
        }, 500);
    }
    j++;
  }, 10000);
  } else if (hours < 10) {
      setTimeout(function printMinutes() {
      switch (minutes) {
      case 00: morseMin = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-']; break;
      case 01: morseMin = ['-', '-', '-', '-', '-', '.', '-', '-', '-', '-']; break;
      case 02: morseMin = ['-', '-', '-', '-', '-', '.', '.', '-', '-', '-']; break;
      case 03: morseMin = ['-', '-', '-', '-', '-', '.', '.', '.', '-', '-']; break;
      case 04: morseMin = ['-', '-', '-', '-', '-', '.', '.', '.', '.', '-']; break;
      case 05: morseMin = ['-', '-', '-', '-', '-', '.', '.', '.', '.', '.']; break;
      case 06: morseMin = ['-', '-', '-', '-', '-', '-', '.', '.', '.', '.']; break;
      case 07: morseMin = ['-', '-', '-', '-', '-', '-', '-', '.', '.', '.']; break;
      case 08: morseMin = ['-', '-', '-', '-', '-', '-', '-', '-', '.', '.']; break;
      case 09: morseMin = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '.']; break;
      case 10: morseMin = ['.', '-', '-', '-', '-', '-', '-', '-', '-', '-']; break;
      case 11: morseMin = ['.', '-', '-', '-', '-', '.', '-', '-', '-', '-']; break;
      case 12: morseMin = ['.', '-', '-', '-', '-', '.', '.', '-', '-', '-']; break;
      case 13: morseMin = ['.', '-', '-', '-', '-', '.', '.', '.', '-', '-']; break;
      case 14: morseMin = ['.', '-', '-', '-', '-', '.', '.', '.', '.', '-']; break;
      case 15: morseMin = ['.', '-', '-', '-', '-', '.', '.', '.', '.', '.']; break;
      case 16: morseMin = ['.', '-', '-', '-', '-', '-', '.', '.', '.', '.']; break;
      case 17: morseMin = ['.', '-', '-', '-', '-', '-', '-', '.', '.', '.']; break;
      case 18: morseMin = ['.', '-', '-', '-', '-', '-', '-', '-', '.', '.']; break;
      case 19: morseMin = ['.', '-', '-', '-', '-', '-', '-', '-', '-', '.']; break;
      case 20: morseMin = ['.', '.', '-', '-', '-', '-', '-', '-', '-', '-']; break;
      case 21: morseMin = ['.', '.', '-', '-', '-', '.', '-', '-', '-', '-']; break;
      case 22: morseMin = ['.', '.', '-', '-', '-', '.', '.', '-', '-', '-']; break;
      case 23: morseMin = ['.', '.', '-', '-', '-', '.', '.', '.', '-', '-']; break;
      case 24: morseMin = ['.', '.', '-', '-', '-', '.', '.', '.', '.', '-']; break;
      case 25: morseMin = ['.', '.', '-', '-', '-', '.', '.', '.', '.', '.']; break;
      case 26: morseMin = ['.', '.', '-', '-', '-', '-', '.', '.', '.', '.']; break;
      case 27: morseMin = ['.', '.', '-', '-', '-', '-', '-', '.', '.', '.']; break;
      case 28: morseMin = ['.', '.', '-', '-', '-', '-', '-', '-', '.', '.']; break;
      case 29: morseMin = ['.', '.', '-', '-', '-', '-', '-', '-', '-', '.']; break;
      case 30: morseMin = ['.', '.', '.', '-', '-', '-', '-', '-', '-', '-']; break;
      case 31: morseMin = ['.', '.', '.', '-', '-', '.', '-', '-', '-', '-']; break;
      case 32: morseMin = ['.', '.', '.', '-', '-', '.', '.', '-', '-', '-']; break;
      case 33: morseMin = ['.', '.', '.', '-', '-', '.', '.', '.', '-', '-']; break;
      case 34: morseMin = ['.', '.', '.', '-', '-', '.', '.', '.', '.', '-']; break;
      case 35: morseMin = ['.', '.', '.', '-', '-', '.', '.', '.', '.', '.']; break;
      case 36: morseMin = ['.', '.', '.', '-', '-', '-', '.', '.', '.', '.']; break;
      case 37: morseMin = ['.', '.', '.', '-', '-', '-', '-', '.', '.', '.']; break;
      case 38: morseMin = ['.', '.', '.', '-', '-', '-', '-', '-', '.', '.']; break;
      case 39: morseMin = ['.', '.', '.', '-', '-', '-', '-', '-', '-', '.']; break;
      case 40: morseMin = ['.', '.', '.', '.', '-', '-', '-', '-', '-', '-']; break;
      case 41: morseMin = ['.', '.', '.', '.', '-', '.', '-', '-', '-', '-']; break;
      case 42: morseMin = ['.', '.', '.', '.', '-', '.', '.', '-', '-', '-']; break;
      case 43: morseMin = ['.', '.', '.', '.', '-', '.', '.', '.', '-', '-']; break;
      case 44: morseMin = ['.', '.', '.', '.', '-', '.', '.', '.', '.', '-']; break;
      case 45: morseMin = ['.', '.', '.', '.', '-', '.', '.', '.', '.', '.']; break;
      case 46: morseMin = ['.', '.', '.', '.', '-', '-', '.', '.', '.', '.']; break;
      case 47: morseMin = ['.', '.', '.', '.', '-', '-', '-', '.', '.', '.']; break;
      case 48: morseMin = ['.', '.', '.', '.', '-', '-', '-', '-', '.', '.']; break;
      case 49: morseMin = ['.', '.', '.', '.', '-', '-', '-', '-', '-', '.']; break;
      case 50: morseMin = ['.', '.', '.', '.', '.', '-', '-', '-', '-', '-']; break;
      case 51: morseMin = ['.', '.', '.', '.', '.', '.', '-', '-', '-', '-']; break;
      case 52: morseMin = ['.', '.', '.', '.', '.', '.', '.', '-', '-', '-']; break;
      case 53: morseMin = ['.', '.', '.', '.', '.', '.', '.', '.', '-', '-']; break;
      case 54: morseMin = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '-']; break;
      case 55: morseMin = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.']; break;
      case 56: morseMin = ['.', '.', '.', '.', '.', '-', '.', '.', '.', '.']; break;
      case 57: morseMin = ['.', '.', '.', '.', '.', '-', '-', '.', '.', '.']; break;
      case 58: morseMin = ['.', '.', '.', '.', '.', '-', '-', '-', '.', '.']; break;
      case 59: morseMin = ['.', '.', '.', '.', '.', '-', '-', '-', '-', '.']; break;
      case 0: morseMin = ['-', '-', '-', '-', '-']; break;
      default: console.log('NaN'); break;
    }
    if (j >= morseMin.length) {
        clearInterval(minTicking);
        return;
    }

    if (morseMin[j] == '.') {
        console.log(morseMin[j]);
        tickArrowDegree = 516;
        $('#compiler>').html('<span>.</span>');
        $('#tick-arrow').css({
            'transform': 'rotate(' + tickArrowDegree + 'deg)'
        });

        setTimeout(function reset() {
            $('#tick-arrow').css({
                'transform': 'rotate(' + startPoint + 'deg)'
            });
        }, 500);
    } else {
        console.log(morseMin[j]);
        tickArrowDegree = 522;
        $('#compiler>').html('<span>-</span>');
        $('#tick-arrow').css({
            'transform': 'rotate(' + tickArrowDegree + 'deg)'
        });

        setTimeout(function reset() {
            $('#tick-arrow').css({
                'transform': 'rotate(' + startPoint + 'deg)'
            });
        }, 500);
    }
    j++;
  }, 10000);
  }
}