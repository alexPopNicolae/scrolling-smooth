$(document).ready(() => {  
const right = $( '.right' ).first();
const left = $( '.left' ).first();
const header = $( '.header' ).first();
const hamburger = $( '.hamburger' ).first();
const BREAK_POINTS = { XXL: 1920, XL: 1400, L: 1280, M: 1024, S: 800, XS: 500, XXS: 300};
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
  const elementsList = [ {el: right, class:'invisible'}, {el: left, class:'invisible'}, {el: hamburger, class:'visible'}];
  const conditions = [ 
    {tag: 'XXL', val: BREAK_POINTS.XXL < headerWidth && SPACE_FOR_BREAK.XXL > distanceBetwen},
    {tag: 'XL', val: BREAK_POINTS.XXL >= headerWidth && headerWidth > BREAK_POINTS.XL},
    {tag: 'L', val: BREAK_POINTS.XL >= headerWidth && headerWidth > BREAK_POINTS.L},
    {tag: 'M', val: BREAK_POINTS.L >= headerWidth && headerWidth > BREAK_POINTS.M},
    {tag: 'S', val: BREAK_POINTS.M >= headerWidth && headerWidth > BREAK_POINTS.S},
    {tag: 'XS', val: BREAK_POINTS.S >= headerWidth && headerWidth > BREAK_POINTS.XXS},
    {tag: 'XXS', val: BREAK_POINTS.XXS >= headerWidth && SPACE_FOR_BREAK.XXS > distanceBetwen}];
  const ACTIVE_CONDITION = conditions.find( condition => condition.val == true );
  styleElementsOnCondition( ACTIVE_CONDITION, distanceBetwen, elementsList );
}

function styleElementsOnCondition( CONDITION, distanceBetwen, elementsList ) {
    if( isDistanceToSmall( CONDITION.tag, distanceBetwen ) ) {
        addStyling( elementsList )
      } else {
        removeStyling( elementsList );
    }
}

function isDistanceToSmall( screenType, distance ) {
    if( distance < SPACE_FOR_BREAK[screenType] ) {
        return true;
    }
    return false;
}

function addStyling( elementsList ) {
        elementsList.forEach( ( element ) => element.el.addClass( element.class ) );
}

function removeStyling( elementsList ) {
    elementsList.forEach( ( element ) => element.el.removeClass( element.class ) );
  };
  
});
