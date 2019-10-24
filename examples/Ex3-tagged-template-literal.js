(function() {
    const highlight = (strings, ...values) => {
        let str = '';
        strings.forEach((string, i) => {
            str += string + (values[i] ? values[i] + '!!' : '');
        });
        return str;
      };
      
    const one = 'one-1';
    const two = 'two-2';
    
    const result = highlight `This string has two dynamic parts ${one} and ${two}`;
      
    console.log(result);
})();   

