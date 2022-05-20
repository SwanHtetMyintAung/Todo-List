var ul = document.querySelector('ul');
        var input = document.querySelector('#text');
        var btn = document.querySelector('#addBtn');
        
        
        btn.onclick = function (){
            let str = input.value;
            if(str == ""){
                alert('put something in the box');
            }else{
                createHtml(str);
                input.value = "";
            }
        }
        //adding button to the already exisitng one
        var list = document.querySelectorAll('li');
        for(let i=0;i<list.length;i++){
            //creating and adding div to the li
            let div = document.createElement('div');
            div.classList = "d-inline float-end";
            list[i].prepend(div);
            
            //creating and adding the delete button 
            let strOne = 'Delete';
            let btnDelete = document.createElement('button');
            btnDelete.classList="btn btnDelete btn-danger";
            btnDelete.innerHTML = strOne;
            div.prepend(btnDelete);
        
            //this's Done button
            let strTwo = 'Done';
            let btnDone = document.createElement('button');
            btnDone.classList ="btn btnDone btn-info";
            btnDone.innerHTML = strTwo;
            div.prepend(btnDone);
        }
        
        
        function createHtml(str){
            //creating new li and prepenind to the ul
            let li = document.createElement('li');
            li.classList = "list-group-item";
            li.innerHTML = str;
            ul.prepend(li);
            
            //creating div for the added one
            let div = document.createElement('div');
            div.classList = "d-inline float-end";
            li.appendChild(div);
            
            //creating button "Done" for the added one
            let btnDoneAry = [];
            let strTwo = 'Done';
            let btnDone = document.createElement('button');
            btnDone.classList ="btn btnDone btn-info";
            btnDone.innerHTML = strTwo;
            div.appendChild(btnDone);
            btnDoneAry.push(btnDone);
            
            //check after clicking the done button for added new one
            for(let i=0;i < btnDoneAry.length;i++){
                btnDoneAry[i].onclick = function (){
                let div = this.parentElement.parentElement;
                div.classList.toggle('stroke');
                div.classList.toggle('bg-secondary');
                div.classList.toggle('text-light');
              }
            }
            
            //creatin button "Delete" for the addded one
            let btnDeleteAry = []
            let strOne = 'Delete';
            let btnDelete = document.createElement('button');
            btnDelete.classList="btn btnDelete btn-danger";
            btnDelete.innerHTML = strOne;
            div.appendChild(btnDelete);
            btnDeleteAry.push(btnDelete);
            
            
            //deleting function for the manually input things
            for(let i=0;i < btnDeleteAry.length;i++){
            btnDeleteAry[i].onclick = function (){
                this.parentElement.parentElement.style.display = 'none'
            }
            }
        }
        
        //deleting function for the already One
        var btnDeleteAll = document.querySelectorAll('.btnDelete');
        for(let i=0;i < btnDeleteAll.length;i++){
            btnDeleteAll[i].onclick = function (){
                this.parentElement.parentElement.style.display = 'none'
            }
        }
        
        //check after clicking the done button for existing One
        var btnDoneAll = document.querySelectorAll('.btnDone');
        for(let i=0;i < btnDoneAll.length;i++){
            btnDoneAll[i].onclick = function (){
                let div = this.parentElement.parentElement;
                div.classList.toggle('stroke');
                div.classList.toggle('bg-secondary');
                div.classList.toggle('text-light');
            }
        }
