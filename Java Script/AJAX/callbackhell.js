const total = 비동기통신함수( 
    input,
    통신함수의결과를가공하는함수1 ( 
        result, 
        비동기통신함수2(
            통신함수의결과를가공하는함수2(
                result, 
                result2
            )
        ) 
    ) 
);

// 이렇게 비동기 함수가 끝나기 전에 중간 중간에 필요한 콜백함수를 실행시키며 사용할 수 밖에 없었다.