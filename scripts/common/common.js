
function getDonationOrHistory(id){
    const donatonPage = document.getElementById('Donation-Section');
    donatonPage.classList.add('hidden');
    const historyPage = document.getElementById('History-Section');
    historyPage.classList.add('hidden');

    const activePage =  document.getElementById(id);
    activePage.classList.remove('hidden');
}



function createHistory(donationAmount,level){
    let historySection =  document.getElementById('History-Section');
    let div = document.createElement('div');
    div.classList.add('p-6', 'border', 'rounded-xl', 'space-y-2', 'mt-4')
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.classList.add('font-bold', 'text-black', 'text-base');
    p2.classList.add('font-normal', 'text-gray-400', 'text-xs');
    if(level === 'Noakhali'){
        p1.innerText = `${donationAmount} Taka is Donated for Flood Relief in Noakhali,Bangladesh`;
    }else if(level === 'Fani'){
        p1.innerText = `${donationAmount} Taka is Donated for Flood Relief in Fani,Bangladesh`;
    }else{
        p1.innerText = `${donationAmount} Taka is Donated for Aid for Injured in the Quota Movement,Bangladesh`;
    }
    p2.innerText = getCurrentDate();
    div.appendChild(p1);
    div.appendChild(p2);
    historySection.appendChild(div);
}

function showModal(){
    const modal = document.getElementById('confirmation-modal');
    modal.showModal();
}

function getCurrentDate(){
    return new Date().toLocaleString();
}