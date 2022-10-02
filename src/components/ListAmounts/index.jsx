import "./style.css"

function ListAmounts({listAmounts, setListAmounts}) {

    return (
        <div className="ListAmounts">
            <ul>
                <h2>VOCÊ RECEBERÁ:</h2>
                {listAmounts[1] !== undefined ? 
                    <li>
                        <h3>Amanhã R$: </h3>
                        <p>{listAmounts[1]}</p>
                    </li> :
                    <>
                    </>
                }
                {listAmounts[15] !== undefined ? 
                <li>
                    <h3>Em 15 Dias R$:</h3>
                    <p>{listAmounts[15]}</p>
                </li> :
                    <>
                    </> 
                }
                {listAmounts[30] !== undefined ? 
                <li>
                    <h3>Em 30 Dias R$:</h3>
                    <p>{listAmounts[30]}</p>
                </li> :
                    <>
                    </> 
                }
                {listAmounts[60] !== undefined ? 
                <li>
                    <h3>Em 60 Dias R$:</h3>
                    <p>{listAmounts[60]}</p>
                </li> :
                    <>
                    </> 
                }
                {listAmounts[90] !== undefined ? 
                <li>
                    <h3>Em 90 Dias R$:</h3>
                    <p>{listAmounts[90]}</p>
                </li> :
                    <>
                    </> 
                }
            </ul>
        </div>
    )
}

export default ListAmounts