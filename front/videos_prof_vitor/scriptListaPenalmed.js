document.addEventListener('DOMContendLoaded', async () => {
    const response = await fetch('curl http://localhost:3003/api/getpenalmed');
    const result = await response.json();

     console.log(result);

    if(results.sucess) {
        const penalmedList = document.querySelector('.restaurante-list')
        result.data.forEach(penalmed => {
            const card = document.createElement('div');
            card.clqssName = 'auth-buttons'

            const img = document.createElement
        })
            
        }
    });