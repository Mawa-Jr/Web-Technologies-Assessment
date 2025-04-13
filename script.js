let sanpedroscore = 0;
let cayoscore = 0;
let belizescore = 0;
let cayecaulkerscore = 0;

let selectedoption = document.querySelector('input:checked');

    if (selectedoption){
        
        switch (currentQuestion) {
			
        case q1:
            if (selectedoption.value === 'A') cayecaulkerscore++;
            if (selectedoption.value === 'B') cayoscore++;
            if (selectedoption.value === 'C') sanpedroscore++;
            if (selectedoption.value === 'D') belizescore++;
            break;
        case q2:
            if (selectedoption.value === 'A') belizescore++;
            if (selectedoption.value === 'B') cayoscore++;
            if (selectedoption.value === 'C') sanpedroscore++;
            if (selectedoption.value === 'D') cayecaulkerscore++;
            break;
        case q3:
            if (selectedoption.value === 'A') cayoscore++;
            if (selectedoption.value === 'B') belizescore++;
            if (selectedoption.value === 'C') cayecaulkerscore++;
            if (selectedoption.value === 'D') sanpedroscore++;
            break;
        case q4:
            if (selectedoption.value === 'A') sanpedroscore++;
            if (selectedoption.value === 'B') belizescore++;
            if (selectedoption.value === 'C') cayecaulkerscore++;
            if (selectedoption.value === 'D') cayoscore++;
            break;
        case q5:
            if (selectedoption.value === 'A') belizescore++;
            if (selectedoption.value === 'B') sanpedroscore++;
            if (selectedoption.value === 'C') cayoscore++;
            if (selectedoption.value === 'D') cayecaulkerscore++;
            break;
        case q6:
            if (selectedoption.value === 'A') sanpedroscore++;
            if (selectedoption.value === 'B') belizescore++;
            if (selectedoption.value === 'C') cayecaulkerscore++;
            if (selectedoption.value === 'D') cayoscore++;
            break;
        case q7:
            if (selectedoption.value === 'A') belizescore++;
            if (selectedoption.value === 'B') cayoscore++;
            if (selectedoption.value === 'C') sanpedroscore++;
            if (selectedoption.value === 'D') cayecaulkerscore++;
            break;
        case q8:
            if (selectedoption.value === 'A') cayoscore++;
            if (selectedoption.value === 'B') sanpedroscore++;
            if (selectedoption.value === 'C') belizescore++;
            if (selectedoption.value === 'D') cayecaulkerscore++;
            break;
        case q9:
            if (selectedoption.value === 'A') cayoscore++;
            if (selectedoption.value === 'B') belizescore++;
            if (selectedoption.value === 'C') cayecaulkerscore++;
            if (selectedoption.value === 'D') sanpedroscore++;
            break;
        }
	}
	
	localStorage.setItem('sanpedroscore', sanpedroscore);
    localStorage.setItem('cayoscore', cayoscore);
    localStorage.setItem('belizescore', belizescore);
    localStorage.setItem('cayecaulkerscore', cayecaulkerscore);

    const maxScore = Math.max(sanpedroscore, cayoscore, belizescore, cayecaulkerscore);
	
	let resultMessage = "Based on your answers, we recommend visiting: ";
    
    if (maxScore === sanpedroscore) {
        resultMessage += " San Pedro Ambergris Caye for its beautiful beaches, restaurants and activities.";
    } else if (maxScore === cayoscore) {
        resultMessage += "Cayo District for adventure and nature exploration.";
    } else if (maxScore === belizescore) {
        resultMessage += "Belize City for cultural experiences.";
    } else if (maxScore === cayecaulkerscore) {
        resultMessage += "Caye Caulker for relaxation and quiet retreats.";
    }
	
	 const resultElement = document.getElementById('result');
	 
    if (resultElement) {
        resultElement.innerText = resultMessage;
    }
	
   
	 