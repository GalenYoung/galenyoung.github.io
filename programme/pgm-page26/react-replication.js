/**
 * des : copy method of react
 * Browser compatibility: IE9+
 * @param  {[obj]} externalConfig
 *     value        [The value to copy]
 *     cutOutLength [The length of the intercept(default:check all)] -Optional  
 *     fail         [Failed execution function] -Optional  
 * @return {[undefined]}    undefined
 */
export default function(externalConfig){
    let currentFocus = document.activeElement;

    let fictitiousInput = document.getElementById('fictitiousInput');
    let defaultConfig = {
        cutOutLength : [0]
    };

    let config = {...defaultConfig,...externalConfig};
    config.value = config.value.slice(...config.cutOutLength);

    if(!fictitiousInput){
        fictitiousInput = document.createElement('input');

        let attrConfig = {
            type:"text",
            value:config.value, 
            id:"fictitiousInput"
        };
        let styleConfig = {
            padding:0,
            border:"none",
            margin:0,
            position:"fixed",
            zIndex:-1,
        };
        Object.keys(styleConfig).map( elem => fictitiousInput.style[elem] = styleConfig[elem]);
        Object.keys(attrConfig).map( elem => fictitiousInput.setAttribute(elem,attrConfig[elem]));

        document.body.appendChild(fictitiousInput);    
    }else{
        fictitiousInput.setAttribute('value',config.value);
    }
    
    fictitiousInput.focus();
    fictitiousInput.select(); 
    
    try{
        if(document.execCommand('copy', false, null)){
            document.execCommand("Copy");
        }else{
            config.fail&&config.fail();
        };     
    } catch(err){
        config.fail&&config.fail();
    }
          
    currentFocus.focus();
}