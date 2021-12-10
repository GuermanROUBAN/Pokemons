import React from 'react'

export default function Pagination({gotoNextPage, gotoPrevPage}) {
    return (
        <div>
            {/* ici c'est un moyen de faire un if statement 
            =>si on a true à la fonction gotoPrevPage on peut aller plus loin 
            =>si on a false on s'arrete là*/}
            {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
        </div>
    )
}
