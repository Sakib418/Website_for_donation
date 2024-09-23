
function getDonationOrHistory(id){
    const donatonPage = document.getElementById('Donation-Section');
    donatonPage.classList.add('hidden');
    const historyPage = document.getElementById('History-Section');
    historyPage.classList.add('hidden');

    const activePage =  document.getElementById(id);
    activePage.classList.remove('hidden');
}

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



            let historySection =  document.getElementById('History-Section');
            let div = document.createElement('div');
            div.classList.add('p-6', 'border', 'rounded-xl', 'space-y-2', 'mt-4')
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            p1.classList.add('font-bold', 'text-black', 'text-base');
            p2.classList.add('font-normal', 'text-gray-400', 'text-xs');
            p1.innerText = `${donationAmount} Taka is Donated for Flood Relief in Noakhali,Bangladesh`;
            p2.innerText = getCurrentDate();
            div.appendChild(p1);
            div.appendChild(p2);
            historySection.appendChild(div);

            


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



            let historySection =  document.getElementById('History-Section');
            let div = document.createElement('div');
            div.classList.add('p-6', 'border', 'rounded-xl', 'space-y-2', 'mt-4')
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            p1.classList.add('font-bold', 'text-black', 'text-base');
            p2.classList.add('font-normal', 'text-gray-400', 'text-xs');
            p1.innerText = `${donationAmount} Taka is Donated for Flood Relief in Fani,Bangladesh`;
            p2.innerText = getCurrentDate();
            div.appendChild(p1);
            div.appendChild(p2);
            historySection.appendChild(div);

            


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



            let historySection =  document.getElementById('History-Section');
            let div = document.createElement('div');
            div.classList.add('p-6', 'border', 'rounded-xl', 'space-y-2', 'mt-4')
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            p1.classList.add('font-bold', 'text-black', 'text-base');
            p2.classList.add('font-normal', 'text-gray-400', 'text-xs');
            // 15500 Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh
            p1.innerText = `${donationAmount} Taka is Donated for Aid for Injured in the Quota Movement,Bangladesh`;
            p2.innerText = getCurrentDate();
            div.appendChild(p1);
            div.appendChild(p2);
            historySection.appendChild(div);

            


            showModal();
           }else{
            alert('Donation amount should be less or equal to total balance!');
            document.getElementById('donationAmountForQuataMovement').value = 0;
            return;
           }
        }
    }

}

function showModal(){
    const modal = document.getElementById('confirmation-modal');
    modal.showModal();
}

function getCurrentDate(){
    return new Date().toLocaleString();
}