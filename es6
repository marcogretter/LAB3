#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#define N 6

int conta(char M[][N],char elem);
void caratteri(char M[][N]);

int main(){
    char M[N][N];
    int r,c;
    
    for (r=0; r<N; r++) {
        for (c=0; c<N; c++) {
            M[r][c]=97+rand()%26;
        }
    }
    for (r=0; r<N; r++) {
        for (c=0; c<N; c++) {
            printf("%c\t",M[r][c]);
        }
        printf("\n");
    }
    caratteri(M);
    return 0;
}
void caratteri(char M[][N])
{
    int r,c,tmpC=0;
    char tmpChar='\0';
    for (r=0; r<N; r++) {
        for (c=0; c<N; c++) {
            if(conta(M, M[r][c])>tmpC){
                tmpC=conta(M, M[r][c]);
                tmpChar=M[r][c];
            }
        }
    }
    printf("%c è il carattere più ripetuto, è stato ripetuto %d volte\n",tmpChar,tmpC);
}
int conta(char M[][N],char elem)
{
    int r,c,cont=0;
    for (r=0; r<N; r++) {
        for (c=0; c<N; c++) {
                if(M[r][c]==elem)
                    cont++;
        }
    }
    return cont;
}
