# Type Decalaration
    
    // Type for properties
    let justShowObjectPropTypeDeclaration = {
        abc: <number>123
    }


# Partial使用時機
1. 如Firestore要進行Update，是根據上拋物件的屬性去複寫，若無該屬性則保留原本數值。這種情況透過Partial即可輕鬆描述該物件的屬性不必悉具的行為，同時也可防止輸入額外的屬性。

        class Data {
            a: string = '';
            b: number = 0;
            c: boolean = true;
        }

        interface NotAllRequired extends Partial<Data> {};


2. 