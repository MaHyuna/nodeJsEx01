'use strict'	// 스트릭트 모드

// 객체 생성
const obj = {
	title: '타이틀입니다.'
}

/*
function isEmptyObj() {		// 객체가 비어있는지에 대한 테스트 함수
	if (obj.title) {		// obj 객체에 title이 있는지
		// 객체가 있다면 true
		return true
	}
	eles {
		// 없다면 false
		return false
	}
}
*/

// es6 리팩토링 = 위의 주석 함수와 똑같은 기능을 하고 있음
const isEmptyObj = () => obj.title ? true : false

isEmptyObj()