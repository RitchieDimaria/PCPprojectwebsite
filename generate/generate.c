#include <stdio.h>
#include <stdlib.h>
#include <time.h>

typedef struct Domino {
    int id;
    char* top;
    char* bot;
}domino;

void insertRandString(char *ptr, int size){
    for(int i = 0; i<size;i++) {
        if(rand()%2 == 0) {
            ptr[i] = 'a';
        } else {
            ptr[i] = 'b';
        }
    }
}

domino* genDomino(int id, int topsize, int botsize) {
    char *topptr = malloc(sizeof(char)*topsize);
    char *botptr = malloc(sizeof(char)*topsize);

    domino *dom = malloc(sizeof(domino));

    dom->id = id;
    insertRandString(topptr,topsize);
    insertRandString(botptr,botsize);
    dom->top = topptr;
    dom->bot = botptr;

    return dom;
}


int main() { 
    time_t t;
    srand ( (unsigned) time (&t));

    int num = rand() %40;
    char c;

    if(num==1){c = 'a';}
    else {c='b';}
    for(int i = 0; i<20;i ++) {
        printf("%dn",rand()%2);
    }

    return(0);
}
