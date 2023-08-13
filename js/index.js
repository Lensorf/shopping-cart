/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-unsafe-optional-chaining */

// Чекбоксы
const mainCheckbox = document.querySelector('#CheckboxAll');
const CheckBoxes = document.querySelectorAll('.InputCheckBoxFunc');
const firstCheckBox = document.querySelector('#FirstCheckBox1');
const secondCheckBox = document.querySelector('#FirstCheckBox2');
const thirdCheckBox = document.querySelector('#FirstCheckBox3');
const CheckboxTotal = document.querySelector('#CheckboxTotal');
// Кнопки на удаление
const allButtonDelete = document.querySelectorAll('.ButtonDeleteIcon');

// Модальные окна
const modalOplata = document.querySelector('#modalOplataMethods');
const modalDelivery = document.querySelector('#modalDelivery');
const spanOplataClose = document.getElementsByClassName('close')[0];
const spanDeliveryClose = document.getElementsByClassName('close1')[0];

// Кнопк для открытия модалок
const buttonTextOplata = document.querySelector('.buttonChangeOplata');
const buttonPanOplata = document.querySelector('.buttonChangeOplata2');
const buttonTextDelivery = document.querySelector('#buttonDeliveryChange');
const buttonPanDelivery = document.querySelector('.buttonChangeDeliveryPan');
// Для закрытия модалки
const buttonCloseModalOplata = document.querySelector('.buttonChangeSposobOplaty');
const buttonCloseModalDelivery = document.querySelector('.buttonChangeSposobDelivery');
// Кнопки для выбора способа доставки и блоки доставок
const buttonDeliveryPoint = document.querySelector('.buttonPickUpPoint');
const buttonDeliveryCourier = document.querySelector('.buttonCourier');
const blockPoint = document.querySelector('.BlockDostavkaPickUpPoint');
const blockCouriet = document.querySelector('.BlockDostavkaCourier');
// Кнопки удаления из модалки
const buttonDeleteModal = document.querySelectorAll('.ImgDeleteIconGray');

// Итого данные блоки
const resultTotal = document.querySelector('.H2TotalResult');
const QuantityProduct = document.querySelector('.QuantityProduct');
const SumProduct = document.querySelector('.SumProduct');
const SumDiscount = document.querySelector('.SumDiscount');
const buttonZakaz = document.querySelector('.TextButtonZakaz');
const changeButtonZakaz = document.querySelector('.TextButtonZakaz2');
const spanOplatyInfo = document.querySelector('.SpanCheckboxTotalInfo');

// Первый блок секции для скрытия
const firstContentTransformBlock = document.querySelector('.ContentFirstBlock');
const secondContentTransformBlock = document.querySelector('.InsideSecondBlockSecondContentBlock');
const labelCheckboxAll = document.querySelector('.LabelCheckBoxAll');
const spanTextFirstBlock = document.querySelector('.spanTransorfm');
const spanNeedChange = document.querySelector('.InsideFirstBlockSecondContentBlock');
const blockChange = document.querySelector('.ThirdContentBlock');
const lineDown = document.querySelector('.LineUpTitle');
// Стрелки для скрытия блоков
const firstVectorUp = document.querySelector('.buttonVectorUpFirst');
const secondVectorUp = document.querySelector('.buttonVectorUpSecond');

// Все плюсы и минусы
const allPlus = document.querySelectorAll('.ButtonPlus');
const allMinus = document.querySelectorAll('.ButtonMinus');
const allInputs = document.querySelectorAll('.SpanNumberKolVo');
// Лейблы которые относятся = данным выше и так же блоки для скрытия
const firstLable = document.querySelectorAll('#LableFirstImageDelivery');
const secondLable = document.querySelectorAll('#LabelSecondImageDelivery');
const thirdLable = document.querySelectorAll('#LabelThirdImageDelivery');
const lableDown = document.querySelectorAll('.LastLabelImageDelivery');
const blockNoneChange = document.querySelector('.blockNoneChange');
const spanButtonZakaz = document.querySelector('.TextButtonZakaz2');
// const blocksDisabledCommon = document.querySelectorAll('.BlockSumContent');

// Количество штук
const firstQuantity = document.querySelector('.SpanNumberKolVo1');
const secondQuantity = document.querySelector('.SpanNumberKolVo2');
const thirdQuantity = document.querySelector('.SpanNumberKolVo3');

// Цена без скидки
const FirstPriceWithoutDiscount = document.querySelector('.SpanResultNonSkidka1');
const SecondPriceWithoutDiscount = document.querySelector('.SpanResultNonSkidkaResultSecond');
const ThirdPriceWithoutDiscount = document.querySelector('.SpanResultNonSkidka3');

const firstPriceMobile = document.querySelectorAll('#SpanResultNonSkidka1Mobile');
const secondPriceMobile = document.querySelectorAll('#SpanResultNonSkidka2Mobile');
const thirdPriceMobile = document.querySelectorAll('#SpanResultNonSkidka3Mobile');

// Блоки стоимости товара из количества штук и для мобилки
const onePieceFirst = document.querySelector('#SpanResultSumNoMobile1');
const onePieceSecond = document.querySelector('#SpanResultSumNoMobile2');
const onePieceThird = document.querySelector('#SpanResultSumNoMobile3');
const PieceFirstMobile = document.querySelector('#SpanResultSum1Mobile');
const PieceSecondMobile = document.querySelector('#SpanResultSum2Mobile');
const PieceThirdMobile = document.querySelector('#SpanResultSum3Mobile');
// Стоимость в цифрах

// Инпуты форм валидации
const firstNameInput = document.querySelector('#InputFirstName');
const lastNameInput = document.querySelector('#InputLastName');
const emainInput = document.querySelector('#InputEmail');
const phoneInput = document.querySelector('#InputPhone');
const INNInput = document.querySelector('#InputINN');

// Лейблы ошибок для форм
const LabelErrorFirstName = document.querySelector('#LabelErrorFirstName');
const LabelErrorLastName = document.querySelector('#LebelErrorLastName');
const LabelErrorEmail = document.querySelector('#LabelErrorEmail');
const LabelErrorPhone = document.querySelector('#LabelErrorPhone');
const LabelErrorINN = document.querySelector('#LabelErrorINN');

// Регулярные выражения для проверки на валид
const FirstNameRegExp = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
const LastNameRegExp = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]/;
const PhoneRegExp = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
const INNRexExp = /^\d{14}/i;

//

// Локал сторадж для проверки и апдейта данны
// localStorage();
// delete localStorage.secondQuantity;
// Цена со скидкой в числах
const firstSum = Number(onePieceFirst.innerHTML?.split(' ').join(''));
const secondSum = Number(onePieceSecond.innerHTML?.split(' ').join(''));
const thirdSum = Number(onePieceThird.innerHTML?.split(' ').join(''));
const sumResultTotal = [firstSum, secondSum, thirdSum].reduce((a, b) => a + b);
localStorage.setItem('firstSum', firstSum);
localStorage.setItem('secondSum', secondSum);
localStorage.setItem('thirdSum', thirdSum);
localStorage.setItem('sumResultTotal', sumResultTotal);

// Цена без скидки в числах
const FirstPriceNonDiscount = Number((FirstPriceWithoutDiscount.innerHTML?.split(' '))[0]);
const SecondPriceNonDiscount = Number((SecondPriceWithoutDiscount.innerHTML?.split(' ').join('')));
const ThirdPriceNonDiscount = Number((ThirdPriceWithoutDiscount.innerHTML?.split(' '))[0]);
const sumNonDiscount = [FirstPriceNonDiscount, SecondPriceNonDiscount, ThirdPriceNonDiscount].reduce((a, b) => a + b);
localStorage.setItem('FirstPriceNonDiscount', FirstPriceNonDiscount);
localStorage.setItem('SecondPriceNonDiscount', SecondPriceNonDiscount);
localStorage.setItem('ThirdPriceNonDiscount', ThirdPriceNonDiscount);
localStorage.setItem('sumNonDiscount', sumNonDiscount);

// Количество товаров
const firstQuantitySum = Number(firstQuantity.value);
const secondQuantitySum = Number(secondQuantity.value);
const thirdQuantitySum = Number(thirdQuantity.value);
const allQuantity = [firstQuantitySum, secondQuantitySum, thirdQuantitySum].reduce((a, b) => a + b);
localStorage.setItem('firstQuantitySum', firstQuantitySum);
localStorage.setItem('secondQuantitySum', secondQuantitySum);
localStorage.setItem('thirdQuantitySum', thirdQuantitySum);
localStorage.setItem('allQuantity', allQuantity);
// Сумма скидки
let resultSumDiscount = (sumNonDiscount - sumResultTotal);
resultSumDiscount = `−${Number(resultSumDiscount)}`;
localStorage.setItem('resultSumDiscount', resultSumDiscount);

// Валидация форма
firstNameInput.addEventListener('change', async (e) => {
  e.preventDefault();
  const test = firstNameInput.value.length === 0 || FirstNameRegExp.test(firstNameInput.value);
  if (test) {
    firstNameInput.className = 'InputsRecipient valid';
    LabelErrorFirstName.style.display = 'none';
  } else {
    firstNameInput.className = 'InputsRecipient invalid';
    LabelErrorFirstName.style.display = 'flex';
  }
});

lastNameInput.addEventListener('change', async (e) => {
  e.preventDefault();
  const test = lastNameInput.value.length === 0 || LastNameRegExp.test(lastNameInput.value);
  if (test) {
    lastNameInput.className = 'InputsRecipient valid';
    LabelErrorLastName.style.display = 'none';
  } else {
    lastNameInput.className = 'InputsRecipient invalid';
    LabelErrorLastName.style.display = 'flex';
  }
});

emainInput.addEventListener('change', async (e) => {
  e.preventDefault();
  const test = emainInput.value.length === 0 || emailRegExp.test(emainInput.value);
  if (test) {
    emainInput.className = 'InputsRecipient valid';
    LabelErrorEmail.style.display = 'none';
  } else {
    emainInput.className = 'InputsRecipient invalid';
    LabelErrorEmail.style.display = 'flex';
  }
});

phoneInput.addEventListener('change', async (e) => {
  phoneInput.value = phoneInput.value.replace(/^[+]?(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1 $2 $3 $4 $5');
  e.preventDefault();
  const test = phoneInput.value.length === 0 || PhoneRegExp.test(phoneInput.value);
  if (test) {
    phoneInput.className = 'InputsRecipient valid';
    LabelErrorPhone.style.display = 'none';
  } else {
    phoneInput.className = 'InputsRecipient invalid';
    LabelErrorPhone.style.display = 'flex';
  }
});

INNInput.addEventListener('change', async (e) => {
  e.preventDefault();
  const test = INNInput.value.length === 0 || INNRexExp.test(INNInput.value);
  if (test) {
    INNInput.className = 'InputsRecipient valid';
    LabelErrorINN.style.display = 'none';
  } else {
    INNInput.className = 'InputsRecipient invalid';
    LabelErrorINN.style.display = 'flex';
  }
});

// Сворачивание первого блока
firstVectorUp.addEventListener('click', async (e) => {
  if (firstVectorUp.classList.contains('active')) {
    firstVectorUp.classList.add('nonActive');
    firstVectorUp.classList.remove('active');
    labelCheckboxAll.style.display = 'none';
    // Актуальная цена
    let resultSum = Number(localStorage.sumResultTotal);
    resultSum = `${(`${resultSum}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
    // Актуальное количество
    const QuantitySpan = `${Number(localStorage.allQuantity)} товаров`;
    spanTextFirstBlock.innerHTML = `${QuantitySpan} · ${resultSum}`;
    spanTextFirstBlock.style.display = 'flex';
    firstContentTransformBlock.style.maxHeight = null;
    firstContentTransformBlock.style.display = 'none';
    lineDown.style.display = 'flex';
  } else {
    firstVectorUp.classList.remove('nonActive');
    firstVectorUp.classList.add('active');
    labelCheckboxAll.style.display = 'flex';
    spanTextFirstBlock.style.display = 'none';
    firstContentTransformBlock.style.display = 'flex';
    firstContentTransformBlock.style.maxHeight = `${firstContentTransformBlock.scrollHeight}px`;
    lineDown.style.display = 'none';
  }
});

secondVectorUp.addEventListener('click', async (e) => {
  if (secondVectorUp.classList.contains('active')) {
    secondVectorUp.classList.add('nonActive');
    secondVectorUp.classList.remove('active');
    secondContentTransformBlock.style.maxHeight = null;
    secondContentTransformBlock.style.display = 'none';
    spanNeedChange.style.margin = '-30px 0px 0px 0px';
    blockChange.style.margin = '-6px 0px 0px 0px';
  } else {
    secondVectorUp.classList.remove('nonActive');
    secondVectorUp.classList.add('active');
    secondContentTransformBlock.style.display = 'flex';
    secondContentTransformBlock.style.maxHeight = `${secondContentTransformBlock.scrollHeight}px`;
    spanNeedChange.style.margin = '-2px 0px 0px 0px';
    spanNeedChange.style.margin = '0px 0px 0px 0px';
  }
});

buttonTextOplata.addEventListener('click', async (e) => {
  modalOplata.style.display = 'flex';
});

buttonPanOplata.addEventListener('click', async (e) => {
  modalOplata.style.display = 'flex';
});

spanOplataClose.addEventListener('click', async (e) => {
  modalOplata.style.display = 'none';
});

// Кнопка перезаписи данных в модалке
buttonCloseModalOplata.addEventListener('click', async (e) => {
  const iconOplaty = document.querySelector('.IconOplaty');
  const listCheck = document.querySelectorAll('.modal-body input[type=radio]');
  let infoCheck = null;

  for (let i = 0; i < listCheck.length; i++) {
    if (listCheck[i].checked === true) {
      infoCheck = listCheck[i];
    }
  }

  const srcImg = infoCheck.parentNode.childNodes[3].childNodes[0].getAttribute('src');
  const numberCard = infoCheck.parentNode.childNodes[3].innerText;

  const ImgOplataCard = document.querySelector('.IconOplaty');
  const resultImgOplata = document.querySelector('.IconOplatyTotal');
  const spanOplataCard = document.querySelector('.SpanNumberCard');
  const spanResultOplataCard = document.querySelector('.SpanNumberCardTotal');

  ImgOplataCard.removeAttribute('src');
  ImgOplataCard.setAttribute('src', `${srcImg}`);
  resultImgOplata.removeAttribute('src');
  resultImgOplata.setAttribute('src', `${srcImg}`);
  spanOplataCard.innerHTML = numberCard;
  spanResultOplataCard.innerHTML = numberCard;

  modalOplata.style.display = 'none';
});

buttonTextDelivery.addEventListener('click', async (e) => {
  modalDelivery.style.display = 'flex';
});

buttonPanDelivery.addEventListener('click', async (e) => {
  modalDelivery.style.display = 'flex';
});

spanDeliveryClose.addEventListener('click', async (e) => {
  modalDelivery.style.display = 'none';
});

buttonDeliveryPoint.addEventListener('click', async (e) => {
  blockPoint.style.display = 'flex';
  blockCouriet.style.display = 'none';
});

buttonDeliveryCourier.addEventListener('click', async (e) => {
  blockCouriet.style.display = 'flex';
  blockPoint.style.display = 'none';
});

buttonCloseModalDelivery.addEventListener('click', async (e) => {
  const listCheck = document.querySelectorAll('.modal-bodyDelivery input[type=radio]');
  let infoCheck = null;
  const courierDostavka = 'Доставка курьером';
  const dostavkaPoint = 'Пункт выдачи';
  const dostavkaPointResult = 'Доставка в пункт выдачи';

  for (let i = 0; i < listCheck.length; i++) {
    if (listCheck[i].checked === true) {
      infoCheck = listCheck[i];
    }
  }
  const sposobdostavki = infoCheck.parentNode.parentNode;
  const point = infoCheck.parentNode.parentNode.parentNode;
  const adress = infoCheck.parentNode.childNodes[3].innerText;
  const raiting = infoCheck?.parentNode?.childNodes[5]?.childNodes[1]?.childNodes[3]?.innerHTML;

  if (point.classList?.contains('BlockDostavkaPickUpPoint')) {
    const SpanCoomonDelivery = document.querySelector('.SpanCoomonDelivery');
    const TitleAdressFirst = document.querySelector('.TitleAdressFirst');
    const TitleAdressSecond = document.querySelector('.TitleAdressSecond');
    const SpanTitleTotalDelivery = document.querySelector('.SpanTitleTotalDelivery');
    const SpanStreetTotalDelivery = document.querySelector('.SpanStreetTotalDelivery');
    const InsideBlockRaiting = document.querySelector('.BlockRaiting');
    const InsideBlockRaitingFirst = document.querySelector('.BlockRaitingSecond');
    const RaitingStarNumber = document.querySelector('.RaitingStarNumber');
    RaitingStarNumber.innerHTML = raiting;
    InsideBlockRaiting.style.display = 'flex';
    InsideBlockRaitingFirst.style.display = 'flex';
    SpanCoomonDelivery.innerHTML = dostavkaPoint;
    SpanTitleTotalDelivery.innerHTML = dostavkaPointResult;
    TitleAdressFirst.innerHTML = adress;
    TitleAdressSecond.innerHTML = adress;
    SpanStreetTotalDelivery.innerHTML = adress;
  }

  if (sposobdostavki.classList?.contains('BlockDostavkaCourier')) {
    const SpanCoomonDelivery = document.querySelector('.SpanCoomonDeliveryFirst');
    const TitleAdressFirst = document.querySelector('.TitleAdressFirst');
    const TitleAdressSecond = document.querySelector('.TitleAdressSecond');
    const SpanTitleTotalDelivery = document.querySelector('.SpanTitleTotalDelivery');
    const SpanStreetTotalDelivery = document.querySelector('.SpanStreetTotalDelivery');
    const InsideBlockRaiting = document.querySelector('.BlockRaiting');
    const InsideBlockRaitingFirst = document.querySelector('.BlockRaitingSecond');
    InsideBlockRaiting.style.display = 'none';
    InsideBlockRaitingFirst.style.display = 'none';
    SpanCoomonDelivery.innerHTML = courierDostavka;
    SpanTitleTotalDelivery.innerHTML = courierDostavka;
    TitleAdressFirst.innerHTML = adress;
    TitleAdressSecond.innerHTML = adress;
    SpanStreetTotalDelivery.innerHTML = adress;
  }
  // console.log(infoCheck.parentNode.parentNode);
  modalDelivery.style.display = 'none';
});

for (let i = 0; i < buttonDeleteModal.length; i++) {
  buttonDeleteModal[i].addEventListener('click', async (e) => {
    const needBlockDeleted = buttonDeleteModal[i]?.parentNode?.parentNode;
    needBlockDeleted.style.display = 'none';
  });
}

window.onclick = function (event) {
  if (event.target === modalOplata) {
    modalOplata.style.display = 'none';
  }
  if (event.target === modalDelivery) {
    modalDelivery.style.display = 'none';
  }
};

// Сворачивание второго блока

// Начало логики для счётчиков
for (let i = 0; i < allPlus.length; i++) {
  if (allPlus[i].id === 'ButtonPlus2') {
    allPlus[i].addEventListener('click', async (e) => {
      let num = Number(allPlus[i].parentNode.parentNode.childNodes[3].value);
      // Цена за одну штуку
      const costOne = Math.trunc(Number(localStorage.secondSum) / num);
      const costOneNoSkidka = Math.trunc(Number(localStorage.SecondPriceNonDiscount) / num);
      num += 1;
      if (num >= 185) {
        const spanDostavka = document.querySelector('.SpanDateDilvery');
        spanDostavka.innerHTML = '5–8 фев';
        if (num === 185) {
          for (let y = 0; y < lableDown.length; y++) {
            lableDown[y].style.visibility = 'hidden';
          }
        } if (num > 185) {
          for (let a = 0; a < lableDown.length; a++) {
            lableDown[a].style.visibility = 'visible';
            const spanAll = document.querySelectorAll('.SpanLastLabelDelivery');
            for (let k = 0; k < spanAll.length; k++) {
              spanAll[k].innerHTML = num - 184;
            }
          }
        }
        blockNoneChange.style.display = 'flex';
      }
      if (num < 185) {
        const spanDostavka = document.querySelector('.SpanDateDilvery');
        spanDostavka.innerHTML = '5–6 фев';
        if (num === 1) {
          for (let w = 0; w < secondLable.length; w++) {
            secondLable[w].style.visibility = 'hidden';
          }
        } else {
          for (let w = 0; w < secondLable.length; w++) {
            secondLable[w].style.visibility = 'visible';
          }
        }
        const spanAll = document.querySelectorAll('.SecondSpanLableDelivery');
        for (let z = 0; z < spanAll.length; z++) {
          spanAll[z].innerHTML = num;
        }
        blockNoneChange.style.display = 'none';
      }
      localStorage.secondQuantitySum = num;
      if (allMinus[i].hasAttribute('disabled')) {
        allMinus[i].removeAttribute('disabled');
      }

      // цена без скидки
      const sumResultCost = Math.trunc(Number(localStorage.secondSum) + costOne);
      localStorage.secondSum = sumResultCost;
      const sumResultNonSkidkaCost = Math.trunc(Number(localStorage.SecondPriceNonDiscount) + costOneNoSkidka);
      localStorage.SecondPriceNonDiscount = sumResultNonSkidkaCost;

      // Количество товара
      const Quantity = [Number(localStorage.firstQuantitySum), Number(localStorage.secondQuantitySum), Number(localStorage.thirdQuantitySum)].reduce((a, b) => a + b);
      localStorage.allQuantity = Quantity;
      const kolVo = `${Quantity} товара`;
      QuantityProduct.innerText = kolVo;

      // Актуальная цена со скидкой
      let resultSum = [Number(localStorage.firstSum), Number(localStorage.secondSum), Number(localStorage.thirdSum)].reduce((a, b) => a + b);
      localStorage.sumResultTotal = resultSum;
      // Актуальная сумма без скидки
      let resultNonDiscount = [Number(localStorage.FirstPriceNonDiscount), Number(localStorage.SecondPriceNonDiscount), Number(localStorage.ThirdPriceNonDiscount)].reduce((a, b) => a + b);
      localStorage.sumNonDiscount = resultNonDiscount;
      let skidka = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
      localStorage.resultSumDiscount = `${skidka}`;

      // В нужный формат привожу данные
      resultSum = `${(`${resultSum}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
      skidka = `${(`${skidka}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
      resultNonDiscount = `${(`${resultNonDiscount}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;

      if (`${sumResultCost}`.length > 6) {
        onePieceSecond.style.fontSize = '16px';
        PieceSecondMobile.style.fontSize = '16px';
      } else {
        onePieceSecond.style.fontSize = '20px';
        PieceSecondMobile.style.fontSize = '20px';
      }

      if (`${sumResultCost}`.length > 7) {
        onePieceSecond.style.fontSize = '14px';
        PieceSecondMobile.style.fontSize = '14px';
      }

      onePieceSecond.innerHTML = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
      PieceSecondMobile.innerText = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
      SecondPriceWithoutDiscount.innerHTML = `${`${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
      for (let j = 0; j < secondPriceMobile.length; j++) {
        secondPriceMobile[j].innerHTML = `${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
      }
      SumProduct.innerHTML = resultNonDiscount;
      resultTotal.innerHTML = resultSum;
      SumDiscount.innerHTML = skidka;
      spanButtonZakaz.innerHTML = `Оплатить ${resultSum} сом`;

      allPlus[i].parentNode.parentNode.childNodes[3].value = num;
    });
  } else {
    allPlus[i].addEventListener('click', async (e) => {
      let { id } = e.target;
      id = id.replace('ButtonPlus', '');
      if (id === '1') {
        let num = Number(allPlus[i].parentNode.parentNode.childNodes[3].value);
        if (num > 0 && num < 2) {
          // Цена за одну штуку
          const costOne = Math.trunc(Number(localStorage.firstSum) / num);
          const costOneNoSkidka = Math.trunc(Number(localStorage.FirstPriceNonDiscount) / num);
          num += 1;
          if (num === 1) {
            for (let w = 0; w < firstLable.length; w++) {
              firstLable[w].style.visibility = 'hidden';
              const spanAll = document.querySelectorAll('.FirstSpanLableDelivery');
              for (let z = 0; z < spanAll.length; z++) {
                spanAll[z].innerHTML = num;
              }
            }
          } else {
            for (let w = 0; w < firstLable.length; w++) {
              firstLable[w].style.visibility = 'visible';
              const spanAll = document.querySelectorAll('.FirstSpanLableDelivery');
              for (let z = 0; z < spanAll.length; z++) {
                spanAll[z].innerHTML = num;
              }
            }
          }
          localStorage.firstQuantitySum = num;

          // цена без скидки
          const sumResultCost = Math.trunc(Number(localStorage.firstSum) + costOne);
          localStorage.firstSum = sumResultCost;
          const sumResultNonSkidkaCost = Math.trunc(Number(localStorage.FirstPriceNonDiscount) + costOneNoSkidka);
          localStorage.FirstPriceNonDiscount = sumResultNonSkidkaCost;

          // Количество товара
          const Quantity = [Number(localStorage.firstQuantitySum), Number(localStorage.secondQuantitySum), Number(localStorage.thirdQuantitySum)].reduce((a, b) => a + b);
          localStorage.allQuantity = Quantity;
          const kolVo = `${Quantity} товара`;
          QuantityProduct.innerText = kolVo;
          // Актуальная цена со скидкой
          let resultSum = [Number(localStorage.firstSum), Number(localStorage.secondSum), Number(localStorage.thirdSum)].reduce((a, b) => a + b);
          localStorage.sumResultTotal = resultSum;
          // Актуальная сумма без скидки
          let resultNonDiscount = [Number(localStorage.FirstPriceNonDiscount), Number(localStorage.SecondPriceNonDiscount), Number(localStorage.ThirdPriceNonDiscount)].reduce((a, b) => a + b);
          localStorage.sumNonDiscount = resultNonDiscount;
          let skidka = `−${resultNonDiscount - resultSum}`;
          localStorage.resultSumDiscount = `${skidka}`;

          // В нужный формат привожу данные
          resultSum = `${(`${resultSum}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
          skidka = `${(`${skidka}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
          resultNonDiscount = `${(`${resultNonDiscount}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;

          if (`${sumResultCost}`.length > 6) {
            onePieceFirst.style.fontSize = '16px';
            PieceFirstMobile.style.fontSize = '16px';
          } else {
            onePieceFirst.style.fontSize = '20px';
            PieceFirstMobile.style.fontSize = '20px';
          }
          if (`${sumResultCost}`.length > 7) {
            onePieceFirst.style.fontSize = '14px';
            PieceFirstMobile.style.fontSize = '14px';
          }

          onePieceFirst.innerHTML = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
          PieceFirstMobile.innerText = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
          FirstPriceWithoutDiscount.innerHTML = `${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
          for (let j = 0; j < firstPriceMobile.length; j++) {
            firstPriceMobile[j].innerHTML = `${`${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
          }
          spanButtonZakaz.innerHTML = `Оплатить ${resultSum} сом`;
          SumProduct.innerHTML = resultNonDiscount;
          resultTotal.innerHTML = resultSum;
          SumDiscount.innerHTML = skidka;

          allPlus[i].setAttribute('disabled', 'true');
          allMinus[i].removeAttribute('disabled');
          allPlus[i].parentNode.parentNode.childNodes[3].value = num;
        }
      }
      if (id === '3') {
        let num = Number(allPlus[i].parentNode.parentNode.childNodes[3].value);
        if (num > 0 && num < 2) {
          // Цена за одну штуку
          const costOne = Math.trunc(Number(localStorage.thirdSum) / num);
          const costOneNoSkidka = Math.trunc(Number(localStorage.ThirdPriceNonDiscount) / num);
          num += 1;
          if (num === 1) {
            for (let w = 0; w < thirdLable.length; w++) {
              thirdLable[w].style.visibility = 'hidden';
              const spanAll = document.querySelectorAll('.ThirdSpanLableDelivery');
              for (let y = 0; y < spanAll.length; y++) {
                spanAll[y].innerHTML = num;
              }
            }
          } else {
            for (let w = 0; w < thirdLable.length; w++) {
              thirdLable[w].style.visibility = 'visible';
              const spanAll = document.querySelectorAll('.ThirdSpanLableDelivery');
              for (let k = 0; k < spanAll.length; k++) {
                spanAll[k].innerHTML = num;
              }
            }
          }
          localStorage.thirdQuantitySum = num;

          // цена без скидки
          const sumResultCost = Math.trunc(Number(localStorage.thirdSum) + costOne);
          localStorage.thirdSum = sumResultCost;
          const sumResultNonSkidkaCost = Math.trunc(Number(localStorage.ThirdPriceNonDiscount) + costOneNoSkidka);
          localStorage.ThirdPriceNonDiscount = sumResultNonSkidkaCost;

          // Количество товара
          const Quantity = [Number(localStorage.firstQuantitySum), Number(localStorage.secondQuantitySum), Number(localStorage.thirdQuantitySum)].reduce((a, b) => a + b);
          localStorage.allQuantity = Quantity;
          const kolVo = `${Quantity} товара`;
          QuantityProduct.innerText = kolVo;

          // Актуальная цена со скидкой
          let resultSum = [Number(localStorage.firstSum), Number(localStorage.secondSum), Number(localStorage.thirdSum)].reduce((a, b) => a + b);
          localStorage.sumResultTotal = resultSum;
          // Актуальная сумма без скидки
          let resultNonDiscount = [Number(localStorage.FirstPriceNonDiscount), Number(localStorage.SecondPriceNonDiscount), Number(localStorage.ThirdPriceNonDiscount)].reduce((a, b) => a + b);
          localStorage.sumNonDiscount = resultNonDiscount;
          let skidka = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
          localStorage.resultSumDiscount = `${skidka}`;

          // В нужный формат привожу данные
          resultSum = `${(`${resultSum}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
          skidka = `${(`${skidka}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
          resultNonDiscount = `${(`${resultNonDiscount}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;

          if (`${sumResultCost}`.length > 6) {
            onePieceThird.style.fontSize = '16px';
            PieceThirdMobile.style.fontSize = '16px';
          } else {
            onePieceThird.style.fontSize = '20px';
            PieceThirdMobile.style.fontSize = '20px';
          }
          if (`${sumResultCost}`.length > 7) {
            onePieceThird.style.fontSize = '14px';
            PieceThirdMobile.style.fontSize = '14px';
          }

          onePieceThird.innerHTML = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
          PieceThirdMobile.innerHTML = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
          ThirdPriceWithoutDiscount.innerHTML = `${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
          for (let j = 0; j < thirdPriceMobile.length; j++) {
            thirdPriceMobile[j].innerHTML = `${`${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1')}`;
          }
          spanButtonZakaz.innerHTML = `Оплатить ${resultSum} сом`;
          SumProduct.innerHTML = resultNonDiscount;
          resultTotal.innerHTML = resultSum;
          SumDiscount.innerHTML = skidka;

          allPlus[i].setAttribute('disabled', 'true');
          allMinus[i].removeAttribute('disabled');
          allPlus[i].parentNode.parentNode.childNodes[3].value = num;
        }
      }
    });
  }
}

for (let i = 0; i < allMinus.length; i++) {
  allMinus[i].addEventListener('click', async (e) => {
    let { id } = e.target;
    id = id.replace('ButtonMinus', '');
    if (id === '1') {
      let num = Number(allMinus[i].parentNode.parentNode.childNodes[3].value);
      if (num > 1 && num <= 2) {
        // Цена за одну штуку
        const costOne = Math.trunc(Number(localStorage.firstSum) / num);
        const costOneNoSkidka = Math.trunc(Number(localStorage.FirstPriceNonDiscount) / num);
        num -= 1;
        if (num === 1) {
          for (let w = 0; w < firstLable.length; w++) {
            firstLable[w].style.visibility = 'hidden';
            const spanAll = document.querySelectorAll('.FirstSpanLableDelivery');
            for (let z = 0; z < spanAll.length; z++) {
              spanAll[z].innerHTML = num;
            }
          }
        } else {
          for (let w = 0; w < firstLable.length; w++) {
            firstLable[w].style.visibility = 'visible';
            const spanAll = document.querySelectorAll('.FirstSpanLableDelivery');
            for (let z = 0; z < spanAll.length; z++) {
              spanAll[z].innerHTML = num;
            }
          }
        }
        localStorage.firstQuantitySum = num;

        // цена без скидки
        const sumResultCost = Math.trunc(Number(localStorage.firstSum) - costOne);
        localStorage.firstSum = sumResultCost;
        const sumResultNonSkidkaCost = Math.trunc(Number(localStorage.FirstPriceNonDiscount) - costOneNoSkidka);
        localStorage.FirstPriceNonDiscount = sumResultNonSkidkaCost;

        // Количество товара
        const Quantity = [Number(localStorage.firstQuantitySum), Number(localStorage.secondQuantitySum), Number(localStorage.thirdQuantitySum)].reduce((a, b) => a + b);
        localStorage.allQuantity = Quantity;
        const kolVo = `${Quantity} товара`;
        QuantityProduct.innerText = kolVo;

        // Актуальная цена со скидкой
        let resultSum = [Number(localStorage.firstSum), Number(localStorage.secondSum), Number(localStorage.thirdSum)].reduce((a, b) => a + b);
        localStorage.sumResultTotal = resultSum;
        // Актуальная сумма без скидки
        let resultNonDiscount = [Number(localStorage.FirstPriceNonDiscount), Number(localStorage.SecondPriceNonDiscount), Number(localStorage.ThirdPriceNonDiscount)].reduce((a, b) => a + b);
        localStorage.sumNonDiscount = resultNonDiscount;
        let skidka = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
        localStorage.resultSumDiscount = `${skidka}`;

        // В нужный формат привожу данные
        resultSum = `${(`${resultSum}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
        skidka = `${(`${skidka}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        resultNonDiscount = `${(`${resultNonDiscount}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;

        if (`${sumResultCost}`.length > 6) {
          onePieceFirst.style.fontSize = '16px';
          PieceFirstMobile.style.fontSize = '16px';
        } else {
          onePieceFirst.style.fontSize = '20px';
          PieceFirstMobile.style.fontSize = '20px';
        }
        if (`${sumResultCost}`.length > 7) {
          onePieceFirst.style.fontSize = '14px';
          PieceFirstMobile.style.fontSize = '14px';
        }

        onePieceFirst.innerHTML = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        PieceFirstMobile.innerText = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        FirstPriceWithoutDiscount.innerHTML = `${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        for (let j = 0; j < firstPriceMobile.length; j++) {
          firstPriceMobile[j].innerHTML = `${`${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
        }
        spanButtonZakaz.innerHTML = `Оплатить ${resultSum} сом`;
        SumProduct.innerHTML = resultNonDiscount;
        resultTotal.innerHTML = resultSum;
        SumDiscount.innerHTML = skidka;

        allMinus[i].setAttribute('disabled', 'true');
        allPlus[i].removeAttribute('disabled');
        allMinus[i].parentNode.parentNode.childNodes[3].value = num;
      }
    }
    if (id === '2') {
      let num = Number(allMinus[i].parentNode.parentNode.childNodes[3].value);
      // Цена за одну штуку
      const costOne = Math.trunc(Number(localStorage.secondSum) / num);
      const costOneNoSkidka = Math.trunc(Number(localStorage.SecondPriceNonDiscount) / num);
      num -= 1;
      if (num >= 185) {
        const spanDostavka = document.querySelector('.SpanDateDilvery');
        spanDostavka.innerHTML = '5–8 фев';
        if (num === 185) {
          for (let y = 0; y < lableDown.length; y++) {
            lableDown[y].style.visibility = 'hidden';
          }
        } if (num > 185) {
          for (let a = 0; a < lableDown.length; a++) {
            lableDown[a].style.visibility = 'visible';
            const spanAll = document.querySelectorAll('.SpanLastLabelDelivery');
            for (let k = 0; k < spanAll.length; k++) {
              spanAll[k].innerHTML = num - 184;
            }
          }
        }
        blockNoneChange.style.display = 'flex';
      }
      if (num < 185) {
        const spanDostavka = document.querySelector('.SpanDateDilvery');
        spanDostavka.innerHTML = '5–6 фев';
        if (num === 1) {
          for (let w = 0; w < secondLable.length; w++) {
            secondLable[w].style.visibility = 'hidden';
          }
        } else {
          for (let w = 0; w < secondLable.length; w++) {
            secondLable[w].style.visibility = 'visible';
          }
        }
        const spanAll = document.querySelectorAll('.SecondSpanLableDelivery');
        for (let z = 0; z < spanAll.length; z++) {
          spanAll[z].innerHTML = num;
        }
        blockNoneChange.style.display = 'none';
      }
      localStorage.secondQuantitySum = num;
      if (num === 1) {
        allMinus[i].setAttribute('disabled', 'true');
      }
      // цена без скидки
      const sumResultCost = Math.trunc(Number(localStorage.secondSum) - costOne);
      localStorage.secondSum = sumResultCost;
      const sumResultNonSkidkaCost = Math.trunc(Number(localStorage.SecondPriceNonDiscount) - costOneNoSkidka);
      localStorage.SecondPriceNonDiscount = sumResultNonSkidkaCost;

      // Количество товара
      const Quantity = [Number(localStorage.firstQuantitySum), Number(localStorage.secondQuantitySum), Number(localStorage.thirdQuantitySum)].reduce((a, b) => a + b);
      localStorage.allQuantity = Quantity;
      const kolVo = `${Quantity} товара`;
      QuantityProduct.innerText = kolVo;

      // Актуальная цена со скидкой
      let resultSum = [Number(localStorage.firstSum), Number(localStorage.secondSum), Number(localStorage.thirdSum)].reduce((a, b) => a + b);
      localStorage.sumResultTotal = resultSum;
      // Актуальная сумма без скидки
      let resultNonDiscount = [Number(localStorage.FirstPriceNonDiscount), Number(localStorage.SecondPriceNonDiscount), Number(localStorage.ThirdPriceNonDiscount)].reduce((a, b) => a + b);
      localStorage.sumNonDiscount = resultNonDiscount;
      let skidka = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
      localStorage.resultSumDiscount = `${skidka}`;

      // В нужный формат привожу данные
      resultSum = `${(`${resultSum}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
      skidka = `${(`${skidka}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
      resultNonDiscount = `${(`${resultNonDiscount}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;

      if (`${sumResultCost}`.length > 6) {
        onePieceSecond.style.fontSize = '16px';
        PieceSecondMobile.style.fontSize = '16px';
      } else {
        onePieceSecond.style.fontSize = '20px';
        PieceSecondMobile.style.fontSize = '20px';
      }
      if (`${sumResultCost}`.length > 7) {
        onePieceSecond.style.fontSize = '14px';
        PieceSecondMobile.style.fontSize = '14px';
      }

      onePieceSecond.innerHTML = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
      PieceSecondMobile.innerText = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
      SecondPriceWithoutDiscount.innerHTML = `${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
      for (let j = 0; j < secondPriceMobile.length; j++) {
        secondPriceMobile[j].innerHTML = `${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
      }
      spanButtonZakaz.innerHTML = `Оплатить ${resultSum} сом`;
      SumProduct.innerHTML = resultNonDiscount;
      resultTotal.innerHTML = resultSum;
      SumDiscount.innerHTML = skidka;

      allMinus[i].parentNode.parentNode.childNodes[3].value = num;
    }
    if (id === '3') {
      let num = Number(allMinus[i].parentNode.parentNode.childNodes[3].value);
      if (num > 1 && num <= 2) {
        // Цена за одну штуку
        const costOne = Math.trunc(Number(localStorage.thirdSum) / num);
        const costOneNoSkidka = Math.trunc(Number(localStorage.ThirdPriceNonDiscount) / num);
        num -= 1;
        if (num === 1) {
          for (let w = 0; w < thirdLable.length; w++) {
            thirdLable[w].style.visibility = 'hidden';
            const spanAll = document.querySelectorAll('.ThirdSpanLableDelivery');
            for (let z = 0; z < spanAll.length; z++) {
              spanAll[z].innerHTML = num;
            }
          }
        } else {
          for (let w = 0; w < thirdLable.length; w++) {
            thirdLable[w].style.visibility = 'visible';
            const spanAll = document.querySelectorAll('.ThirdSpanLableDelivery');
            for (let z = 0; z < spanAll.length; z++) {
              spanAll[z].innerHTML = num;
            }
          }
        }
        localStorage.thirdQuantitySum = num;

        // цена без скидки
        const sumResultCost = Math.trunc(Number(localStorage.thirdSum) - costOne);
        localStorage.thirdSum = sumResultCost;
        const sumResultNonSkidkaCost = Math.trunc(Number(localStorage.ThirdPriceNonDiscount) - costOneNoSkidka);
        localStorage.ThirdPriceNonDiscount = sumResultNonSkidkaCost;

        // Количество товара
        const Quantity = [Number(localStorage.firstQuantitySum), Number(localStorage.secondQuantitySum), Number(localStorage.thirdQuantitySum)].reduce((a, b) => a + b);
        localStorage.allQuantity = Quantity;
        const kolVo = `${Quantity} товара`;
        QuantityProduct.innerText = kolVo;

        // Актуальная цена со скидкой
        let resultSum = [Number(localStorage.firstSum), Number(localStorage.secondSum), Number(localStorage.thirdSum)].reduce((a, b) => a + b);
        localStorage.sumResultTotal = resultSum;
        // Актуальная сумма без скидки
        let resultNonDiscount = [Number(localStorage.FirstPriceNonDiscount), Number(localStorage.SecondPriceNonDiscount), Number(localStorage.ThirdPriceNonDiscount)].reduce((a, b) => a + b);
        localStorage.sumNonDiscount = resultNonDiscount;
        let skidka = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
        localStorage.resultSumDiscount = `${skidka}`;

        // В нужный формат привожу данные
        resultSum = `${(`${resultSum}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
        skidka = `${(`${skidka}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        resultNonDiscount = `${(`${resultNonDiscount}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;

        if (`${sumResultCost}`.length > 6) {
          onePieceThird.style.fontSize = '16px';
          PieceThirdMobile.style.fontSize = '16px';
        } else {
          onePieceThird.style.fontSize = '20px';
          PieceThirdMobile.style.fontSize = '20px';
        }
        if (`${sumResultCost}`.length > 7) {
          onePieceThird.style.fontSize = '14px';
          PieceThirdMobile.style.fontSize = '14px';
        }

        onePieceThird.innerHTML = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        PieceThirdMobile.innerText = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        ThirdPriceWithoutDiscount.innerHTML = `${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        for (let j = 0; j < thirdPriceMobile.length; j++) {
          thirdPriceMobile[j].innerHTML = `${`${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1')}`;
        }
        spanButtonZakaz.innerHTML = `Оплатить ${resultSum} сом`;
        SumProduct.innerHTML = resultNonDiscount;
        resultTotal.innerHTML = resultSum;
        SumDiscount.innerHTML = skidka;

        allMinus[i].setAttribute('disabled', 'true');
        allPlus[i].removeAttribute('disabled');
        allMinus[i].parentNode.parentNode.childNodes[3].value = num;
      }
    }
  });
}

for (let i = 0; i < allInputs.length; i++) {
  allInputs[i].addEventListener('change', async (e) => {
    let { id } = e.target;
    const { value } = e.target;
    id = id.replace('SpanNumberKolVo', '');
    if (id === '1') {
      if (value <= allInputs[i].min) {
        allMinus[i].setAttribute('disabled', 'true');
        allPlus[i].removeAttribute('disabled');
        // Цена за одну штуку
        const costOne = Math.trunc(Number(localStorage.firstSum) / Number(localStorage.firstQuantitySum));
        const costOneNoSkidka = Math.trunc(Number(localStorage.FirstPriceNonDiscount) / Number(localStorage.firstQuantitySum));
        allInputs[i].value = allInputs[i].min;
        if (Number(allInputs[i].value) === 1) {
          for (let w = 0; w < firstLable.length; w++) {
            firstLable[w].style.visibility = 'hidden';
            const spanAll = document.querySelectorAll('.FirstSpanLableDelivery');
            for (let z = 0; z < spanAll.length; z++) {
              spanAll[z].innerHTML = allInputs[i].value;
            }
          }
        } else {
          for (let w = 0; w < firstLable.length; w++) {
            firstLable[w].style.visibility = 'visible';
            const spanAll = document.querySelectorAll('.FirstSpanLableDelivery');
            for (let z = 0; z < spanAll.length; z++) {
              spanAll[z].innerHTML = allInputs[i].value;
            }
          }
        }
        localStorage.firstQuantitySum = allInputs[i].value;
        // цена без скидки
        const sumResultCost = Math.trunc(allInputs[i].value * costOne);
        localStorage.firstSum = sumResultCost;
        const sumResultNonSkidkaCost = Math.trunc(allInputs[i].value * costOneNoSkidka);
        localStorage.FirstPriceNonDiscount = sumResultNonSkidkaCost;

        // Количество товара
        const Quantity = [Number(allInputs[i].value), Number(localStorage.secondQuantitySum), Number(localStorage.thirdQuantitySum)].reduce((a, b) => a + b);
        localStorage.allQuantity = Quantity;
        const kolVo = `${Quantity} товара`;
        QuantityProduct.innerText = kolVo;

        // Актуальная цена со скидкой
        let resultSum = [Number(localStorage.firstSum), Number(localStorage.secondSum), Number(localStorage.thirdSum)].reduce((a, b) => a + b);
        localStorage.sumResultTotal = resultSum;
        // Актуальная сумма без скидки
        let resultNonDiscount = [Number(localStorage.FirstPriceNonDiscount), Number(localStorage.SecondPriceNonDiscount), Number(localStorage.ThirdPriceNonDiscount)].reduce((a, b) => a + b);
        localStorage.sumNonDiscount = resultNonDiscount;
        let skidka = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
        localStorage.resultSumDiscount = `${skidka}`;

        // В нужный формат привожу данные
        resultSum = `${(`${resultSum}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
        skidka = `${(`${skidka}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        resultNonDiscount = `${(`${resultNonDiscount}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;

        if (`${sumResultCost}`.length > 6) {
          onePieceFirst.style.fontSize = '16px';
          PieceFirstMobile.style.fontSize = '16px';
        } else {
          onePieceFirst.style.fontSize = '20px';
          PieceFirstMobile.style.fontSize = '20px';
        }
        if (`${sumResultCost}`.length > 7) {
          onePieceFirst.style.fontSize = '14px';
          PieceFirstMobile.style.fontSize = '14px';
        }

        onePieceFirst.innerHTML = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        PieceFirstMobile.innerText = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        FirstPriceWithoutDiscount.innerHTML = `${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        for (let j = 0; j < firstPriceMobile.length; j++) {
          firstPriceMobile[j].innerHTML = `${`${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
        }
        spanButtonZakaz.innerHTML = `Оплатить ${resultSum} сом`;
        SumProduct.innerHTML = resultNonDiscount;
        resultTotal.innerHTML = resultSum;
        SumDiscount.innerHTML = skidka;
      } else if (Number(value) >= allInputs[i].max) {
        allPlus[i].setAttribute('disabled', 'true');
        allMinus[i].removeAttribute('disabled');
        // Цена за одну штуку
        const costOne = Math.trunc(Number(localStorage.firstSum) / Number(localStorage.firstQuantitySum));
        const costOneNoSkidka = Math.trunc(Number(localStorage.FirstPriceNonDiscount) / Number(localStorage.firstQuantitySum));
        allInputs[i].value = allInputs[i].max;
        if (Number(allInputs[i].value) === 1) {
          for (let w = 0; w < firstLable.length; w++) {
            firstLable[w].style.visibility = 'hidden';
            const spanAll = document.querySelectorAll('.FirstSpanLableDelivery');
            for (let z = 0; z < spanAll.length; z++) {
              spanAll[z].innerHTML = allInputs[i].value;
            }
          }
        } else {
          for (let w = 0; w < firstLable.length; w++) {
            firstLable[w].style.visibility = 'visible';
            const spanAll = document.querySelectorAll('.FirstSpanLableDelivery');
            for (let z = 0; z < spanAll.length; z++) {
              spanAll[z].innerHTML = allInputs[i].value;
            }
          }
        }
        localStorage.firstQuantitySum = allInputs[i].value;
        // цена без скидки
        const sumResultCost = Math.trunc(allInputs[i].value * costOne);
        localStorage.firstSum = sumResultCost;
        const sumResultNonSkidkaCost = Math.trunc(allInputs[i].value * costOneNoSkidka);
        localStorage.FirstPriceNonDiscount = sumResultNonSkidkaCost;

        // Количество товара
        const Quantity = [Number(allInputs[i].value), Number(localStorage.secondQuantitySum), Number(localStorage.thirdQuantitySum)].reduce((a, b) => a + b);
        localStorage.allQuantity = Quantity;
        const kolVo = `${Quantity} товара`;
        QuantityProduct.innerText = kolVo;

        // Актуальная цена со скидкой
        let resultSum = [Number(localStorage.firstSum), Number(localStorage.secondSum), Number(localStorage.thirdSum)].reduce((a, b) => a + b);
        localStorage.sumResultTotal = resultSum;
        // Актуальная сумма без скидки
        let resultNonDiscount = [Number(localStorage.FirstPriceNonDiscount), Number(localStorage.SecondPriceNonDiscount), Number(localStorage.ThirdPriceNonDiscount)].reduce((a, b) => a + b);
        localStorage.sumNonDiscount = resultNonDiscount;
        let skidka = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
        localStorage.resultSumDiscount = `${skidka}`;

        // В нужный формат привожу данные
        resultSum = `${(`${resultSum}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
        skidka = `${(`${skidka}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        resultNonDiscount = `${(`${resultNonDiscount}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;

        if (`${sumResultCost}`.length > 6) {
          onePieceFirst.style.fontSize = '16px';
          PieceFirstMobile.style.fontSize = '16px';
        } else {
          onePieceFirst.style.fontSize = '20px';
          PieceFirstMobile.style.fontSize = '20px';
        }
        if (`${sumResultCost}`.length > 7) {
          onePieceFirst.style.fontSize = '14px';
          PieceFirstMobile.style.fontSize = '14px';
        }

        onePieceFirst.innerHTML = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        PieceFirstMobile.innerText = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        FirstPriceWithoutDiscount.innerHTML = `${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        for (let j = 0; j < firstPriceMobile.length; j++) {
          firstPriceMobile[j].innerHTML = `${`${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
        }
        spanButtonZakaz.innerHTML = `Оплатить ${resultSum} сом`;
        SumProduct.innerHTML = resultNonDiscount;
        resultTotal.innerHTML = resultSum;
        SumDiscount.innerHTML = skidka;
      } else {
        allInputs[i].value = value;
      }
    }
    if (id === '2') {
      if (Number(value) <= allInputs[i].min) {
        allMinus[i].setAttribute('disabled', 'true');
        allPlus[i].removeAttribute('disabled');
        // Цена за одну штуку
        const costOne = Math.trunc(Number(localStorage.secondSum) / Number(localStorage.secondQuantitySum));
        const costOneNoSkidka = Math.trunc(Number(localStorage.SecondPriceNonDiscount) / Number(localStorage.secondQuantitySum));
        allInputs[i].value = allInputs[i].min;
        if (allInputs[i].value >= 185) {
          const spanDostavka = document.querySelector('.SpanDateDilvery');
          spanDostavka.innerHTML = '5–8 фев';
          if (allInputs[i].value === 185) {
            for (let y = 0; y < lableDown.length; y++) {
              lableDown[y].style.visibility = 'hidden';
            }
          } if (allInputs[i].value > 185) {
            for (let a = 0; a < lableDown.length; a++) {
              lableDown[a].style.visibility = 'visible';
              const spanAll = document.querySelectorAll('.SpanLastLabelDelivery');
              for (let k = 0; k < spanAll.length; k++) {
                spanAll[k].innerHTML = allInputs[i].value - 184;
              }
            }
          }
          blockNoneChange[x].style.display = 'flex';
        }
        if (allInputs[i].value < 185) {
          const spanDostavka = document.querySelector('.SpanDateDilvery');
          spanDostavka.innerHTML = '5–6 фев';
          if (Number(allInputs[i].value) === 1) {
            for (let w = 0; w < secondLable.length; w++) {
              secondLable[w].style.visibility = 'hidden';
            }
          } else {
            for (let w = 0; w < secondLable.length; w++) {
              secondLable[w].style.visibility = 'visible';
            }
          }
          const spanAll = document.querySelectorAll('.SecondSpanLableDelivery');
          for (let z = 0; z < spanAll.length; z++) {
            spanAll[z].innerHTML = allInputs[i].value;
          }
          blockNoneChange.style.display = 'none';
        }
        // цена без скидки
        const sumResultCost = Math.trunc(allInputs[i].value * costOne);
        localStorage.secondSum = sumResultCost;
        const sumResultNonSkidkaCost = Math.trunc(allInputs[i].value * costOneNoSkidka);
        localStorage.SecondPriceNonDiscount = sumResultNonSkidkaCost;

        // Количество товара
        const Quantity = [Number(allInputs[i].value), Number(localStorage.firstQuantitySum), Number(localStorage.thirdQuantitySum)].reduce((a, b) => a + b);
        localStorage.allQuantity = Quantity;
        const kolVo = `${Quantity} товара`;
        QuantityProduct.innerText = kolVo;

        // Актуальная цена со скидкой
        let resultSum = [Number(localStorage.firstSum), Number(localStorage.secondSum), Number(localStorage.thirdSum)].reduce((a, b) => a + b);
        localStorage.sumResultTotal = resultSum;
        // Актуальная сумма без скидки
        let resultNonDiscount = [Number(localStorage.FirstPriceNonDiscount), Number(localStorage.SecondPriceNonDiscount), Number(localStorage.ThirdPriceNonDiscount)].reduce((a, b) => a + b);
        localStorage.sumNonDiscount = resultNonDiscount;
        let skidka = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
        localStorage.resultSumDiscount = `${skidka}`;

        // В нужный формат привожу данные
        resultSum = `${(`${resultSum}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
        skidka = `${(`${skidka}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        resultNonDiscount = `${(`${resultNonDiscount}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;

        if (`${sumResultCost}`.length > 6) {
          onePieceSecond.style.fontSize = '16px';
          PieceSecondMobile.style.fontSize = '16px';
        } else {
          onePieceSecond.style.fontSize = '20px';
          PieceSecondMobile.style.fontSize = '20px';
        }
        if (`${sumResultCost}`.length > 7) {
          onePieceSecond.style.fontSize = '14px';
          PieceSecondMobile.style.fontSize = '14px';
        }

        onePieceSecond.innerHTML = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        PieceSecondMobile.innerText = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        SecondPriceWithoutDiscount.innerHTML = `${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        for (let j = 0; j < secondPriceMobile.length; j++) {
          secondPriceMobile[j].innerHTML = `${`${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1')}`;
        }
        spanButtonZakaz.innerHTML = `Оплатить ${resultSum} сом`;
        SumProduct.innerHTML = resultNonDiscount;
        resultTotal.innerHTML = resultSum;
        SumDiscount.innerHTML = skidka;
        localStorage.secondQuantitySum = allInputs[i].value;
      } else {
        allMinus[i].removeAttribute('disabled');
        // Цена за одну штуку
        const costOne = Math.trunc(Number(localStorage.secondSum) / Number(localStorage.secondQuantitySum));
        const costOneNoSkidka = Math.trunc(Number(localStorage.SecondPriceNonDiscount) / Number(localStorage.secondQuantitySum));
        allInputs[i].value = value;
        if (allInputs[i].value >= 185) {
          const spanDostavka = document.querySelector('.SpanDateDilvery');
          spanDostavka.innerHTML = '5–8 фев';
          if (allInputs[i].value === 185) {
            for (let y = 0; y < lableDown.length; y++) {
              lableDown[y].style.visibility = 'hidden';
            }
          } if (allInputs[i].value > 185) {
            for (let a = 0; a < lableDown.length; a++) {
              lableDown[a].style.visibility = 'visible';
              const spanAll2 = document.querySelectorAll('.SecondSpanLableDelivery');
              for (let z = 0; z < spanAll2.length; z++) {
                spanAll2[z].innerHTML = 184;
              }
              const spanAll = document.querySelectorAll('.SpanLastLabelDelivery');
              for (let k = 0; k < spanAll.length; k++) {
                spanAll[k].innerHTML = allInputs[i].value - 184;
              }
            }
            for (let w = 0; w < secondLable.length; w++) {
              secondLable[w].style.display = 'flex';
            }
          }
          blockNoneChange.style.display = 'flex';
        }
        if (allInputs[i].value < 185) {
          const spanDostavka = document.querySelector('.SpanDateDilvery');
          spanDostavka.innerHTML = '5–6 фев';
          if (Number(allInputs[i].value) === 1) {
            for (let w = 0; w < secondLable.length; w++) {
              secondLable[w].style.visibility = 'hidden';
            }
          } else {
            for (let w = 0; w < secondLable.length; w++) {
              secondLable[w].style.visibility = 'visible';
            }
          }
          const spanAll = document.querySelectorAll('.SecondSpanLableDelivery');
          for (let z = 0; z < spanAll.length; z++) {
            spanAll[z].innerHTML = allInputs[i].value;
          }
          blockNoneChange.style.display = 'none';
        }
        // цена без скидки
        const sumResultCost = Math.trunc(allInputs[i].value * costOne);
        localStorage.secondSum = sumResultCost;
        const sumResultNonSkidkaCost = Math.trunc(allInputs[i].value * costOneNoSkidka);
        localStorage.SecondPriceNonDiscount = sumResultNonSkidkaCost;

        // Количество товара
        const Quantity = [Number(allInputs[i].value), Number(localStorage.firstQuantitySum), Number(localStorage.thirdQuantitySum)].reduce((a, b) => a + b);
        localStorage.allQuantity = Quantity;
        const kolVo = `${Quantity} товара`;
        QuantityProduct.innerText = kolVo;

        // Актуальная цена со скидкой
        let resultSum = [Number(localStorage.firstSum), Number(localStorage.secondSum), Number(localStorage.thirdSum)].reduce((a, b) => a + b);
        localStorage.sumResultTotal = resultSum;
        // Актуальная сумма без скидки
        let resultNonDiscount = [Number(localStorage.FirstPriceNonDiscount), Number(localStorage.SecondPriceNonDiscount), Number(localStorage.ThirdPriceNonDiscount)].reduce((a, b) => a + b);
        localStorage.sumNonDiscount = resultNonDiscount;
        let skidka = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
        localStorage.resultSumDiscount = `${skidka}`;

        // В нужный формат привожу данные
        resultSum = `${(`${resultSum}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
        skidka = `${(`${skidka}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        resultNonDiscount = `${(`${resultNonDiscount}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;

        if (`${sumResultCost}`.length > 6) {
          onePieceSecond.style.fontSize = '16px';
          PieceSecondMobile.style.fontSize = '16px';
        } else {
          onePieceSecond.style.fontSize = '20px';
          PieceSecondMobile.style.fontSize = '20px';
        }
        if (`${sumResultCost}`.length > 7) {
          onePieceSecond.style.fontSize = '14px';
          PieceSecondMobile.style.fontSize = '14px';
        }

        onePieceSecond.innerHTML = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        PieceSecondMobile.innerText = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        SecondPriceWithoutDiscount.innerHTML = `${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        for (let j = 0; j < secondPriceMobile.length; j++) {
          secondPriceMobile[j].innerHTML = `${`${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1')}`;
        }
        spanButtonZakaz.innerHTML = `Оплатить ${resultSum} сом`;
        SumProduct.innerHTML = resultNonDiscount;
        resultTotal.innerHTML = resultSum;
        SumDiscount.innerHTML = skidka;
        localStorage.secondQuantitySum = allInputs[i].value;
      }
    }
    if (id === '3') {
      if (value <= allInputs[i].min) {
        allMinus[i].setAttribute('disabled', 'true');
        allPlus[i].removeAttribute('disabled');
        // Цена за одну штуку
        const costOne = Math.trunc(Number(localStorage.thirdSum) / Number(localStorage.thirdQuantitySum));
        const costOneNoSkidka = Math.trunc(Number(localStorage.ThirdPriceNonDiscount) / Number(localStorage.thirdQuantitySum));
        allInputs[i].value = allInputs[i].min;
        if (Number(allInputs[i].value) === 1) {
          for (let w = 0; w < thirdLable.length; w++) {
            thirdLable[w].style.visibility = 'hidden';
            const spanAll = document.querySelectorAll('.ThirdSpanLableDelivery');
            for (let z = 0; z < spanAll.length; z++) {
              spanAll[z].innerHTML = allInputs[i].value;
            }
          }
        } else {
          for (let w = 0; w < thirdLable.length; w++) {
            thirdLable[w].style.visibility = 'visible';
            const spanAll = document.querySelectorAll('.ThirdSpanLableDelivery');
            for (let z = 0; z < spanAll.length; z++) {
              spanAll[z].innerHTML = allInputs[i].value;
            }
          }
        }
        // цена без скидки
        const sumResultCost = Math.trunc(allInputs[i].value * costOne);
        localStorage.thirdSum = sumResultCost;
        const sumResultNonSkidkaCost = Math.trunc(allInputs[i].value * costOneNoSkidka);
        localStorage.ThirdPriceNonDiscount = sumResultNonSkidkaCost;

        // Количество товара
        const Quantity = [Number(allInputs[i].value), Number(localStorage.secondQuantitySum), Number(localStorage.firstQuantitySum)].reduce((a, b) => a + b);
        localStorage.allQuantity = Quantity;
        const kolVo = `${Quantity} товара`;
        QuantityProduct.innerText = kolVo;

        // Актуальная цена со скидкой
        let resultSum = [Number(localStorage.firstSum), Number(localStorage.secondSum), Number(localStorage.thirdSum)].reduce((a, b) => a + b);
        localStorage.sumResultTotal = resultSum;
        // Актуальная сумма без скидки
        let resultNonDiscount = [Number(localStorage.FirstPriceNonDiscount), Number(localStorage.SecondPriceNonDiscount), Number(localStorage.ThirdPriceNonDiscount)].reduce((a, b) => a + b);
        localStorage.sumNonDiscount = resultNonDiscount;
        let skidka = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
        localStorage.resultSumDiscount = `${skidka}`;

        // В нужный формат привожу данные
        resultSum = `${(`${resultSum}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
        skidka = `${(`${skidka}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        resultNonDiscount = `${(`${resultNonDiscount}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;

        if (`${sumResultCost}`.length > 6) {
          onePieceThird.style.fontSize = '16px';
          PieceThirdMobile.style.fontSize = '16px';
        } else {
          onePieceThird.style.fontSize = '20px';
          PieceThirdMobile.style.fontSize = '20px';
        }
        if (`${sumResultCost}`.length > 7) {
          onePieceThird.style.fontSize = '14px';
          PieceThirdMobile.style.fontSize = '14px';
        }

        onePieceThird.innerHTML = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        PieceThirdMobile.innerText = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        ThirdPriceWithoutDiscount.innerHTML = `${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        for (let j = 0; j < thirdPriceMobile.length; j++) {
          thirdPriceMobile[j].innerHTML = `${`${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1')}`;
        }
        spanButtonZakaz.innerHTML = `Оплатить ${resultSum} сом`;
        SumProduct.innerHTML = resultNonDiscount;
        resultTotal.innerHTML = resultSum;
        SumDiscount.innerHTML = skidka;
        localStorage.thirdQuantitySum = allInputs[i].value;
      } else if (Number(value) >= allInputs[i].max) {
        allPlus[i].setAttribute('disabled', 'true');
        allMinus[i].removeAttribute('disabled');
        // Цена за одну штуку
        const costOne = Math.trunc(Number(localStorage.thirdSum) / Number(localStorage.thirdQuantitySum));
        const costOneNoSkidka = Math.trunc(Number(localStorage.ThirdPriceNonDiscount) / Number(localStorage.thirdQuantitySum));
        allInputs[i].value = allInputs[i].max;
        if (Number(allInputs[i].value) === 1) {
          for (let w = 0; w < thirdLable.length; w++) {
            thirdLable[w].style.visibility = 'hidden';
            const spanAll = document.querySelectorAll('.ThirdSpanLableDelivery');
            for (let z = 0; z < spanAll.length; z++) {
              spanAll[z].innerHTML = allInputs[i].value;
            }
          }
        } else {
          for (let w = 0; w < thirdLable.length; w++) {
            thirdLable[w].style.visibility = 'visisble';
            const spanAll = document.querySelectorAll('.ThirdSpanLableDelivery');
            for (let z = 0; z < spanAll.length; z++) {
              spanAll[z].innerHTML = allInputs[i].value;
            }
          }
        }
        // цена без скидки
        const sumResultCost = Math.trunc(allInputs[i].value * costOne);
        localStorage.thirdSum = sumResultCost;
        const sumResultNonSkidkaCost = Math.trunc(allInputs[i].value * costOneNoSkidka);
        localStorage.ThirdPriceNonDiscount = sumResultNonSkidkaCost;

        // Количество товара
        const Quantity = [Number(allInputs[i].value), Number(localStorage.secondQuantitySum), Number(localStorage.firstQuantitySum)].reduce((a, b) => a + b);
        localStorage.allQuantity = Quantity;
        const kolVo = `${Quantity} товара`;

        // Актуальная цена со скидкой
        let resultSum = [Number(localStorage.firstSum), Number(localStorage.secondSum), Number(localStorage.thirdSum)].reduce((a, b) => a + b);
        localStorage.sumResultTotal = resultSum;
        // Актуальная сумма без скидки
        let resultNonDiscount = [Number(localStorage.FirstPriceNonDiscount), Number(localStorage.SecondPriceNonDiscount), Number(localStorage.ThirdPriceNonDiscount)].reduce((a, b) => a + b);
        localStorage.sumNonDiscount = resultNonDiscount;
        let skidka = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
        localStorage.resultSumDiscount = `${skidka}`;

        // В нужный формат привожу данные
        resultSum = `${(`${resultSum}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
        skidka = `${(`${skidka}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        resultNonDiscount = `${(`${resultNonDiscount}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;

        if (`${sumResultCost}`.length > 6) {
          onePieceThird.style.fontSize = '16px';
          PieceThirdMobile.style.fontSize = '16px';
        } else {
          onePieceThird.style.fontSize = '20px';
          PieceThirdMobile.style.fontSize = '20px';
        }
        if (`${sumResultCost}`.length > 7) {
          onePieceThird.style.fontSize = '14px';
          PieceThirdMobile.style.fontSize = '14px';
        }

        onePieceThird.innerHTML = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        PieceThirdMobile.innerText = `${sumResultCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        ThirdPriceWithoutDiscount.innerHTML = `${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        for (let j = 0; j < thirdPriceMobile.length; j++) {
          thirdPriceMobile[j].innerHTML = `${`${sumResultNonSkidkaCost}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1')}`;
        }
        QuantityProduct.innerText = kolVo;
        spanButtonZakaz.innerHTML = `Оплатить ${resultSum} сом`;
        SumProduct.innerHTML = resultNonDiscount;
        resultTotal.innerHTML = resultSum;
        SumDiscount.innerHTML = skidka;
        localStorage.thirdQuantitySum = allInputs[i].value;
      } else {
        allInputs[i].value = value;
      }
    }
  });
}
// Конец логики для счётчиков

// Чекбокс
for (let i = 0; i < CheckBoxes.length; i++) {
  CheckBoxes[i].addEventListener('click', async (e) => {
    const checkedCount = document.querySelectorAll('input.InputCheckBoxFunc:checked').length;
    mainCheckbox.checked = checkedCount === CheckBoxes.length;
    if (checkedCount === 0) {
      const blockNone = document.querySelectorAll('.BlockDisplayNoneChangeCheckbox');
      for (let x = 0; x < blockNone.length; x++) {
        blockNone[x].style.display = 'none';
      }
    } else {
      const blockNone = document.querySelectorAll('.BlockDisplayNoneChangeCheckbox');
      for (let x = 0; x < blockNone.length; x++) {
        blockNone[x].style.display = 'flex';
      }
    }
    let { id } = e.target;
    id = id.replace('FirstCheckBox', '');
    if (id === '1') {
      if (CheckBoxes[i].checked) {
        mainCheckbox.indeterminate = checkedCount > 0 && checkedCount < CheckBoxes.length;
        const SpanNumberKolVo1 = Number(firstQuantity.value);
        const SpanNumberKolVo2 = Number(secondQuantity.value);
        const SpanResultSumNoMobile1 = Number(document.querySelector('#SpanResultSumNoMobile1').innerHTML?.split(' ')?.join(''));
        const SpanResultNonSkidka1Mobile = Number(document.querySelector('#SpanResultNonSkidka1Mobile').innerHTML?.split(' ').join(''));
        const imgFirst = document.querySelectorAll('#FirstImageDelivery');
        const LableFirstImageDelivery = document.querySelectorAll('#LableFirstImageDelivery');
        const LableSecondImageDelivery = document.querySelectorAll('#LabelSecondImageDelivery');
        if (secondCheckBox.checked) {
          blockNoneChange.style.display = 'flex';
        } else {
          blockNoneChange.style.display = 'none';
        }
        const BlockDisplayNoneChangeCheckbox1 = document.querySelector('#BlockDisplayNoneChangeCheckbox1');
        if (SpanNumberKolVo2 < 1) {
          BlockDisplayNoneChangeCheckbox1.style.display = 'none';
        }
        for (let z = 0; z < imgFirst.length; z++) {
          imgFirst[z].style.display = 'flex';
          // LableSecondImageDelivery[z].style.left = '68px';
          if (SpanNumberKolVo1 === 2) {
            LableFirstImageDelivery[z].style.visibility = 'visible';
          }
        }
        localStorage.firstQuantitySum = SpanNumberKolVo1;
        localStorage.firstSum = SpanResultSumNoMobile1;
        localStorage.FirstPriceNonDiscount = SpanResultNonSkidka1Mobile;
        localStorage.sumResultTotal = Number(localStorage.sumResultTotal) + Number(localStorage.firstSum);
        localStorage.sumNonDiscount = Number(localStorage.sumNonDiscount) + Number(localStorage.FirstPriceNonDiscount);
        localStorage.allQuantity = Number(localStorage.allQuantity) + Number(localStorage.firstQuantitySum);
        localStorage.resultSumDiscount = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
        QuantityProduct.innerText = `${localStorage.allQuantity} товара`;
        spanButtonZakaz.innerHTML = `Оплатить ${(localStorage.sumResultTotal).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        SumProduct.innerHTML = `${(localStorage.sumNonDiscount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        resultTotal.innerHTML = `${(localStorage.sumResultTotal).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
        SumDiscount.innerHTML = `${(localStorage.resultSumDiscount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        allPlus[i].removeAttribute('disabled');
        allInputs[i].removeAttribute('disabled');
        allMinus[i].removeAttribute('disabled');
      } else {
        const imgFirst = document.querySelectorAll('#FirstImageDelivery');
        const LableFirstImageDelivery = document.querySelectorAll('#LableFirstImageDelivery');
        if (secondCheckBox.checked) {
          blockNoneChange.style.display = 'flex';
        } else {
          blockNoneChange.style.display = 'none';
        }
        for (let z = 0; z < imgFirst.length; z++) {
          imgFirst[z].style.display = 'none';
          LableFirstImageDelivery[z].style.visibility = 'hidden';
        }
        const SpanNumberKolVo2 = Number(secondQuantity.value);
        const BlockDisplayNoneChangeCheckbox1 = document.querySelector('#BlockDisplayNoneChangeCheckbox1');
        if (SpanNumberKolVo2 < 1) {
          BlockDisplayNoneChangeCheckbox1.style.display = 'none';
        }
        localStorage.sumResultTotal -= Number(localStorage.firstSum);
        localStorage.sumNonDiscount -= Number(localStorage.FirstPriceNonDiscount);
        localStorage.allQuantity -= Number(localStorage.firstQuantitySum);
        localStorage.resultSumDiscount = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
        QuantityProduct.innerText = `${localStorage.allQuantity} товара`;
        spanButtonZakaz.innerHTML = `Оплатить ${(localStorage.sumResultTotal).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        SumProduct.innerHTML = `${(localStorage.sumNonDiscount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        resultTotal.innerHTML = `${(localStorage.sumResultTotal).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
        SumDiscount.innerHTML = `${(localStorage.resultSumDiscount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        localStorage.firstQuantitySum = 0;
        localStorage.FirstPriceNonDiscount = 0;
        localStorage.firstSum = 0;
        allPlus[i].setAttribute('disabled', 'true');
        allInputs[i].setAttribute('disabled', 'true');
        allMinus[i].setAttribute('disabled', 'true');
      }
    }
    if (id === '2') {
      if (CheckBoxes[i].checked) {
        mainCheckbox.indeterminate = checkedCount > 0 && checkedCount < CheckBoxes.length;
        const SpanNumberKolVo2 = Number(secondQuantity.value);
        const SpanResultSumNoMobile2 = Number(document.querySelector('#SpanResultSumNoMobile2').innerHTML?.split(' ')?.join(''));
        const SecondPriceWithoutDiscount2 = Number(document.querySelector('.SpanResultNonSkidkaResultSecond').innerHTML?.split(' ')?.join(''));
        const imgSecond = document.querySelectorAll('#SecondImageDelivery');
        const LableSecondImageDelivery = document.querySelectorAll('#LabelSecondImageDelivery');
        const imgThird = document.querySelectorAll('#ThirdImageDelivery');
        const Section = document.querySelector('.Section');
        if (SpanNumberKolVo2 > 184) {
          blockNoneChange.style.display = 'flex';
        }
        for (let z = 0; z < imgSecond.length; z++) {
          imgSecond[z].style.display = 'flex';
          LableSecondImageDelivery[z].style.display = 'flex';
          LableSecondImageDelivery[z].style.visibility = 'visible';
        }
        const BlockDeliveryImageMobile12 = document.querySelector('.BlockDeliveryImageMobileNonVisibleMobilDelpoy');
        BlockDeliveryImageMobile12.style.display = 'flex';
        localStorage.secondQuantitySum = SpanNumberKolVo2;
        localStorage.secondSum = SpanResultSumNoMobile2;
        localStorage.SecondPriceNonDiscount = SecondPriceWithoutDiscount2;
        localStorage.sumResultTotal = Number(localStorage.sumResultTotal) + Number(localStorage.secondSum);
        localStorage.sumNonDiscount = Number(localStorage.sumNonDiscount) + Number(localStorage.SecondPriceNonDiscount);
        localStorage.allQuantity = Number(localStorage.allQuantity) + Number(localStorage.secondQuantitySum);
        localStorage.resultSumDiscount = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
        QuantityProduct.innerText = `${(localStorage.allQuantity).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} товара`;
        spanButtonZakaz.innerHTML = `Оплатить ${(localStorage.sumResultTotal).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        SumProduct.innerHTML = `${(localStorage.sumNonDiscount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        resultTotal.innerHTML = `${(localStorage.sumResultTotal).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
        SumDiscount.innerHTML = `${(localStorage.resultSumDiscount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        allPlus[i].removeAttribute('disabled');
        allInputs[i].removeAttribute('disabled');
        allMinus[i].removeAttribute('disabled');
      } else {
        const imgSecond = document.querySelectorAll('#SecondImageDelivery');
        const LableSecondImageDelivery = document.querySelectorAll('#LabelSecondImageDelivery');
        const imgThird = document.querySelectorAll('#ThirdImageDelivery');
        blockNoneChange.style.display = 'none';
        for (let z = 0; z < imgSecond.length; z++) {
          imgThird[z].style.margin = '-1px 1px 0px -0px';
          imgSecond[z].style.display = 'none';
          LableSecondImageDelivery[z].style.display = 'none';
          LableSecondImageDelivery[z].style.visibility = 'hidden';
        }
        const BlockDeliveryImageMobile12 = document.querySelector('.BlockDeliveryImageMobileNonVisibleMobilDelpoy');
        BlockDeliveryImageMobile12.style.display = 'none';
        localStorage.sumResultTotal -= Number(localStorage.secondSum);
        localStorage.sumNonDiscount -= Number(localStorage.SecondPriceNonDiscount);
        localStorage.allQuantity -= Number(localStorage.secondQuantitySum);
        localStorage.resultSumDiscount = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
        QuantityProduct.innerText = `${localStorage.allQuantity} товара`;
        spanButtonZakaz.innerHTML = `Оплатить ${(localStorage.sumResultTotal).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        SumProduct.innerHTML = `${(localStorage.sumNonDiscount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        resultTotal.innerHTML = `${(localStorage.sumResultTotal).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
        SumDiscount.innerHTML = `${(localStorage.resultSumDiscount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        localStorage.secondQuantitySum = 0;
        localStorage.SecondPriceNonDiscount = 0;
        localStorage.secondSum = 0;
        allPlus[i].setAttribute('disabled', 'true');
        allInputs[i].setAttribute('disabled', 'true');
        allMinus[i].setAttribute('disabled', 'true');
      }
    }
    if (id === '3') {
      if (CheckBoxes[i].checked) {
        mainCheckbox.indeterminate = checkedCount > 0 && checkedCount < CheckBoxes.length;
        const SpanNumberKolVo3 = Number(thirdQuantitySum);
        const onePieceThird3 = Number(document.querySelector('#SpanResultSumNoMobile3').innerHTML?.split(' ')?.join(''));
        const ThirdPriceWithoutDiscount3 = Number(document.querySelector('.SpanResultNonSkidka3').innerHTML?.split(' ')?.join(''));
        const imgThird = document.querySelectorAll('#ThirdImageDelivery');
        const LableThirdImageDelivery = document.querySelectorAll('#LabelThirdImageDelivery');
        if (secondCheckBox.checked) {
          blockNoneChange.style.display = 'flex';
        } else {
          blockNoneChange.style.display = 'none';
        }
        const SpanNumberKolVo2 = Number(secondQuantity.value);
        const BlockDisplayNoneChangeCheckbox1 = document.querySelector('#BlockDisplayNoneChangeCheckbox1');
        if (SpanNumberKolVo2 < 1) {
          BlockDisplayNoneChangeCheckbox1.style.display = 'none';
        }
        for (let z = 0; z < imgThird.length; z++) {
          imgThird[z].style.display = 'flex';
          if (SpanNumberKolVo3 === 2) {
            LableThirdImageDelivery[z].style.visibility = 'visible';
          }
        }
        localStorage.thirdQuantitySum = Number(SpanNumberKolVo3);
        localStorage.thirdSum = Number(onePieceThird3);
        localStorage.ThirdPriceNonDiscount = Number(ThirdPriceWithoutDiscount3);
        localStorage.sumResultTotal = Number(localStorage.sumResultTotal) + Number(localStorage.thirdSum);
        localStorage.sumNonDiscount = Number(localStorage.sumNonDiscount) + Number(localStorage.ThirdPriceNonDiscount);
        localStorage.allQuantity = Number(localStorage.allQuantity) + Number(localStorage.thirdQuantitySum);
        localStorage.resultSumDiscount = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
        QuantityProduct.innerText = `${localStorage.allQuantity} товара`;
        spanButtonZakaz.innerHTML = `Оплатить ${(localStorage.sumResultTotal).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        SumProduct.innerHTML = `${(localStorage.sumNonDiscount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        resultTotal.innerHTML = `${(localStorage.sumResultTotal).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
        SumDiscount.innerHTML = `${(localStorage.resultSumDiscount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        allPlus[i].removeAttribute('disabled');
        allInputs[i].removeAttribute('disabled');
        allMinus[i].removeAttribute('disabled');
      } else {
        const imgThird = document.querySelectorAll('#ThirdImageDelivery');
        const LableThirdImageDelivery = document.querySelectorAll('#LabelThirdImageDelivery');
        if (secondCheckBox.checked) {
          blockNoneChange.style.display = 'flex';
        } else {
          blockNoneChange.style.display = 'none';
        }
        const SpanNumberKolVo2 = Number(secondQuantity.value);
        const BlockDisplayNoneChangeCheckbox1 = document.querySelector('#BlockDisplayNoneChangeCheckbox1');
        if (SpanNumberKolVo2 < 1) {
          BlockDisplayNoneChangeCheckbox1.style.display = 'none';
        }
        for (let z = 0; z < imgThird.length; z++) {
          imgThird[z].style.display = 'none';
          LableThirdImageDelivery[z].style.visibility = 'hidden';
        }
        localStorage.sumResultTotal -= Number(localStorage.thirdSum);
        localStorage.sumNonDiscount -= Number(localStorage.ThirdPriceNonDiscount);
        localStorage.allQuantity -= Number(localStorage.thirdQuantitySum);
        localStorage.resultSumDiscount = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
        QuantityProduct.innerText = `${localStorage.allQuantity} товара`;
        spanButtonZakaz.innerHTML = `Оплатить ${(localStorage.sumResultTotal).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        SumProduct.innerHTML = `${(localStorage.sumNonDiscount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        resultTotal.innerHTML = `${(localStorage.sumResultTotal).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`;
        SumDiscount.innerHTML = `${(localStorage.resultSumDiscount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
        localStorage.thirdQuantitySum = 0;
        localStorage.ThirdPriceNonDiscount = 0;
        localStorage.thirdSum = 0;
        allPlus[i].setAttribute('disabled', 'true');
        allInputs[i].setAttribute('disabled', 'true');
        allMinus[i].setAttribute('disabled', 'true');
      }
    }
  });
}

mainCheckbox.addEventListener('click', async (e) => {
  if (mainCheckbox.checked) {
    for (let i = 0; i < CheckBoxes.length; i++) {
      const firstBlock = document.querySelector('.InsideContentBlocksFirst');
      const secondBlock = document.querySelector('.InsideContentBlocksSecond');
      const thirdBlock = document.querySelector('.InsideContentBlocksThird');
      const FirstImageDelivery = document.querySelectorAll('#FirstImageDelivery');
      const SecondImageDelivery = document.querySelectorAll('#SecondImageDelivery');
      const ThirdImageDelivery = document.querySelectorAll('#ThirdImageDelivery');
      const LabelSecondImageDelivery = document.querySelectorAll('#LabelSecondImageDelivery');
      if (!CheckBoxes[i].checked && firstBlock.style.display != 'none') {
        for (let k = 0; k < FirstImageDelivery.length; k++) {
          FirstImageDelivery[k].style.display = 'flex';
        }
      }
      if (!CheckBoxes[i].checked && secondBlock.style.display != 'none') {
        for (let k = 0; k < SecondImageDelivery.length; k++) {
          SecondImageDelivery[k].style.display = 'flex';
          LabelSecondImageDelivery[k].style.visibility = 'visible';
          LabelSecondImageDelivery[k].style.display = 'flex'
        }
      }
      if (!CheckBoxes[i].checked && thirdBlock.style.display != 'none') {
        for (let k = 0; k < ThirdImageDelivery.length; k++) {
          ThirdImageDelivery[k].style.display = 'flex';
        }
      }
      CheckBoxes[i].checked = !this.checked;
      const firstKolvo = Number(document.querySelector('.SpanNumberKolVo1').value);
      const secondKolvo = Number(document.querySelector('.SpanNumberKolVo2').value);
      const thirdKolvo = Number(document.querySelector('.SpanNumberKolVo3').value);
      const blockNone = document.querySelectorAll('.BlockDisplayNoneChangeCheckbox');
      for (let x = 0; x < blockNone.length; x++) {
        blockNone[x].style.display = 'flex';
      }
      const BlockDeliveryImage = document.querySelector('.BlockDeliveryImage');
      BlockDeliveryImage.style.display = 'flex';
      const BlockDeliveryImageMobile12 = document.querySelector('.BlockDeliveryImageMobileNonVisibleMobilDelpoy');
      BlockDeliveryImageMobile12.style.display = 'flex';
      const BlockDisplayNoneChangeCheckbox1 = document.querySelector('#BlockDisplayNoneChangeCheckbox1');
      BlockDisplayNoneChangeCheckbox1.style.display = 'flex';

      if (secondKolvo < 184) {
        const BlockDeliveryImageMobile1 = document.querySelectorAll('#BlockDeliveryImageMobile1');
        const BlockDisplayNoneChangeCheckbox1 = document.querySelector('.BlockSecondDeliveryTime');
        BlockDisplayNoneChangeCheckbox1.style.display = 'none';
        for (let q = 0; q < BlockDeliveryImageMobile1.length; q++) {
          BlockDeliveryImageMobile1[q].style.display = 'none';
        }
      }

      const onePieceFirst1 = Number(document.querySelector('#SpanResultSumNoMobile1').innerHTML?.split(' ')?.join(''));
      const onePieceSecond2 = Number(document.querySelector('#SpanResultSumNoMobile2').innerHTML?.split(' ')?.join(''));
      const onePieceThird3 = Number(document.querySelector('#SpanResultSumNoMobile3').innerHTML?.split(' ')?.join(''));

      const FirstPriceWithoutDiscount1 = Number(document.querySelector('.SpanResultNonSkidka1').innerHTML?.split(' ')?.join(''));
      const SecondPriceWithoutDiscount2 = Number(document.querySelector('.SpanResultNonSkidkaResultSecond').innerHTML?.split(' ')?.join(''));
      const ThirdPriceWithoutDiscount3 = Number(document.querySelector('.SpanResultNonSkidka3').innerHTML?.split(' ')?.join(''));
      localStorage.firstQuantitySum = firstKolvo;
      localStorage.firstSum = onePieceFirst1;
      localStorage.FirstPriceNonDiscount = FirstPriceWithoutDiscount1;
      localStorage.secondQuantitySum = secondKolvo;
      localStorage.secondSum = onePieceSecond2;
      localStorage.SecondPriceNonDiscount = SecondPriceWithoutDiscount2;
      localStorage.thirdQuantitySum = thirdKolvo;
      localStorage.thirdSum = onePieceThird3;
      localStorage.ThirdPriceNonDiscount = ThirdPriceWithoutDiscount3;
      localStorage.sumResultTotal = Number(onePieceFirst1) + Number(onePieceSecond2) + Number(onePieceThird3);
      localStorage.sumNonDiscount = Number(FirstPriceWithoutDiscount1) + Number(SecondPriceWithoutDiscount2) + Number(ThirdPriceWithoutDiscount3);
      localStorage.allQuantity = firstKolvo + secondKolvo + thirdKolvo;
      localStorage.resultSumDiscount = `−${localStorage.sumNonDiscount - localStorage.sumResultTotal}`;
      resultTotal.innerHTML = `${localStorage.sumResultTotal}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
      SumProduct.innerHTML = `${(`${localStorage.sumNonDiscount}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
      SumDiscount.innerHTML = `${(localStorage.resultSumDiscount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
      QuantityProduct.innerHTML = `${`${localStorage.allQuantity}`} товара`;
      spanButtonZakaz.innerHTML = `Оплатить ${(`${localStorage.sumResultTotal}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
      if (Number(localStorage.firstQuantitySum) === 1) {
        allMinus[0].setAttribute('disabled', 'true');
        allPlus[0].removeAttribute('disabled');
      } else {
        allMinus[0].removeAttribute('disabled');
        allPlus[0].setAttribute('disabled', 'true');
      }
      if (Number(localStorage.secondQuantitySum) === 1) {
        allMinus[1].setAttribute('disabled', 'true');
        allPlus[1].removeAttribute('disabled');
      } else {
        allMinus[1].removeAttribute('disabled');
        allPlus[1].removeAttribute('disabled');
      }
      if (Number(localStorage.thirdQuantitySum) === 1) {
        allMinus[2].setAttribute('disabled', 'true');
        allPlus[2].removeAttribute('disabled');
      } else {
        allMinus[2].removeAttribute('disabled');
        allPlus[2].setAttribute('disabled', 'true');
      }
      allInputs[i].removeAttribute('disabled');
    }
  } else {
    for (let i = 0; i < CheckBoxes.length; i++) {
      CheckBoxes[i].checked = this.checked;
      resultTotal.innerHTML = '0';
      SumProduct.innerHTML = '0 сом';
      SumDiscount.innerHTML = '0 сом';
      QuantityProduct.innerHTML = '0 товаров';
      spanButtonZakaz.innerHTML = 'Оплатить 0 сом';
      localStorage.firstQuantitySum = 0;
      localStorage.FirstPriceNonDiscount = 0;
      localStorage.firstSum = 0;
      localStorage.secondQuantitySum = 0;
      localStorage.SecondPriceNonDiscount = 0;
      localStorage.secondSum = 0;
      localStorage.thirdQuantitySum = 0;
      localStorage.ThirdPriceNonDiscount = 0;
      localStorage.thirdSum = 0;
      localStorage.sumResultTotal = 0;
      localStorage.sumNonDiscount = 0;
      localStorage.allQuantity = 0;
      localStorage.resultSumDiscount = 0;
      const blockNone = document.querySelectorAll('.BlockDisplayNoneChangeCheckbox');
      for (let x = 0; x < blockNone.length; x++) {
        blockNone[x].style.display = 'none';
      }
      const BlockDeliveryImage = document.querySelector('.BlockDeliveryImage');
      BlockDeliveryImage.style.display = 'none';
      const BlockDeliveryImageMobile12 = document.querySelector('.BlockDeliveryImageMobileNonVisibleMobilDelpoy');
      BlockDeliveryImageMobile12.style.display = 'none';
      const BlockDisplayNoneChangeCheckbox1 = document.querySelector('#BlockDisplayNoneChangeCheckbox1');
      BlockDisplayNoneChangeCheckbox1.style.display = 'none';
      allPlus[i].setAttribute('disabled', 'true');
      allInputs[i].setAttribute('disabled', 'true');
      allMinus[i].setAttribute('disabled', 'true');
    }
  }
});

// Работа чекбокса в блоке итого
CheckboxTotal.addEventListener('click', async (e) => {
  if (CheckboxTotal.hasAttribute('cheked')) {
    CheckboxTotal.removeAttribute('cheked');
    spanOplatyInfo.style.display = 'flex';
    buttonZakaz.style.display = 'flex';
    changeButtonZakaz.style.display = 'none';
  } else if (!CheckboxTotal.hasAttribute('cheked')) {
    CheckboxTotal.setAttribute('cheked', 'true');
    spanOplatyInfo.style.display = 'none';
    let result = changeButtonZakaz.innerText.split(' ');
    result = ['Оплатить', resultTotal.innerText, 'сом'].join(' ');
    changeButtonZakaz.innerText = result;
    buttonZakaz.style.display = 'none';
    changeButtonZakaz.style.display = 'flex';
  }
});

for (let i = 0; i < allButtonDelete.length; i++) {
  allButtonDelete[i].addEventListener('click', async (e) => {
    let { id } = e.target.parentNode;
    id = id.replace('ButtonDeleteIcon', '');
    if (id === '1') {
      const firstBlock = document.querySelector('.InsideContentBlocksFirst');
      const fristBlockDown = document.querySelector('.AbsentInfoCommonBlockFirst');
      const firstKolvo = document.querySelector('.SpanNumberKolVo1');
      const secondKolvo = document.querySelector('.SpanNumberKolVo2').value;
      const thirdKolvo = document.querySelector('.SpanNumberKolVo3');
      const onePieceFirst1 = document.querySelector('#SpanResultSumNoMobile1');
      const FirstPriceWithoutDiscount1 = document.querySelector('.SpanResultNonSkidka1');
      const onePieceFirst13 = document.querySelector('#SpanResultSumNoMobile1');

      const imgFirst = document.querySelectorAll('#FirstImageDelivery');
      const LableFirstImageDelivery = document.querySelectorAll('#LableFirstImageDelivery');
      const SpanLabelIconBasket = document.querySelector('.SpanLabelIconBasket');
      const SpanLabelMobile = document.querySelector('.SpanLabelMobile');
      const SumMobile = Number(SpanLabelMobile.innerHTML) - 1;
      const SumBasket = Number(SpanLabelIconBasket.innerHTML) - 1;
      const LabelIconBasket = document.querySelector('.LabelIconBasket');
      const LableMobileBasket = document.querySelector('.LableMobileBasket');
      const SecondImageDelivery = document.querySelectorAll('#SecondImageDelivery');
      const LableSecondImageDelivery = document.querySelectorAll('#LabelSecondImageDelivery');
      const SpanNonHaveTovar = document.querySelector('.SpanNonHaveTovar');
      const nas = Number(SpanNonHaveTovar.innerHTML.split(' ').filter((x) => x == +x).join('')) - 1;
      if (nas === 1) {
        SpanNonHaveTovar.innerHTML = `Отсутствует · ${nas} товар`;
      } else {
        SpanNonHaveTovar.innerHTML = `Отсутствуют · ${nas} товара`;
      }
      firstBlock.style.display = 'none';
      fristBlockDown.style.display = 'none';
      const imgThird = document.querySelectorAll('#ThirdImageDelivery');
      for (let g = 0; g < imgThird.length; g++) {
        if (secondKolvo != 0) {
          imgThird[g].style.margin = '-1px 1px 0px -0px';
        } else {
          imgThird[g].style.margin = '-1px 1px 0px 0px';
        }
      }
      for (let z = 0; z < imgFirst.length; z++) {
        SecondImageDelivery[z].style.margin = '-1px 1px 0px 0px';
        LableSecondImageDelivery[z].style.left = '20px';
        imgFirst[z].style.display = 'none';
        LableFirstImageDelivery[z].style.display = 'none';
      }
      localStorage.sumResultTotal = Number(localStorage.sumResultTotal) - Number(onePieceFirst.innerHTML?.split(' ')?.join(''));
      resultTotal.innerHTML = `${Number(localStorage.sumResultTotal)}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
      localStorage.sumNonDiscount = Number(localStorage.sumNonDiscount) - Number(FirstPriceWithoutDiscount1.innerHTML?.split(' ')?.join(''));
      SumProduct.innerHTML = `${`${Number(localStorage.sumNonDiscount)}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
      localStorage.resultSumDiscount = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
      SumDiscount.innerHTML = `${(localStorage.resultSumDiscount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
      localStorage.allQuantity = Number(localStorage.allQuantity) - Number(firstKolvo.value);
      QuantityProduct.innerHTML = `${`${localStorage.allQuantity}`} товара`;
      spanButtonZakaz.innerHTML = `Оплатить ${(`${localStorage.sumResultTotal}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
      firstKolvo.value = 0;
      onePieceFirst1.innerHTML = 0;
      FirstPriceWithoutDiscount1.innerHTML = 0;
      onePieceFirst13.innerHTML = 0;
      localStorage.firstQuantitySum = 0;
      localStorage.FirstPriceNonDiscount = 0;
      localStorage.firstSum = 0;
      if (Number(SpanLabelIconBasket.innerHTML) === 1) {
        const IconeBasket = document.querySelector('#IconeBasket');
        IconeBasket.style.margin = '0px 0px 0px 2px';
        LabelIconBasket.style.display = 'none';
        LableMobileBasket.style.display = 'none';
      } else {
        SpanLabelMobile.innerHTML = `${SumMobile}`;
        SpanLabelIconBasket.innerHTML = `${SumBasket}`;
      }

      firstCheckBox.removeAttribute('cheked');
      if (Number(thirdKolvo.value) === 0 && Number(secondKolvo) === 0 && Number(firstKolvo.value) === 0) {
        const Section = document.querySelector('.Section');
        Section.style.height = `${Section.scrollHeight}px`;
        const SectionLeftBlock = document.querySelector('.SectionLeftBlock');
        const SectionRigthBlock = document.querySelector('.SectionRigthBlock');
        SectionLeftBlock.style.display = 'none';
        SectionRigthBlock.style.display = 'none';
        const divInfo = '<div class="blockNonHaveItems"><span class="newSpanNewBlocks"> В корзине пока пусто </span><div class="blockBodyNewBlock"><span class="SpanBodyNewBlock"> Загляните на главную, чтобы выбрать товары или найдите нужное в поиске</span> <button class="newButton" type="button"> <a href="https://www.wildberries.ru/" class="hrefSylka">Перейти на главную</a></button></div></div>';
        Section.style.justifyContent = 'center';
        Section.style.alignItems = 'center';
        Section.innerHTML = divInfo;
      }
    }
    if (id === '2') {
      const secondBlock = document.querySelector('.InsideContentBlocksSecond');
      const secondBlockDown = document.querySelector('.AbsentInfoCommonBlockSecond');
      const firstKolvo = document.querySelector('.SpanNumberKolVo1').value;
      const secondKolvo = document.querySelector('.SpanNumberKolVo2');
      const thirdKolvo = document.querySelector('.SpanNumberKolVo3');
      const onePieceSecond1 = document.querySelector('#SpanResultSumNoMobile2');
      const SecondPriceWithoutDiscount1 = document.querySelector('.SpanResultNonSkidka2');
      const onePieceSecond2 = document.querySelector('#SpanResultSumNoMobile2');
      const SecondPriceWithoutDiscount2 = document.querySelector('.SpanResultNonSkidkaResultSecond');

      const imgSecond = document.querySelectorAll('#SecondImageDelivery');
      const LableSecondImageDelivery = document.querySelectorAll('#LabelSecondImageDelivery');
      const blockNone = document.querySelectorAll('.blockNoneChange');
      const imgThird = document.querySelectorAll('#ThirdImageDelivery');
      const BlockDeliveryImageMobileNonVisibleMobilDelpoy = document.querySelector('.BlockDeliveryImageMobileNonVisibleMobilDelpoy');
      for (let x = 0; x < blockNone.length; x++) {
        blockNone[x].style.display = 'none';
        BlockDeliveryImageMobileNonVisibleMobilDelpoy.style.display = 'none';
        if (firstKolvo != 0) {
          imgThird[x].style.margin = '-1px 1px 0px -0px';
        } else {
          imgThird[x].style.margin = '-1px 1px 0px -0px';
        }
        const spanDostavka = document.querySelector('.SpanDateDilvery');
        spanDostavka.innerHTML = '5–6 фев';
      }
      for (let k = 0; k < imgSecond.length; k++) {
        imgSecond[k].style.display = 'none';
        LableSecondImageDelivery[k].style.display = 'none';
      }

      secondCheckBox.checked = true;

      const SpanLabelIconBasket = document.querySelector('.SpanLabelIconBasket');
      const SpanLabelMobile = document.querySelector('.SpanLabelMobile');
      const SumMobile = Number(SpanLabelMobile.innerHTML) - 1;
      const SumBasket = Number(SpanLabelIconBasket.innerHTML) - 1;
      const LabelIconBasket = document.querySelector('.LabelIconBasket');
      const LableMobileBasket = document.querySelector('.LableMobileBasket');
      const SpanNonHaveTovar = document.querySelector('.SpanNonHaveTovar');
      const nas = Number(SpanNonHaveTovar.innerHTML.split(' ').filter((x) => x == +x).join('')) - 1;
      if (nas === 1) {
        SpanNonHaveTovar.innerHTML = `Отсутствует · ${nas} товар`;
      } else {
        SpanNonHaveTovar.innerHTML = `Отсутствуют · ${nas} товара`;
      }
      secondBlock.style.display = 'none';
      secondBlockDown.style.display = 'none';

      localStorage.sumResultTotal = Number(localStorage.sumResultTotal) - Number(onePieceSecond1.innerHTML?.split(' ')?.join(''));
      resultTotal.innerHTML = `${Number(localStorage.sumResultTotal)}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
      localStorage.sumNonDiscount = Number(localStorage.sumNonDiscount) - Number(SecondPriceWithoutDiscount1.innerHTML?.replace('сом', '')?.split(' ')?.join(''));
      SumProduct.innerHTML = `${`${Number(localStorage.sumNonDiscount)}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
      localStorage.resultSumDiscount = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
      SumDiscount.innerHTML = `${(localStorage.resultSumDiscount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
      localStorage.allQuantity = Number(localStorage.allQuantity) - Number(secondKolvo.value);
      QuantityProduct.innerHTML = `${`${localStorage.allQuantity}`} товара`;
      spanButtonZakaz.innerHTML = `Оплатить ${(`${localStorage.sumResultTotal}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
      secondKolvo.value = 0;
      onePieceSecond1.innerHTML = 0;
      SecondPriceWithoutDiscount1.innerHTML = 0;
      onePieceSecond2.innerHTML = 0;
      SecondPriceWithoutDiscount2.innerHTML = 0;
      localStorage.secondQuantitySum = 0;
      localStorage.SecondPriceNonDiscount = 0;
      localStorage.secondSum = 0;

      if (Number(SpanLabelIconBasket.innerHTML) === 1) {
        const IconeBasket = document.querySelector('#IconeBasket');
        IconeBasket.style.margin = '0px 0px 0px 2px';
        LabelIconBasket.style.display = 'none';
        LableMobileBasket.style.display = 'none';
      } else {
        SpanLabelMobile.innerHTML = `${SumMobile}`;
        SpanLabelIconBasket.innerHTML = `${SumBasket}`;
      }

      CheckBoxes[i].removeAttribute('checked');
      if (Number(thirdKolvo.value) === 0 && Number(secondKolvo.value) === 0 && Number(firstKolvo) === 0) {
        const Section = document.querySelector('.Section');
        Section.style.height = `${Section.scrollHeight}px`;
        const SectionLeftBlock = document.querySelector('.SectionLeftBlock');
        const SectionRigthBlock = document.querySelector('.SectionRigthBlock');
        SectionLeftBlock.style.display = 'none';
        SectionRigthBlock.style.display = 'none';
        const divInfo = '<div class="blockNonHaveItems"><span class="newSpanNewBlocks"> В корзине пока пусто </span><div class="blockBodyNewBlock"><span class="SpanBodyNewBlock"> Загляните на главную, чтобы выбрать товары или найдите нужное в поиске</span> <button class="newButton" type="button"> <a href="https://www.wildberries.ru/" class="hrefSylka">Перейти на главную</a></button></div></div>';
        Section.style.justifyContent = 'center';
        Section.style.alignItems = 'center';
        Section.innerHTML = divInfo;
      }
    }
    if (id === '3') {
      const onePieceThird3 = document.querySelector('#SpanResultSumNoMobile3');
      const thirdBlock = document.querySelector('.InsideContentBlocksThird');
      const thirdBlockDown = document.querySelector('.AbsentInfoCommonBlockThird');
      const firstKolvo = document.querySelector('.SpanNumberKolVo1');
      const secondKolvo = document.querySelector('.SpanNumberKolVo2');
      const thirdKolvo = document.querySelector('.SpanNumberKolVo3');
      const onePieceThird1 = document.querySelector('#SpanResultSumNoMobile3');
      const ThirdPriceWithoutDiscount1 = document.querySelector('.SpanResultNonSkidka3');

      const SpanLabelIconBasket = document.querySelector('.SpanLabelIconBasket');
      const SpanLabelMobile = document.querySelector('.SpanLabelMobile');
      const SumMobile = Number(SpanLabelMobile.innerHTML) - 1;
      const SumBasket = Number(SpanLabelIconBasket.innerHTML) - 1;
      const LabelIconBasket = document.querySelector('.LabelIconBasket');
      const LableMobileBasket = document.querySelector('.LableMobileBasket');

      const SpanNonHaveTovar = document.querySelector('.SpanNonHaveTovar');
      const nas = Number(SpanNonHaveTovar.innerHTML.split(' ').filter((x) => x == +x).join('')) - 1;
      if (nas === 1) {
        SpanNonHaveTovar.innerHTML = `Отсутствует · ${nas} товар`;
      } else {
        SpanNonHaveTovar.innerHTML = `Отсутствуют · ${nas} товара`;
      }

      const imgThird = document.querySelectorAll('#ThirdImageDelivery');
      const LableThirdImageDelivery = document.querySelectorAll('#LabelThirdImageDelivery');
      for (let x = 0; x < imgThird.length; x++) {
        imgThird[x].style.display = 'none';
        LableThirdImageDelivery[x].style.display = 'none';
      }

      thirdBlock.style.display = 'none';
      thirdBlockDown.style.display = 'none';

      localStorage.sumResultTotal = Number(localStorage.sumResultTotal) - Number(onePieceThird1.innerHTML?.split(' ')?.join(''));
      resultTotal.innerHTML = `${Number(localStorage.sumResultTotal)}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
      localStorage.sumNonDiscount = Number(localStorage.sumNonDiscount) - Number(ThirdPriceWithoutDiscount1.innerHTML?.replace('сом', '')?.split(' ')?.join(''));
      SumProduct.innerHTML = `${`${Number(localStorage.sumNonDiscount)}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
      localStorage.resultSumDiscount = `−${Number(localStorage.sumNonDiscount) - Number(localStorage.sumResultTotal)}`;
      SumDiscount.innerHTML = `${(localStorage.resultSumDiscount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
      localStorage.allQuantity = Number(localStorage.allQuantity) - Number(thirdKolvo.value);
      QuantityProduct.innerHTML = `${`${localStorage.allQuantity}`} товара`;
      spanButtonZakaz.innerHTML = `Оплатить ${(`${localStorage.sumResultTotal}`).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сом`;
      thirdKolvo.value = 0;
      onePieceThird1.innerHTML = 0;
      ThirdPriceWithoutDiscount1.innerHTML = 0;
      onePieceThird3.innerHTML = 0;
      localStorage.thirdQuantitySum = 0;
      localStorage.ThirdPriceNonDiscount = 0;
      localStorage.thirdSum = 0;

      if (Number(SpanLabelIconBasket.innerHTML) === 1) {
        const IconeBasket = document.querySelector('#IconeBasket');
        IconeBasket.style.margin = '0px 0px 0px 2px';
        LabelIconBasket.style.display = 'none';
        LableMobileBasket.style.display = 'none';
      } else {
        SpanLabelMobile.innerHTML = `${SumMobile}`;
        SpanLabelIconBasket.innerHTML = `${SumBasket}`;
      }

      thirdCheckBox.removeAttribute('cheked');
      if (Number(thirdKolvo.value) === 0 && Number(secondKolvo.value) === 0 && Number(firstKolvo.value) === 0) {
        const Section = document.querySelector('.Section');
        Section.style.height = `${Section.scrollHeight}px`;
        const SectionLeftBlock = document.querySelector('.SectionLeftBlock');
        const SectionRigthBlock = document.querySelector('.SectionRigthBlock');
        SectionLeftBlock.style.display = 'none';
        SectionRigthBlock.style.display = 'none';
        const divInfo = '<div class="blockNonHaveItems"><span class="newSpanNewBlocks"> В корзине пока пусто </span><div class="blockBodyNewBlock"><span class="SpanBodyNewBlock"> Загляните на главную, чтобы выбрать товары или найдите нужное в поиске</span> <button class="newButton" type="button"> <a href="https://www.wildberries.ru/" class="hrefSylka">Перейти на главную</a></button></div></div>';
        Section.style.justifyContent = 'center';
        Section.style.alignItems = 'center';
        Section.innerHTML = divInfo;
      }
    }
  });
}
