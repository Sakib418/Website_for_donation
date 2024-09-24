function calculateBalance(id,donationReason){
    console.log(id,donationReason);
    let myBalance = parseFloat(document.getElementById('capital').innerText);
    
    if(donationReason === 'Noakhali'){
        let balanceOfNoakhali = parseFloat(document.getElementById(id).innerText);
        let donationAmount  = parseFloat(document.getElementById('donationAmountForNoakhali').value);
        if(isNaN(donationAmount) || donationAmount < 0){
            alert('Please enter a amount in number and it should be greater then zero !!!');
            document.getElementById('donationAmountForNoakhali').focus();
            return;
            
        }
        else{
           if(myBalance >= donationAmount) {
            let myNewBalance = myBalance - donationAmount;
            let totalDonationAmount = balanceOfNoakhali + donationAmount;
            document.getElementById('capital').innerText = myNewBalance;
            document.getElementById(id).innerText = `${totalDonationAmount}`;
            document.getElementById('donationAmountForNoakhali').value = 0;
            createHistory(donationAmount,'Noakhali');
            showModal();
           }else{
            alert('Donation amount should be less or equal to total balance!');
            document.getElementById('donationAmountForNoakhali').value = 0;
            return;
           }
        }
    }else if(donationReason === 'Fani'){
        let balanceOfFani = parseFloat(document.getElementById(id).innerText);
        let donationAmount  = parseFloat(document.getElementById('donationAmountForFani').value);
        if(isNaN(donationAmount) || donationAmount < 0){
            alert('Please enter a amount in number and it should be greater then zero !!!');
            document.getElementById('donationAmountForFani').focus();
            return;
        }
        else{
           if(myBalance >= donationAmount) {
            let myNewBalance = myBalance - donationAmount;
            let totalDonationAmount = balanceOfFani + donationAmount;
            document.getElementById('capital').innerText = myNewBalance;
            document.getElementById(id).innerText = `${totalDonationAmount}`;
            document.getElementById('donationAmountForFani').value = 0;
            createHistory(donationAmount,'Fani');
            showModal();
           }else{
            alert('Donation amount should be less or equal to total balance!');
            document.getElementById('donationAmountForFani').value = 0;
            return;
           }
        }
    }else if(donationReason === 'Quata'){
        let balanceOfQuata = parseFloat(document.getElementById(id).innerText);
        let donationAmount  = parseFloat(document.getElementById('donationAmountForQuataMovement').value);
        if(isNaN(donationAmount) || donationAmount < 0){
            alert('Please enter a amount in number and it should be greater then zero !!!');
            document.getElementById('donationAmountForQuataMovement').focus();
            return;
        }
        else{
           if(myBalance >= donationAmount) {
            let myNewBalance = myBalance - donationAmount;
            let totalDonationAmount = balanceOfQuata + donationAmount;
            document.getElementById('capital').innerText = myNewBalance;
            document.getElementById(id).innerText = `${totalDonationAmount}`;
            document.getElementById('donationAmountForQuataMovement').value = 0;
            createHistory(donationAmount,'Quata');
            showModal();
           }else{
            alert('Donation amount should be less or equal to total balance!');
            document.getElementById('donationAmountForQuataMovement').value = 0;
            return;
           }
        }
    }

}