import React, { useContext, useState, useEffect } from "react";
import api from '../../services/api';

import { Link } from 'react-router-dom';

import { InputContext } from "../../context/Input";

import { useTheme } from "../../context/Theme";

import { Response, DivInput } from "./../Home/Style";

import Loading from '../../assets/loading.png';



export default function Anime() {

    const { searchAnime } = useContext(InputContext);
    const { showInputAnime } = useContext(InputContext);
    const { setSearchAnime } = useContext(InputContext);

    const [responseAnime, setResponseAnime] = useState([]);
    const [update, setUpadate] = useState([]);
    const { themePage } = useTheme();


    const [loading, setLoading] = useState(false);



    function animeFilter() {
        api.get(`/anime?filter[text]=${searchAnime}`)
            .then(data => {
                setResponseAnime(data.data.data)
                setTimeout(() => { setLoading(true) }, 3000)
            }).catch(erro => { console.log("erro") })
    }
   
    function animeSort(){
        api.get(`/anime?sort=-popularityRank`)
            .then((response) => {
                setUpadate(response.data.data)
                setLoading(true)
            })
            .catch((error) => { console.log(error) })
    }

    useEffect(() => {
        animeFilter()
    }, [searchAnime]); // requisição para retornar pesquisa


    useEffect(() => {
        animeSort()
    }, []); // requisição sem pesquisa



    function returnSearch() {
        if (searchAnime !== "") {
            return (
                <>
                    <h2>Resultados para: {searchAnime}</h2>
                    <div className="resposta_api">
                        {responseAnime.map(resp => {
                            return <div><Link to="/anime_page" onClick={() => {
                                localStorage.setItem('anime', JSON.stringify(resp));
                            }}><img src={resp.attributes.posterImage.small} /></Link>
                            </div>
                        })}
                    </div>
                </> // retorno da pesquisa

            )
        } else {
            return (
                <>
                    <Response theme={themePage}>
                        <aside className="page_response">

                            {loading === true ? (<h1>Mais populares</h1>) : (null)}

                            <div className="resposta_api">
                                {update.map(resp => {
                                    return <div><Link to="/anime_page" onClick={() => {
                                        localStorage.setItem('anime', JSON.stringify(resp));
                                    }}><img src={resp.attributes.posterImage.small} /></Link>
                                    </div>
                                })}
                            </div>
                        </aside>
                    </Response>
                </>
            )
        }

    }

    return (<>
        <Response theme={themePage}>
            <DivInput theme={themePage}>{showInputAnime === true ? <input type="search" placeholder="Ex: Dragon" onChange={(e) => setSearchAnime(e.target.value)} /> : null}
            </DivInput>
            <aside>
                {returnSearch(() => { })}
                {loading === false ? (<div className="bg-loading"><img className="loading" src={Loading} /></div>) : (null)}
            </aside>
        </Response>
    </>
    );

};