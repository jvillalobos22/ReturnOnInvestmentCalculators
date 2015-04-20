function updateOutput() {
    var form = document.getElementById("calc");

    var investmentOutput = form.elements["investmentOutput"];

    var heatCost = parseInt(form.elements["heatCost"].value);
    var trainingCost = parseInt(form.elements["trainingCost"].value);
    var insuranceCost = parseInt(form.elements["insuranceCost"].value);

    investmentOutput.value = heatCost + trainingCost + insuranceCost;

    //step 2
    var monthlyExpense = form.elements["monthlyExpense"];
    var treatmentCost = form.elements["treatmentCost"];

    var infestationNumber = parseInt(form.elements["infestationNumber"].value);
    var infestationCost = parseInt(form.elements["infestationCost"].value);

    treatmentCost.value = infestationNumber * infestationCost;

    var roomCost = parseInt(form.elements["roomCost"].value);
    var treatmentCostTwo = parseInt(treatmentCost.value);
    monthlyExpense.value = roomCost + treatmentCostTwo;

    //step3
    var investmentOutputTwo = form.elements["investmentOutputTwo"];
    var returnOnInvestment = form.elements["returnOnInvestment"];

    investmentOutputTwo.value = heatCost + trainingCost + insuranceCost;

    var expenses = parseInt(monthlyExpense.value);
    var investment = parseInt(investmentOutputTwo.value);

    returnOnInvestment.value = (expenses / investment).toFixed(2);;

    //sentence output
    var finalOutput = form.elements["returnOnInvestmentTwo"];
    var roi = returnOnInvestment.value;

    finalOutput.value = roi;

}
        
