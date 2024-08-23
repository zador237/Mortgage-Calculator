const mortgageInput = document.getElementById("mortgage-amount");
const mortgageTerm = document.getElementById("morgage-term");
const interestRate = document.getElementById("interestRate");
const clear = document.querySelector(".clear-all");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    const h1 = document.createElement('h1');
    const h3T = document.createElement('h3');

    let r = interestRate.value / 100 / 12;
    let n = mortgageTerm.value * 12;

    const radios = document.querySelectorAll('input[name="paymentType"]');
    let foundCheckedRadio = false;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked && mortgageInput.value !== '' && mortgageTerm.value !== '' && interestRate.value !== '') {
            foundCheckedRadio = true;
            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            const div = document.createElement('div');
            const p2 = document.createElement('p');
            const hr = document.createElement('hr');
            const p3 = document.createElement('p');
            const result = document.querySelector('.right-part');
       
            
            result.classList.remove('no-result');
            result.innerHTML = ''; // Clear previous results
            result.classList.add('result');
            div.classList.add('display');
            h1.setAttribute('id', 'monthly');
            h3T.setAttribute('id', 'total-repay');

            h3.textContent = 'Your results';
            p.innerHTML = `Your results are shown below based on the information<br> you provided. To adjust the results, edit the form and <br>click “calculate repayments” again.`;
            p2.textContent = 'Your monthly repayments';
            p3.textContent = "Total you'll repay over the term";

            div.appendChild(p2);
            div.appendChild(h1);
            div.appendChild(hr);
            div.appendChild(p3);
            div.appendChild(h3T);
            result.appendChild(h3);
            result.appendChild(p);
            result.appendChild(div);

            if (radios[i].classList.contains("repayment")) {
                let ratePlusOne = (1 + r) ** n;
                let numerator = mortgageInput.value * r * ratePlusOne;
                let denominator = ratePlusOne - 1;

                let mortgage = numerator / denominator;
                h1.textContent = `£${mortgage.toFixed(2).toLocaleString()}`;
                h3T.textContent = `£${(mortgage * n).toFixed(2).toLocaleString()}`;
            } else if (radios[i].classList.contains("interestOnly")) {
                let monthlyInterest = mortgageInput.value * r;
                h1.textContent = `£${(monthlyInterest.toFixed(2)).toLocaleString()}`;
                h3T.textContent = `£${(monthlyInterest * n).toFixed(2).toLocaleString()}`;
            }
            break; // Exit loop after finding the checked radio
        }
    }

    // if (!foundCheckedRadio && mortgageInput.value == '' && mortgageTerm.value == '' && interestRate.value == '') {
    //     // Displays a required message if no radio button is selected
    //     if (!document.querySelector(".req")) {
    //         const required = document.createElement("p");
    //         required.textContent = "This field is required";
    //         required.classList.add("req");
    //         document.querySelectorAll(".test").forEach((div) => {
    //             const required = document.createElement("p");
    //             required.textContent = "This field is required";
    //             required.classList.add("req");
    //             div.classList.remove("anti-required");
    //             div.classList.add("required");
    //             div.insertAdjacentElement("afterEnd", required);
    //         });
    //         const lastRadio = document.querySelector(".last-radio");
    //         lastRadio.insertAdjacentElement("afterEnd", required);
    //     }
    // }
   if (!foundCheckedRadio) {
        if (!document.querySelector(".req")) {
            const required = document.createElement("p");
            required.textContent = "This field is required";
            required.classList.add("req");
            document.querySelectorAll(".test").forEach((div) => {
                const input = div.querySelector('input[type="number"]');
                if(input.value == ''){
                    const required = document.createElement("p");
                    required.textContent = "This field is required";
                    required.classList.add("req");
                    div.classList.remove("anti-required");
                    div.classList.add("required");
                    div.insertAdjacentElement("afterEnd", required);
                }

            });

            // const test2 = document.querySelector('.test2');
            // test2.insertAdjacentElement('afterend',required);
            // const test3 = document.querySelector('.test3');
            // test3.insertAdjacentElement('afterend',required);
            const check = false;
            for (let i = 0; i <radios.length; i++) {
                if(radios[i].checked){
                    check =true;
                }
                
            }
   

                    if(check !== true){
           const lastRadio = document.querySelector(".last-radio");
            lastRadio.insertAdjacentElement("afterEnd", required);
            console.log('red');
                    }

        }

    }
    // else if(mortgageInput.value == '' ){
    //     if (!document.querySelector(".req")) {
    //         const required = document.createElement("p");
    //         required.textContent = "This field is required";
    //         required.classList.add("req");
    //         const test1 = document.querySelector('.test1');
    //         test1.classList.remove("anti-required");
    //         test1.classList.add('required');
    //         test1.insertAdjacentElement('afterend',required);

    //     }

    // }
    // else if(mortgageTerm.value == '' ){
    //     if (!document.querySelector(".req")) {
    //         const required = document.createElement("p");
    //         required.textContent = "This field is required";
    //         required.classList.add("req");
    //         const test2 = document.querySelector('.test2');
    //         test2.classList.remove("anti-required");
    //         test2.classList.add('required');
    //         test2.insertAdjacentElement('afterend',required);

    //     }
    // }
    // else if(interestRate.value == ''){
    //     if (!document.querySelector(".req")) {
    //         const required = document.createElement("p");
    //         required.textContent = "This field is required";
    //         required.classList.add("req");
    //         const test3 = document.querySelector('.test3');
    //         test3.classList.remove("anti-required");
    //         test3.classList.add('required');
    //         test3.insertAdjacentElement('afterend',required);

    //     }
    // }
    // else if(!foundCheckedRadio ){
    //     const required = document.createElement("p");
    //         required.textContent = "This field is required";
    //         required.classList.add("req");
 
    // }
});

clear.addEventListener("click", () => {
    const img = document.querySelector('.calc-img');
    const h3 = document.querySelector('.main-h3-for-the-rightpart');
    const p = document.querySelector('.main-p-for-the-rightpart');

    mortgageInput.value = "";
    mortgageTerm.value = "";
    interestRate.value = "";

    const result = document.querySelector('.right-part');
    result.innerHTML = '';
    result.classList.remove('result');
    result.classList.add('no-result');

    if (document.querySelector(".req")) {
        document.querySelectorAll(".test").forEach((div) => {
            document.querySelectorAll(".req").forEach((req) => {
                req.classList.remove("req");
                req.remove();
            });
            div.classList.add("anti-required");
            div.classList.remove("required");
        });

    }
    result.appendChild(img);
    result.appendChild(h3);
    result.appendChild(p);
    // Uncheck all radio buttons
    const radios = document.querySelectorAll('input[name="paymentType"]');
    radios.forEach(radio => {
        radio.checked = false;
    });
});
