(function() {
    
    function isLargeScreen() {
        return false;
    }
    let item = {
        isCollapsed : true
    }
    
    // Single line
    const simpleString = `This is a single line String`;
    
    // Multiple Line
    const multiLineString = `Line 1
                             Line 2`;
    
    const a = 1, b = 2;
    
    // string with expressions
    const expressionString = `Sum of ${a} and ${b} is ${a+b}`;
    
    const classSring = `header ${ isLargeScreen() ? '' : `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;
    
    
    
    console.log(`simpleString ${simpleString}`);
    
    console.log(`multiLineString ${multiLineString}`);
    
    console.log(`expressionString ${expressionString}`);
    
    console.log(`classSring ${classSring}`);

})(); 



