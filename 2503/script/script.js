

function scrivi(n)
{
    document.getElementById("operazioni").value += n;
}

function reset()
{
    document.getElementById("operazioni").value = "";
}

function cancella() 
{
    let CANC = document.getElementById("operazioni").value;
    document.getElementById("operazioni").value = CANC.substring(0, CANC.length-1)
}


function formula(){
		var res = [];
				
		if(document.getElementById("operazioni").value.includes("+"))
        {
		res = document.getElementById("operazioni").value.split('+');
		return Number(res[0]) + Number(res[1]);
		}
		
		else if(document.getElementById("operazioni").value.includes("-")){
		res = document.getElementById("operazioni").value.split('-');
		return Number(res[0]) - Number(res[1]);
		}
		
		else if(document.getElementById("operazioni").value.includes("/")){
		res = document.getElementById("operazioni").value.split('/');
		return Number(res[0]) / Number(res[1]);
		}
		
		else{
		res = document.getElementById("operazioni").value.split('*');
		return Number(res[0]) * Number(res[1]);
		}
}
	
function TastoUguale(){	
    var risultato = formula()
    document.getElementById('operazioni').value = risultato; 
    }


/* CON EVAL  */

function scrivi1(n)
{
    document.getElementById("operazioni1").value += n;
}

function reset1()
{
    document.getElementById("operazioni1").value = "";
}

function cancella1() 
{
    let CANC = document.getElementById("operazioni1").value;
    document.getElementById("operazioni1").value = CANC.substring(0, CANC.length-1)
}


function TastoUguale1() 
{ 
    document.getElementById("operazioni1").value = eval(document.getElementById("operazioni1").value);
}

