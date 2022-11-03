const right = document.querySelector("[data-right]");
const left = document.querySelector("[data-left]");
const header = document.querySelector("[data-header]");
const hamburger = document.querySelector("[data-hamburger]");
const styleTag = document.querySelector("[data-styling]");

const addStyling = (tag) => {
  tag.innerHTML = `
        .right {
            visibility: hidden;
        }
        .left {
            visibility: hidden;
        }
        .hamburger {
            display: block;
        }
        p {
            color: red;
        }
`;
};

const removeStyling = (tag) => {
  tag.innerHTML = "";
};

const BREAK_POINTS = {
  XXL: 1920,
  XL: 1400,
  L: 1280,
  M: 1024,
  S: 800,
  XS: 500,
  XXS: 300,
};

const SPACE_FOR_BREAK = {
  XXL: 56,
  XL: 40,
  L: 32,
  M: 20,
  S: 20,
  XS: 20,
  XXS: 20,
};

function isDistanceToSmall(screenType, distance) {
    if(distance < SPACE_FOR_BREAK[screenType]) {
        return true;
    }
    return false;
}

function checkConditions() {
  const headerWidth = header.clientWidth;
  const rightWidth = right.clientWidth;
  const leftWidth = left.clientWidth;
  const distanceBetwen = headerWidth - rightWidth - leftWidth;

  console.log("===========");
  console.log("===========");

  console.log('Header width:');
  console.log(headerWidth);
  console.log('Distanta dintre');
  console.log(distanceBetwen);
  console.log("Left Width: ");
  console.log(leftWidth);
  console.log('right width:');
  console.log(rightWidth);

  console.log("===========");
  console.log("===========");

  // width > 1920
  // width <=1920 && width

  //&& SPACE_FOR_BREAK.XXL > distanceBetwen
  //&& SPACE_FOR_BREAK.XL > distanceBetwen
  //&& SPACE_FOR_BREAK.L > distanceBetwen
  //SPACE_FOR_BREAK.M > distanceBetwen
 // && SPACE_FOR_BREAK.S > distanceBetwen
 //&& SPACE_FOR_BREAK.XXS > distanceBetwen

  const XXL_CONDITION = BREAK_POINTS.XXL < headerWidth && SPACE_FOR_BREAK.XXL > distanceBetwen;
  const XL_CONDITION = BREAK_POINTS.XXL >= headerWidth && headerWidth > BREAK_POINTS.XL ;
  const L_CONDITION = BREAK_POINTS.XL >= headerWidth && headerWidth > BREAK_POINTS.L;
  const M_CONDITION = BREAK_POINTS.L >= headerWidth && headerWidth > BREAK_POINTS.M;
  const S_CONDITION = BREAK_POINTS.M >= headerWidth && headerWidth > BREAK_POINTS.S;
  const XS_CONDITION = BREAK_POINTS.S >= headerWidth && headerWidth > BREAK_POINTS.XXS;
  const XXS_CONDITION = BREAK_POINTS.XXS >= headerWidth && SPACE_FOR_BREAK.XXS > distanceBetwen;



  if (XXL_CONDITION) {
   if(isDistanceToSmall('XXL', distanceBetwen)) {
        addStyling(styleTag);
    } else {
        removeStyling(styleTag);
    }
    
} else if (XL_CONDITION) {
    if(isDistanceToSmall('XL', distanceBetwen)) {
         addStyling(styleTag);
    } else {
        removeStyling(styleTag);
    }
} else if (L_CONDITION) {
    if(isDistanceToSmall('L', distanceBetwen)) {
         addStyling(styleTag);
    } else {
        removeStyling(styleTag);
    }
    
} else if (M_CONDITION) {
    if(isDistanceToSmall('M', distanceBetwen)) {
         addStyling(styleTag);
    } else {
        removeStyling(styleTag);
    }
    
} else if (S_CONDITION) {
    if(isDistanceToSmall('S', distanceBetwen)) {
         addStyling(styleTag);
    } else {
        removeStyling(styleTag);
    }
    
} else if (XS_CONDITION) {
    if(isDistanceToSmall('XS', distanceBetwen)) {
         addStyling(styleTag);
    }
    else {
        removeStyling(styleTag);
    }
} else if(XXS_CONDITION) {
    if(isDistanceToSmall('XXS', distanceBetwen)) {
         addStyling(styleTag);
       }
       else {
        removeStyling(styleTag);
    }
  }
}

 checkConditions();

 var timeout = false, // holder for timeout id
  delay = 250, // delay after event is "complete" to run callback
  calls = 0;

// window.resize callback function
function getDimensions() {
  checkConditions();
}

// window.resize event listener
window.addEventListener("resize", function () {

    getDimensions();
  // clear the timeout
 //clearTimeout(timeout);
  // start timing for event "completion"
  //timeout = setTimeout(getDimensions, delay);
});




