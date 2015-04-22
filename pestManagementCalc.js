function updateOutput() {
    var form = document.getElementById("calc");

    var investmentOutput = form.elements["investmentOutput"];

    var heatCost = parseInt(form.elements["heatCost"].value);
    var vehicleCost = parseInt(form.elements["vehicleCost"].value);    
    var trainingCost = parseInt(form.elements["trainingCost"].value);
    var insuranceCost = parseInt(form.elements["insuranceCost"].value);

    investmentOutput.value = heatCost + vehicleCost + trainingCost + insuranceCost;

    
    
    //step 2
    var revOutput = form.elements["treatmentRev"];
    var profitDollar = form.elements["profitDollar"];
    var profitPercent = form.elements["profitPercent"];

    var numTreatments = parseInt(form.elements["numOfTreatments"].value);
    
    revOutput.value = numTreatments * 1000;

    var treatmentCost = parseInt(form.elements["treatmentCost"].value);
    var rev = parseInt(revOutput.value);
    
    profitDollar.value = rev - treatmentCost;
    
    var profit = parseInt(profitDollar.value);
    
    profitPercent.value = (profit / rev).toFixed(2);

    
    
    //step3
    var investmentOutputTwo = form.elements["investmentOutputTwo"];
    var returnOnInvestment = form.elements["returnOnInvestment"];

    investmentOutputTwo.value = heatCost + vehicleCost + trainingCost + insuranceCost;

    //var grossProfit = parseInt(profitDollar.value);
    var investment = parseInt(investmentOutputTwo.value);

    returnOnInvestment.value = (profit / investment).toFixed(2);

    //sentence output
    var finalOutput = form.elements["returnOnInvestmentTwo"];
    var roi = returnOnInvestment.value;

    finalOutput.value = roi; /*(1 / roi).toFixed(2);*/

}
        
