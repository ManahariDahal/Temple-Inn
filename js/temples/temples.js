const rexburg = 'https://api.openweathermap.org/data/2.5/weather?id=5605242&units=imperial&appid=fbcf836cec761e369e64b49c8b420878';
const slc = 'https://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&appid=fbcf836cec761e369e64b49c8b420878';
const idahofalls = 'https://api.openweathermap.org/data/2.5/weather?id=5596475&units=imperial&appid=fbcf836cec761e369e64b49c8b420878';
const provo = 'https://api.openweathermap.org/data/2.5/weather?id=5780026&units=imperial&appid=fbcf836cec761e369e64b49c8b420878';

fetch(rexburg)
    .then(response => response.json())
    .then(jsonObject => {
        let high = document.createElement("p");
        let current = document.createElement("p");
        let div = document.createElement('div');
        let h3 = document.createElement('h3');

        h3.innerHTML = "Rexburg";
        current.innerHTML = "Current temperature:" + Math.ceil(jsonObject.main.temp);
        high.innerHTML = "Max temperature:" + Math.ceil(jsonObject.main.temp_max);

        div.appendChild(h3);
        div.appendChild(current);
        div.appendChild(high);
        
        document.querySelector('div.cards').appendChild(div);
})


fetch(slc)
    .then(response => response.json())
    .then(jsonObject => {
        let high = document.createElement("p");
        let current = document.createElement("p");
        let div = document.createElement('div');
        let h3 = document.createElement('h3');

        h3.innerHTML = "Salt Lake City";
        current.innerHTML = "Current temperature:" + Math.ceil(jsonObject.main.temp);
        high.innerHTML = "Max temperature:" + Math.ceil(jsonObject.main.temp_max);

        div.appendChild(h3);
        div.appendChild(current);
        div.appendChild(high);
        
        document.querySelector('div.cards').appendChild(div);
})

fetch(idahofalls)
    .then(response => response.json())
    .then(jsonObject => {
        let high = document.createElement("p");
        let current = document.createElement("p");
        let div = document.createElement('div');
        let h3 = document.createElement('h3');

        h3.innerHTML = "Idaho Falls";
        current.innerHTML = "Current temperature: " + Math.ceil(jsonObject.main.temp);
        high.innerHTML = "Max temperature: " + Math.ceil(jsonObject.main.temp_max);

        div.appendChild(h3);
        div.appendChild(current);
        div.appendChild(high);
        
        document.querySelector('div.cards').appendChild(div);
})

fetch(provo)
    .then(response => response.json())
    .then(jsonObject => {
        let high = document.createElement("p");
        let current = document.createElement("p");
        let div = document.createElement('div');
        let h3 = document.createElement('h3');

        h3.innerHTML = "Provo";
        current.innerHTML = "Current temperature: " + Math.ceil(jsonObject.main.temp);
        high.innerHTML = "Max temperature: " + Math.ceil(jsonObject.main.temp_max);

        div.appendChild(h3);
        div.appendChild(current);
        div.appendChild(high);
        
        document.querySelector('div.cards').appendChild(div);
})




const requestURL = './json/temples.json';
fetch (requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);

        const temples = jsonObject['temples'];
        for (let i = 0; i < temples.length; i++) 
        {
            // let three_town = JSON.stringify(temples);
            // let set = new Set(['Preston', 'Soda Springs', 'Fish Haven']);
            let card = document.createElement('section');
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let summary = document.createElement('h3');

            let telephone = document.createElement('p');
            let year = document.createElement('p');
            let email = document.createElement('p');
            let services = document.createElement('p');
            let ordinance_schedule = document.createElement('p');
            let session_schedule = document.createElement('p');
            let closure = document.createElement('p');
            let image = document.createElement('img');

            h2.innerHTML = temples[i].name;
            summary.innerHTML = temples[i].summary;
            telephone.innerHTML = "Telephone: " + temples[i].telephone;
            year.innerHTML = "Year Founded: " + temples[i].yearFounded;
            email.innerHTML = "Email: " + temples[i].email;
            services.innerHTML = "Services: " + temples[i].services;
            ordinance_schedule.innerHTML = "Ordinance Schedule: " + temples[i].ordinanceSchedule;
            session_schedule.innerHTML = "Session Schedule: " + temples[i].sessionSchedule;
            closure.innerHTML = "Closure: " + temples[i].closure;
            image.setAttribute('src', 'assets/temples/' + temples[i].photo);

            div.appendChild(h2);
            div.appendChild(summary);
            div.appendChild(telephone);
            div.appendChild(year);
            div.appendChild(email);
            div.appendChild(services);
            div.appendChild(ordinance_schedule);
            div.appendChild(session_schedule);
            div.appendChild(closure);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card).appendChild(div);
        }

        
    })

