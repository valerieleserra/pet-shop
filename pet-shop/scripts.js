function handleSubmit(event){
    event.preventDefault();
    console.log("Submitted Forum");
    const form = document.querySelector("form");
    const newPet ={
        petName: form.elements.petName.value,
        petType: form.elements.petType.value,
        color: form.elements.color.value,
        age: form.elements.age.value
    }

fetch('https://pet-boutique-vl.web.app/pets',{
    method:'POST',
    headers: {
        'Content-Type':'application/json',//Content-Type tells the computer what kind of information you are sending
    },
    body: JSON.stringify(newPet),
  })
  .then(response => response.json())
  .then(json => {
      form.innerHTML = `<h3>${json.message}</h3>`
  })
  .catch(err => {
    form.innerHTML = '<h3>Error sending pet </h3>'
  })
}
