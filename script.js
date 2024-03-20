const button = document.querySelectorAll('.box__vector > button');


button.forEach((c,i)=>{
    c.addEventListener('click',()=>{
        c.innerText = 'Good Luck Athlete'
    })
})

const download = document.querySelectorAll('.download > button');
download.forEach((c,i) =>{
    c.addEventListener('click', () => {
       c.innerText = ('Your files were downloaded successfully!');
    } )
}  )