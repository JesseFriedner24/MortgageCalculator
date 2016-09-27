$(document).ready(function() {
$( "#btn" ).click(function() {
  var loanTerm = $("#term").val();
  var interestRate = $("#interest").val();
  var period = $("#period option:selected").val();
  var loanBalance = $("#loanBal").val();
  // number of payments 
var numberOfPayments = loanTerm * period
// monthly interest rate
var monthlyInterestRate = (interestRate / 100) / period
// compounded interest rate 
var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments)
// interest quotient 
var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1)
// final calculation 
var monthlyPayment = loanBalance * interestQuotient;
	$("#expectedoutput").text  ( "Your monthly payment is " + monthlyPayment.toFixed(2)); 
});
});




