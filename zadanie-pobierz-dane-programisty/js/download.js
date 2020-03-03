function progData(){
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    .then(resp => resp.json())
    .then(progData => {
        console.log(progData)

        // document.getElementById('dane-programisty').innerText = progData;
        // tablica...
        // let info = ['imie: ' + progData.imie , 'nazwisko:  ' + progData.nazwisko , 'zawod: ' + progData.zawod , 'firma: ' + progData.firma]
        // document.getElementById('dane-programisty').innerText = info;

        // document.getElementById('dane-programisty').innerText = 'imie: ' + progData.imie;

        let all = document.getElementById('dane-programisty')

        // .innerText = 'imie: ' + progData.imie, 'nazwisko: ' + progData.nazwisko,
        //  'zawod: ' + progData.zawod, 'firma: ' + progData.firma
        

        // all.innerText 


    
        let name = document.getElementById('dane-programisty').innerText = 'imie: ' + progData.imie;
        let surname = document.getElementById('dane-programisty').innerText = 'nazwisko:  ' + progData.nazwisko;
        let job = document.getElementById('dane-programisty').innerText = 'zawod: ' + progData.zawod;
        let firm = document.getElementById('dane-programisty').innerText = 'firma: ' + progData.firma;

        


        // zamiana obiektu JSON na string:
        // var objectData = progData;
        // var myJSON = JSON.stringify(dupa);
        // document.getElementById('dane-programisty').innerHTML = myJSON;
    });
}


document.getElementById('getData').addEventListener('click', progData);


