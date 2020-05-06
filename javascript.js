var life = document.getElementById("smile").innerHTML;

        $(document).ready(function(){
            $(".container-fluid").hide().css("display","none");
            $("#mainlogo").click(function() {
                $("#main").fadeOut(3000).css("display","none");
                $(".container-fluid").fadeIn(3000).css("display","block");
                document.getElementById("lives").innerHTML = "";
                for(let i=0;i<life;i++) {
                    document.getElementById("lives").innerHTML += "&#10084";
                }
            });
        });


        var guess = ["hello","world","game","word","laptop","mobile","program","password","username","mouse","global","community","result","father","mother","sister","brother","teacher","paper","exam","text","birthday","super","man","woman","door","window","sky","red","blue","green","best","worst","marks","happy","joke","good","goodbye"];
        var random,guessme,data;
        var dash = [];
        var result = document.getElementById("result");
        var smile = document.getElementById("simle");
        var flag = 0;
        var limit = document.getElementById("limit").value;
        var answer = document.getElementById("answer");
        var result = document.getElementById("result");
        var gamelimit = limit;

        function fullcheck(data,guesso,guessme) {
            if(data == guesso) {
                result.innerHTML = "You Win";
                result.style.color = "green";
                answer.innerHTML = guessme;
                setInterval( $.alert({ title: 'Player is Winner', content: 'Press Reset For Game Reset',}) ,1000);
                document.getElementById("data").disabled = true;
                document.getElementById("button").style.display = "hidden";
            } 
            return 1;
        }

        function check(data,guessme,life) {
            for(let i=0; i<guessme.length; i++) {
                for(let j=0; j<data.length; j++) {
                    if(data[j] === guessme[i]) {
                        dash[i] = data[j];
                        answer.innerHTML = dash;
                        flag = 1;
                    }
                }
            }
            if(flag == 1) {
                flag = 0;
            } else {
                life--;
                document.getElementById("lives").innerHTML = "";
                for(let i=0;i<life;i++) {
                    document.getElementById("lives").innerHTML += "&#10084";
                }
                document.getElementById("smile").innerHTML = life;
            }

            var guesso = [guessme];
            fullcheck(data,guesso,guessme);
            return life;
        }

        function gameon() {
            data = document.getElementById("data").value;
            var life = document.getElementById("smile").innerHTML;
            check(data,guessme,life--);
            document.getElementById("data").value = "";
            if(life == 0) {
                var result = document.getElementById("result");
                result.style.color = "red";
                result.innerHTML = "You Lose";
                answer.innerHTML = guessme;
                setInterval( $.alert({ title: 'Player is Losser', content: 'Press Reset For Game Reset',}) ,1000);
            }
        }
        
        function resetme() {
            answer.innerHTML = "";
            document.getElementById("smile").innerHTML = gamelimit;
            dash = [];
            random = Math.floor(Math.random() * guess.length);
            guessme = guess[random];
            for(let i=0; i<guessme.length; i++) {
                dash[i] = "_";
            }
            var mydash = [dash];
            result.innerHTML = "All The Best";
            document.getElementById("data").disabled = false;
            document.getElementById("button").style.display = "block";
            answer.innerHTML = mydash;
            document.getElementById("data").value = "";
            result.style.color = "black";
            document.getElementById("lives").innerHTML = "";
            for(let i=0;i<limit;i++) {
                    document.getElementById("lives").innerHTML += "&#10084";
            }
        }

        function changediff() {
            var gamelimit = document.getElementById("limit").value;
            document.getElementById("smile").innerHTML = gamelimit;
            document.getElementById("lives").innerHTML = "";
            for(let i=0;i<gamelimit;i++) {
                    document.getElementById("lives").innerHTML += "&#10084";
            }
        }