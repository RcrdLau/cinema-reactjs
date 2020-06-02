import React, {useState} from 'react'

const FilmList = () => {

    const [isVisible, setIsVisible] = useState(false)

    const openInfo = () => {
        
    }

    const renderInfos = () => {
        return (
            // className={`box ${isBoxVisible ? "" : "hidden"}`}
            <div className={`info ${isVisible ? "" : "show"}`}>
                <div className="setorA">
                    <h2>Vingadores</h2>
                    <p>Classificação: </p>
                    {/* <img></img> */}
                </div>
                <div className="setorB">
                    <div>
                        <h2>Elenco</h2>
                        <p>blablabla...</p>
                    </div>
                    <div>
                        <h2>Direção</h2>
                        <p>blablabla...</p>
                    </div>
                    <div>
                        <h2>Gênero</h2>
                        <p>blablabla...</p>
                    </div>
                    <div>
                        <h2>Duração</h2>
                        <p>blablabla...</p>
                    </div>
                </div>
                <div className="setorC">
                    <h2>Sinopse</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi fugit dolor rem officia explicabo, deserunt voluptatum impedit quibusdam beatae. Molestias, ullam. Iste qui et, exercitationem ullam expedita quaerat cumque.</p>
                </div>
            </div>
        )
    }


    return (
        <section className="container-films">
            <div className="banner" onClick={openInfo}>
                {/* <img src="https://img.ibxk.com.br/2019/04/25/25094601040028.jpg"/> */}
            </div>
            {renderInfos()}
        </section>
    )
}
export default FilmList