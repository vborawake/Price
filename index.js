const cards = document.getElementsByClassName('card-body');
const accordions = document.getElementsByClassName('accordion_item');

function setInactive () {
    Array.from(cards).forEach((card, i) => {
        if (i !== 0) {
            card.classList.add('inactive');
        }
    });
}

function addToAccordion(index, e) {
    const header = accordions[index].querySelector('.header');
    const content = accordions[index].querySelector('.content');
    if (index === 0) {
        let choice;
        Array.from(accordions[index].querySelectorAll('button')).forEach(button => {
            if (button.classList.contains('btn_active')) {
                header.style.display = 'flex';
                requestAnimationFrame(() => {
                    accordions[index].querySelector('#choice').innerHTML = button.innerText;
                    accordions[index].querySelector('#choice').style.fontWeight = '600';
                    header.style.transform = 'scaleY(1)';
                    // accordions[index].querySelector('.header').style.display = 'block';
                    header.style.height = 'fit-content';
                    content.style.transform = 'scaleY(0)';
                    content.style.height = '0';
                });
            }
        });
    }
    else if (index === 1) {
        Array.from(accordions[index].querySelectorAll('button')).forEach(button => {
            if (button.classList.contains('btn_active_house')) {
                header.style.display = 'flex';
                accordions[index].querySelector('#house_type').innerHTML = button.innerText;
                if (e.target.id === 'Yes') accordions[index].querySelector('#balcony_terrace').innerHTML = ' with balcony or terrace';
                else accordions[index].querySelector('#balcony_terrace').innerHTML = ' without balcony or terrace';
                accordions[index].querySelector('#balcony_terrace').style.fontWeight = '600';
            }
        });
        requestAnimationFrame(() => {
            accordions[index].querySelector('#house_type').style.fontWeight = '600';
            header.style.transform = 'scaleY(1)';
            // accordions[index].querySelector('.header').style.display = 'block';
            header.style.height = 'fit-content';
            content.style.transform = 'scaleY(0)';
            content.style.height = '0';
        });
    }
    else if (index === 2) {
        const html = `
        <p id="space">Living Space <span>${ accordions[index].querySelector('#txt_living').value } Square Meters</span></p>
        <p id="rooms">Nummer Of Rooms <span>${ accordions[index].querySelector('#txt_rooms').value }</span></p>
        <p id="wet_rooms">Nummer Of Wet Rooms <span>${ accordions[index].querySelector('#txt_wet_rooms').value }</span></p>
        <p id="garage">Garage Spaces <span>${ accordions[index].querySelector('#txt_garage').value }</span></p>
        <p id="year">Year Of Construction <span>${ accordions[index].querySelector('#txt_year').value }</span></p>
        <p id="price">Desired Price <span>${ accordions[index].querySelector('#txt_price').value }</span></p>
        `;

        accordions[index].querySelector('.header').innerHTML = html;
        header.style.display = 'flex';
        header.style.flexDirection = 'column';
        header.style.alignItems = 'flex-start';
        header.style.fontSize = '1rem';
        requestAnimationFrame(() => {
            header.style.transform = 'scaleY(1)';
            // accordions[index].querySelector('.header').style.display = 'block';
            header.style.height = 'fit-content';
            content.style.transform = 'scaleY(0)';
            content.style.height = '0';
        });
    }
    else if (index === 3) {
        const select = accordions[index].querySelector('#cmb_salutation');
        const html = `
            <p>Salutation <span>${ select.options[select.selectedIndex].value }</span></p>
            <p>First Name <span>${ accordions[index].querySelector('#txt_forename').value }</span></p>
            <p>SurName <span>${ accordions[index].querySelector('#txt_surname').value }</span></p>
            <p>Email <span>${ accordions[index].querySelector('#txt_email').value }</span></p>
            <p>Phone <span>${ accordions[index].querySelector('#txt_phone').value }</span></p>
        `;

        accordions[index].querySelector('.header').innerHTML = html;
        header.style.display = 'flex';
        header.style.flexDirection = 'column';
        header.style.alignItems = 'flex-start';
        header.style.fontSize = '1rem';
        requestAnimationFrame(() => {
            header.style.transform = 'scaleY(1)';
            // accordions[index].querySelector('.header').style.display = 'block';
            header.style.height = 'fit-content';
            content.style.transform = 'scaleY(0)';
            content.style.height = '0';
        });
    }
    else if (index === 4) {
        let reason;
        Array.from(accordions[index].querySelectorAll('button')).forEach(button => {
            if (button.classList.contains('btn_active_done')) reason = button.innerText
        });
        const html = `
            <p>Reason For Review <span>${ reason }</span><'p>
        `;

        accordions[index].querySelector('.header').innerHTML = html;
        header.style.display = 'flex';
        header.style.flexDirection = 'column';
        header.style.alignItems = 'flex-start';
        header.style.fontSize = '1rem';
        requestAnimationFrame(() => {
            header.style.transform = 'scaleY(1)';
            // accordions[index].querySelector('.header').style.display = 'block';
            header.style.height = 'fit-content';
            content.style.transform = 'scaleY(0)';
            content.style.height = '0';
        });
    }
}

function showContent (index, e) {
    const header = accordions[index].querySelector('.header');
    const content = accordions[index].querySelector('.content');

    requestAnimationFrame(() => {
        header.style.height = '0';
        content.style.height = 'fit-content';
        content.style.transform = 'scaleY(1)';
    });
    header.style.display = 'none';
    content.style.display = 'block';
}

function removeInactive (index) {
    // Array.from(cards).forEach((card, i) => {
    //     if (i <= index) {
    //         card.classList.remove('inactive');
    //     }
    // });
    cards[index].classList.remove('inactive');
    console.log(cards[index]);
}

function checkButtonSelection (index) {
    let contains = 0;
    Array.from(cards[index].querySelectorAll('button')).forEach(button => {
        if (button.classList.contains('btn_active') || button.classList.contains('btn_active_house')) contains = 1;
    });
    if (contains) return true;
    else return false;
}

function checkInputs (index) {
    let contains = 1;
    Array.from(cards[index].querySelectorAll('input')).forEach(input => {
        if (input.value === '') {
            contains = 0;
            return;
        }
    });
    if (contains) return true;
    else return false;
}

setInactive();

window.addEventListener('resize', () => {
    console.log(window.innerWidth);
});