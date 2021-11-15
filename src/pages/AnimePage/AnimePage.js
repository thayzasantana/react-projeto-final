import React, { useEffect, useState } from 'react';
import { Main } from '../../pages/style/Styled';
import { useTheme } from '../../context/Theme';
import imgNotFound from '../../assets/imagem_nao_disponivel.png'
import axios from 'axios';

function AnimePagina(){

  const [categories, setCategories] = useState([])

  const { themePage } = useTheme();

  const anime = localStorage.getItem('anime');
  const resposta = JSON.parse(anime);

  var startDate = "";
  var dateBrStart = "";
  
  if(resposta.attributes.startDate === null){
    startDate = "Data indisponível";
  }else{
    startDate = resposta.attributes.startDate.split("-");
    dateBrStart = `${startDate[2]}/${startDate[1]}/${startDate[0]}`
  }


  // categories
  useEffect(() => {
    axios.get(`${resposta.relationships.categories.links.related}`)
    .then((resp) => {
      setCategories(resp.data.data)
    }).catch((error) => {
      console.log("Indisponível")
    })
  },[])

  const categoriesInformation = categories.slice(0, 3);

  return(
    <Main theme={themePage}>
      <div className="post_image_div">
          
      </div>
      <img className="banner" src={resposta.attributes.coverImage === null ? (imgNotFound) : (resposta.attributes.coverImage.small)} />
      <div className="subtitle">
          <img src={resposta.attributes.posterImage.small} className="card_image"/>
          <div>
            <h1>{resposta.attributes.titles.en_jp || resposta.attributes.titles.en || resposta.attributes.titles.en_us}</h1>
            <p >{resposta.type === "anime" ? ("Anime") : ("Manga")}</p>

            <div className="categories">
              {
                categoriesInformation.map(resp => {
                  return <p>{resp.attributes.title}</p>
                })
              }
            </div>

            <p>Classificação Média: {resposta.attributes.averageRating === null ? ("Indisponível") : (resposta.attributes.averageRating)}</p>

            <p className="subtitle_synopsis">{resposta.attributes.synopsis}</p>
            <p>Data de lançamento: {startDate === "Data indisponível" ? (startDate) : (dateBrStart)}</p>
            <p>Quantidade de episódios: {resposta.attributes.episodeCount === null ? ("Indisponível") : (resposta.attributes.episodeCount)}</p>
            

            <p>Classificação Indicativa: {resposta.attributes.ageRatingGuide === null ? ("Indisponível") : (resposta.attributes.ageRatingGuide)}</p>
            
            <p>Status: {resposta.attributes.status === "finished" ? ("finalizado") : ("Atual")}</p>
          </div>
      </div>
    </Main>
  );
    
}

export default AnimePagina;