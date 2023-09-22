totalCount = 0
limgraveCount = 0
liurniaCount = 0
caelidCount = 0
altusCount = 0
mountaintopsCount = 0
siofraCount = 0
farumCount = 0
ainselCount = 0
forbiddenCount = 0
consecratedCount = 0
deeprootCount = 0
ashenCount = 0


document.addEventListener("DOMContentLoaded", () => {
    const limgraveCheckboxes = document.querySelector("#limgrave").querySelectorAll("input[type='checkbox']")
    const liurniaCheckboxes = document.querySelector("#liurnia").querySelectorAll("input[type='checkbox']")
    const caelidCheckboxes = document.querySelector("#caelid").querySelectorAll("input[type='checkbox']")
    const altusCheckboxes = document.querySelector("#altus").querySelectorAll("input[type='checkbox']")
    const forbiddenCheckboxes = document.querySelector("#forbidden").querySelectorAll("input[type='checkbox']")
    const mountaintopsCheckboxes = document.querySelector("#mountaintops").querySelectorAll("input[type='checkbox']")
    const farumCheckboxes = document.querySelector("#farum").querySelectorAll("input[type='checkbox']")
    const consecratedCheckboxes = document.querySelector("#consecrated").querySelectorAll("input[type='checkbox']")
    const siofraCheckboxes = document.querySelector("#siofra").querySelectorAll("input[type='checkbox']")
    const ainselCheckboxes = document.querySelector("#ainsel").querySelectorAll("input[type='checkbox']")
    const deeprootCheckboxes = document.querySelector("#deeproot").querySelectorAll("input[type='checkbox']")
    const ashenCheckboxes = document.querySelector("#ashen").querySelectorAll("input[type='checkbox']")
    
    
    
    limgraveCheckboxes.forEach(checkbox => {
        if (checkbox.checked) limgraveCount++
        checkbox.addEventListener('change', (event) => {
            // debugger
            if (event.target.checked) limgraveCount++
            else limgraveCount--
            document.querySelector(`.limgraveCounter`).innerText = `Limgrave (${limgraveCount}/32)`
            totalCount = limgraveCount+liurniaCount+caelidCount+altusCount+mountaintopsCount+siofraCount+farumCount+ainselCount+forbiddenCount+consecratedCount+deeprootCount+ashenCount
            document.querySelector(`.totalCount`).innerText = `${totalCount}/170`
        
        })
    })
    document.querySelector(`.limgraveCounter`).innerText = `Limgrave (${limgraveCount}/32)`
    
    liurniaCheckboxes.forEach(checkbox => {
        if (checkbox.checked) liurniaCount++
        checkbox.addEventListener('change', (event) => {
            // debugger
            if (event.target.checked) liurniaCount++
            else liurniaCount--
            document.querySelector(`.liurniaCounter`).innerText = `Liurnia of the Lakes (${liurniaCount}/29)`
            totalCount = limgraveCount+liurniaCount+caelidCount+altusCount+mountaintopsCount+siofraCount+farumCount+ainselCount+forbiddenCount+consecratedCount+deeprootCount+ashenCount
            document.querySelector(`.totalCount`).innerText = `${totalCount}/170`
        
        })
    })
    document.querySelector(`.liurniaCounter`).innerText = `Liurnia of the Lakes (${liurniaCount}/29)`
    
    
    caelidCheckboxes.forEach(checkbox => {
        if (checkbox.checked) caelidCount++
        checkbox.addEventListener('change', (event) => {
            // debugger
            if (event.target.checked) caelidCount++
            else caelidCount--
            document.querySelector(`.caelidCounter`).innerText = `Caelid (${caelidCount}/26)`
            totalCount = limgraveCount+liurniaCount+caelidCount+altusCount+mountaintopsCount+siofraCount+farumCount+ainselCount+forbiddenCount+consecratedCount+deeprootCount+ashenCount
            document.querySelector(`.totalCount`).innerText = `${totalCount}/170`
        
        })
    })
    document.querySelector(`.caelidCounter`).innerText = `Caelid (${caelidCount}/26)`
    
    
    altusCheckboxes.forEach(checkbox => {
        if (checkbox.checked) altusCount++
        checkbox.addEventListener('change', (event) => {
            // debugger
            if (event.target.checked) altusCount++
            else altusCount--
            document.querySelector(`.altusCounter`).innerText = `Altus Plateau (${altusCount}/41)`
            totalCount = limgraveCount+liurniaCount+caelidCount+altusCount+mountaintopsCount+siofraCount+farumCount+ainselCount+forbiddenCount+consecratedCount+deeprootCount+ashenCount
            document.querySelector(`.totalCount`).innerText = `${totalCount}/170`
        
        })
    })
    document.querySelector(`.altusCounter`).innerText = `Altus Plateau (${altusCount}/41)`
    
    forbiddenCheckboxes.forEach(checkbox => {
        if (checkbox.checked) forbiddenCount++
        checkbox.addEventListener('change', (event) => {
            // debugger
            if (event.target.checked) forbiddenCount++
            else forbiddenCount--
            document.querySelector(`.forbiddenCounter`).innerText = `Forbidden Lands (${forbiddenCount}/3)`
            totalCount = limgraveCount+liurniaCount+caelidCount+altusCount+mountaintopsCount+siofraCount+farumCount+ainselCount+forbiddenCount+consecratedCount+deeprootCount+ashenCount
            document.querySelector(`.totalCount`).innerText = `${totalCount}/170`
        
        })
    })
    document.querySelector(`.forbiddenCounter`).innerText = `Forbidden Lands (${forbiddenCount}/3)`
    
    mountaintopsCheckboxes.forEach(checkbox => {
        if (checkbox.checked) mountaintopsCount++
        checkbox.addEventListener('change', (event) => {
            // debugger
            if (event.target.checked) mountaintopsCount++
            else mountaintopsCount--
            document.querySelector(`.mountaintopsCounter`).innerText = `Mountaintops of the Giants (${mountaintopsCount}/10)`
            totalCount = limgraveCount+liurniaCount+caelidCount+altusCount+mountaintopsCount+siofraCount+farumCount+ainselCount+forbiddenCount+consecratedCount+deeprootCount+ashenCount
            document.querySelector(`.totalCount`).innerText = `${totalCount}/170`
        
        })
    })
    document.querySelector(`.mountaintopsCounter`).innerText = `Mountaintops of the Giants (${mountaintopsCount}/10)`
    
    farumCheckboxes.forEach(checkbox => {
        if (checkbox.checked) farumCount++
        checkbox.addEventListener('change', (event) => {
            // debugger
            if (event.target.checked) farumCount++
            else farumCount--
            document.querySelector(`.farumCounter`).innerText = `Crumbling Farum Azula (${farumCount}/3)`
            totalCount = limgraveCount+liurniaCount+caelidCount+altusCount+mountaintopsCount+siofraCount+farumCount+ainselCount+forbiddenCount+consecratedCount+deeprootCount+ashenCount
            document.querySelector(`.totalCount`).innerText = `${totalCount}/170`
        
        })
    })
    document.querySelector(`.farumCounter`).innerText = `Crumbling Farum Azula (${farumCount}/3)`
    
    consecratedCheckboxes.forEach(checkbox => {
        if (checkbox.checked) consecratedCount++
        checkbox.addEventListener('change', (event) => {
            // debugger
            if (event.target.checked) consecratedCount++
            else consecratedCount--
            document.querySelector(`.consecratedCounter`).innerText = `Consecrated Snowfields (${consecratedCount}/9)`
            totalCount = limgraveCount+liurniaCount+caelidCount+altusCount+mountaintopsCount+siofraCount+farumCount+ainselCount+forbiddenCount+consecratedCount+deeprootCount+ashenCount
            document.querySelector(`.totalCount`).innerText = `${totalCount}/170`
        
        })
    })
    document.querySelector(`.consecratedCounter`).innerText = `Consecrated Snowfields (${consecratedCount}/9)`

    siofraCheckboxes.forEach(checkbox => {
        if (checkbox.checked) siofraCount++
        checkbox.addEventListener('change', (event) => {
            // debugger
            if (event.target.checked) siofraCount++
            else siofraCount--
            document.querySelector(`.siofraCounter`).innerText = `Siofra River (${siofraCount}/6)`
            totalCount = limgraveCount+liurniaCount+caelidCount+altusCount+mountaintopsCount+siofraCount+farumCount+ainselCount+forbiddenCount+consecratedCount+deeprootCount+ashenCount
            document.querySelector(`.totalCount`).innerText = `${totalCount}/170`
        
        })
    })
    document.querySelector(`.siofraCounter`).innerText = `Siofra River (${siofraCount}/6)`
    
    ainselCheckboxes.forEach(checkbox => {
        if (checkbox.checked) ainselCount++
        checkbox.addEventListener('change', (event) => {
            // debugger
            if (event.target.checked) ainselCount++
            else ainselCount--
            document.querySelector(`.ainselCounter`).innerText = `Ainsel River (${ainselCount}/3)`
            totalCount = limgraveCount+liurniaCount+caelidCount+altusCount+mountaintopsCount+siofraCount+farumCount+ainselCount+forbiddenCount+consecratedCount+deeprootCount+ashenCount
            document.querySelector(`.totalCount`).innerText = `${totalCount}/170`
        
        })
    })
    document.querySelector(`.ainselCounter`).innerText = `Ainsel River (${ainselCount}/3)`
    //te
    deeprootCheckboxes.forEach(checkbox => {
        if (checkbox.checked) deeprootCount++
        checkbox.addEventListener('change', (event) => {
            // debugger
            if (event.target.checked) deeprootCount++
            else deeprootCount--
            document.querySelector(`.deeprootCounter`).innerText = `Deeproot Depths (${deeprootCount}/3)`
            totalCount = limgraveCount+liurniaCount+caelidCount+altusCount+mountaintopsCount+siofraCount+farumCount+ainselCount+forbiddenCount+consecratedCount+deeprootCount+ashenCount
            document.querySelector(`.totalCount`).innerText = `${totalCount}/170`
        
        })
    })
    document.querySelector(`.deeprootCounter`).innerText = `Deeproot Depths (${deeprootCount}/3)`
    
    ashenCheckboxes.forEach(checkbox => {
        if (checkbox.checked) ashenCount++
        checkbox.addEventListener('change', (event) => {
            // debugger
            if (event.target.checked) ashenCount++
            else ashenCount--
            document.querySelector(`.ashenCounter`).innerText = `Leyndell, Ashen Capital (${ashenCount}/5)`
            totalCount = limgraveCount+liurniaCount+caelidCount+altusCount+mountaintopsCount+siofraCount+farumCount+ainselCount+forbiddenCount+consecratedCount+deeprootCount+ashenCount
            document.querySelector(`.totalCount`).innerText = `${totalCount}/170`
        
        })
    })
    document.querySelector(`.ashenCounter`).innerText = `Leyndell, Ashen Capital (${ashenCount}/5)`
    


    totalCount = limgraveCount+liurniaCount+caelidCount+altusCount+mountaintopsCount+siofraCount+farumCount+ainselCount+forbiddenCount+consecratedCount+deeprootCount+ashenCount
    document.querySelector(`.totalCount`).innerText = `${totalCount}/170`
})


function resetAll() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']")
    checkboxes.forEach(checkbox => {
        checkbox.checked = false
        totalCount = 0
        document.querySelector(`.totalCount`).innerText = `${totalCount}/170`    
        limgraveCount = 0
        document.querySelector(`.limgraveCounter`).innerText = `Limgrave (${limgraveCount}/32)`
        liurniaCount = 0
        document.querySelector(`.liurniaCounter`).innerText = `Liurnia of the Lakes (${liurniaCount}/32)`
        caelidCount = 0
        altusCount = 0
        mountaintopsCount = 0
        siofraCount = 0
        farumCount = 0
        ainselCount = 0
        forbiddenCount = 0
        consecratedCount = 0
        deeprootCount = 0
        ashenCount = 0
        checkboxes.forEach((checkbox, index) => {
            localStorage.setItem(`checkbox${index}`, checkbox.checked);
        });
    })
}

