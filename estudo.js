
deixe  tabuada  =  2 ;
função  escreva ( ) {
    documento . escreva  ( "Tabuada do "  +  tabuada  +  "<br>" )
    documento . escreva ( tabuada  +  " x 1 = "  +  ( tabuada * 1 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 2 = "  +  ( tabuada * 2 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 3 = "  +  ( tabuada * 3 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 4 = "  +  ( tabuada * 4 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 5 = "  +  ( tabuada * 5 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 6 = "  +  ( tabuada * 6 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 7 = "  +  ( tabuada * 7 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 8 = "  +  ( tabuada * 8 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 9 = "  +  ( tabuada * 9 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 10 = "  +  ( tabuada * 10 )  +  "<br>" ) ;
}

let  lista  =  [ "Jesus" ,  "Spessato" ,  "Jorge" ,  "Duarte" ,  "Waldete" ,  "Raquel" ]


função  mostra ( ) {
    documento . escreva ( lista . comprimento  +  "<br>" ) ;
    for ( let  i  =  0 ;  i  <  lista . length ;  i ++ ) {
        documento . escreva ( lista [ i ]  +  "<br>" ) ;
    }
}

função  mostraTabuada ( ) {
    for ( seja  i  =  1 ;  i  <=  10 ;  i ++ ) {
        documento . escreva ( "o valor do i"  +  i  +  "<br>" ) ;
    }
}    
função  total ( ) {
    deixe  v  =  documento . getElementById ( "valor" ) . valor ;
    seja  j  =  documento . getElementById ( "juros" ) . valor ;
    seja  t  =  documento . getElementById ( "meses" ) . valor ;
    seja  r  =  0 ;
    for ( deixe  i  = 1 ;  i  <= t ;  i ++ ) {
        r  =  v  *  ( 1  +  ( j / 100 ) ) ;
        documento . escreva  ( "Mês "  +  i  +  " - valor: "  +  r  +  "<br>" ) ;
        v  =  r ;
    }
    documento . escreva  ( "Resultado: "  +  r ) ;
}

function  somaNota ( ) {
    seja  n1  =  documento . getElementById ( "b1" ) . valor ;
    seja  n2  =  documento . getElementById ( "b2" ) . valor ;
    seja  n3  =  documento . getElementById ( "b3" ) . valor ;
    deixe  n4  =  documento . getElementById ( "b4" ) . valor ;

    let  r  =  Número ( n1 ) + Número ( n2 ) + Número ( n3 ) + Número ( 4 ) ;

    documento . getElementById ( "resul" ) . innerHTML  =  "Soma:"  +  r

    função  somaMedia ( ) {
        seja  n1  =  documento . getElementById ( "b1" ) . valor ;
        seja  n2  =  documento . getElementById ( "b2" ) . valor ;
        seja  n3  =  documento . getElementById ( "b3" ) . valor ;
        deixe  n4  =  documento . getElementById ( "b4" ) . valor ;
    
        let  r  =  Número ( n1 ) + Número ( n2 ) + Número ( n3 ) + Número ( 4 ) ;
    
        documento . getElementById ( "media" ) . innerHTML  =  "Mídia:"  +  r
}
