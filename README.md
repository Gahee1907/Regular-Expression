#Regular-Expression

* 옵션 (g, i, m)
global: 첫번째 감지에 의한 결과 뿐 아니라, 전체 영역에서 전부를 탐색.
ignore: 대소문자의 구분을 무시하는 옵션
multi-line: "\n"기준으로 하나의 줄로 인식. 각각 하나의 줄이 하나의 물자열로 처리. ex) the lazy dog. 는 마지막 문자가 "."임.

* Regular expression
1) /./ 
".": 임의의 하나의 문자를 의미.
2) /\.$/ 
"\": 다음의 문자를 단순히 문자로 처리.
"$": 하나의 줄의 끝 문자를 확인.
3) {number}
{2} : 문자열 2회 반복 구성.
4) {min, max}
{1,3} : 문자열 1회~3회 반복된 문자열 모두 탐색
5) {2,} : 문자열 2회~ 무한 반복된 문자열 모두 탐색

* Pattern(string)
1) ^(string)
"^"caret: 한줄 문자열에서 제일 앞쪽에서 탐색
2) (string)$
"$"dollar sign: 한줄 문자열에서 제일 뒤쪽에서 탐색
3) (string)|(string)
"|"vertical bar: or(또는)의 의미를 가짐. 여러 문자열을 동시에 탐색

* Pattern(character)
1) .(dot): 패턴 속에서의 dot는 임의의 한 문자를 의미. 어떤 문자여도 상관없음.
2) (abc)d?
"?"question mark: 바로 앞의 문자만이 대상. 바로 앞 문자가 있거나 없거나 모두 해당.
3) (abc)d*
"*"asterisk: 바로 앞의 문자만이 대상. 바로 앞 문자가 0번 이상 반복되면 모두 해당.
4) (abc)d+
"+"plus sign: 바로 앞의 문자만이 대상.바로 앞 문자가 1번 이상 반복되면 모두 해당. 

* Character set
: 문자 세트를 구성해 두고 세트에 속하는 문자들은 모두 선택.
1) []:대괄호를 사용해 세트를 구성. 세트 속에서 구성된 문자 중에서 일치되는 문자 탐색. 
2) ^: 구성된 문제세트만 배제시킴.

* Meta character
1) d(decimal)
\d : [0-9]
\D : [^0-9]
2) w(word)
\w : [a-zA-Z0-9_]
\W : [^a-zA-Z0-9_]
3) s(space)
\s: [ \t\n\r]
\S: [^ \t\n\r]
