function GetParagraph1 (){
    var Input = [];
    for(var i = 1; i<=6;i++){
        Input.push(document.getElementById("Line"+i).value);
        Input.join(". ");
        document.getElementById("ShowParagraph1").innerHTML = Input.join (". ")
        
    }
}


    function GetParagraph2 (){
            var Input2 = [];
            for(var b = 1; b<=6;i++){
                Input2.push(document.getElementById("Lineb"+b).value);
                Input2.join(". ");
                document.getElementById("ShowParagraph2").innerHTML = Input2.join (". ")

            }
        }
        