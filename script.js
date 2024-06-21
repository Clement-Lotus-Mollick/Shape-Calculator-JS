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
}


//  see you tommorow 