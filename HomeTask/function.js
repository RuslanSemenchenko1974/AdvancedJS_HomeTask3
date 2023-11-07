const revKey = 'revew';
// const goods = 'goods'

function addRevew(name, revew){   
    
    if (!name&&!revew)  {
        errorEl.textContent = "Поля не заполнены!";
    }else if (!revew) {
        errorEl.textContent = "Поле отзыв не заполнено";
    }
    else if (!name) {
        errorEl.textContent = "Поле наименование не заполнено";
    }
    else { 
    const revewArr = getRevew();
    let isProduct = false;
    revewArr.forEach((element) => {
        if (element.name === name){
            element.revews.push(revew);
            isProduct = true;
        }
    });

    if (!isProduct) {
    const newproductRevew = {
                name,
                revews:[],};
    newproductRevew.revews.push(revew);
    revewArr.push(newproductRevew);
    }

    const json = JSON.stringify(revewArr); 
    localStorage.setItem(revKey, json);
    errorEl.textContent = "Отзыв добавлен!";

}
};
function getRevew() {
    const data = localStorage.getItem(revKey);
    if (data === null) {
        return [];
    } 
    return JSON.parse(data);    
};

function change(revewArr){
    const json = JSON.stringify(revewArr); 
    localStorage.setItem(revKey, json);
}