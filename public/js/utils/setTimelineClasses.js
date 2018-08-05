//painting timeline

function chooseClass(item){
  $(item).removeClass().addClass('timelineLI');
  var tl = findByTimelineBlock($(item));

  if(tl.generateFullTimestamp()<literallyNowTimestamp) {
    tl.setStatus(0);
  }

  if((tl.status)!==0){
    if(tl.status===2){
      return   $(item).addClass('timelineLIFree');
    }  else if(tl.status===1){
          return $(item).addClass('timelineLINot');
      }
      $(item).addClass('timelineLIChosen');

  }else{
    $(item).addClass('timelineLIUnaval');
  }

};


function setTimelineClasses(){
jQuery('.timelineLI').each(function(index){

    // $(this).removeClass().addClass('timelineLI');
    //
    // if(timelineArray[index].status!==0){
    //
    //   if(timelineArray[index].status===2){
    //     return   $(this).addClass('timelineLIFree');
    //   }else if(timelineArray[index].status===1){
    //       return $(this).addClass('timelineLINot');
    //   }
    //   $(this).addClass('timelineLIChosen');
    // }else{
    //   $(this).addClass('timelineLIUnaval');
    // }

chooseClass(this);

  });
};

function setTimelineClassesForOneBlock(block){
// $(block).removeClass().addClass('timelineLI');
// var tl =findByTimelineBlock(block);
// if((tl.status)!==0){
//   if(tl.status===2){
//     return   $(block).addClass('timelineLIFree');
//   }  else if(tl.status===1){
//         return $(block).addClass('timelineLINot');
//     }
//     $(block).addClass('timelineLIChosen');
//
// }else{
//   $(block).addClass('timelineLIUnaval');
// }
  chooseClass(block);

};
