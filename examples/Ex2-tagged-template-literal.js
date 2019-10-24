(function() {
    const myTag = (literals, ...values) => {
        console.log('Literals', literals);
        console.log('Interpolation', values); 
      
        return 'Result from myTag';
      };
      
    const firstName = 'Anurag';
    const lastName = 'Pathak';
    
    const result = myTag `Hello ${firstName} ${lastName} !`;
      
    console.log(result);
})();   

