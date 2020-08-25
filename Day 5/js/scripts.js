const btnChange     = document.querySelector('.btn-change');
const bodyWebsite   = document.body
btnChange.addEventListener('click', changeBackground);



function changeBackground(){
    let result = []
    //bodyWebsite.style.backgroundColor = 'rgb(0, 100, 25)';
    appendResult(result)
    bodyWebsite.style.backgroundColor = 'rgb('+ result[0] +',' + result[1] + ',' + result[2]+')';
    console.log(result)

}

function appendResult(result){

    min = Math.ceil(0)
    max = Math.floor(255)

    for (var i = 0; i < 3; i++){
        result.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    return result;

}
