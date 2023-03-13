# DOM(document Object Model)

웹페이지(Document)를 구조화된 객체로 제공하며 프로그래밍 언어가 웹 페이지를 사용할 수 있게 연결시킴

브라우저가 코드로 된 문서를 사용자에게 시각적으로 해석해서 보여주는 작업을 한다.
돔은 이 문서를 조작할 수 있게 하는 것이다.

브라우저는 HTML 문서를 해석하여 DOM tree라는 객체의 트리로 구조화 함

DOM에서 모든 요소, 속성, 텍스트는 하나의 객체이며 모두 document 객체의 자식

# 조작하기 위한 순서

1. 조작 하고자 하는 요소를 선택 또는 탐색
2. 선택된 요소의 콘텐츠 또는 속성을 조작

# DOM Query

### 기본 메서드

1. 요소 하나 선택\
   document.querySelector ()
2. 요소 여러 개 선택\
   document.querySelectorAll()
