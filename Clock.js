setInterval(function () {
    const time=document.getElementById('Clock');

let date = new Date();
time.innerHTML = date.toLocaleTimeString();
    
},1000);

    function toggleBackgroundColor() {
        const time=document.getElementById('Clock');

        const container = document.getElementById('container');
        const circles = document.getElementsByClassName('circles');
        const moon = document.getElementById('moon');
        const sun = document.getElementById('sun');
        const button = document.querySelector('button');
        if (container.style.backgroundColor == 'white') {
            container.style.backgroundColor = 'black';
            for (let i = 0; i < circles.length; i++) {
                circles[i].style.background = 'linear-gradient(180deg,white,rgb(255, 59, 196))';
            }
            

            container.style.transition='0.5s ease-in'
            moon.style.transform = 'rotate(0) scale(1)';
            sun.style.transform = 'rotate(0) scale(0)';
            button.style.backgroundColor='black';
            button.style.color='white';
            time.style.backgroundColor='red'
            time.style.color='white';
            time.style.transition='0s ease'
           
        } else if(container.style.backgroundColor =='black') {
            container.style.backgroundColor = 'white';
            for (let i = 0; i < circles.length; i++) {
                circles[i].style.background = 'linear-gradient(90deg, yellow, orange)';
            }
            moon.style.transform = 'rotate(360deg) scale(0)';
            sun.style.transform = 'rotate(0) scale(1)';
            button.style.backgroundColor='white';
            button.style.color='black';
            time.style.backgroundColor='blue'
            time.style.color='white'
        }
    }
    
