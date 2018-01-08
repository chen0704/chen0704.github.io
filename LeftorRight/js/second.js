var i = 0;
			var j=[1,2,3,4,5,6,7,8,9,10];
			var content = document.getElementById("subject");
			var items = content.getElementsByTagName("ul");
			var itemss = items[i].getElementsByTagName("li");
			var oNext = document.getElementById('next');
			var oLast =document.getElementById('last');
            var oResult = document.getElementById('result');
			var ogo = document.getElementById('go');
			var oTop = content.offsetTop;
			var oleft = document.getElementById('left');
			var oright = document.getElementById('right');
            var images=['oleft','oright'];
            var Imagename=images[parseInt(Math.random()*images.length)];
            var oRe = document.getElementById('rego');
            
            ogo.addEventListener("click",begin);
			function begin(e) {
				oNext.style.visibility = "visible";
				items[0].style.visibility = "visible";
				oLast.style.visibility = "visible";
			}
			oLast.addEventListener("click",last);
			function last(e) {
				var topn = oNext.offsetTop;
				i = i -1;
				ogo.style.visibility = "hidden";
				items[i].style.visibility = "visible";
				items[i+1].style.visibility = "hidden";
                console.log(oTop);                
                if(i==10){
                	oResult.style.visibility = "visible";
                	oRe.style.visibility = "visible";
                	oRe.style.display="block";
                }
                
			}
			oNext.addEventListener("click",next);
			function next(e) {
				var topn = oNext.offsetTop;
				i = i + 1;
				ogo.style.visibility = "hidden";
				items[i].style.visibility = "visible";
				items[i-1].style.visibility = "hidden";
				
                console.log(oTop);                
                if(i==10){
                	oResult.style.visibility = "visible";
                	oRe.style.visibility = "visible";
                	oRe.style.display="block";
                }
                
			}
			oResult.addEventListener("click",result);
			function result(e){
				console.log(Imagename);
				if(Imagename == "oright"){
					oright.style.visibility = "visible";
					alert("测试所显示您为右脑！理性，有逻辑。");
				}
				if(Imagename == "oleft"){
					oleft.style.visibility = "visible";
					alert("测试所显示您为左脑！感性直观。");
				}
			}
			oRe.addEventListener("click",rego);
			function rego(e){
				window.location.reload();
			}