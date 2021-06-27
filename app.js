var btn = document.querySelector('.btn');
var item = document.querySelector('.item');
var blue = document.querySelector('.blue');
var purple = document.querySelector('.purple');
var pink = document.querySelector('.pink');
var red = document.querySelector('.red');
var gold = document.querySelector('.gold');
var money = document.querySelector('.money');
var blues = document.querySelector('.blues');
var purples = document.querySelector('.purples');
var pinks = document.querySelector('.pinks');
var reds = document.querySelector('.reds');
var golds = document.querySelector('.golds');
var reset = document.querySelector('.reset');
var attemp = document.querySelector('.attemp');
var addMoney = document.querySelector('.rng');

let blueItem = 0;
let purpleItem = 0;
let pinkItem = 0;
let redItem = 0;
let goldItem = 0;
let addMoneys = 0;


let getGun = () => {
    let rng = 977;
    if (rng <=900) {
        item.innerHTML = 'AK-47 | Elite Build';
        item.classList.add('blue');
        item.classList.remove('purple');
        item.classList.remove('pink');
        item.classList.remove('red');
        item.classList.remove('gold');
        item.classList.remove('black');
        blueItem += 1;
        blues.innerHTML = blueItem;
        addMoneys += 2;
        addMoney.innerHTML = addMoneys.toPrecision(3);
        if (rng > 600 && rng <= 750) {
            item.innerHTML = 'MP7 | Armor Core';
            addMoneys -= 1.9;
            addMoney.innerHTML = addMoneys.toPrecision(3);
        }
        else if (rng > 450 && rng <= 600) {
            item.innerHTML = 'Desert Eagle | Bronze Deco';
            addMoneys -= 1.4;
            addMoney.innerHTML = addMoneys.toPrecision(3);
        }
        else if (rng > 300 && rng <= 450) {
            item.innerHTML = 'P250 | Valence';
            addMoneys -= 1.75;
            addMoney.innerHTML = addMoneys.toPrecision(3);
        }
        else if (rng > 150 && rng <= 300) {
            item.innerHTML = "Negev | Man-o'-war";
            addMoneys -= 1.8;
            addMoney.innerHTML = addMoneys.toPrecision(3);
        }
        else if (rng > 0 && rng <= 150) {
            item.innerHTML = 'Sawed-Off | Origami';
            addMoneys -= 1.86;
            addMoney.innerHTML = addMoneys.toPrecision(3);
        }
    } 
    else if (rng > 900 && rng <= 970){
        item.innerHTML = 'AWP | Worm God';
        item.classList.add('purple');
        item.classList.remove('blue');
        item.classList.remove('pink');
        item.classList.remove('red');
        item.classList.remove('gold');
        item.classList.remove('black');
        purpleItem += 1;
        purples.innerHTML = purpleItem;
        addMoneys += 1;
        addMoney.innerHTML = addMoneys.toPrecision(3);
        if (rng > 914 && rng <= 926) {
            item.innerHTML = 'MAG-7 | Heat';
            addMoneys -= 0.5;
            addMoney.innerHTML = addMoneys.toPrecision(3);
        }
        else if (rng > 926 && rng <= 944) {
            item.innerHTML = 'CZ75-Auto | Pole Position';
            addMoneys -= 0.5;
            addMoney.innerHTML = addMoneys.toPrecision(3);
        }
        else if (rng > 944 && rng <= 970) {
            item.innerHTML = 'UMP-45 | Grand Prix';
            addMoneys -= 0.7;
            addMoney.innerHTML = addMoneys.toPrecision(3);
        }
    }
    else if (rng > 970 && rng <= 990){
        item.innerHTML = 'Five-SeveN | Monkey Business';
        item.classList.add('pink');
        item.classList.remove('purple');
        item.classList.remove('blue');
        item.classList.remove('red');
        item.classList.remove('gold');
        item.classList.remove('black');
        pinkItem += 1;
        pinks.innerHTML = pinkItem;
        addMoneys += 2;
        addMoney.innerHTML = addMoneys.toPrecision(3);
    }
    else if (rng > 990 && rng <= 996){
        item.innerHTML = 'M4A1-S | Hyper Beast';
        item.classList.add('red');
        item.classList.remove('purple');
        item.classList.remove('pink');
        item.classList.remove('blue');
        item.classList.remove('gold');
        item.classList.remove('black');
        redItem += 1;
        reds.innerHTML = redItem;
        addMoneys += 15;
        addMoney.innerHTML = addMoneys.toPrecision(3);
        if (rng > 992 && rng <= 996) {
            item.innerHTML = 'MAC-10 | Neon Rider';
            addMoneys -= 5;
            addMoney.innerHTML = addMoneys.toPrecision(3);
        }
    }
    else {
        item.innerHTML = 'Exceedingly Rare Special Item!';
        item.classList.add('gold');
        item.classList.remove('purple');
        item.classList.remove('pink');
        item.classList.remove('red');
        item.classList.remove('blue');
        item.classList.remove('black');
        goldItem += 1;
        golds.innerHTML = goldItem;
        let rngTwo = Math.floor(Math.random() * 1000 + 55);
        addMoney.innerHTML = rngTwo;
        alert('Кто-то из вас выбил НООООЖ, ну и пердун ты')
    }
};


let clicks = 100;
let price = 3;
let atts = 0;

let countmoney = () => {
    clicks = clicks - price;
    money.innerHTML = clicks;
};

let alerttt = () => {
    if (clicks < price) {
        document.querySelector('.btn').disabled = true;
        alert('Денег нет дурачок, куда нажимаешь???')
    }
};

let countAttemp = () => {
    atts += 1;
    attemp.innerHTML = atts;
};


btn.addEventListener('click', getGun);
btn.addEventListener('click', countmoney);
btn.addEventListener('click', alerttt);
btn.addEventListener('click', countAttemp)

let resetScore = () => {
    clicks = 100;
    money.innerHTML = 100;
    blueItem = 0;
    blues.innerHTML = 0;
    purpleItem = 0;
    purples.innerHTML = 0;
    pinkItem = 0;
    pinks.innerHTML = 0;
    redItem = 0;
    reds.innerHTML = 0;
    goldItem = 0;
    golds.innerHTML = 0;
    atts = 0;
    attemp.innerHTML = 0;
    addMoneys = 0;
    addMoney.innerHTML = 0;
    item.innerHTML = ('Press the button <i class="fas fa-arrow-down"></i>');
    item.classList.add('black');
    item.classList.remove('gold');
    item.classList.remove('purple');
    item.classList.remove('pink');
    item.classList.remove('red');
    item.classList.remove('blue');
    document.querySelector('.btn').disabled = false
}

reset.addEventListener('click', resetScore);




