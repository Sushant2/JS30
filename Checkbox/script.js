const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
    //check if they had the shift key down
    //check that they are checking it
    
    let inBetween = false;
    if(e.shiftKey&& this.checked){
        //go ahead and do what we please
        //loop over wvery single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
                console.log('Starting to check them inbetween');
                
            }
            if(inBetween){
                checkbox.checked = true;
            }
        })

    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));