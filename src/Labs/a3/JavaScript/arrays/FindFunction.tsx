function FindFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2', 'string3'];
    
    const four = numberArray1.find(a => a === 4);
    const string3 = stringArray1.find(a => a === 'string3');

    return(
        <>
        <h4>Find function</h4>
        {/* numberArray1 = {numberArray1}<br/> */}
        four = {numberArray1.find(a => a === 4)}<br/>
        string3 = {string3}<br/>
        </>
    );
}
export default FindFunction;