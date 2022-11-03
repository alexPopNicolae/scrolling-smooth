$(document).ready(() => {
   

// aici trebuie sa selectezi elementele tale    
const right = $( '.right' ).first();
const left = $( '.left' ).first();
const header = $( '.header' ).first();
const hamburger = $( '.hamburger' ).first();
const styleTag = $( 'style[data-styling]' )[0]; //asta trebuie asa pentru ca ne trebuie tagul pur din dom nu ce returneaza jquery


//aici pui breakpointurile tale
const BREAK_POINTS = { XXL: 1920, XL: 1400, L: 1280, M: 1024, S: 800, XS: 500, XXS: 300};

//aici pui spatiile care trebuie respectate
const SPACE_FOR_BREAK = { XXL: 56, XL: 40, L: 32, M: 20, S: 20, XS: 20, XXS: 20 };

checkConditions();

$( window ).resize(() => {
    checkConditions();
});

function checkConditions() {
  const headerWidth = header.width();
  const rightWidth = right.width();
  const leftWidth = left.width();
  const distanceBetwen = headerWidth - rightWidth - leftWidth;

  const XXL_CONDITION = BREAK_POINTS.XXL < headerWidth && SPACE_FOR_BREAK.XXL > distanceBetwen;
  const XL_CONDITION = BREAK_POINTS.XXL >= headerWidth && headerWidth > BREAK_POINTS.XL ;
  const L_CONDITION = BREAK_POINTS.XL >= headerWidth && headerWidth > BREAK_POINTS.L;
  const M_CONDITION = BREAK_POINTS.L >= headerWidth && headerWidth > BREAK_POINTS.M;
  const S_CONDITION = BREAK_POINTS.M >= headerWidth && headerWidth > BREAK_POINTS.S;
  const XS_CONDITION = BREAK_POINTS.S >= headerWidth && headerWidth > BREAK_POINTS.XXS;
  const XXS_CONDITION = BREAK_POINTS.XXS >= headerWidth && SPACE_FOR_BREAK.XXS > distanceBetwen;

  const conditions = [
    {label: 'XXL', value: XXL_CONDITION},
    {label: 'XL', value: XL_CONDITION},
    {label: 'L', value: L_CONDITION},
    {label: 'M', value: M_CONDITION},
    {label: 'S', value: S_CONDITION},
    {label: 'XS', value: XS_CONDITION},
    {label: 'XXS', value: XXS_CONDITION},
];

  const CONDITION = conditions.find(condition => condition.value == true);


  if(isDistanceToSmall(CONDITION.label, distanceBetwen)) {
    addStyling(styleTag)
  } else {
    removeStyling(styleTag);
  }
}


function isDistanceToSmall(screenType, distance) {
    if(distance < SPACE_FOR_BREAK[screenType]) {
        return true;
    }
    return false;
}

function addStyling(tag) {
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
}

function removeStyling(tag) {
    tag.innerHTML = "";
  };

});
