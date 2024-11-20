function addEducation() {
    const educationFields = document.getElementById('education-fields');

    // element jdid d education
    const startDateLabel = document.createElement('label');
    startDateLabel.textContent = 'Start date';
    const startDateInput = document.createElement('input');
    startDateInput.type = 'date';
    startDateInput.className = 'input';

    const finishedDateLabel = document.createElement('label');
    finishedDateLabel.textContent = 'Finished date';
    const finishedDateInput = document.createElement('input');
    finishedDateInput.type = 'date';
    finishedDateInput.className = 'input';

    const diplomaLabel = document.createElement('label');
    diplomaLabel.textContent = 'Diploma';
    const diplomaInput = document.createElement('input');
    diplomaInput.type = 'text';
    diplomaInput.className = 'input';

    
    educationFields.appendChild(startDateLabel);
    educationFields.appendChild(startDateInput);
    educationFields.appendChild(finishedDateLabel);
    educationFields.appendChild(finishedDateInput);
    educationFields.appendChild(diplomaLabel);
    educationFields.appendChild(diplomaInput);
    educationFields.appendChild(document.createElement('br')); 
}

function addObjective() {
    const objectiveFields = document.getElementById('objective-fields');

    //  add objective textarea jdid
    const newObjectiveField = document.createElement('textarea');
    newObjectiveField.name = 'objective';
    newObjectiveField.className = 'input';

   
    objectiveFields.appendChild(newObjectiveField);
}

function addWorkExperience() {
    const workFields = document.getElementById('work-fields');

    //  add work textarea jdid
    const newWorkField = document.createElement('textarea');
    newWorkField.name = 'work-experience';
    newWorkField.className = 'input';

    
    workFields.appendChild(newWorkField);
}