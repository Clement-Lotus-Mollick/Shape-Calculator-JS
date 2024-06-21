function CalculateTriangle(){ // for base b
    const inputBase = document.getElementById('inputBase');
    const inputBaseValue = inputBase.value;
    const IBVconvert = parseFloat(inputBaseValue);
    console.log(IBVconvert);

    // for tri height h
    const inputHeight = document.getElementById('inputHeight');
    const inputHeightValue = inputHeight.value;
    const IHVconvert = parseFloat(inputHeightValue);
    console.log(IHVconvert);


        const finalCal = 0.5*IBVconvert*IHVconvert;
        console.log(finalCal);


         // append child 

    const theDiv = document.getElementById('theDispFinal'); // 1. kisher moddhe dhokaba
    const theH2 = document.createElement('h2');  // 2. ki dhokaba ta create koro
    theH2.innerText = finalCal;  // 3. tar moddhe inner text dau
     
   
    theDiv.appendChild(theH2); 
    theH2.style.color ='yellow';
    theH2.style.backgroundColor ='gray';
    theH2.style.fontWeight ='bold';
    theH2.style.margin ='4px';
}


//  for rectangle 
function CalculateRectangle(){
    const inputL = document.getElementById('inputLength');
    const inputLvalue = inputL.value;
    const IVLconv = parseFloat(inputLvalue);
    console.log(IVLconv);

    // for width input 
    const inputW = document.getElementById('inputWidth');
    const inputWvalue = inputW.value;
    const IWVconv = parseFloat(inputWvalue);
    console.log(IWVconv);

    const RectCalc = IVLconv*IWVconv;
    console.log(RectCalc);


     // append child 

     const theDiv = document.getElementById('theDispFinal'); // 1. kisher moddhe dhokaba
     const theH2 = document.createElement('h2');  // 2. ki dhokaba ta create koro
     theH2.innerText = RectCalc;  // 3. tar moddhe inner text dau
      
    
     theDiv.appendChild(theH2); 
     theH2.style.color ='#9370DB';
     theH2.style.backgroundColor ='white';
     theH2.style.fontWeight ='bold';
     theH2.style.margin ='4px';
     theH2.style.border ='2px solid blue';
}


// for Parallelogram with add event listener up all are onclick method
document.getElementById('ParaClick').addEventListener('click', function CalculatePara(){
    const inputParaB = document.getElementById('ParaBase');
    const inputParaBV = inputParaB.value;
    const paraBconv = parseFloat(inputParaBV);

    // for h 
    const inputParaH = document.getElementById('ParaHeight');
    const inputParaHV = inputParaH.value;
    const paraHconv = parseFloat(inputParaHV);


    const finalparacalc = paraBconv*paraHconv;
    console.log(finalparacalc);
    
    // append child 

    const theDiv = document.getElementById('theDispFinal'); // 1. kisher moddhe dhokaba
    const theH2 = document.createElement('h2');  // 2. ki dhokaba ta create koro
    theH2.innerText = finalparacalc;  // 3. tar moddhe inner text dau
     
   
    theDiv.appendChild(theH2); 
    theH2.style.color ='lightgreen';
    theH2.style.backgroundColor ='gray';
    theH2.style.fontWeight ='bold';
    theH2.style.margin ='4px';
})