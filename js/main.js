$(".number").click(function () {
    let displayValue = $("#display").val();
    if (displayValue === "0") return;
    $("#display").val(displayValue + $(this).data("number"));
});

$(".decimal").click(function () {
    let displayValue = $("#display").val();
    let lastNumber = displayValue.split(["+", "-", "*", "/"]).pop();
    if (lastNumber.includes(".")) return;
    $("#display").val(displayValue + $(this).data("decimal"));
});

$(".operator").click(function () {
    let displayValue = $("#display").val();
    let lastChar = displayValue.slice(-1);

    if (["+", "-", "*", "/"].includes(lastChar)) {
        $("#display").val(displayValue.slice(0, -1) + $(this).data("operator"));
    } else {
        $("#display").val(displayValue + $(this).data("operator"));
    }
});

$(".equals").click(function () {
    let result = eval($("#display").val());
    $("#display").val(result);
});

$(".clear").click(function () {
    $("#display").val(null);
});