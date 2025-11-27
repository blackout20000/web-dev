// HTML 문서에서 id='product-name'인 요소를 찾아 변수에 저장한다.
// getElementById는 DOM 트리에서 해당 요소 객체(Element)를 반환한다.
// productNameInputElement는 <input> 요소에 대한 JS 객체가 된다.
let productNameInputElement = document.getElementById('product-name');

// id='remaining-chars'인 요소를 찾아 변수에 저장한다.
// 이 요소는 남은 글자수를 표시하는 <span> 등의 텍스트 요소일 가능성이 높다.
let remainingCharsElement = document.getElementById('remaining-chars');

// console.dir(productNameInputElement);
// 브라우저 콘솔에서 해당 요소의 모든 프로퍼티를 트리 형태로 출력한다.
// 개발자가 DOM 요소 내부 구조를 확인할 때 사용한다.

// input 요소가 가지는 속성 중 maxLength 값을 가져온다.
// HTML의 <input maxlength="20">과 같은 값을 그대로 가져올 수 있다.
// 이 값은 입력 가능한 최대 글자수를 의미한다.
let maxAllowedChars = productNameInputElement.maxLength;

// 남은 글자 수를 계속 갱신하기 위한 함수 정의
// event 매개변수는 'input' 이벤트가 발생했을 때 브라우저가 자동으로 전달하는 이벤트 객체(Event Object)이다.
function updateRemainingCharacters(event) {

    // 사용자가 입력 상자(input)에 실제로 입력한 텍스트 값을 가져온다.
    // event.target은 이벤트가 발생한 요소, 즉 productNameInputElement를 의미한다.
    let enteredText = event.target.value;

    // 현재 입력된 글자 수를 구한다.
    // 문자열의 length는 글자 수를 나타낸다.
    let enteredTextLength = enteredText.length;

    // 남은 글자 수 = 최대 허용 글자수 - 입력된 글자 수
    // 실시간으로 변화하도록 계산한다.
    let remainingCharacters = maxAllowedChars - enteredTextLength;

    // id='remaining-chars' 요소 내부의 텍스트를 남은 글자 수로 업데이트한다.
    // innerText나 textContent를 사용해 문자열을 표시할 수 있다.
    remainingCharsElement.textContent = remainingCharacters;
}

// productNameInputElement에 'input' 이벤트 리스너를 등록한다.
// 'input' 이벤트는 키보드 입력, 붙여넣기, 잘라내기 등 input 값이 변할 때마다 실행된다.
// 사용자가 텍스트를 변경할 때마다 updateRemainingCharacters 함수가 실행된다.
productNameInputElement.addEventListener('input', updateRemainingCharacters);
