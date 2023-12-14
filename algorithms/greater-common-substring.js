const searched = 'hish';

const probableSearchs = ['fish', 'vista'];




for (let probableSearch of probableSearchs) {   
    const table = [];
    
    for (let i = 0; i < searched.length; i++) {
        const row = [];
        for (let j = 0; j < probableSearch.length; j++) {
            row.push(0);
        }
    
        table.push(row);
    }
        
    for (let i = 0; i < searched.length; i++) {  
        for (let j = 0; j < searched.length; j++) {
            if (searched[i] == probableSearch[j] && (i == 0 && j == 0)) {
                table[i][j] = 1;
                continue;
            }
            
            if(searched[i] == probableSearch[j]) {
                table[i][j] = table[posUpLeft(i)][posUpLeft(j)] + 1;
                console.log('coisas', table[i][j] + ' ' + i + ' ' + j);
            }
        }
    }
    
    
    console.table(table)

}


function posUpLeft(index) {
    return index > 0 ? index - 1 : 0
}