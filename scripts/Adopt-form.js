document.addEventListener( 'DOMContentLoaded', function () {

    // Form fields
    const fldName = document.getElementById('name');
    const fldEmail = document.getElementById('email');
    const fldPhone = document.getElementById('number');

    const fldStreet = document.getElementById('address');
    const fldCity = document.getElementById('city');
    const fldState = document.getElementById('state');
    const fldZip = document.getElementById('zipcode');

    const fldPet = document.getElementById('catsdogs');
    const fldCount = document.getElementById('numpets');
    const fldNeutered = document.getElementById('');
    const [fldNeuteredY, fldNeuteredN] = document.querySelectorAll('input[name="petsSpayedChoice"]');
    const [fldAllergyY, fldAllergyN] = document.querySelectorAll('input[name="allergyChoice"]');
    const [fldPriorY, fldPriorN] = document.querySelectorAll('input[name="priorPetChoice"]');
    const [fldFencedY, fldFencedN] = document.querySelectorAll('input[name="fenceChoice"]');
    const fldRelieve = document.getElementById('Ques1');
    const fldAloneHr = document.getElementById('Ques2');
    const [fldWorkY, fldWorkN] = document.querySelectorAll('input[name="workChoice"]');
    const fldAloneLoc = document.getElementById('Ques3');
    const fldSleepLoc = document.getElementById('Ques4');
    const fldExtra = document.getElementById('Ques5');

    const submitBtn = document.getElementById('adopt-btn');

    console.log('Loaded!');

    // Validator: anonymous function that returns true for no error, or a string
    const requireField = (fldElem, fldName, whenHaveCb) => {
        if (fldElem.value === '') {
            return 'The `' + fldName + '` field is required';
        }
        const defaultCb = (v) => true;
        return ((whenHaveCb || defaultCb)(fldElem.value));
    };
    const makeRequire = (fldElem, fldName, whenHaveCb) =>
        requireField.bind(null, fldElem, fldName, whenHaveCb);
    const validators = [
        makeRequire(fldName, 'name'),
        makeRequire(fldEmail, 'email'),
        makeRequire(fldPhone, 'phone',
            (v) => (v.match(/^\d{10}$/) !== null || 'Phone numbers should be 10 digits')),
        makeRequire(fldStreet, 'address'),
        makeRequire(fldCity, 'city'),
        makeRequire(fldState, 'state'),
        makeRequire(fldZip, 'zip code',
            (v) => (v.match(/^\d{5}$/) !== null || 'Zip codes should be 5 digits')),
        makeRequire(fldPet, 'pet'),
        makeRequire(fldAloneHr, 'pet being alone (time)'),
        makeRequire(fldAloneLoc, 'pet being alone (keeping)'),
        makeRequire(fldSleepLoc, 'pet sleep location'),
    ];
    const adoptForm = document.getElementById('adopt-form');
    const onFormSubmit = (e) => {
        e.preventDefault();
        const errors = validators.map(v => v()).filter(r => r !== true);
        console.log(errors);
    };
    adoptForm.addEventListener('submit', onFormSubmit);
} );