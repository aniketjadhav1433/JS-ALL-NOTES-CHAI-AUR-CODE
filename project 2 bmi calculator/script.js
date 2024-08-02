let form = document.querySelector("form")
let results = document.querySelector(".result")

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    let height = parseInt(document.querySelector("#height").value)
    let weight = parseInt(document.querySelector("#weight").value)
    console.log('height and weight',height, weight);

    if(height === "" || height < 0 || isNaN(height)){     // isnan will check whether it is a number or not if it is a number it will return true
        results.classList.add("border")
        results.innerHTML = "enter a valid height"
    }else if(weight === "" || weight < 0 || isNaN(weight)){
        results.classList.add("border")
        results.innerHTML = "enter a valid weight"
    }else{
        let bmi = (weight / ((height * height) 
        / 10000)).toFixed(2)

        if(bmi < 18.6){
            results.classList.add("border")
            results.innerHTML = `your bmi is :${bmi} <br> you are under weight`
        }else if(bmi >= 18.6 && bmi <= 24.9){
            results.classList.add("border")
            results.innerHTML = `your bmi is :${bmi} <br> you have normal bmi `
        }
        else if(bmi > 24.9){
            results.classList.add("border")
            results.innerHTML = `your bmi is :${bmi} <br> you are over weight`
        }

       
    }
} )