function evaluateExpression() {
    const display = document.getElementById('display');
    try {
        const result = Function('"use strict"; return (' + display.value + ')')();
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
